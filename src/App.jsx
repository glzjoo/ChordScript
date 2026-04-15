import { useState, useEffect, useCallback } from 'react';
import * as Tone from 'tone';
import { runChordScript } from './compiler/Evaluator';

// ─── Constants ──────────────────────────────────────────────────
import EXAMPLES from './constants/examples';

// ─── Components ─────────────────────────────────────────────────
import HeaderBar from './components/HeaderBar';
import Sidebar from './components/Sidebar';
import EditorPanel from './components/EditorPanel';
import TerminalPanel from './components/TerminalPanel';

/**
 * App — Root component for the ChordScript IDE.
 *
 * Manages global state (code, output, compiler status) and
 * orchestrates the layout of all child components:
 *   HeaderBar  →  top bar with branding + pipeline + status
 *   Sidebar    →  left panel with examples + quick reference
 *   EditorPanel →  code editor + toolbar
 *   TerminalPanel → output console
 */
function App() {
  // ─── State ──────────────────────────────────────────────────
  const [code, setCode]                 = useState(EXAMPLES[0].code);
  const [output, setOutput]             = useState('');
  const [status, setStatus]             = useState('ready'); // ready | compiling | playing | error
  const [pipelineStep, setPipelineStep] = useState(null);
  const [pipelineError, setPipelineError] = useState(null);
  const [lineCount, setLineCount]       = useState(0);
  const [sidebarOpen, setSidebarOpen]   = useState(false);

  // ─── Derived / Effects ──────────────────────────────────────

  // Track line count whenever code changes
  useEffect(() => {
    setLineCount(code.split('\n').length);
  }, [code]);

  // Append a line to the terminal output
  const appendOutput = useCallback((text) => {
    setOutput(prev => prev ? `${prev}\n${text}` : text);
  }, []);

  // ─── Handlers ───────────────────────────────────────────────

  /** Run the full compile → execute → audio pipeline */
  const handleRunCode = async () => {
    setOutput('');
    setStatus('compiling');
    setPipelineError(null);

    try {
      // Step 1: Lexer
      setPipelineStep('lexer');
      appendOutput('▸ Lexical analysis...');
      await new Promise(r => setTimeout(r, 200));

      // Step 2: Parser
      setPipelineStep('parser');
      appendOutput('▸ Parsing tokens into AST...');
      await new Promise(r => setTimeout(r, 200));

      // Step 3: Type Check
      setPipelineStep('typecheck');
      appendOutput('▸ Running type checker...');
      await new Promise(r => setTimeout(r, 150));

      // Step 4: Execute
      setPipelineStep('execute');
      appendOutput('▸ Walking AST...');

      // Unlock browser audio context
      await Tone.start();

      // Run the actual compiler pipeline
      const result = runChordScript(code);

      if (result.includes('Error')) {
        throw new Error(result);
      }

      // Step 5: Audio output
      setPipelineStep('audio');
      appendOutput('▸ Scheduling audio events...');
      appendOutput('');
      appendOutput(`✓ ${result}`);
      appendOutput(`  ${lineCount} lines compiled  •  ${new Date().toLocaleTimeString()}`);

      setStatus('playing');

      // Return to ready after audio finishes (rough estimate)
      setTimeout(() => {
        setStatus('ready');
        setPipelineStep(null);
      }, 4000);

    } catch (err) {
      const errorMsg = err.message || 'Unknown compilation error';
      setPipelineError(pipelineStep || 'lexer');
      appendOutput('');
      appendOutput(`✗ ${errorMsg}`);
      setStatus('error');

      setTimeout(() => {
        setStatus('ready');
        setPipelineStep(null);
        setPipelineError(null);
      }, 5000);
    }
  };

  /** Stop audio playback immediately */
  const handleStop = () => {
    Tone.Transport.stop();
    Tone.Transport.cancel();
    setStatus('ready');
    setPipelineStep(null);
    appendOutput('');
    appendOutput('■ Playback stopped.');
  };

  /** Load an example snippet into the editor */
  const handleLoadSnippet = (snippet) => {
    setCode(snippet.code);
    setOutput('');
    setStatus('ready');
    setPipelineStep(null);
    setPipelineError(null);
  };

  // ─── Layout ─────────────────────────────────────────────────
  return (
    <div className="relative h-dvh w-screen overflow-hidden">
      {/* Background mesh gradient */}
      <div className="bg-gradient-mesh" />

      {/* Main Layout */}
      <div className="relative z-10 flex flex-col h-full">

        {/* Top Bar */}
        <HeaderBar
          status={status}
          pipelineStep={pipelineStep}
          pipelineError={pipelineError}
          sidebarOpen={sidebarOpen}
          onToggleSidebar={() => setSidebarOpen(prev => !prev)}
        />

        {/* Content Area */}
        <div className="flex flex-1 overflow-hidden">

          {/* Left Sidebar */}
          <Sidebar
            onLoadSnippet={(snippet) => {
              handleLoadSnippet(snippet);
              setSidebarOpen(false);
            }}
            isOpen={sidebarOpen}
            onClose={() => setSidebarOpen(false)}
          />

          {/* Center: Editor + Terminal */}
          <main className="flex-1 flex flex-col overflow-hidden animate-fade-in-delay-2">
            {/* Editor + Toolbar */}
            <EditorPanel
              code={code}
              onCodeChange={setCode}
              lineCount={lineCount}
              status={status}
              onRun={handleRunCode}
              onStop={handleStop}
            />

            {/* Terminal Output */}
            <TerminalPanel output={output} />
          </main>
        </div>
      </div>
    </div>
  );
}

export default App;
import { useState, useEffect, useCallback, useRef } from 'react';
import * as Tone from 'tone';
import { runChordScript } from './compiler/Evaluator';

// ─── Constants ──────────────────────────────────────────────────
import EXAMPLES from './constants/examples';

// ─── Components ─────────────────────────────────────────────────
import HeaderBar from './components/HeaderBar';
import Sidebar from './components/Sidebar';
import EditorPanel from './components/EditorPanel';
import TerminalPanel from './components/TerminalPanel';
import StatusBar from './components/StatusBar';

/** "Pulsing Bass Line" → "pulsing-bass-line.chord" */
const toFileName = (title) =>
  `${title.trim().toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')}.chord`;

/**
 * App — Root component for the ChordScript IDE.
 *
 * Manages global state (code, output, compiler status) and
 * orchestrates the layout of all child components:
 *   HeaderBar  →  top bar with branding, file name + run controls
 *   Sidebar    →  left panel with examples + quick reference
 *   EditorPanel →  code editor with line numbers + highlighting
 *   TerminalPanel → output console + pipeline stepper
 *   StatusBar  →  bottom bar with status + cursor position
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
  const [activeExample, setActiveExample] = useState(0);
  const [cursor, setCursor]             = useState({ line: 1, col: 1 });

  // ─── Derived / Effects ──────────────────────────────────────

  const fileName = activeExample !== null ? toFileName(EXAMPLES[activeExample].title) : 'untitled.chord';
  const isDirty = activeExample === null || code !== EXAMPLES[activeExample].code;

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
    if (status === 'compiling') return;
    setOutput('');
    setStatus('compiling');
    setPipelineError(null);

    // Track the current stage locally — the `pipelineStep` state value
    // would be stale inside this async closure.
    let currentStep = 'lexer';
    const enterStep = (step) => { currentStep = step; setPipelineStep(step); };

    try {
      // Step 1: Lexer
      enterStep('lexer');
      appendOutput('▸ Lexical analysis...');
      await new Promise(r => setTimeout(r, 200));

      // Step 2: Parser
      enterStep('parser');
      appendOutput('▸ Parsing tokens into AST...');
      await new Promise(r => setTimeout(r, 200));

      // Step 3: Type Check
      enterStep('typecheck');
      appendOutput('▸ Running type checker...');
      await new Promise(r => setTimeout(r, 150));

      // Step 4: Execute
      enterStep('execute');
      appendOutput('▸ Walking AST...');

      // Unlock browser audio context
      await Tone.start();

      // Run the actual compiler pipeline
      const result = runChordScript(code);

      if (result.includes('Error')) {
        throw new Error(result);
      }

      // Step 5: Audio output
      enterStep('audio');
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
      setPipelineError(currentStep);
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
  const handleLoadSnippet = (snippet, index) => {
    setCode(snippet.code);
    setActiveExample(index);
    setCursor({ line: 1, col: 1 });
    setOutput('');
    setStatus('ready');
    setPipelineStep(null);
    setPipelineError(null);
  };

  // ─── Keyboard shortcuts ─────────────────────────────────────
  // Keep a ref to the latest handler so the listener never goes stale.
  const runRef = useRef(handleRunCode);
  useEffect(() => { runRef.current = handleRunCode; });

  useEffect(() => {
    const onKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
        e.preventDefault();
        runRef.current();
      }
      if (e.key === 'Escape') setSidebarOpen(false);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  // ─── Layout ─────────────────────────────────────────────────
  return (
    <div className="app">
      {/* Top Bar */}
      <HeaderBar
        status={status}
        fileName={fileName}
        isDirty={isDirty}
        sidebarOpen={sidebarOpen}
        onToggleSidebar={() => setSidebarOpen(prev => !prev)}
        onRun={handleRunCode}
        onStop={handleStop}
      />

      {/* Content Area */}
      <div className="app-body">
        {/* Left Sidebar */}
        <Sidebar
          activeIndex={isDirty ? null : activeExample}
          onLoadSnippet={(snippet, index) => {
            handleLoadSnippet(snippet, index);
            setSidebarOpen(false);
          }}
          isOpen={sidebarOpen}
          onClose={() => setSidebarOpen(false)}
        />

        {/* Center: Editor + Terminal */}
        <main className="workspace">
          <EditorPanel
            code={code}
            onCodeChange={setCode}
            cursor={cursor}
            onCursorChange={setCursor}
          />

          {/* Terminal Output */}
          <TerminalPanel
            output={output}
            pipelineStep={pipelineStep}
            pipelineError={pipelineError}
            onClear={() => setOutput('')}
          />
        </main>
      </div>

      {/* Bottom status bar */}
      <StatusBar status={status} cursor={cursor} lineCount={lineCount} />
    </div>
  );
}

export default App;
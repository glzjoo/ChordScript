# ChordScript

A domain-specific programming language for creating music through code. ChordScript lets you compose musical patterns using familiar programming concepts like variables, loops, classes, and functions.

## Team

- **Members:** 
  - Glaiza Salvaloza
  - Rey Jane Andrada
  - Beatrice Sanda
  - Rizza Mia Abogadil

## Project Overview

ChordScript transforms text-based code into playable audio using a complete compiler pipeline:

**Source Code** → Lexer → Parser → AST → Type Checker → Interpreter → **Audio Output**

### Key Features

- **Statically Typed:** Every variable must declare its type (`Note`, `Duration`, `Number`, `Track`, or custom classes)
- **Object-Oriented:** Create instrument classes with inheritance (`extends`)
- **Control Flow:** Use `loop` and `if/else` to create musical patterns
- **Musical Types:** Built-in support for notes (`C4`, `F#3`), durations (`Quarter`, `Eighth`), and track arrays
- **Live Preview:** Web-based IDE with real-time error checking and audio playback

## Tech Stack

| Component                  |   Technology   | Version |
|----------------------------|----------------|---------|
| Frontend                   | React          | 18.x    |
| Build Tool                 | Vite           | 5.x     |
| Styling                    | Tailwind CSS   | 3.x     |
| Parser Generator           | ANTLR4         | 4.13.x  |
| Audio Engine               | Tone.js        | 14.x    |
| Language                   | TypeScript     | 5.x     | 
| Runtime                    | Node.js        | 20.x    |

## Project Structure
CHORDSCRIPT_CS323_FINALPROJECT/
├── src/
│   ├── compiler/          # Core compiler (TypeChecker, Evaluator, SymbolTable)
│   ├── components/        # React UI (Editor, Terminal, Visualizer)
│   ├── generated/         # ANTLR-generated parser files
│   ├── grammar/           # ChordScript.g4 grammar definition
│   └── constants/         # Example programs
├── test/                  # Test programs (10 test cases)
├── docs/                  # Documentation and rationale
├── slides/                # Presentation slides
└── README.md              # This file


## Setup Instructions

### Prerequisites

- Node.js 20.x or higher
- npm or yarn package manager

### Installation

1. **Clone or extract the repository:**
   ```bash
   cd CHORDSCRIPT_CS323_FINALPROJECT

2. Install dependencies:
    ```bash
    npm install

3. npm install antlr4ts:
    ```bash
    npm install antlr4ts

Run Instructions

Development Mode:
    ```bash
    npm run dev

How to Use ChordScript
1. Write Code in the Editor:
    class Instrument {}
    let mySynth: Instrument = new Instrument();

    let note: Note = C4;
    let beat: Duration = Quarter;

    loop 4 times {
    mySynth.play(note, beat);
    }

2. Click "Run"
The pipeline shows each stage: Lexing → Parsing → Type Checking → Execution

3. Hear the Music
Audio plays through your browser speakers
Language Quick Reference

| Feature     | Syntax                           | Example                            |
| ----------- | -------------------------------- | ---------------------------------- |
| Variable    | `let name: Type = value;`        | `let x: Note = C4;`                |
| Class       | `class Name {}`                  | `class Synth {}`                   |
| Inheritance | `class Child extends Parent {}`  | `class Bass extends Instrument {}` |
| Method Call | `object.method(args);`           | `mySynth.play(C4, Quarter);`       |
| Loop        | `loop N times { ... }`           | `loop 4 times { ... }`             |
| If/Else     | `if (cond) { ... } else { ... }` | `if (x == 1) { ... }`              |

Built-in Types
Note: Musical pitch (C4, F#3, Bb2)
Duration: Note length (Whole, Half, Quarter, Eighth)
Number: Integer values
Track: Array of notes ([C4, E4, G4])

Built-in Method
.play(Note, Duration): Plays a note with specified duration

Test Suite
Located in /test/ folder:

| Test | Description                          |   Type    |
| ---- | ------------------------------------ | --------- |
| 01   | Basic Execution & Track Arrays       | ✅ Valid |
| 02   | Control Flow (Loops & If/Else)       | ✅ Valid |
| 03   | OOP - Class Instantiation & Methods  | ✅ Valid |
| 04   | OOP - Inheritance & Overriding       | ✅ Valid |
| 05   | Lexical Scoping (Variable Shadowing) | ✅ Valid |
| 06   | Out of Scope Error                   | ❌       |
| 07   | Type Mismatch on Assignment          | ❌       |
| 08   | Invalid Method Arguments             | ❌       |
| 09   | Invalid Loop Condition               | ❌       |
| 10   | Missing Type Declaration             | ❌       |

Valid tests should compile and play audio.

Known Limitations
Custom methods can be declared but not executed (interpreter only supports .play())
Variable shadowing has a type-checker bug (avoid reusing variable names in inner scopes)
Sixteenth duration not implemented (use Eighth instead)

Theory Connections

ChordScript demonstrates these core concepts:
Lexical Analysis: Converting text to tokens
Parsing: Building Abstract Syntax Trees (AST)
Type Checking: Static analysis before execution
Scoping: Lexical (block) scope with symbol tables
Object-Oriented Programming: Classes, inheritance, polymorphism
Domain-Specific Languages (DSL): Specialized syntax for music composition
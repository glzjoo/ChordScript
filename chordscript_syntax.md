# ChordScript Language Syntax Reference

> A domain-specific language for composing music through code.  
> Pipeline: **Lexer → Parser → Type Checker → Interpreter → Audio Out**

---

## Types

ChordScript is **statically typed**. Every variable must declare its type.

| Type | Description | Examples |
|------|-------------|---------|
| `Note` | A musical pitch (letter `A`–`G`, optional `#`/`b`, octave `0`–`9`) | `C4`, `E2`, `Bb3`, `F#5` |
| `Duration` | How long a note is held | `Whole`, `Half`, `Quarter`, `Eighth` |
| `Number` | An integer value | `0`, `4`, `16` |
| `Track` | An ordered list of expressions | `[C4, E4, G4]` |
| *ClassName* | Any user-defined class name | `Instrument` |

---

## Comments

```
// This is a single-line comment (ignored by the compiler)
```

---

## Variable Declarations

Variables are declared with `let`, require a type annotation, and end with `;`.

```
let <name>: <Type> = <expression>;
```

**Examples:**

```
let root: Note = E2;
let beat: Duration = Eighth;
let count: Number = 4;
let chord: Track = [C4, E4, G4];
let mySynth: Instrument = new Instrument();
```

> [!IMPORTANT]
> **Type Checker Enforced Rules:**
> - The declared type must match the assigned expression's type
> - The type must be a built-in type (`Note`, `Duration`, `Number`, `Track`) or a previously declared class name
> - Duplicate variable names in the same scope are rejected

---

## Classes & Instantiation

### Class Declaration

```
class <ClassName> {
    // optional: member variables and methods
}
```

With inheritance:

```
class <ChildClass> extends <ParentClass> {
    // inherits parent members
}
```

### Class Members

Classes can contain variable declarations and function declarations:

```
class Synth {
    let volume: Number = 100;
    
    func setVolume(v: Number) {
        // body
    }
}
```

### Instantiation

```
let <name>: <ClassName> = new <ClassName>();
```

**Example:**

```
class Instrument {}
let leadGuitar: Instrument = new Instrument();
```

> [!IMPORTANT]
> **Type Checker Enforced Rules:**
> - `new ClassName()` requires the class to be declared **before** instantiation
> - `extends ParentClass` requires the parent class to exist
> - Duplicate class names in the same scope are rejected

---

## Methods

Method calls use dot notation on an object reference.

```
<object>.<method>(<arguments>);
```

### Built-in Method: `.play()`

Plays a musical note through the audio engine.

```
<instrument>.play(<Note>, <Duration>);
```

**Arguments:**
1. **Note** — the pitch to play (type `Note`)
2. **Duration** — how long to hold it (type `Duration`)

**Examples:**

```
leadGuitar.play(A4, Quarter);
leadGuitar.play(Bb3, Eighth);
myBass.play(low_root, fast_beat);   // using variables
```

> [!IMPORTANT]
> **Type Checker Enforced Rules:**
> - The object must be a declared variable
> - `.play()` requires **exactly 2 arguments**
> - First argument must be of type `Note`
> - Second argument must be of type `Duration`

---

## Control Flow

### Loop Statement

Repeats a block of code a fixed number of times.

```
loop <Number> times {
    // statements
}
```

**Examples:**

```
loop 4 times {
    mySynth.play(C4, Quarter);
}

// Using a variable for the count
let n: Number = 3;
loop n times {
    mySynth.play(E4, Eighth);
}
```

> [!IMPORTANT]
> **Type Checker Enforced Rules:**
> - The loop count expression must evaluate to type `Number`
> - The loop body creates a new scope (variables declared inside are not visible outside)

### If / Else Statement

Conditional branching based on an expression.

```
if (<expression>) {
    // then-branch
}

if (<expression>) {
    // then-branch
} else {
    // else-branch
}
```

**Example:**

```
if (count == 4) {
    mySynth.play(C4, Whole);
} else {
    mySynth.play(G3, Half);
}
```

---

## Expressions

### Binary Operators

| Operator | Operation | Operand Types | Result Type |
|----------|-----------|---------------|-------------|
| `+` | Addition | `Number`, `Number` | `Number` |
| `-` | Subtraction | `Number`, `Number` | `Number` |
| `==` | Equality | *same type*, *same type* | `Number` (0 or 1) |
| `!=` | Inequality | *same type*, *same type* | `Number` (0 or 1) |

### Terms (Atomic Values)

| Term | Type | Example |
|------|------|---------|
| Note literal | `Note` | `C4`, `Ab2`, `F#5` |
| Duration literal | `Duration` | `Quarter`, `Half`, `Whole`, `Eighth` |
| Number literal | `Number` | `42` |
| Track literal | `Track` | `[C4, E4, G4]` |
| Identifier | *resolved from symbol table* | `myVar` |

---

## Functions

```
func <name>(<param>: <Type>, ...) {
    // body (can include return)
}
```

**Example:**

```
func playTwice(note: Note, dur: Duration) {
    mySynth.play(note, dur);
    mySynth.play(note, dur);
}
```

### Return Statement

```
return <expression>;
```

---

## Scoping Rules

ChordScript uses **lexical (block) scoping**:

- Each `{ }` block (function body, loop body, if/else branches) creates a **new scope**
- Variables declared in an inner scope **shadow** outer variables of the same name
- Variables declared in an inner scope are **not visible** outside that block
- The symbol table walks up the scope chain to resolve identifiers

---

## Type Checker Error Examples

The type checker catches these errors **before** any audio plays:

```
// ✗ Unknown type
let x: Banana = 5;
// → "Unknown type 'Banana' in declaration of 'x'."

// ✗ Type mismatch
let n: Number = C4;
// → "Type mismatch: cannot assign 'Note' to variable 'n' of type 'Number'."

// ✗ Undefined variable
mySynth.play(C4, Quarter);   // without declaring mySynth first
// → "Undefined variable 'mySynth' in method call..."

// ✗ Wrong .play() arguments
mySynth.play(4, Quarter);
// → "First argument of '.play()' must be a Note, but got 'Number'."

// ✗ Bad loop count
loop C4 times { }
// → "Loop count must be of type 'Number', but got 'Note'."

// ✗ Duplicate declaration
let x: Number = 1;
let x: Number = 2;
// → "Duplicate declaration: variable 'x' is already defined in this scope."

// ✗ Unknown class instantiation
let s: Synth = new Synth();   // without declaring class Synth
// → "Cannot instantiate unknown class 'Synth'."
```

---

## Full Example Programs

### Test 1: Driving Rock Bassline

```
class Instrument {}
let myBass: Instrument = new Instrument();

let low_root: Note = E2;
let high_octave: Note = E3;
let fast_beat: Duration = Eighth;

// Play the measure 4 times
loop 4 times {
  // 3 driving low notes
  myBass.play(low_root, fast_beat);
  myBass.play(low_root, fast_beat);
  myBass.play(low_root, fast_beat);
  
  // 1 popping octave note
  myBass.play(high_octave, fast_beat);
}
```

### Test 2: Classic Heavy Riff

```
class Instrument {}
let lead: Instrument = new Instrument();

loop 2 times {
  // Phrase 1
  lead.play(E3, Quarter);
  lead.play(G3, Quarter);
  lead.play(A3, Half);

  // Phrase 2 (with the flat 5th passing note)
  lead.play(E3, Quarter);
  lead.play(G3, Quarter);
  lead.play(Bb3, Eighth);
  lead.play(A3, Half);
}
```

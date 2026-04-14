----Review Activity----
Test 01: Basic Execution & Track Arrays

-What We Wanted
--We wanted to make sure the most basic parts of our music language work:

-Saving notes in variables
--Making lists of notes (Tracks)
--Playing sounds

-The Problem
--There was no problem. This test worked on the first try.

-Why It Worked
we built the language step by step:

1. Lexer – reads the code
2. Parser – checks grammar
3. Type checker – verifies types
4. Interpreter – runs the code

Each part was tested during development, so basic features worked immediately.

-The Solution
No fix needed. This confirms the foundation is solid.

Test 02: Control Flow (Loops & If/Else)

-What We Wanted
We wanted to test:

--Repetition (loops)
--Decision-making (if/else)
Example:
--Playing a drum beat 4 times
--Playing a high note based on input

-The Problem
--The test failed because we used Sixteenth as a duration.
The language only supports:

-Quarter
-Half
-Whole
-Eighth

Error: Unknown duration “Sixteenth”

-Why It Failed
We used a term that does not exist in the language.

The Solution

-Replaced Sixteenth with Eighth
Test worked correctly

-Takeaway
Always check the grammar before writing tests.

Test 03: Class Instantiation & Custom Methods

-What We Wanted
We wanted to:

-Create custom instrument classes
--Example: SynthBass with unique methods

-The Problem

-Code passed parser and type checker
--Runtime error: setVolume not recognized

-Why It Failed
--The interpreter only supports:

.play()

It does not execute custom methods yet.

-The Solution

Keep custom methods in the class (structure is valid)
Only call .play() for actual execution

-Explanation
Custom methods exist but are not implemented in the interpreter yet.

Test 04: Inheritance & Overriding

-What We Wanted
--We wanted to: Create specialized instruments

Example: ElectricGuitar extends Instrument

-The Problem

Custom methods like shred() and slap() caused runtime errors

-Why It Failed
--Same limitation as Test 03: Interpreter only understands .play()

-The Solution

--Keep custom methods defined
--Use .play() for execution only
--Replace Sixteenth with Eighth (from previous lesson)

-Result

Inheritance works
Type checker allows child types to act as parent types

Test 05: Lexical Scoping (Variable Shadowing)

-What We Wanted

We wanted to verify:
--Variables stay within their scope
--Inner variables can temporarily override outer ones

-The Problem

Declaring velocity inside a loop caused an error
Outer velocity already existed

Error: Duplicate variable name

-Why It Failed
Bug in the type checker:

It does not properly isolate scopes
It still sees outer variables when inside a new scope

-The Solution

Use different variable names
Example: innerVelocity instead of velocity

Result

Scope separation works
Shadowing with the same name is currently broken
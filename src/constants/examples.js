/**
 * Example ChordScript snippets shown in the sidebar.
 * Each snippet includes a title, description, and valid ChordScript source code.
 */
const EXAMPLES = [
  {
    title: "Pulsing Bass Line",
    description: "A driving bass pattern that loops 4 times",
    code: `class Instrument {}
let mySynth: Instrument = new Instrument();

// Play a pulsing bass line 4 times
loop 4 times {
  mySynth.play(C3, Eighth);
  mySynth.play(G3, Eighth);
}`,
  },
  {
    title: "Ascending Melody",
    description: "A simple ascending scale pattern",
    code: `class Instrument {}
let mySynth: Instrument = new Instrument();

// Play an ascending pattern
loop 2 times {
  mySynth.play(C4, Quarter);
  mySynth.play(E4, Quarter);
  mySynth.play(G4, Quarter);
  mySynth.play(C5, Half);
}`,
  },
  {
    title: "Twinkle Twinkle Little Star",
    description: "A classic nursery rhyme on synth",
    code: `class Instrument {}
let star: Instrument = new Instrument();

// Store durations to keep the code clean
let q: Duration = Quarter;
let h: Duration = Half;

// Part 1: Twinkle twinkle little star
star.play(C4, q);
star.play(C4, q);
star.play(G4, q);
star.play(G4, q);
star.play(A4, q);
star.play(A4, q);
star.play(G4, h);

// How I wonder what you are
star.play(F4, q);
star.play(F4, q);
star.play(E4, q);
star.play(E4, q);
star.play(D4, q);
star.play(D4, q);
star.play(C4, h);

// Part 2: Up above the world so high, like a diamond in the sky
// This melody plays twice, so we use the loop control flow!
loop 2 times {
    star.play(G4, q);
    star.play(G4, q);
    star.play(F4, q);
    star.play(F4, q);
    star.play(E4, q);
    star.play(E4, q);
    star.play(D4, h);
}

// Part 3: Twinkle twinkle little star (Return to the main theme)
star.play(C4, q);
star.play(C4, q);
star.play(G4, q);
star.play(G4, q);
star.play(A4, q);
star.play(A4, q);
star.play(G4, h);

// How I wonder what you are
star.play(F4, q);
star.play(F4, q);
star.play(E4, q);
star.play(E4, q);
star.play(D4, q);
star.play(D4, q);
star.play(C4, h);
}`,
  },
  {
    title: "You are my sunshine",
    description: "A classic song on synth",
    code: `class Instrument {}
let sunshine: Instrument = new Instrument();

// "You are my sun-shine"
sunshine.play(G3, Quarter);
sunshine.play(C4, Quarter);
sunshine.play(D4, Quarter);
sunshine.play(E4, Half);
sunshine.play(E4, Quarter);

// "My on-ly sun-shine"
sunshine.play(E4, Quarter);
sunshine.play(D4, Quarter);
sunshine.play(E4, Quarter);
sunshine.play(C4, Half);
sunshine.play(C4, Quarter);

// "You make me hap-py"
sunshine.play(C4, Quarter);
sunshine.play(D4, Quarter);
sunshine.play(E4, Quarter);
sunshine.play(F4, Half);
sunshine.play(A4, Quarter); 

// "When skies are gray"
sunshine.play(A4, Quarter);
sunshine.play(G4, Quarter);
sunshine.play(F4, Quarter);
sunshine.play(E4, Half);
}`,
  },

  {
    title: "Smoke on water riff",
    description: "A classic rock riff on synth",
    code: `class Instrument {}
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
}`
  },
  {
    title: "Happy  birthday",
    description: "A classic birthday song on synth",
    code: `class Instrument {}
let party: Instrument = new Instrument();

// "Hap-py birth-day to you"
party.play(G4, Eighth);
party.play(G4, Eighth);
party.play(A4, Quarter);
party.play(G4, Quarter);
party.play(C5, Quarter);
party.play(B4, Half);

// "Hap-py birth-day to you"
party.play(G4, Eighth);
party.play(G4, Eighth);
party.play(A4, Quarter);
party.play(G4, Quarter);
party.play(D5, Quarter);
party.play(C5, Half);

// "Hap-py birth-day dear __"
party.play(G4, Eighth);
party.play(G4, Eighth);
party.play(G5, Quarter);
party.play(E5, Quarter);
party.play(C5, Quarter);
party.play(B4, Quarter);
party.play(A4, Half);

// "And ma-ny more!" 
party.play(F5, Eighth);
party.play(F5, Eighth);
party.play(E5, Quarter);
party.play(C5, Quarter);
party.play(D5, Quarter);
party.play(C5, Whole);
}`,
  }
];

export default EXAMPLES;

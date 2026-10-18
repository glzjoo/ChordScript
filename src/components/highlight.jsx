/**
 * Lightweight ChordScript syntax highlighter.
 *
 * Mirrors the token rules in src/grammar/ChordScript.g4 closely enough for
 * display purposes. Returns an array of React-renderable nodes so the editor
 * can layer coloured text underneath a transparent <textarea>.
 */

const KEYWORDS = 'class|extends|let|func|if|else|loop|times|return|new';
const TYPES = 'Note|Duration|Number|Track';
const DURATIONS = 'Quarter|Half|Whole|Eighth';

// Order matters: earlier groups win.
const TOKEN_RE = new RegExp(
  [
    '(\\/\\/[^\\n]*)',                       // 1 comment
    `\\b(${KEYWORDS})\\b`,                   // 2 keyword
    `\\b(${TYPES})\\b`,                      // 3 built-in type
    `\\b(${DURATIONS})\\b`,                  // 4 duration literal
    '\\b([A-G](?:#|b)?[0-9])(?![A-Za-z0-9_])', // 5 note literal
    '\\b(\\d+)\\b',                          // 6 number
    '(?<=\\.)([A-Za-z_]\\w*)',               // 7 method name
    '\\b([A-Z][A-Za-z0-9_]*)\\b',            // 8 class / type identifier
    '([{}()[\\];:,.=+\\-!])',                // 9 punctuation
  ].join('|'),
  'g'
);

const GROUP_CLASS = [
  null,
  'tok-comment',
  'tok-keyword',
  'tok-type',
  'tok-duration',
  'tok-note',
  'tok-number',
  'tok-fn',
  'tok-class',
  'tok-punct',
];

/**
 * @param {string} source
 * @returns {Array<string | JSX.Element>}
 */
export function highlight(source) {
  const out = [];
  let last = 0;
  let key = 0;

  TOKEN_RE.lastIndex = 0;
  let match;
  while ((match = TOKEN_RE.exec(source)) !== null) {
    if (match.index > last) out.push(source.slice(last, match.index));

    let cls = null;
    for (let g = 1; g < GROUP_CLASS.length; g++) {
      if (match[g] !== undefined) { cls = GROUP_CLASS[g]; break; }
    }

    out.push(
      <span key={key++} className={cls}>{match[0]}</span>
    );
    last = match.index + match[0].length;
  }

  if (last < source.length) out.push(source.slice(last));
  return out;
}

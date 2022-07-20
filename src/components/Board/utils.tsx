/* eslint-disable react/react-in-jsx-scope */

export enum COLUMN_LETTER {
  a,
  b,
  c,
  d,
  e,
  f,
  g,
  h,
  i,
}

export type COLUMN_LETTER_STRING = keyof typeof COLUMN_LETTER;

const replaceAt = (
  stringParam: string,
  index: number,
  replacement: string,
): string =>
  stringParam.substring(0, index) +
  replacement +
  stringParam.substring(index + replacement.length);

// 1111kaR11 => 4kaR2
export const rowCollapse = (row: string): string =>
  row.split('').reduce((prev, cur) => {
    const lastCharOfPrev = prev.split('').pop();
    if (!Number.isNaN(Number(cur)) && !Number.isNaN(Number(lastCharOfPrev))) {
      return prev.slice(0, -1) + (Number(cur) + Number(lastCharOfPrev));
    }
    return prev + cur;
  });

// 4kaR2 => 1111kaR11
export const rowExpansion = (row: string): string =>
  row
    .split('')
    .map(el => {
      if (!Number.isNaN(Number(el))) {
        return '1'.repeat(Number(el));
      }
      return el;
    })
    .join('');

// fen example : 4kaR2/4a4/3hR4/7H1/9/9/9/9/4Ap1r1/3AK3c
// move example: 'e1 d1'
export const calculateMove = (fen: string, move: string): string => {
  // [f7, f6]
  const moveArray: string[] = move.split(' ');

  // e1
  const originalPosition = moveArray[0];
  // 1
  const originalRowPosition = Number(originalPosition.split('')[1]);
  // e
  const originalColumnPosition: COLUMN_LETTER_STRING = originalPosition.split(
    '',
  )[0] as COLUMN_LETTER_STRING;

  // d1
  const targetPosition = moveArray[1];
  // 1
  const targetRowPosition = Number(targetPosition.split('')[1]);
  // d
  const targetColumnPosition: COLUMN_LETTER_STRING = targetPosition.split(
    '',
  )[0] as COLUMN_LETTER_STRING;

  const rowArray = fen.split('/');

  // 4kaR2
  const originalRow = rowArray[originalRowPosition - 1];

  // 4kaR2 => 1111kaR11
  const originalRowExpansion = rowExpansion(originalRow);

  // k
  const square = originalRowExpansion.charAt(
    COLUMN_LETTER[originalColumnPosition],
  );

  rowArray[originalRowPosition - 1] = rowCollapse(
    replaceAt(originalRowExpansion, COLUMN_LETTER[originalColumnPosition], '1'),
  );

  // 5aR2
  const targetRow = rowArray[targetRowPosition - 1];

  // 5aR2 => 11111aR11
  const targetRowExpansion = rowExpansion(targetRow);

  // 3k1aR2
  rowArray[targetRowPosition - 1] = rowCollapse(
    replaceAt(targetRowExpansion, COLUMN_LETTER[targetColumnPosition], square),
  );

  return rowArray.join('/');
};

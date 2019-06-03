/**
 * Example board:
  [
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
  ]
  */
const createEmptyTable = (row, col) =>
  new Array(row).fill(null).map(() => new Array(col).fill(null));

const getTableWidth = table => {
  const [row] = table;
  return row.length;
};

const getTableHeight = table => {
  return table.length;
};

/**
 * Checks an array of elements to see if there are 4 consecutive types
 * @param {Array} param0 - Row/Column of elements to check
 * @param {Int} matchCount - How many matches came before it
 * @param {String|null} prevElement
 * @return Bool
 */
const checkIsMatch = ([first, ...rest], matchCount = 0, prevElement) => {
  // Winning condition: if 3 matches in a row and the first element matches same
  // type as prevEleemnt.
  if (matchCount === 3 && first === prevElement) return true;
  // No change condition: no more elements to go through.
  if (!rest.length) return false;
  // Check if the first element is null, skip if it is.
  if (first === null) return checkIsMatch(rest);
  // Recursively call `checkIsMatch` if elements match one another.
  if (first === prevElement) return checkIsMatch(rest, matchCount + 1, first);
  // No previous element to check (fist time function is called).
  return checkIsMatch(rest, 1, first);
};

const checkRows = table => {
  return table.reduce((isMatch, row) => isMatch || checkIsMatch(row), false);
};

const checkColumns = table => {
  for (let ci = 0; ci < table.length; ci += 1) {
    const columns = table.map(col => col[ci]);
    if (checkIsMatch(columns)) return true;
  }
  return false;
};

const checkDiagonal = table => {
  const width = getTableWidth(table);
  const height = getTableHeight(table);
  // ascendingDiagonalCheck
  for (let i = 3; i < width; i++) {
    for (let j = 0; j < height - 3; j++) {
      if (
        table[i][j] == player &&
        table[i - 1][j + 1] == player &&
        table[i - 2][j + 2] == player &&
        table[i - 3][j + 3] == player
      )
        return true;
    }
  }
  // descendingDiagonalCheck
  for (let i = 3; i < width; i++) {
    for (let j = 3; j < height; j++) {
      if (
        table[i][j] == player &&
        table[i - 1][j - 1] == player &&
        table[i - 2][j - 2] == player &&
        table[i - 3][j - 3] == player
      )
        return true;
    }
  }
};

const table = [
  [0, 0, 0, 0, 0, 0, 0],
  [1, 1, 0, 1, 1, 0, 0],
  [0, 0, 0, 1, 1, 1, 1],
  [0, 0, 0, 1, 0, 1, 0],
  [0, 0, 0, 0, 0, 1, 0],
  [0, 0, 0, 0, 0, 1, 0]
];

// export default {
//   createEmptyTable,
//   checkIsMatch
// };

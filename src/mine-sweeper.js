const { NotImplementedError } = require("../extensions/index.js");

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const res = [];
  function calcBombs(row, col) {
    const object = { rowAdd: [-1, 1], colAdd: [-1, 1] };
    let bombs = 0;
    if (row === 0) object.rowAdd = [0, 1];
    if (col === 0) object.colAdd = [0, 1];
    if (row === matrix.length - 1) object.rowAdd = [-1, 0];
    if (col === matrix[0].length - 1) object.colAdd = [-1, 0];

    for (
      let idx1 = row + object.rowAdd[0];
      idx1 <= row + object.rowAdd[1];
      idx1++
    ) {
      for (
        let idx2 = col + object.colAdd[0];
        idx2 <= col + object.colAdd[1];
        idx2++
      ) {
        if (matrix[idx1][idx2] === true) {
          bombs += 1;
        }
      }
    }

    return bombs;
  }
  for (let i = 0; i < matrix.length; i++) {
    const line = [];
    for (let j = 0; j < matrix[0].length; j++) {
      if (matrix[i][j] === true) {
        line[j] = 1;
      } else {
        line[j] = calcBombs(i, j);
      }
    }
    res.push(line);
  }
  return res;
}

module.exports = {
  minesweeper,
};

const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  const lines = [];
  for (let i = 0; i < matrix[0].length; i++) {
    const line = [];
    for (let j = 0; j < matrix.length; j++) {
      line.push(matrix[j][i]);
    }
    lines.push(line);
  }
  return lines
    .map((elem) =>
      elem.filter((num, index) => {
        if (elem.indexOf(0) !== -1) return index < elem.indexOf(0);
        return elem;
      })
    )
    .flat()
    .reduce((acc, curr) => (acc += curr), 0);
}

module.exports = {
  getMatrixElementsSum,
};

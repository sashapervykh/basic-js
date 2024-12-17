const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let arr = n.toString().split("");
  const possibleNums = new Array(arr.length)
    .fill(0)
    .map((elem, index) => parseInt(arr.toSpliced(index, 1).join("")))
    .sort((a, b) => a - b);
  return possibleNums[possibleNums.length - 1];
}

module.exports = {
  deleteDigit,
};

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
  let str = number.toString();
  let newNumbers = [];
  for (let i = 0; i < str.length; i++) {
    let newStrNumber = str.substring(0, i) + str.substring(i + 1, str.length);
    newNumbers[i] = Number(newStrNumber);
  }

  let max = 0;

  for (let i = 0; i < newNumbers.length; i++) {
    if (newNumbers[i] > max) {
      max = newNumbers[i];
    }
  }

  return max;
}

module.exports = {
  deleteDigit,
};

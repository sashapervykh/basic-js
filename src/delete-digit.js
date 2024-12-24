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
  let str = n.toString();
  let maxNumber = 0;
  for (let i = 0; i < str.length; i++) {
    let newStrNumber = str.substring(0, i) + str.substring(i + 1, str.length);
    maxNumber = Math.max(maxNumber, newStrNumber);
  }

  return maxNumber;
}

module.exports = {
  deleteDigit,
};

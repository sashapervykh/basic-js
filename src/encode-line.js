const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let arr = str.split("");
  let counter = 1;
  let res = "";
  function addToResult(counter, elem) {
    if (counter === 1) {
      res += elem;
    } else {
      res += `${counter}${elem}`;
    }
  }
  arr.map((elem, index) => {
    if (elem === arr[index - 1]) {
      counter += 1;
      if (index === arr.length - 1) addToResult(counter, elem);
    }
    if (elem !== arr[index - 1] && index !== 0) {
      addToResult(counter, arr[index - 1]);
      counter = 1;
      if (index === arr.length - 1) addToResult(counter, elem);
    }
  });
  return res;
}

module.exports = {
  encodeLine,
};

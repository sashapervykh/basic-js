const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
  if (!Array.isArray(arr))
    throw new Error(`'arr' parameter must be an instance of the Array!`);

  let controls = [
    "--discard-next",
    "--discard-prev",
    "--double-next",
    "--double-prev",
  ];

  let res = [];

  for (let i = 0; i < arr.length; i++) {
    if (controls.includes(arr[i])) {
      switch (arr[i]) {
        case "--discard-next":
          if (i < arr.length - 1) {
            i += 2;
          }
          break;
        case "--discard-prev":
          if (i !== 0) {
            if (arr[i - 2] !== "--discard-next") res.splice(i - 1, 1);
          }
          break;
        case "--double-next":
          if (i < arr.length - 1) {
            res.push(arr[i + 1]);
          }
          break;
        case "--double-prev":
          if (i !== 0) {
            if (arr[i - 2] !== "--discard-next") {
              res.push(arr[i - 1]);
            }
          } // discard-next
          break;
        default:
          return "Something goes wrong";
      }
    } else {
      res.push(arr[i]);
    }
  }

  return res;
}

module.exports = {
  transform,
};

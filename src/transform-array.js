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
    throw new Error("'arr' parameter must be an instance of the Array!");
  if (arr.length === 0) return arr;
  const controllers = [
    "--double-next",
    "--double-prev",
    "--discard-next",
    "--discard-prev",
  ];
  let res = [...arr];

  while (res.some((elem) => controllers.indexOf(elem) !== -1)) {
    if (res.indexOf(controllers[0]) !== -1) {
      const contrIndex = res.indexOf(controllers[0]);
      if (contrIndex + 1 < res.length) {
        res[contrIndex] = res[contrIndex + 1];
      } else {
        res.pop();
      }
    }
    if (res.indexOf(controllers[1]) !== -1) {
      const contrIndex = res.indexOf(controllers[1]);
      if (res[contrIndex - 2] === controllers[2]) {
        res = res.toSpliced(contrIndex - 2, 3);
      } else if (contrIndex - 1 > 0) {
        res[contrIndex] = res[contrIndex - 1];
      } else {
        res.shift();
      }
    }
    if (res.indexOf(controllers[2]) !== -1) {
      const contrIndex = res.indexOf(controllers[2]);
      if (res[contrIndex + 2] === controllers[3]) {
        res = res.toSpliced(contrIndex, 3);
      } else if (contrIndex + 1 < res.length) {
        res = res.toSpliced(contrIndex, 2);
      } else {
        res.pop();
      }
    }
    if (res.indexOf(controllers[3]) !== -1) {
      const contrIndex = res.indexOf(controllers[3]);
      if (contrIndex - 1 > 0) {
        res = res.toSpliced(contrIndex - 1, 2);
      } else {
        res.shift();
      }
    }
  }
  return res;
}

module.exports = {
  transform,
};

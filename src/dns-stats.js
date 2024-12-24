const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const allDoms = new Set();
  const resObj = {};
  domains
    .map((elem) => elem.split("."))
    .map((elem) => {
      let acc = "";
      for (let i = elem.length - 1; i >= 0; i--) {
        acc += "." + elem[i];
        console.log(acc);
        allDoms.add(acc);
      }
    });

  Array.from(allDoms).forEach((elem) => {
    resObj[`${elem}`] = 0;
  });

  for (let key in resObj) {
    domains.forEach((elem) => {
      if (elem.indexOf(key.slice(1).split(".").reverse().join(".")) !== -1) {
        resObj[`${key}`] += 1;
      }
    });
  }

  return resObj;
}

module.exports = {
  getDNSStats,
};

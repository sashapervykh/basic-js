const { NotImplementedError } = require("../extensions/index.js");

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */
function getSeason(date) {
  if (date === undefined) return "Unable to determine the time of year!";

  if (Object.getOwnPropertyNames(date) != 0) {
    throw new Error("Invalid date!");
  }

  if (typeof date.getMonth !== "function") throw new Error("Invalid date!");

  const month = date.getMonth();
  const arrayOfMonth = [
    [11, 0, 1],
    [2, 3, 4],
    [5, 6, 7],
    [8, 9, 10],
  ];
  let index;
  let res;
  arrayOfMonth.forEach((elem, idx) => {
    if (elem.indexOf(month) !== -1) index = idx;
  });
  switch (index) {
    case 0:
      res = "winter";
      break;
    case 1:
      res = "spring";
      break;
    case 2:
      res = "summer";
      break;
    case 3:
      res = "autumn";
      break;
  }
  return res;
}

module.exports = {
  getSeason,
};

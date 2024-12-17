const { NotImplementedError } = require("../extensions/index.js");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 *
 * @param {String} sampleActivity string representation of current activity
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 *
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  if (typeof sampleActivity !== "string" || isNaN(parseFloat(sampleActivity))) {
    return false;
  }
  if (
    parseFloat(sampleActivity) <= 0 ||
    parseFloat(sampleActivity) > MODERN_ACTIVITY
  ) {
    return false;
  }

  let age = Math.ceil(
    (Math.log(MODERN_ACTIVITY / parseFloat(sampleActivity)) *
      HALF_LIFE_PERIOD) /
      0.693
  );

  return age;
}

module.exports = {
  dateSample,
};

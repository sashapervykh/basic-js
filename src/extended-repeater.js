const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  function makeString(word, repeatTimes, separator, type) {
    let line = word;
    let sepSign = separator;
    if (sepSign === undefined) {
      if (type === "add") {
        sepSign = "|";
      } else {
        sepSign = "+";
      }
    }
    for (let i = 0; i < repeatTimes - 1; i++) {
      line += sepSign + word;
    }
    return line;
  }
  let fullAddition = "";

  if (options.addition !== undefined) {
    fullAddition = makeString(
      options.addition,
      options.additionRepeatTimes,
      options.additionSeparator,
      "add"
    );
  }

  return makeString(
    str + fullAddition,
    options.repeatTimes,
    options.separator,
    "main"
  );
}

module.exports = {
  repeater,
};

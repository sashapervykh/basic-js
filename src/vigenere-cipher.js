const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
  letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  reverse = true;
  constructor(reverse) {
    this.reverse = reverse;
  }

  defineNewIndex(process, currentIndex, cipherStep) {
    if (process === "encrypt")
      return currentIndex + cipherStep > 25
        ? Math.abs(26 - currentIndex - cipherStep)
        : currentIndex + cipherStep;

    return currentIndex - cipherStep < 0
      ? Math.abs(26 + currentIndex - cipherStep)
      : currentIndex - cipherStep;
  }

  makeProcess(line, code, process) {
    let lineArr = line.split("");
    let codeArr = code.split("");
    let counter = 0;

    let res = lineArr.map((elem) => {
      if (elem === " ") return " ";
      if (this.letters.indexOf(elem.toUpperCase()) === -1) return elem;
      if (counter >= codeArr.length) counter = 0;
      let cipherStep = this.letters.indexOf(codeArr[counter].toUpperCase());
      let currentIndex = this.letters.indexOf(elem.toUpperCase());

      let newIndex = this.defineNewIndex(process, currentIndex, cipherStep);

      counter += 1;

      return this.letters[newIndex];
    });
    if (this.reverse === false) return res.reverse().join("");
    return res.join("");
  }

  encrypt(line, code) {
    let arr = Array.from(arguments);
    if (arr.length < 2 || arr.some((elem) => elem === undefined))
      throw new Error("Incorrect arguments!");
    return this.makeProcess(line, code, "encrypt");
  }

  decrypt(line, code) {
    let arr = Array.from(arguments);
    if (arr.length < 2 || arr.some((elem) => elem === undefined))
      throw new Error("Incorrect arguments!");

    return this.makeProcess(line, code, "decrypt");
  }
}

module.exports = {
  VigenereCipheringMachine,
};

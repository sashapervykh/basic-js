const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
  linksArray: [],
  one: -1,

  getLength() {
    return this.linksArray.length;
  },
  addLink(value) {
    if (value === undefined) this.linksArray.push("( )");
    this.linksArray.push(`( ${value} )`);
    len = this.linksArray.length;
    return this;
  },
  removeLink(position) {
    if (
      !Number.isInteger(position) ||
      position < 1 ||
      position > this.linksArray.length
    ) {
      this.linksArray = [];
      throw new Error(`You can\'t remove incorrect link!`);
    }
    this.linksArray.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.linksArray.reverse();
    return this;
  },
  finishChain() {
    res = this.linksArray.toSpliced();
    this.linksArray = [];
    return res.join("~~");
  },
};

module.exports = {
  chainMaker,
};

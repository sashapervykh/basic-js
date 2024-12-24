const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
  linksArray: [],

  getLength() {
    return this.linksArray.length;
  },
  addLink(value) {
    if (value === undefined) {
      this.linksArray.push("(  )");
    } else {
      this.linksArray.push(`( ${value} )`);
    }

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
    const res = this.linksArray.join("~~");
    this.linksArray = [];
    return res;
  },
};

module.exports = {
  chainMaker,
};

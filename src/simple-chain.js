const CustomError = require("../extensions/custom-error");

const chainMaker = {
  mass:[],
  getLength() {
    return this.mass.length;
  },
  addLink(value) {
    this.mass.push(`( ${value} )`);
    return this;
  },
  removeLink(position) {
    if ( typeof position === 'number' && position > 0 && position <= this.mass.length) {
      this.mass.splice(position - 1, 1);
      return this;
  } else {
      this.mass= [];
      throw new Error();
  }
  },
  reverseChain() {
    this.mass = this.mass.reverse();
    return this;
  },
  finishChain() {
    let str= this.mass.join('~~');
    this.mass = [];
    return str;
  }
};

module.exports = chainMaker;

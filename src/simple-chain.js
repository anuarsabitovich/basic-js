// const CustomError = require("../extensions/custom-error");

const chainMaker = {
  result: [],
  getLength() {
    return this.result.length; // returns the length of result array
  },
  addLink(value) {
    if (value) {
      this.result.push(`(${value})`); // pushes value into an array
    } else {
      this.result.push('()'); // pushes empty array if no arguments
    }
  },
  removeLink(position) {
    if (typeof position == 'number') {
      this.result.splice(position, 1);
    } else {
      throw Error;
    }
  },
  reverseChain() {
    this.result.reverse();
  },
  finishChain() {
    this.result.join('~~');
    Object.seal;
    return this.result;
  },
};

// module.exports = chainMaker;

console.log(chainMaker.addLink(function() {}).addLink('2nd').addLink('3rd').removeLink(2).reverseChain().finishChain(),'( 3rd )~~( function() {} )
);
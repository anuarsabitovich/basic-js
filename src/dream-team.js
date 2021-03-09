// const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) {
    return false;
  } else if (Array.isArray(members) && typeof members === 'object') {
    let initArr = [];
    let arr = [];

    for (const el of members) {
      // checking array for correct elements only (string)
      if (typeof el === 'string') {
        initArr.push(el);
      }
    }

    let trim = initArr.map(Function.prototype.call, String.prototype.trim);
    // let trim = initArr.map(Function.prototype.call, String.prototype.trim); // getting rid of all spaces
    for (let i = 0; i < trim.length; i++) {
      arr.push(trim[i][0]);
    }
    let upperArr = arr.map(function (x) {
      // to upper case everything before sorting
      return x.toUpperCase();
    });

    let arrSort = upperArr.sort(); // sorting alhabetically

    let str = arrSort.join(''); // joining all elements together

    return str;
  } else {
    return false;
  }
};

// const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if (Object.prototype.toString.call(date) === '[object Date]') {
    // checking if an object is a date
    let month = date.getMonth(); // get the month number
    switch (
      month // check of month
    ) {
      case 0:
      case 1:
      case 11:
        return 'winter';
        break;
      case 2:
      case 3:
      case 4:
        return 'spring';
        break;
      case 5:
      case 6:
      case 7:
        return 'summer';
      case 8:
      case 9:
      case 10:
        return 'autumn';
        break;
    }
  } else if (typeof date === 'undefined' || typeof date === 'null') {
    //
    return 'Unable to determine the time of year!';
  } else {
    throw Error;
  }
};

// throw new CustomError('Not implemented');
// remove line with error and write your code here
// }
// test = getSeason(new Date(2150, 7, 21, 18, 36, 41, 841));
// console.log(test);

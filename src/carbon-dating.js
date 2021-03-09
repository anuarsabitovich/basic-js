// const CustomError = require('../extensions/custom-error');

// const MODERN_ACTIVITY = 15;
// const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(age) {
  let toNumber = Number(age); // converting string to a number
  if (
    age <= 0 ||
    typeof age !== 'string' ||
    typeof age == 'number' ||
    toNumber <= 0
  ) {
    return false;
  } else if (typeof toNumber === 'number' && toNumber > 0 && toNumber < 15) {
    let k = Math.log(2) / 5730;
    let result = Math.log(15 / toNumber) / k;
    let final = Math.ceil(result);
    return final;
  } else return false;
};
// let test = dateSample('1');

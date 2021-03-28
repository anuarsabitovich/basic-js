// const CustomError = require('../extensions/custom-error');

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  let turns = Math.pow(2, disksNumber) - 1;
  -1;
  let time = turns * (3600 / turnsSpeed);
  let seconds = Math.floor(time);

  // throw new CustomError('Not implemented');
  // remove line with error and write your code here
  return { turns, seconds };
};
// test = calculateHanoi(9, 4308);
// console.log(test);

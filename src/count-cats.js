// const CustomError = require('../extensions/custom-error');

module.exports = function countCats(arr) {
  let cats = 0;
  const mixed = arr.flat(1); // making one mixed array
  for (let i = 0; i < mixed.length; i++) {
    // counting through one big array
    if (mixed[i] == '^^') {
      cats++;
    }
  }
  return cats;
};

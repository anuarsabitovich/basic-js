// const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (!Array.isArray(arr)) {
    throw Error;
  } else if (Array.isArray(arr)) {
    let arr2 = arr;
    let newArr = [];
    for (let i = 0; i < arr2.length; i++) {
      if (arr2[i] == '--double-next') {
        if (arr2[i + 1]) {
          newArr.push(arr2[i + 1]);
        } else {
        }
      } else if (arr[i] == '--double-prev') {
        if (arr[i - 1]) {
          newArr.push(arr2[i - 1]);
        } else {
        }
      } else if (arr2[i] == '--discard-prev') {
        if (arr2[i - 1]) {
          newArr.pop(); // deletes previous
        } else {
        }
      } else if (
        arr2[i] == '--discard-next' && // case if disacrd prev is at i+2
        arr2[i + 2] == '--discard-prev'
      ) {
      } else if (arr2[i] == '--discard-next' && arr2[i + 2] == '-double-prev') {
      } else if (arr2[i] == '--discard-next') {
        arr2.splice(i + 1, i);
      } else {
        newArr.push(arr2[i]);
      }
    }
    return newArr;
  }
};

// test = transform([1, 2, 3, '--discard-next', 1337, '--double-prev', 4, 5]);
// console.log(test);

// version i++ didnt work properly
// for (let i = 0; i < arr2.length; i++) {
//   if (arr2[i] == '--double-next') {
//     if (arr2[i + 1]) {
//       newArr.push(arr2[i + 1]);
//     } else {
//     }
//   } else if (arr[i] == '--double-prev') {
//     if (arr[i - 1]) {
//       newArr.push(arr2[i - 1]);
//     } else {
//     }
//   } else if (arr2[i] == '--discard-prev') {
//     if (arr2[i - 1]) {
//       newArr.pop(); // deletes previous
//     } else {
//     }
//   } else if (
//     arr2[i] == '--discard-next' && // case if disacrd prev is at i+2
//     arr2[i + 2] == '--discard-prev'
//   ) {
//   } else if (arr2[i] == '--discard-next') {
//     arr2.splice(i + 1, i);
//   } else {
//     newArr.push(arr2[i]);
//   }
// }
// return newArr;
// }

// console.log(arr);
// let newArr = [];
// for (let i = 0; i < arr.length; arr++) {
//   if (arr[i] == '--discard-next') {
//     continue;
//   } else if (arr[i] == '--discard-prev') {
//     newArr.pop();
//   } else if (arr[i] == '--double-next') {
//     newArr.push(arr[i]);
//     newArr.push(arr[i]);
//   } else if (arr[i] == '--double-prev') {
//     newArr.push(arr[i - 1]);
//     newArr.push(arr[i - 1]);
//   } else {
//     newArr.push(arr[i]);
//   }
// }

// return newArr;

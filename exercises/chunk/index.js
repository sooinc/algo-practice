// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

// iterable solution
function chunk(array, size) {
  let finalArr = [];

  if (size >= array.length) {
    finalArr.push(array);
  } else {
    let subArr = [];
    for (let i = 0; i < array.length; i++) {
      subArr.push(array[i]);
      if (subArr.length === size) {
        finalArr.push(subArr);
        subArr = [];
      }
    }
    if (subArr.length > 1) {
      finalArr.push(subArr);
    }
  }
  return finalArr;
}

// //another iterative way
// function chunk(array, size) {
//   let finalArr = [];

//   for (let i = 0; i < array.length; i++) {
//     let lastEl = finalArr[finalArr.length - 1];
//     let originalEl = array[i];
//     if (!lastEl || lastEl.length === size) {
//       finalArr.push([originalEl]);
//     } else {
//       lastEl.push(originalEl);
//     }
//   }
//   return finalArr;
// }

// //slice + while loop solution
// function chunk(array, size) {
//   let finalArr = [];
//   let i = 0;

//   while (i < array.length) {
//     finalArr.push(array.slice(i, i + size));
//     i += size;
//   }
//   return finalArr;
// }

module.exports = chunk;

// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// //for loop backwards w/string - O(n^2) time | O(n) space
// function reverse(str) {
//   let final = '';
//   for (let i = str.length - 1; i >= 0; i--) {
//     final += str[i];
//   }
//   return final;
// }

//for loop backwards w/array - O(n) time | O(n) space
function reverse(str) {
  let arr = str.split('');
  let final = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    final.push(arr[i]);
  }
  return final.join('');
}

// //using built-in array reverse method
// function reverse(str) {
//   return str.split('').reverse().join('');
// }

// //using for of syntax - adding the first to final str for the whole loop
// function reverse(str) {
//   let final = '';
//   for (let char of str) {
//     final = char + final;
//   }
//   return final;
// }

// //using reduce method
// function reverse(str) {
//   let arr = str.split('');
//   return arr.reduce((accum, currentEl) => currentEl + accum, '');
// }

module.exports = reverse;

// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51 <------ edge cases!!!
//   reverseInt(-90) === -9 <------- edge cases!!!

// function reverseInt(n) {
//   if (n >= 0) {
//     return Number(String(n).split('').reverse().join(''));
//   } else {
//     return -Number(
//       String(n * -1)
//         .split('')
//         .reverse()
//         .join('')
//     );
//   }
// }

// //using parseInt("str") + Math.sign(n) which evaluates to -1 if n is neg; to 1 if n is positive
// //parseInt("5-") results to 5 // Number("5-") results to NaN BUT
function reverseInt(n) {
  let reversedStr = String(n).split('').reverse().join('');
  return parseInt(reversedStr) * Math.sign(n);
}

module.exports = reverseInt;

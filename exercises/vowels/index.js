// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

// function vowels(str) {
//   let vowelArr = ['a', 'e', 'i', 'o', 'u'];
//   let count = 0;
//   for (let i = 0; i < str.length; i++) {
//     let char = str[i].toLowerCase();

//     if (vowelArr.includes(char)) {
//       count += 1;
//     }
//   }
//   return count;
// }

//regex solution - using match method. NOTE: match returns an array of all matches OR it returns null if nothign is found
// str.match(/[inside the brackets we put what we're looking for]/gi)
// g option makes sure we don't stop at the first match and the i option is case insentive
function vowels(str) {
  const matches = str.match(/[aieou]/gi);

  return matches ? matches.length : 0;
}

// function vowels(str) {
//   let count = 0;

//   for (let i = 0; i < str.length; i++) {
//     let char = str[i].toLowerCase();
//     if (
//       char === 'a' ||
//       char === 'e' ||
//       char === 'i' ||
//       char === 'o' ||
//       char === 'u'
//     ) {
//       count += 1;
//     }
//   }
//   return count;
// }

// function vowels(str) {
//   let vowelMap = {
//     a: true,
//     e: true,
//     i: true,
//     o: true,
//     u: true,
//   };
//   let count = 0;

//   for (let i = 0; i < str.length; i++) {
//     let char = str[i].toLowerCase();
//     if (vowelMap[char]) {
//       count += 1;
//     }
//   }
//   return count;
// }

module.exports = vowels;

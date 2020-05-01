// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"
// maxChar('a') === 'a' ------> EDGE CASE!!!

/*related questions:
1) what is the most common character in the string?
2) does string A have the same characters as string B (is it an anagram)?
3) does the given string have any repeated characters in it?
*/

// //first thought is to loop through the str. and save each character in an object with the initial value of 1. if the character has come out before then raise the value by 1
// //loop through the values and find the biggest. return the key that holds that value
// function maxChar(str) {
//   if (str.length === 1) return str[0];

//   let obj = {};
//   for (let i = 0; i < str.length - 1; i++) {
//     if (obj[str[i]]) {
//       obj[str[i]]++;
//     } else {
//       obj[str[i]] = 1;
//     }
//   }

//   let arr = Object.values(obj);

//   let biggest = arr[0];
//   for (let i = 0; i < arr.length - 1; i++) {
//     if (arr[i + 1] > biggest) {
//       biggest = arr[i + 1];
//     }
//   }

//   for (let key in obj) {
//     if (obj[key] === biggest) {
//       return key;
//     }
//   }
// }

//refactored the solution above
function maxChar(str) {
  if (str.length === 1) return str[0];

  let obj = {};
  for (let char of str) {
    obj[char] ? obj[char]++ : (obj[char] = 1);
    //or obj[char] = obj[char] + 1 || 1
  }

  let biggest = 0;
  let biggestChar = '';
  for (let key in obj) {
    if (obj[key] > biggest) {
      biggest = obj[key];
      biggestChar += key;
    }
  }
  return biggestChar;
}

module.exports = maxChar;

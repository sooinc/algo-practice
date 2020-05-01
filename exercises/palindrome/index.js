// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

// //if the reversed str === str return true - O(n^2) time | O(n) space
// function palindrome(str) {
//   let reversed = '';
//   for (let i = str.length - 1; i >= 0; i--) {
//     reversed += str[i];
//   }
//   return reversed === str;
// }

//use pointers - starting at opposite ends - O(1) time | O(1) space
function palindrome(str) {
  if (str.length === 1) return true;
  if (str.length === 2 && str[0] === str[1]) return true;

  let leftPointer = 0;
  let rightPointer = str.length - 1;
  while (leftPointer < rightPointer) {
    if (str[leftPointer] !== str[rightPointer]) {
      return false;
    } else {
      leftPointer++;
      rightPointer--;
    }
  }
  return true;
}

// //recursive solution w/ pop & shift
// //we want to compare the first and last characters so slice first and last when calling it again
// function palindrome(str) {
//   let arr = str.split('');

//   if (arr.length === 1) return true;
//   if (arr.length === 2 && arr[0] === arr[1]) return true;
//   if (arr[0] !== arr[arr.length - 1]) return false;

//   arr.shift();
//   arr.pop();
//   let joinedStr = arr.join('');

//   let result = palindrome(joinedStr);

//   if (result) {
//     return true;
//   } else {
//     return false;
//   }
// }

// //recursive solution w/ slice
// function palindrome(str) {
//   if (str.length === 1) return true;
//   if (str.length === 2 && str[0] === str[1]) return true;
//   if (str[0] !== str[str.length - 1]) return false;

//   let result = palindrome(str.slice(1, str.length - 1));

//   if (result) {
//     return true;
//   } else {
//     return false;
//   }
// }

// //using recursion - O(n) time | O(1) space
// function palindrome(string, i = 0) {
//   j = string.length - 1 - i;
//   if (i >= j) return true; // means we hit the base case without finding the below to be false
//   if (string[i] !== string[j]) {
//     return false;
//   }
//   return palindrome(string, i + 1);
// }

// //using every array method (allows you to run a boolean check on every element if any element returns false, the overall result is false)
// function palindrome(str) {
//   let arr = str.split('');
//   return arr.every((char, i) => {
//     return char === arr[str.length - 1 - i];
//   });
// }

module.exports = palindrome;

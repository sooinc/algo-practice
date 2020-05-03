// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
  let arr = str.split(' ');

  let finalStr = '';
  for (let i = 0; i < arr.length; i++) {
    let word = arr[i];
    finalStr += word[0].toUpperCase() + word.slice(1) + ' ';
  }

  return finalStr.slice(0, finalStr.length - 1);
}

//turning to arr (join only puts things between the two things it's joining so we don't have to take care of the last space)
// function capitalize(str) {
//   let finalArr = [];

//   for (let word of str.split(' ')) {
//     finalArr.push(word[0].toUpperCase() + word.slice(1));
//   }
//   return finalArr.join(' ');
// }

// //checking the previous character to see if it's a space
// function capitalize(str) {
//   let result = str[0].toUpperCase();

//   for (let i = 1; i < str.length; i++) {
//     if (str[i - 1] === ' ') {
//       result += str[i].toUpperCase();
//     } else {
//       result += str[i];
//     }
//   }
//   return result;
// }

module.exports = capitalize;

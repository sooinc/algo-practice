// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
  let wordA = stringA.replace(/[^\w]/g, '').toLowerCase();
  let wordB = stringB.replace(/[^\w]/g, '').toLowerCase();

  if (wordA.length !== wordB.length) return false;

  let objA = {};
  let objB = {};
  for (let i = 0; i < wordA.length; i++) {
    let charA = wordA[i];
    let charB = wordB[i];
    if (!objA[charA]) {
      objA[charA] = 1;
    } else {
      objA[charA] += 1;
    }
    if (!objB[charB]) {
      objB[charB] = 1;
    } else {
      objB[charB] += 1;
    }
  }

  for (let key in objA) {
    if (objA[key] !== objB[key]) {
      return false;
    }
  }
  return true;
}

// //using helper function
// function anagrams(stringA, stringB) {
//   let mapOfA = mapString(stringA);
//   let mapOfB = mapString(stringB);

//   if (Object.keys(mapOfA).length !== Object.keys(mapOfB).length) return false;

//   for (let key in mapOfA) {
//     if (mapOfA[key] !== mapOfB[key]) {
//       return false;
//     }
//   }
//   return true;
// }

// function mapString(string) {
//   let mapA = {};
//   for (let char of string.replace(/[^\w]/g, '').toLowerCase()) {
//     mapA[char] = mapA[char] + 1 || 1;
//   }
//   return mapA;
// }

//use sort! then we can just compare str to str vs obj to obj
// function anagrams(stringA, stringB) {
//   let cleanStrA = cleanStr(stringA);
//   let cleanStrB = cleanStr(stringB);

//   return cleanStrA === cleanStrB;
// }

// function cleanStr(string) {
//   return string
//     .replace(/w[^\w]/g, '')
//     .toLowerCase()
//     .split('')
//     .sort()
//     .join('');
// }

module.exports = anagrams;

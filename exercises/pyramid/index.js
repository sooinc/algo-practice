// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

// function pyramid(n) {
//   let maxColumn = n * 2 - 1;
//   let midpoint = Math.floor(maxColumn / 2);

//   for (let row = 0; row < n; row++) {
//     let level = '';
//     for (let column = 0; column < maxColumn; column++) {
//       if (column >= midpoint - row && column <= midpoint + row) {
//         level += '#';
//       } else {
//         level += ' ';
//       }
//     }
//     console.log(level);
//   }
// }

function pyramid(n, row = 0, level = '') {
  //will return when we hit n rows.
  //will console log when we fill up one level - also this is when we call recursively the next row
  if (row === n) {
    return;
  }

  if (level.length === n * 2 - 1) {
    console.log(level);
    pyramid(n, row + 1); // not passing level since we are starting anew in the next row
    return;
  }

  if (
    level.length >= Math.floor((n * 2 - 1) / 2) - row &&
    level.length <= Math.floor((n * 2 - 1) / 2) + row
  ) {
    level += '#';
  } else {
    level += ' ';
  }

  pyramid(n, row, level);
}
module.exports = pyramid;

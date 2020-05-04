// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n) {
  for (let row = 0; row < n; row++) {
    let stair = '';
    for (let column = 0; column < n; column++) {
      if (column <= row) {
        stair += '#';
      } else {
        stair += ' ';
      }
    }
    console.log(stair);
  }
}

// function steps(n, row = 0, stair = '') {
//   if (row === n) {
//     //row reached the number of levels given
//     return;
//   }

//   if (stair.length === n) {
//     //column reached the end so
//     console.log(stair); //at which point we can console
//     steps(n, row + 1); //and start the building of the column on the next row (so the stair is '')
//     return;
//   }

//   if (stair.length <= row) {
//     stair += '#';
//   } else {
//     stair += ' ';
//   }
//   steps(n, row, stair); //only happens when row and column has not met its end
// }

module.exports = steps;

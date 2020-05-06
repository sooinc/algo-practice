// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

function memoize(fn) {
  const cache = {};
  return function (args) {
    //if we don't know how many arg it'll take use --> ...args
    if (cache[args]) {
      return cache[args];
    }
    //if we took ...args, we would do --> cache[args] = fn.apply(this, args);
    cache[args] = fn(args);
    return cache[args];
  };
}

function slowFib(n) {
  if (n < 2) {
    return n;
  } else {
    return fib(n - 1) + fib(n - 2);
  }
}

let fib = memoize(slowFib);

console.log(fib(15));

module.exports = fib;

// function fib(n) {
//   if (n === 0) {
//     return 0;
//   }
//   if (n === 1) {
//     return 1;
//   }
//   if (n > 1) {
//     return fib(n - 1) + fib(n - 2);
//   }
// }

// function fib(n, mem = { 0: 0, 1: 1, 2: 1 }) {
//   if (mem[n]) {
//     return mem[n];
//   } else {
//     mem[n] = fib(n - 1, mem) + fib(n - 2, mem);
//     return mem[n];
//   }
// }

//ITERATIVE SOLUTIONS

// //O(n) time/ O(n) space
// function fib(n) {
//   let result = [0, 1];

//   for (let i = 2; i <= n; i++) {
//     let a = result[i - 1];
//     let b = result[i - 2];

//     result.push(a + b);
//   }
//   return result[n];
// }

// //O(n) time/ O(1) space
// function fib(n) {
//   if (n === 0) return 0;
//   let lastTwo = [0, 1];

//   // THIS IS THE KEY!!! STARTING THE COUNT AT 2. (or 3 if the fib series starts at 1 not 0)
//   for (let i = 2; i <= n; i++) {
//     let current = lastTwo[0];
//     lastTwo[0] = lastTwo[1];
//     lastTwo[1] = lastTwo[1] + current;
//   }

//   return lastTwo[1];
// }

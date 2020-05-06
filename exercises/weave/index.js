// --- Directions
// 1) Complete the task in weave/queue.js
// 2) Implement the 'weave' function.  Weave
// receives two queues as arguments and combines the
// contents of each into a new, third queue.
// The third queue should contain the *alterating* content
// of the two queues.  The function should handle
// queues of different lengths without inserting
// 'undefined' into the new one.
// *Do not* access the array inside of any queue, only
// use the 'add', 'remove', and 'peek' functions.
// --- Example
//    const queueOne = new Queue();
//    queueOne.add(1);
//    queueOne.add(2);
//    const queueTwo = new Queue();
//    queueTwo.add('Hi');
//    queueTwo.add('There');
//    const q = weave(queueOne, queueTwo);
//    q.remove() // 1
//    q.remove() // 'Hi'
//    q.remove() // 2
//    q.remove() // 'There'

const Queue = require('./queue');

// function weave(sourceOne, sourceTwo) {
//   let result = new Queue();
//   while (sourceOne.peek() && sourceTwo.peek()) {
//     if (!sourceOne.peek()) {
//       result.add(sourceTwo.remove());
//     } else if (!sourceTwo.peek()) {
//       result.add(sourceOne.remove());
//     } else {
//       result.add(sourceOne.remove());
//       result.add(sourceTwo.remove());
//     }
//   }
//   return result;
// }

function weave(sourceOne, sourceTwo) {
  let result = new Queue();
  while (sourceOne.peek() || sourceTwo.peek()) {
    if (sourceOne.peek()) {
      result.add(sourceOne.remove());
    }
    if (sourceTwo.peek()) {
      result.add(sourceTwo.remove());
    }
  }
  return result;
}

// let example = new Queue();
// example.add('hi');
// example.add('bye');
// example.add('kay');
// example.add('what');

// let example1 = new Queue();
// example1.add(1);
// example1.add(2);
// example1.add(3);
// example1.add(4);

// console.log(weave(example, example1));

module.exports = weave;

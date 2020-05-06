// --- Directions
// Implement a Queue datastructure using two stacks.
// *Do not* create an array inside of the 'Queue' class.
// Queue should implement the methods 'add', 'remove', and 'peek'.
// For a reminder on what each method does, look back
// at the Queue exercise.
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.add(2);
//     q.peek();  // returns 1
//     q.remove(); // returns 1
//     q.remove(); // returns 2

const Stack = require('./stack');

class Queue {
  constructor() {
    this.stackOne = new Stack(); //stackOne.data = [] // stackOne.push
    this.stackTwo = new Stack(); //stackTwo.data = [] // stackTwo.push
  }

  add(element) {
    this.stackOne.push(element);
  }

  remove() {
    while (this.stackOne.peek()) {
      this.stackTwo.push(this.stackOne.pop());
    }
    const removed = this.stackTwo.pop();

    while (this.stackTwo.peek()) {
      this.stackOne.push(this.stackTwo.pop());
    }
    return removed;
  }

  peek() {
    while (this.stackOne.peek()) {
      this.stackTwo.push(this.stackOne.pop());
    }
    const toPeek = this.stackTwo.peek();

    while (this.stackTwo.peek()) {
      this.stackOne.push(this.stackTwo.pop());
    }
    return toPeek;
  }
}

// let example = new Queue();
// example.add(1); //first in.. peek() should return 1
// example.add(2);
// console.log(example.stackOne);
// console.log(example.stackTwo);

module.exports = Queue;

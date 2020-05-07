// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(data) {
    let newNode = new Node(data);
    newNode.next = this.head;
    this.head = newNode;

    // //or i can just do...
    // this.head = new Node(data, this.head);
  }

  size() {
    let currentNode = this.head;
    let counter = 0;
    while (currentNode) {
      counter++;
      currentNode = currentNode.next;
    }
    return counter;
  }

  getFirst() {
    return this.head;
  }

  getLast() {
    let currentNode = this.head;
    let last;
    while (currentNode) {
      last = currentNode;
      currentNode = currentNode.next;
    }
    return last;
  }

  clear() {
    this.head = null;
  }

  removeFirst() {
    if (!this.head) {
      return;
    }
    this.head = this.head.next;
  }

  removeLast() {
    let currentNode = this.head;
    if (!this.head) {
      return;
    }

    if (!this.head.next) {
      this.head = null;
      return;
    }

    while (currentNode) {
      if (currentNode.next.next === null) {
        currentNode.next = null;
      }
      currentNode = currentNode.next;
    }
  }

  insertLast(data) {
    let currentNode = this.head;
    let newNode = new Node(data);

    if (!this.head) {
      this.head = newNode;
    }

    while (currentNode) {
      if (currentNode.next === null) {
        currentNode.next = newNode;
        return;
      }
      currentNode = currentNode.next;
    }

    // //or i can do...
    // let last = this.getLast();
    // if (last) {
    //   last.next = new Node(data);
    // } else {
    //   this.head = new Node(data);
    // }
  }

  getAt(index) {
    let currentNode = this.head;
    let counter = 0;

    while (currentNode) {
      if (counter === index) {
        return currentNode;
      }
      counter++;
      currentNode = currentNode.next;
    }
    return null;
  }

  removeAt(index) {
    if (!this.head) {
      //empty list
      return;
    }
    if (index === 0) {
      //removing head
      this.head = this.head.next;
      return;
    }
    let prevNode = this.getAt(index - 1);
    //otherwise we get the prevNode to the one about to be removed
    if (!prevNode || !prevNode.next) {
      //index is out of bounds
      return;
    }
    prevNode.next = prevNode.next.next;
  }

  insertAt(data, index) {
    if (!this.head) {
      this.head = new Node(data);
      return;
    }
    if (index === 0) {
      this.head = new Node(data, this.head);
      return;
    }

    let prevNode = this.getAt(index - 1);
    if (!prevNode) {
      this.insertLast(data);
      return;
    } else {
      let newNode = new Node(data, prevNode.next);
      prevNode.next = newNode;
    }
  }

  forEach(func) {
    let currentNode = this.head;
    let counter = 0;
    while (currentNode) {
      func(currentNode, counter);
      counter++;
      currentNode = currentNode.next;
    }
  }

  *[Symbol.iterator]() {
    let currentNode = this.head;
    while (currentNode) {
      yield currentNode;
      currentNode = currentNode.next;
    }
  }
}

module.exports = { Node, LinkedList };

// //GENERATORS
// function *numbers() {
//     const result = 1 + 1
//     return 20 + (yield result)
// }
// const generator = number() // returns a generator object - has ability to step thru the function with generator.next
// console.log(generator) // {}
// console.log(generator.next()) // {value: 2, done: false} // returns yield result
// console.log(generator.next(10)) // {value: 30, done: false} //the next time you call generator (and with a val) it replaces the yield statement

// //another example
// function *list() {
//     yield 1
//     yield 2
//     yield 3
//     yield 4
// }
// const generator = list()
// console.log(generator.next()) //{value: 1, done: false}
// console.log(generator.next()) //{value: 2, done: false}
// console.log(generator.next()) //{value: 3, done: false}
// console.log(generator.next()) //{value: 4, done: false}

// const numbers = []
// for (let value of generator) {
//     numbers.push(value)
// }
// console.log(numbers) // [1, 2, 3, 4]

// //another example
// function *numbers() {
//     yield 1
//     yield 2
//     yield* moreNumbers
//     yield 6
// }

// function *moreNumbers() {
//     yield 3
//     yield 4
//     yield 5
// }

// const generator = numbers()
// const values = []
// for (let value of generator) {
//     values.push(value)
// }
// console.log(values) // [1, 2, 3, 4, 5, 6]

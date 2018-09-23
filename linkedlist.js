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
    // Createa new node, but takes this.head as the
    // previous node.
    this.head = new Node(data, this.head);
  }

  size() {
    let counter = 0;
    let node = this.head;

    // Check to see if there is a node,
    // if there is then check the one next to it
    // until node.next = null.
    while (node) {
      counter++;
      node = node.next;
    }

    return counter;
  }

  getFirst() {
    // this.head will always be pointing to
    // first node on the list.
    return this.head;
  }

  getLast() {
    if (!this.head) {
      return null;
    }

    let node = this.head;
    while (node) {
      if (!node.next) {
        return node;
      }
      node = node.next;
    }
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
    if (!this.head) {
      return;
    }
    if (!this.head.next) {
      this.head = null;
      return;
    }

    let previous = this.head;
    let node = this.head.next;
    while (node.next) {
      previous = node;
      node = node.next;
    }
    previous.next = null;
  }

  insertLast(data) {
    const last = this.getLast();

    if (last) {
      // THere are some existing nodes in our chain.
      last.next = new Node(data);
    } else {
      // The chain is empty.
      this.head = new Node(data);
    }
  }

  getAt(index) {
    if (!this.head) {
      return null;
    }

    let counter = 0;
    let node = this.head;
    while (node) {
      if (counter === index) {
        return node;
      }
      counter++;
      node = node.next;
    }
    return null;
  }

  removeAt(index) {
    if (!this.head) {
      return;
    }

    if (index === 0) {
      this.head = this.head.next;
      return;
    }

    const previous = this.getAt(index - 1);
    if (!previous || !previous.next) {
      return;
    }
    previous.next = previous.next.next;
  }
}

// Using class LinkedList() without insertFirst().
const list = new LinkedList();
list.head = new Node(10);

// Using class LinkedList() with insertFirst().
const nodeOne = new Node(5);
const list_ = new LinkedList();
list_.head = nodeOne;
list_.insertFirst(15);
list_.getLast();
console.log(list_.getLast());

module.exports = { Node, LinkedList };

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor(data = null) {
    this.head = data;
  }

  insertNode(data) {
    if (this.head === null) {
      this.head = new Node(data);
      return;
    }

    let lastNode = this.head;

    while (lastNode.next !== null) {
      lastNode = lastNode.next;
    }

    lastNode.next = new Node(data);
  }

  insertNodeAtFront(data) {
    let firstNode = new Node(data);

    firstNode.next = this.head;

    this.head = firstNode;
  }

  insertNodeAfterGivenNode(prevNode, data) {
    let node = this.head;

    while (node.data !== prevNode) {
      node = node.next;
    }

    let newNode = new Node(data);
    newNode.next = node.next;
    node.next = newNode;
  }

  insertNodeBeforeGivenNode(prevNode, data) {
    let node = this.head;

    if (node.data === prevNode) {
      return this.insertNodeAtFront(data);
    }

    while (node.next.data !== prevNode) {
      node = node.next;
    }

    this.insertNodeAfterGivenNode(node.data, data);
  }

  getSize() {
    let size = 0;

    let lastNode = this.head;

    while (lastNode !== null) {
      size++;
      lastNode = lastNode.next;
    }

    return size;
  }

  getLastNode() {
    let size = this.getSize();

    if (size === 0) {
      return this.head;
    }

    let lastNode = this.head;

    while (lastNode.next !== null) {
      lastNode = lastNode.next;
    }

    return lastNode;
  }

  removeFirstNode() {
    let size = this.getSize();

    if (size === 0) {
      return;
    }

    this.head = this.head.next;
  }

  removeLastNode() {
    let size = this.getSize();

    if (size === 0) {
      return;
    }

    if (size === 1) {
      this.head = null;
      return;
    }

    let lastNode = this.head;

    while (size !== 2) {
      lastNode = lastNode.next;
      size--;
    }

    lastNode.next = null;
  }

  reverse() {
    let prev;
    let temp;

    while (this.head) {
      temp = this.head;
      this.head = this.head.next;
      temp.next = prev;
      prev = temp;
    }

    this.head = prev;
  }

  clear() {
    this.head = null;
  }
}

const list = new LinkedList();
list.insertNode(2);
list.insertNode(4);
list.insertNode(6);

console.log(JSON.stringify(list, null, 2));

list.reverse();

console.log(JSON.stringify(list, null, 2));

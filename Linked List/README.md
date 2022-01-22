# Linked List

#### **What is a Linked List?**

A linked list is a linear data structure similar to an array. However, unlike
arrays, elements are not stored in a particular memory location or index. Rather
each element is a separate object that contains a pointer or a link to the next
object in that list.

Each element (commonly called nodes) contains two items: the data stored and a
link to the next node. The data can be any valid data type. You can see this
illustrated in the diagram below.

![linked list image](https://res.cloudinary.com/dvj2hbywq/image/upload/v1590572188/Group_14_5_bvpwu0.png)

The entry point to a linked list is called the head. The head is a reference to
the first node in the linked list. The last node on the list points to null. If
a list is empty, the head is a null reference.

In JavaScript, a linked list looks like this:

```js
{
  "head": {
    "data": 2,
    "next": {
      "data": 4,
      "next": {
        "data": 10,
        "next": {
          "data": 6,
          "next": {
            "data": 8,
            "next": null
          }
        }
      }
    }
  }
```

#### **An advantage of Linked Lists**

- Nodes can easily be removed or added from a linked list without reorganizing the entire data structure. This is one advantage it has over arrays.

#### **Disadvantages of Linked Lists**

- Search operations are slow in linked lists. Unlike arrays, random access of data elements is not allowed. Nodes are accessed sequentially starting from the first node.
- It uses more memory than arrays because of the storage of the pointers.

#### **Types of Linked Lists**

There are three types of linked lists:

- Singly Linked Lists: Each node contains only one pointer to the next node. This is what we have been talking about so far.
- Doubly Linked Lists: Each node contains two pointers, a pointer to the next node and a pointer to the previous node.
- Circular Linked Lists: Circular linked lists are a variation of a linked list in which the last node points to the first node or any other node before it, thereby forming a loop.

#### **Implementing a Node in Linked List with Javascript**

As stated earlier, a node contains two items: the data and the pointer to the next node. We can implement a node in JavaScript as follows:

```js
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}
```

#### **Implementing a Linked List with Javascript**

The code below shows the implementation of a linked list class with a constructor. Notice that if the head node is not passed, the head is initialised to null.

```js
class LinkedList {
  constructor(head = null) {
    this.head = head;
  }

  // list of method below ...
}
```

**Reference:** [https://www.freecodecamp.org/news/implementing-a-linked-list-in-javascript/](https://www.freecodecamp.org/news/implementing-a-linked-list-in-javascript/)

## **Writing the Methods**

- [Inserting a Node at the end of the Linked List](#inserting-a-node-at-the-end-of-the-linked-list)
- [Inserting a Node at the front of the Linked List](#inserting-a-node-at-the-front-of-the-linked-list)
- [Inserting a Node after a given Node](#inserting-a-node-after-a-given-node)
- [Inserting a Node before a given Node](#inserting-a-node-before-a-given-node)
- [Get the Size of the Linked List](#get-the-size-of-the-linked-list)
- [Get the Last Node in the Linked List](#get-the-last-node-in-the-linked-list)
- [Remove the First Node in the Linked List](#remove-the-first-node-in-the-linked-list)
- [Remove the Last Node in the Linked List](#remove-the-last-node-in-the-linked-list)
- [Reversing a Linked List](#reversing-a-linked-list)
- [Clear the Linked List](#clear-the-linked-list)

#### **Inserting a Node at the end of the Linked List**

```js
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
```

#### **Inserting a Node at the front of the Linked List**

```js
insertNodeAtFront(data) {
  let firstNode = new Node(data);

  firstNode.next = this.head;

  this.head = firstNode;
}
```

#### **Inserting a Node after a given Node**

```js
insertNodeAfterGivenNode(prevNode, data) {
  let node = this.head;

  while (node.data !== prevNode) {
    node = node.next;
  }

  let newNode = new Node(data);
  newNode.next = node.next;
  node.next = newNode;
}
```

#### **Inserting a Node before a given Node**

```js
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
```

#### **Get the Size of the Linked List**

```js
getSize() {
  let size = 0;

  let lastNode = this.head;

  while (lastNode !== null) {
    size++;
    lastNode = lastNode.next;
  }

  return size;
}
```

#### **Get the Last Node in the Linked List**

```js
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
```

#### **Remove the First Node in the Linked List**

```js
removeFirstNode() {
  let size = this.getSize();

  if (size === 0) {
    return;
  }

  this.head = this.head.next;
}
```

#### **Remove the Last Node in the Linked List**

```js
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
```

#### **Reversing a Linked List**

```js
reverse() {
  let size = this.getSize();

  let lastNode = this.head;

  while (lastNode.next !== null) {
    lastNode = lastNode.next;
    this.insertNodeAtFront(lastNode.data);
  }

  while (size !== 1) {
    this.removeLastNode();
    size--;
  }
}
```

#### **Clear the Linked List**

```js
clear() {
  this.head = null;
}
```

## **Putting it All up Together**

You can open the file by click [here](https://github.com/NyomanAdiwinanda/Data-Structure-With-Javascript/blob/main/Linked%20List/main.js)

```js
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
    let size = this.getSize();

    let lastNode = this.head;

    while (lastNode.next !== null) {
      lastNode = lastNode.next;
      this.insertNodeAtFront(lastNode.data);
    }

    while (size !== 1) {
      this.removeLastNode();
      size--;
    }
  }

  clear() {
    this.head = null;
  }
}
```

```js
const list = new LinkedList();

list.insertNode(2);
list.insertNode(4);
list.insertNode(6);
list.insertNode(8);
console.log(JSON.stringify(list, null, 2));

/*
OUTPUT:
{
  "head": {
    "data": 2,
    "next": {
      "data": 4,
      "next": {
        "data": 6,
        "next": {
          "data": 8,
          "next": null
        }
      }
    }
  }
}
*/

console.log(list.getSize());

/*
OUTPUT: 4
*/

list.insertNodeAfterGivenNode(2, 5);
console.log(JSON.stringify(list, null, 2));

/*
OUTPUT:
{
  "head": {
    "data": 2,
    "next": {
      "data": 5,
      "next": {
        "data": 4,
        "next": {
          "data": 6,
          "next": {
            "data": 8,
            "next": null
          }
        }
      }
    }
  }
}
*/

list.insertNodeBeforeGivenNode(6, 7);
console.log(JSON.stringify(list, null, 2));

/*
OUTPUT:
{
  "head": {
    "data": 2,
    "next": {
      "data": 5,
      "next": {
        "data": 4,
        "next": {
          "data": 7,
          "next": {
            "data": 6,
            "next": {
              "data": 8,
              "next": null
            }
          }
        }
      }
    }
  }
}
*/

list.insertNodeAtFront(1);
console.log(JSON.stringify(list, null, 2));

/*
OUTPUT:
{
  "head": {
    "data": 1,
    "next": {
      "data": 2,
      "next": {
        "data": 5,
        "next": {
          "data": 4,
          "next": {
            "data": 7,
            "next": {
              "data": 6,
              "next": {
                "data": 8,
                "next": null
              }
            }
          }
        }
      }
    }
  }
}
*/

list.removeFirstNode();
console.log(JSON.stringify(list, null, 2));

/*
OUTPUT:
{
  "head": {
    "data": 2,
    "next": {
      "data": 5,
      "next": {
        "data": 4,
        "next": {
          "data": 7,
          "next": {
            "data": 6,
            "next": {
              "data": 8,
              "next": null
            }
          }
        }
      }
    }
  }
}
*/

list.removeLastNode();
console.log(JSON.stringify(list, null, 2));

/*
OUTPUT:
{
  "head": {
    "data": 2,
    "next": {
      "data": 5,
      "next": {
        "data": 4,
        "next": {
          "data": 7,
          "next": {
            "data": 6,
            "next": null
          }
        }
      }
    }
  }
}
*/

console.log(JSON.stringify(list.getLastNode()));

/*
OUTPUT:
{
  "data":6,
  "next":null
}
*/

list.reverse();
console.log(JSON.stringify(list, null, 2));

/*
OUTPUT:
{
  "head": {
    "data": 6,
    "next": {
      "data": 7,
      "next": {
        "data": 4,
        "next": {
          "data": 5,
          "next": {
            "data": 2,
            "next": null
          }
        }
      }
    }
  }
}
*/

list.clear();
console.log(JSON.stringify(list, null, 2));

/*
OUTPUT:
{
  "head": null
}
*/
```

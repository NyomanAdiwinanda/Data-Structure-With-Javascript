class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor(keys) {
    this.keys = keys;
    this.output = [];
  }

  reverseBST(node) {
    if (node === null) {
      return;
    }

    if (node.left === null && node.right === null) {
      return;
    }

    [node.left, node.right] = [node.right, node.left];

    this.reverseBST(node.left);
    this.reverseBST(node.right);
  }

  traverseInOrder(node) {
    if (node === null) {
      return;
    }

    this.traverseInOrder(node.left);
    this.output.push(node.data);
    this.traverseInOrder(node.right);
  }

  insertNode(node, key) {
    if (node === null) {
      return new Node(key);
    }

    if (key < node.data) {
      node.left = this.insertNode(node.left, key);
    } else {
      node.right = this.insertNode(node.right, key);
    }

    return node;
  }

  constructBST(keys) {
    let tree = null;

    keys.forEach((key) => {
      tree = this.insertNode(tree, key);
    });

    return tree;
  }

  main() {
    const tree = this.constructBST(this.keys);

    this.reverseBST(tree);
    this.traverseInOrder(tree);
    console.log(this.output);
  }
}

new BinarySearchTree([15, 10, 20, 8, 12, 16, 25]).main();

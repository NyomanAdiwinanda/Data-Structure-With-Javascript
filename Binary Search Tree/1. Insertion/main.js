// A class to store a BST node
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

  // Function to perform inorder traversal on the tree
  traverseInOrder(node) {
    // if the node is None, return and do nothing
    if (node === null) {
      return;
    }

    this.traverseInOrder(node.left);
    this.output.push(node.data);
    this.traverseInOrder(node.right);
  }

  perfectTree(node) {
    let count = 1;

    if (node.left || node.right === null) {
      count += 1;
    }

    count += 2;
    this.perfectTree(node.left);
    this.perfectTree(node.right);

    return count;
  }

  // Recursive function to insert a key into a BST
  insertNode(node, key) {
    // if the node is None, create a new node and return it
    if (node === null) {
      return new Node(key);
    }

    // if the given key is less than the node, recur for the left subtree
    if (key < node.data) {
      node.left = this.insertNode(node.left, key);
    }

    // otherwise, recur for the right subtree
    else {
      node.right = this.insertNode(node.right, key);
    }

    return node;
  }

  // Function to construct a BST from given keys
  constructBST(keys) {
    let tree = null;

    keys.forEach((key) => {
      tree = this.insertNode(tree, key);
    });

    return tree;
  }

  main() {
    const tree = this.constructBST(this.keys);

    this.traverseInOrder(tree);
    console.log(this.output);
  }
}

new BinarySearchTree([18, 15, 30, 40, 50, 100, 40, 8, 7, 9]).main();

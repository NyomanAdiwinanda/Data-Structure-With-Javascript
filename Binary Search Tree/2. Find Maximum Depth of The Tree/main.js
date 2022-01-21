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

  maxDepth(tree) {
    if (tree == null || tree.data == null) return 0;

    let lDepth = this.maxDepth(tree.left);
    let rDepth = this.maxDepth(tree.right);

    if (lDepth > rDepth) {
      return lDepth + 1;
    } else {
      return rDepth + 1;
    }
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

    console.log(`the maximum depth of the tree is ${this.maxDepth(tree)}`);
  }
}

new BinarySearchTree([15, 10, 20, 8, 12, 16, 25]).main();

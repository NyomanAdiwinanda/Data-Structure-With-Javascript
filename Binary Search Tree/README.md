
# Binary Search Tree (BST)

A Binary Search Tree (BST) is a tree data structure in which each node
has at most two children, which are referred to as the left child and
the right child, and the topmost node in the tree is called the root.
It additionally satisfies the binary search property, which states that
the key in each node must be greater than or equal to any key stored in
the left subtree, and less than or equal to any key stored in the right
subtree.

![Binary Search Tree Image](https://miro.medium.com/max/486/0*Xf5rELNK1m1eBmQz)

Binary search trees allow fast lookup, addition, and removal of items.
They keep their keys in sorted order so that lookup and other operations
can use the principle of [binary search](https://www.techiedelight.com/binary-search/): when looking for a key in a tree
(or a place to insert a new key), they traverse the tree from root to leaf,
making comparisons to keys stored in the nodes of the tree and deciding,
based on the comparison, to continue searching in the left or right subtrees.
On average, this means that each comparison allows the operations to skip
about half of the tree so that each lookup, insertion, or deletion takes time
proportional to the logarithm of the number of items stored in the tree.
This is much better than the linear time required to find items by key in an
(unsorted) array but slower than the corresponding operations on hash tables.

In this post, we have listed out commonly asked interview questions
on Binary Search Tree:

1\. [Insertion In a BST](https://github.com/NyomanAdiwinanda/Data-Structure-With-Javascript/tree/main/Binary%20Search%20Tree/1.%20Insertion)

2\. [Find maximum depth of the tree](https://github.com/NyomanAdiwinanda/Data-Structure-With-Javascript/tree/main/Binary%20Search%20Tree/2.%20Find%20Maximum%20Depth%20of%20The%20Tree)

3\. [Reverse Binary Search Tree](https://github.com/NyomanAdiwinanda/Data-Structure-With-Javascript/tree/main/Binary%20Search%20Tree/3.%20Reverse%20Binary%20Search%20Tree)
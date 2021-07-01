// Starter code Node and BST class
// [] implement min()
// [] implement minRecursive()
// [] implement max()
// [] implement maxRecursive()

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  isEmpty() {
    if (this.root === null) {
      return true;
    }
    return false;
  }

  insert(newVal) {
    if (this.isEmpty()) {
      this.root = new Node(newVal);
      return this;
    }
    let current = this.root;
    while (current !== null) {
      if (newVal < current.data) {
        if (current.left === null) {
          current.left = new Node(newVal);
          return this;
        } else {
          current = current.left;
        }
      } else if (newVal > current.data) {
        if (current.right === null) {
          current.right = new Node(newVal);
          return this;
        } else {
          current = current.right;
        }
      } else {
        console.log("must be equal");
      }
    }
    return this;
  }

  // ***************** TODAY **********************
  /**
   * Retrieves the smallest integer data from this tree.
   * @param {Node} current The node that is currently accessed from the tree as
   *    the tree is being traversed.
   * @return {number} The smallest integer from this tree.
   */
  min(current = this.root) {
    // check if tree if empty
    if (this.isEmpty() === true) {
      return null;
    }
    // loop all the way down the left side of the tree
    let min = this.root;
    while (current !== null) {
      if (current.left === null) {
        min = current;
        return min.data;
      } else {
        current = current.left;
      }
    }
  }

  /**
   * Retrieves the smallest integer data from this tree.
   * @param {Node} current The node that is currently accessed from the tree as
   *    the tree is being traversed.
   * @return {number} The smallest integer from this tree.
   */
  minRecursive(current = this.root) {
    // check if tree if empty
    if (this.isEmpty() === true) {
      return null;
    }
    let min = current;
    if (current.left !== null) {
      return this.minRecursive(current.left);
    }
    return min.data;
  }

  /**
   * Retrieves the largest integer data from this tree.
   * @param {Node} current The node that is currently accessed from the tree as
   *    the tree is being traversed.
   * @return {number} The largest integer from this tree.
   */
  max(current = this.root) {
    // check if tree if empty
    if (this.isEmpty() === true) {
      return null;
    }
    // loop all the way down the right side of the tree
    let max = this.root;
    while (current !== null) {
      if (current.right === null) {
        max = current;
        return max.data;
      } else {
        current = current.right;
      }
    }
  }

  /**
   * Retrieves the largest integer data from this tree.
   * @param {Node} current The node that is currently accessed from the tree as
   *    the tree is being traversed.
   * @return {number} The largest integer from this tree.
   */
  maxRecursive(current = this.root) {
    // check if tree if empty
    if (this.isEmpty() === true) {
      return null;
    }
    let min = current;
    if (current.right !== null) {
      return this.maxRecursive(current.right);
    }
    return min.data;
  }
}

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
      // code here
    }
  
    /**
     * Retrieves the smallest integer data from this tree.
     * @param {Node} current The node that is currently accessed from the tree as
     *    the tree is being traversed.
     * @return {number} The smallest integer from this tree.
     */
    minRecursive(current = this.root) {
      // code here
    }
  
    /**
     * Retrieves the largest integer data from this tree.
     * @param {Node} current The node that is currently accessed from the tree as
     *    the tree is being traversed.
     * @return {number} The largest integer from this tree.
     */
    max(current = this.root) {
      // code here
    }
  
    /**
     * Retrieves the largest integer data from this tree.
     * @param {Node} current The node that is currently accessed from the tree as
     *    the tree is being traversed.
     * @return {number} The largest integer from this tree.
     */
    maxRecursive(current = this.root) {
      // code here
    }
  }
  
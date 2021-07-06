/* **********FOR ATTENDANCE******************
Work on the algorithm and write each name of participants in the array "Devs" at the very bottom of page.
Post the code (with the array) to your team chat in MatterMost. It is okay if the solution isn't complete but show you are working on it.

************ WEHN FINISHED ****************
Read materials for class or continue working on other Project or Assignment after algo is completed and posted.
*/

// **************** TODAY ********************
// Starter class Node and BinarySearchTree
// [] implement size()
// [] implement height()
// [] implement isFull()

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
    // check if empty
    if (this.isEmpty()) {
      // if empty return tree
      this.root = new Node(newVal);
      return this;
    }
    // else
    // traverse through tree
    // track a current
    let current = this.root;
    // while loop
    while (current !== null) {
      // check if current value is less or greater
      if (newVal < current.data) {
        // move left or right through tree
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

  /**
   * Recursively counts the total number of nodes in this tree.
   * @param {Node} node The current node during the traversal of this tree.
   * @return {number} The total number of nodes.
   */
  size(node = this.root) {
    // code here
  }

  /**
   * Calculates the height of the tree which is based on how many nodes from
   * top to bottom (whichever side is taller).
   * @param {Node} node The current node during traversal of this tree.
   * @return {number} The height of the tree.
   */
  height(node = this.root) {
    // code here
  }

  /**
   * Determines if this tree is a full tree. A full tree is a tree where every
   * node has both a left and a right except for the leaf nodes (last nodes)
   * @param {Node} node The current node during traversal of this tree.
   * @return {boolean} Indicates if this tree is full.
   */
  isFull(node = this.root) {
    // code here
  }

  /*
                        root
                    <-- 25 -->
                  /            \
                15             50
              /    \         /    \
            10     22      35     70
          /   \   /  \    /  \   /  \
        4    12  18  24  31  44 66  90
      /   \
    2       3
  */
}

/*********** REMEMBER *******************
1. Think of algorithms like nutrition or going to the gym. A little bit everyday helps you in the longrun.
2. Imagine if after bootcamp, you want to get ready for your interviews and want to keep practicing algorithms. It would be harder to maintain a habit if you don't already have it.
3. Benefits of daily algorithms it helps you stay sharp and able to solve problems quicker and more creatively. You will get familiar with more complex strategies and come up with more than 1 way to solve a problem.
4. Benefit of sharing your solution at the end is practice speaking about code and thought process. 
*/
// const Devs = []

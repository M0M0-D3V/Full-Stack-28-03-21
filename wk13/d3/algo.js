/* **********FOR ATTENDANCE******************
Work on the algorithm and write each name of participants in the array "Devs" at the very bottom of page.
Post the code (with the array) to your team chat in MatterMost. It is okay if the solution isn't complete but show you are working on it.

************ WEHN FINISHED ****************
Read materials for class or continue working on other Project or Assignment after algo is completed and posted.
*/

// **************** TODAY ********************
// Starter class Node and BinarySearchTree
// [] implement contains()
// [] implement containsRecursive()
// [] implement toArrInOrder()
// [] **Bonus** toArrInOrderRecursive()

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
  /**
   * Determines if this tree contains the given searchVal.
   * @param {number} searchVal The number to search for in the node's data.
   * @return {boolean} Indicates if the searchVal was found.
   */
  contains(searchVal) {
    //  code here
  }

  /**
   * Determines if this tree contains the given searchVal.
   * @param {number} searchVal The number to search for in the node's data.
   * @return {boolean} Indicates if the searchVal was found.
   */
  containsRecursive(searchVal, current = this.root) {
    //  code here
  }

  /**
   * DFS Inorder: (Left, Parent, Right) using a stack instead of the recursive
   * call stack.
   * Converts this BST into an array following Depth First Search inorder.
   * Example on the fullTree var:
   * [4, 10, 12, 15, 18, 22, 24, 25, 31, 35, 44, 50, 66, 70, 90]
   * @param {Node} node The current node during the traversal of this tree.
   * @returns {Array<number>} All node's data in DFS Preorder.
   */
  toArrInorder(node = this.root) {
    // code here
  }

  //   example
  /*
                      root
                  <-- 25 -->
                /            \
              15             50
            /    \         /    \
          10     22      35     70
        /   \   /  \    /  \   /  \
      4    12  18  24  31  44 66  90
  */

  /**
   * DFS Inorder: (Left, Parent, Right)
   * Converts this BST into an array following Depth First Search inorder.
   * See debugger call stack to help understand the recursion.
   * Example on the fullTree var:
   * [4, 10, 12, 15, 18, 22, 24, 25, 31, 35, 44, 50, 66, 70, 90]
   * @param {Node} node The current node during the traversal of this tree.
   * @param {Array<number>} vals The data that has been visited so far.
   * @return {Array<number>} The vals in DFS Preorder once all nodes visited.
   */
  toArrInOrderRecursive(node = this.root, vals = []) {
    //  code here
  }
}

/*********** REMEMBER *******************
1. Think of algorithms like nutrition or going to the gym. A little bit everyday helps you in the longrun.
2. Imagine if after bootcamp, you want to get ready for your interviews and want to keep practicing algorithms. It would be harder to maintain a habit if you don't already have it.
3. Benefits of daily algorithms it helps you stay sharp and able to solve problems quicker and more creatively. You will get familiar with more complex strategies and come up with more than 1 way to solve a problem.
4. Benefit of sharing your solution at the end is practice speaking about code and thought process. 
*/
// const Devs = []

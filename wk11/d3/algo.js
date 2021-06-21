/* **********FOR ATTENDANCE******************
Work on the algorithm and write each name of participants in the array "Devs" at the very bottom of page.
Post the code (with the array) to your team chat in MatterMost. It is okay if the solution isn't complete but show you are working on it.

************ WEHN FINISHED ****************
Read materials for class or continue working on other Project or Assignment after algo is completed and posted.
*/

// Starter class Node and SLL
// [ ] Bring in other SLL methods previously built
// [ ] implement contains()
// [ ] bonus containsRecursive()
// [ ] implement removeBack()
// [ ] bonus recursiveMax()

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
  }
  //  ********** TODAY *********
  /**
   * Determines whether or not the given search value exists in this list.
   * @param {any} val The data to search for in the nodes of this list.
   * @return {boolean}
   */
  contains(val) {
    // code here
  }

  // BONUS
  /**
   * Determines whether or not the given search value exists in this list.
   * @param {any} val The data to search for in the nodes of this list.
   * @param {?node} current The current node during the traversal of this list
   *    or null when the end of the list has been reached.
   * @return {boolean}
   */
  containsRecursive(val, current = this.head) {
    // code here
  }

  /**
   * Removes the last node of this list.
   * @return {any} The data from the node that was removed.
   */
  removeBack() {
    // code here
  }

  // BONUS
  /**
   * Recursively finds the maximum integer data of the nodes in this list.
   * @param {Node} runner The start or current node during traversal, or null
   *    when the end of the list is reached.
   * @param {Node} maxNode Keeps track of the node that contains the current
   *    max integer as it's data.
   * @return {?number} The max int or null if none.
   */
  recursiveMax(runner = this.head, maxNode = this.head) {
    // code here
  }
}
// ******************************
/*********** REMEMBER *******************
1. Think of algorithms like nutrition or going to the gym. A little bit everyday helps you in the longrun.
2. Imagine if after bootcamp, you want to get ready for your interviews and want to keep practicing algorithms. It would be harder to maintain a habit if you don't already have it.
3. Benefits of daily algorithms it helps you stay sharp and able to solve problems quicker and more creatively. You will get familiar with more complex strategies and come up with more than 1 way to solve a problem.
4. Benefit of sharing your solution at the end is practice speaking about code and thought process. 
*/
// const Devs = []

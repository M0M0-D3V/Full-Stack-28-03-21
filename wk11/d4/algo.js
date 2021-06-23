/* **********FOR ATTENDANCE******************
Work on the algorithm and write each name of participants in the array "Devs" at the very bottom of page.
Post the code (with the array) to your team chat in MatterMost. It is okay if the solution isn't complete but show you are working on it.

************ WEHN FINISHED ****************
Read materials for class or continue working on other Project or Assignment after algo is completed and posted.
*/

// Starter class Node and SLL
// [ ] Bring in other SLL methods previously built
// [ ] implement secondToLast()
// [ ] implement removeVal()
// [ ] bonus prepend()

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
   * [ 1, 2, 3, 4, 5] => 4 is 2nd to last
   * Retrieves the data of the second to last node in this list.
   * @return {any} The data of the second to last node or null if there is no
   *    second to last node.
   */
  secondToLast() {
    // code here
  }

  /**
   * Removes the node that has the matching given val as it's data.
   * @param {any} val The value to compare to the node's data to find the
   *    node to be removed.
   * @return {boolean} Indicates if a node was removed or not.
   */
  removeVal(val) {
    //   code here
  }

  // EXTRA
  /**
   * Inserts a new node before a node that has the given value as its data.
   * @param {any} newVal The value to use for the new node that is being added.
   * @param {any} targetVal The value to use to find the node that the newVal
   *    should be inserted in front of.
   */
  prepend(newVal, targetVal) {
    //   code here
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

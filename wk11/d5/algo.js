/* **********FOR ATTENDANCE******************
Work on the algorithm and write each name of participants in the array "Devs" at the very bottom of page.
Post the code (with the array) to your team chat in MatterMost. It is okay if the solution isn't complete but show you are working on it.

************ WEHN FINISHED ****************
Read materials for class or continue working on other Project or Assignment after algo is completed and posted.
*/

// Starter class Node and SLL
// [] Bring in other SLL methods previously built
// [] implement concat()
// [] implement moveMinToFront()
// [] implement splitOnVal()

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
   * Concatenates the nodes of a given list onto the back of this list.
   * @param {SinglyLinkedList} addList An instance of a different list whose
   *    whose nodes will be added to the back of this list.
   * @return {SinglyLinkedList} This list with the added nodes.
   */
  concat(addList) {}

  /**
   * Finds the node with the smallest number as data and moves it to the front
   * of this list.
   * @return {SinglyLinkedList} This list.
   */
  moveMinToFront() {}

  /**
   * Splits this list into two lists where the 2nd list starts with the node
   * that has the given value.
   * splitOnVal(5) for the list (1=>3=>5=>2=>4) will change list to (1=>3)
   * and the return value will be a new list containing (5=>2=>4)
   * @param {any} val The value in the node that the list should be split on.
   * @return {SinglyLinkedList} The split list containing the nodes that are
   *    no longer in this list.
   */
  splitOnVal(val) {}
}

// ******************************
/*********** REMEMBER *******************
1. Think of algorithms like nutrition or going to the gym. A little bit everyday helps you in the longrun.
2. Imagine if after bootcamp, you want to get ready for your interviews and want to keep practicing algorithms. It would be harder to maintain a habit if you don't already have it.
3. Benefits of daily algorithms it helps you stay sharp and able to solve problems quicker and more creatively. You will get familiar with more complex strategies and come up with more than 1 way to solve a problem.
4. Benefit of sharing your solution at the end is practice speaking about code and thought process. 
*/
// const Devs = []

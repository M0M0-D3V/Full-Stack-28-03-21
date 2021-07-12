/* **********FOR ATTENDANCE******************
Work on the algorithm and write each name of participants in the array "Devs" at the very bottom of page.
Post the code (with the array) to your team chat in MatterMost. It is okay if the solution isn't complete but show you are working on it.

************ WEHN FINISHED ****************
Read materials for class or continue working on other Project or Assignment after algo is completed and posted.
*/

// **************** TODAY ********************
// Starter class Node and SinglyLinkedList
// [] implement insertAtFront()
// [] implement insertAtBack()
// [] implement removeMiddleNode()

/**
 * Class to represent a Node for a DoublyLinkedList.
 */
class Node {
  // Create the node class that allows for forwards & backwards traversal.
  constructor(data) {
    this.data = data;
    this.prev = null;
    this.next = null;
  }
}
/**
 * Class to represent a doubly linked list. Nodes can be linked together
 * WITHOUT this class to form a list, but the class is helpful to give all
 * doubly linked lists access to the same helpful methods for consistency
 * and to always keep track of the head and the tail nodes.
 *
 * Unlike a singly linked list, a doubly linked list allows you to traverse
 * backwards as well.
 */
class DoublyLinkedList {
  /**
   * Executed when the new keyword is used to construct a new DoublyLInkedList
   * instance that inherits these methods and properties.
   */
  constructor() {
    // The list is empty to start.
    this.head = null;
    this.tail = null;
  }

  isEmpty() {
    return this.head === null;
  }

  seedFromArr(items = []) {
    items.forEach((item) => this.insertAtBack(item));
    return this;
  }

  /**
   * Creates a new node and adds it at the front of this list.
   * - Time: O(1) constant.
   * - Space: O(1) constant.
   * @param {any} data The data for the new node.
   * @returns {DoublyLinkedList} This list.
   */
  insertAtFront(data) {
    //   code here
  }

  /**
   * Creates a new node and adds it at the back of this list.
   * - Time: O(1) constant. No loop is needed since we have direct access to
   *    the tail.
   * - Space: O(1) constant.
   * @param {any} data The data for the new node.
   * @returns {DoublyLinkedList} This list.
   */
  insertAtBack(data) {
    //   code here
  }

  /**
   * Removes the middle node in this list.
   * - Time: O(0.5n) -> O(n) linear, n = list length.
   *    Since it's not constant we simplify it to O(n). Without the early
   *    exists, it would not be 0.5n.
   * - Space: O(1) constant.
   * @returns {any} The data of the removed node.
   */
  removeMiddleNode() {
    // code here
  }
}

/*********** REMEMBER *******************
    1. Think of algorithms like nutrition or going to the gym. A little bit everyday helps you in the longrun.
    2. Imagine if after bootcamp, you want to get ready for your interviews and want to keep practicing algorithms. It would be harder to maintain a habit if you don't already have it.
    3. Benefits of daily algorithms it helps you stay sharp and able to solve problems quicker and more creatively. You will get familiar with more complex strategies and come up with more than 1 way to solve a problem.
    4. Benefit of sharing your solution at the end is practice speaking about code and thought process. 
    */
// const Devs = []

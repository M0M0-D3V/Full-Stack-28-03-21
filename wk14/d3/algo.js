/* **********FOR ATTENDANCE******************
Work on the algorithm and write each name of participants in the array "Devs" at the very bottom of page.
Post the code (with the array) to your team chat in MatterMost. It is okay if the solution isn't complete but show you are working on it.

************ WEHN FINISHED ****************
Read materials for class or continue working on other Project or Assignment after algo is completed and posted.
*/

// **************** TODAY ********************
// Starter class Node and DoublyLinkedList
// [] implement insertAfter()
// [] implement insertBefore()

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

  insertAtFront(data) {
    const newNode = new Node(data)
    if (!this.head) {
      this.head = this.tail = newNode
    } else {
      this.head.prev = newNode
      newNode.next = this.head
      this.head = newNode
    }
    return this
  }

  insertAtBack(data) {
    const newTail = new Node(data)
    if (!this.head) {
      // if no head set the newTail to be both the head and the tail
      this.head = this.tail = newTail
    } else {
      this.tail.next = newTail
      newTail.prev = this.tail
      this.tail = newTail
    }
    return this
  }

  removeMiddleNode() {
    // when there is only 1 node, it is the middle, remove it.
    if (!this.isEmpty() && this.head === this.tail) {
        const removedData = this.head.data
        this.head = null
        this.tail = null
        return removedData
      }
      let forwardRunner = this.head
      let backwardsRunner = this.tail
      while (forwardRunner && backwardsRunner) {
        if (forwardRunner === backwardsRunner) {
          const midNode = forwardRunner
          midNode.prev.next = midNode.next
          midNode.next.prev = midNode.prev
          return midNode.data
        }
        // runners passed each other without stopping on the same node, even length, we can exit early
        if (forwardRunner.prev === backwardsRunner) {
          return null
        }
        forwardRunner = forwardRunner.next
        backwardsRunner = backwardsRunner.prev
      }
      return null
  }

  /**
   * Inserts a new node with the given newVal after the node that has the
   * given targetVal as it's data.
   * - Time: O(?).
   * - Space: O(?).
   * @param {any} targetVal The node data to find.
   * @param {any} newVal Data for the new node.
   * @return {boolean} Indicates if the new node was added.
   */
  insertAfter(targetVal, newVal) {
    // code here
  }

  /**
   * Inserts a new node with the given newVal before the node that has the
   * given targetVal as it's data.
   * - Time: O(?).
   * - Space: O(?).
   * @param {any} targetVal The node data to find.
   * @param {any} newVal Data for the new node.
   * @return {boolean} Indicates if the new node was added.
   */
  insertBefore(targetVal, newVal) {
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

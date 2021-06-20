/* **********FOR ATTENDANCE******************
Work on the algorithm and write each name of participants in the array "Devs" at the very bottom of page.
Post the code (with the array) to your team chat in MatterMost. It is okay if the solution isn't complete but show you are working on it.

************ WEHN FINISHED ****************
Read materials for class or continue working on other Project or Assignment after algo is completed and posted.
*/

// COPIED FROM YESTERDAY'S NODE AND SLL CLASSES...
// [ ] implement insertAtFront()
// [ ] implement removeHead()
// [ ] implement average()

class Node {
  /**
   * Constructs a new Node instance. Executed when the 'new' keyword is used.
   * @param {any} data The data to be added into this new instance of a Node.
   *    The data can be anything, just like an array can contain strings,
   *    numbers, objects, etc.
   * @returns {Node} This new Node instance is returned automatically without
   *    having to be explicitly written (implicit return).
   */
  constructor(data) {
    this.data = data;
    /**
     * This property is used to link this node to whichever node is next
     * in the list. By default, this new node is not linked to any other
     * nodes, so the setting / updating of this property will happen sometime
     * after this node is created.
     */
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
  }

  isEmpty() {
    if (this.head === null) {
      return true;
    } else {
      return false;
    }

    // this is another way to syntax
    // return this.head === null
  }

  insertAtBack(data) {
    if (this.isEmpty()) {
      this.head = new Node(data); // remember this head is Node type with 2 properties: data and next
    } else {
      let runner = this.head; // runner now has data and next
      while (runner.next !== null) {
        runner = runner.next;
      }
      runner.next = new Node(data);
    }

    return this;
  }

  seedFromArr(vals) {
    for (let i = 0; i < vals.length; i++) {
      this.insertAtBack(vals[i]);
    }
    return this;
  }

  //  ********** TODAY *********
  /**
   * Creates a new node with the given data and inserts that node at the front
   * of the list.
   * - Time: O(1) constant.
   * - Space: O(1) constant.
   * @param {any} data The data for the new node.
   * @returns {SinglyLinkedList} This list.
   */
  insertAtFront(data) {
    // code here
  }

  /**
   * Removes the first node of this list.
   * - Time: O(1) constant.
   * - Space: O(1) constant.
   * @returns {any} The data from the removed node.
   */
  removeHead() {
    // code here
  }

  /**
   * Calculates the average of this list.
   * - Time: O(n) linear, n = length of list.
   * - Space: O(1) constant.
   * @returns {number|NaN} The average of the node's data.
   */
  average() {
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

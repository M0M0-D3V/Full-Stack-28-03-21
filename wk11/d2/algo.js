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
  constructor(data) {
    this.data = data;
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
    // make new head node
    const newHead = new Node(data);
    // move current head and everything else to newHead.next
    newHead.next = this.head;
    // swap newhead to head
    this.head = newHead;
    return this;
  }

  /**
   * Removes the first node of this list.
   * - Time: O(1) constant.
   * - Space: O(1) constant.
   * @returns {any} The data from the removed node.
   */
  removeHead() {
    // check if empty, return null if empty
    if (this.isEmpty()) {
      return null;
    }
    // move current head to variable
    const oldHead = this.head;
    // swap head to the next position of oldHead
    this.head = oldHead.next;
    return oldHead.data;
  }

  /**
   * Calculates the average of this list.
   * - Time: O(n) linear, n = length of list.
   * - Space: O(1) constant.
   * @returns {number|NaN} The average of the node's data.
   */
  average() {
    // return 0 if empty
    if (this.isEmpty()) {
      return 0;
    }
    let runner = this.head;
    let sum = 0,
      count = 0;
    while (runner) {
      count++;
      sum += runner.data;
      runner = runner.next;
    }
    return sum / count;
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

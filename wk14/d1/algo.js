/* **********FOR ATTENDANCE******************
Work on the algorithm and write each name of participants in the array "Devs" at the very bottom of page.
Post the code (with the array) to your team chat in MatterMost. It is okay if the solution isn't complete but show you are working on it.

************ WEHN FINISHED ****************
Read materials for class or continue working on other Project or Assignment after algo is completed and posted.
*/

// **************** TODAY ********************
// Starter class Node and SinglyLinkedList
// [] implement reverse()
// [] implement removeNegatives()
// [] implement hasLoop()


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
    return this.head === null;
  }

  insertAtFront(data) {
    const newHead = new Node(data);
    newHead.next = this.head;
    this.head = newHead;
    return this;
  }

  insertAtBack(data) {
    if (this.isEmpty()) {
      this.head = new Node(data);
    } else {
      let runner = this.head;
      while (runner.next !== null) runner = runner.next;
      runner.next = new Node(data);
    }
  }

  removeVal(val) {
    if (this.isEmpty()) {
      return false;
    }
    if (this.head.data === val) {
      this.head = this.head.next;
      return true;
    }
    let runner = this.head;
    while (runner.next && runner.next.data !== val) {
      runner = runner.next;
    }
    if (runner.next && runner.next.data === val) {
      runner.next = runner.next.next;
      return true;
    }
    return false;
  }

  /**
   * Reverses this list in-place without using any extra lists.
   * @return {SinglyLinkedList} This list.
   */
  reverse() {
    // code here
  }

  /**
   * Removes all the nodes that have a negative integer as their data.
   * @return {SinglyLinkedList} This list after the negatives are removed.
   */
  removeNegatives() {
    //   code here
  }

  /**
   * Determines whether the list has a loop in it which would result in
   * infinitely traversing unless otherwise avoided. A loop is when a node's
   * next points to a node that is behind it.
   * @return {boolean} Whether the list has a loop or not.
   */
  hasLoop() {
    //   code here
  }
}

/*********** REMEMBER *******************
  1. Think of algorithms like nutrition or going to the gym. A little bit everyday helps you in the longrun.
  2. Imagine if after bootcamp, you want to get ready for your interviews and want to keep practicing algorithms. It would be harder to maintain a habit if you don't already have it.
  3. Benefits of daily algorithms it helps you stay sharp and able to solve problems quicker and more creatively. You will get familiar with more complex strategies and come up with more than 1 way to solve a problem.
  4. Benefit of sharing your solution at the end is practice speaking about code and thought process. 
  */
// const Devs = []

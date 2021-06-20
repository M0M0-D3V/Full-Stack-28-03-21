// Singly Linked Lists

// https://www.geeksforgeeks.org/applications-of-linked-list-data-structure/

/**
 * Class to represents a single item of a SinglyLinkedList that can be
 * linked to other Node instances to form a list of linked nodes.
 */
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

/**
 * Class to represent a list of linked nodes. Nodes CAN be linked together
 * without this class to form a linked list, but this class helps by providing
 * a place to keep track of the start (head) of the list at all times and as a
 * place to add methods (functions inside an object) so that every new
 * linked list that is instantiated will inherit helpful the same helpful
 * methods, just like every array you create inherits helpful methods.
 */
class SinglyLinkedList {
  /**
   * Constructs a new instance of an empty linked list that inherits all the
   * methods.
   * @returns {SinglyLinkedList} The new list that is instantiated is implicitly
   *    returned without having to explicitly write "return".
   */
  constructor() {
    this.head = null; // needs to point to a Node
  }

  /**
   * Determines if this list is empty.
   * - Time: O(1) constant.
   * - Space: O(1) constant.
   * @returns {boolean}
   */
  isEmpty() {
    //   code here
    if (this.head === null) {
      return true;
    } else {
      return false;
    }

    // this is another way to syntax
    // return this.head === null
  }

  /**
   * Creates a new node with the given data and inserts it at the back of
   * this list.
   * - Time: O(n) linear, n = length of list.
   * - Space: O(1) constant.
   * @param {any} data The data to be added to the new node.
   * @returns {SinglyLinkedList} This list.
   */
  // push method in Array but it's SLL now :)
  insertAtBack(data) {
    //   code here
    // check if list even exists!
    // use isEmpty
    if (this.isEmpty()) {
      this.head = new Node(data); // remember this head is Node type with 2 properties: data and next
    } else {
      // create temp pointer
      let runner = this.head; // runner has data and next
      // do a loop (while) to find null
      while (runner.next !== null) {
        // keep loop going if after runner is empty
        runner = runner.next;
      }
      // after the loop, runner.next should be empty
      runner.next = new Node(data);
      // runner.next = data
    }

    return this; // in python same as return self
  }

  /**
   * Calls insertAtBack on each item of the given array.
   * - Time: O(n * m) n = list length, m = arr.length.
   * - Space: O(1) constant.
   * @param {Array<any>} vals The data for each new node.
   * @returns {SinglyLinkedList} This list.
   */
  seedFromArr(vals) {
    // code here
    // do something repeating to go through the vals array
    for (let i = 0; i < vals.length; i++) {
      // call insertAtBack function to assign a new node for each val
      this.insertAtBack(vals[i]);
    }
    return this;
  }
}

const newList = new SinglyLinkedList();
console.log(newList.isEmpty());
const firstNode = new Node("hello");
newList.insertAtBack(firstNode.data);
console.log(newList);
newList.insertAtBack("what");
newList.insertAtBack("is");
newList.insertAtBack("this");
console.log(newList);
newList.seedFromArr(["hello", "world", "marhaba"]);
console.log(newList);

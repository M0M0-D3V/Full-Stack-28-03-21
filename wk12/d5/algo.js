/* **********FOR ATTENDANCE******************
Work on the algorithm and write each name of participants in the array "Devs" at the very bottom of page.
Post the code (with the array) to your team chat in MatterMost. It is okay if the solution isn't complete but show you are working on it.

************ WEHN FINISHED ****************
Read materials for class or continue working on other Project or Assignment after algo is completed and posted.
*/

// **************** TODAY ********************
// Starter class QElement
// [] PriorityQueue - implement enqueue()
// [] PriorityQueue - implement dequeue()
// [] **BONUS** minPosNum() and countLetters()

/**
 * Class to represent a priority queue element. This is so that the priority
 * property does not need to be stored on the given item itself.
 */
class QElement {
  constructor(element, priority) {
    // element is the given item to be added to the queue.
    this.element = element;
    this.priority = priority;
  }
}

/**
 * Class to represent a PriorityQueue with methods that enforce the correct
 * order of queue items.
 */
class PriorityQueue {
  // An array is used to implement priority
  constructor() {
    this.items = [];
  }

  /**
   * Adds the new item in the correct location in the queue based on priority.
   * - Time: O(n) linear, since we have to loop over potentially whole list.
   * - Space: O(1) constant.
   * @param {any} element The item to add.
   * @param {number} priority The importance, low is more important.
   * @returns {number} The new length.
   */
  enqueue(element, priority) {
    // code here
  }

  /**
   * Removes and returns the most prioritized item.
   * - Time: O(1) constant.
   * - Space: O(1) constant.
   * @returns {QElement|undefined}.
   */
  dequeue() {
    // code here
  }
}

// **** BONUS *****
/**
 * These 2 problems were actual questions given to a student recently during an interview.
 * Both were written on paper and student had 5 minutes for each to write solution by hand in front of the interviewing people!
 *  - See if you can handle the pressure! Can you think of a solution and write it down in 5 minutes while talking to the interviewers?
 */

/**
 * 1. Write a function that counts the letters of a string and returns in object form.
 * e.g.
 * input: "Hello"
 * expected output: {
 *  "h": 1,
 *  "e": 1,
 *  "l": 2,
 *  "0": 1
 * }
 */
function countLetters() {
  // code here
}

/**
 * 2. Write a function that receives an array of integers and return the smallest positive integer that doesn't exist in the array.
 * e.g.
 * input: [1, 2]
 * expected output: 3
 *
 * input2: [3, 5]
 * expected output: 1
 *
 * input3: [1, 3]
 * expected output: 2
 */
function minPosNum() {
  // code here
}

/*********** REMEMBER *******************
1. Think of algorithms like nutrition or going to the gym. A little bit everyday helps you in the longrun.
2. Imagine if after bootcamp, you want to get ready for your interviews and want to keep practicing algorithms. It would be harder to maintain a habit if you don't already have it.
3. Benefits of daily algorithms it helps you stay sharp and able to solve problems quicker and more creatively. You will get familiar with more complex strategies and come up with more than 1 way to solve a problem.
4. Benefit of sharing your solution at the end is practice speaking about code and thought process. 
*/
// const Devs = []

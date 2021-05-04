// RIOT WALK

// Remember this during an interview
// Talk out loud

// Repeat
// Input
// Output
// Test

// Walk-through

/*
  Recursive Binary Search

  Input: SORTED array of ints, int value
  Output: bool representing if value is found

  Recursively search to find if the value exists, do not loop over every element.

  Approach:
  Take the middle item and compare it to the given value.
  Based on that comparison, narrow your search to a particular section of the array
*/

// const nums1 = [1, 3, 5, 6]
// const searchNum1 = 4
// const expected1 = false

// const nums2 = [4, 5, 6, 8, 12]
// const searchNum2 = 5
// const expected2 = true

// const nums3 = [3, 4, 6, 8, 12]
// const searchNum3 = 3
// const expected3 = true

function binarySearch(sortedNums, searchNum) {
  // code here
}

/*****************************************************************************/

/*
  Recursively reverse a string
  helpful methods:

  str.slice(beginIndex[, endIndex])
  returns a new string from beginIndex to endIndex exclusive
*/

const str1 = "abc";
const expected1 = "cba";

const str2 = "";
const expected2 = "";

function reverseStr(str) {
  // code here
  // if string is empty return null
  if (str.length == 0) {
    return "";
  }
  return reverseStr(str.substr(1)) + str[0];

  // base case
  // create a start and ending
  // var start = 0
  // var ending = str.length - 1
  // // create midpoint
  // var mid = Math.floor(ending / 2)
}
var result = reverseStr(str1, expected1)
console.log(result)

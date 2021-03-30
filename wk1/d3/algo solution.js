/*
  Recreate the pop method without using .pop()
  Remove and return the last item from a given array
  After removing an item from an array, what else changes?
*/
// const arr1 = [1, 2, 3]
// const expected1 = 3
// const expectedArr1 = [1, 2]

// const arr1 = [1, 2, 3];
// const arr2 = [1, 2, 3, 4, 5, 6];
function pop(arr) {
  // code here

  // [] have to return the last item from the array
  // [] decrease the array size
  var lastItem = arr[arr.length - 1];
  arr.length -= 1;
  console.log(arr);
  return lastItem;
}
// [] run these below:
// var result1 = pop(arr1);
// console.log(result1);
// var result2 = pop(arr2);
// console.log(result2);

/* ******************************************************************************** */

/*
  Given an array and an item to search for,
  return the index where the item is found,
  return -1 to represent not found
  */

const arr1 = ["a", "b", "c"]
const searchItem1 = "c"
const expected1 = 2

const arr2 = ["a", "b", "c"]
const searchItem2 = 5
const expected2 = -1

const arr3 = ["c", "a", "b", "c"]
const searchItem3 = "c"
const expected3 = 0

const arr4 = []
const searchItem4 = 5
const expected4 = -1

function indexOf(arr, searchItem) {
  // code here
  //   return index where searchItem is found
  // return -1 if not found
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] == searchItem) {
      return i;
    }
  }
  return -1;
}
// [] run these below:
var result1 = indexOf(arr1, searchItem1);
console.log(result1);
var result2 = indexOf(arr2, searchItem2);
console.log(result2);
var result3 = indexOf(arr3, searchItem3);
console.log(result3)
var result4 = indexOf(arr4, searchItem4);
console.log(result4)
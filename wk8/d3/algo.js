/*
  Given two arrays of ints

  return the symmetric differences, (aka disjunctive union)
    - these are the elements which are in either of the sets and not their intersection (the union without the intersection)
      think of a venn diagram filled in except the overlapping middle part is not filled in (the intersection is excluded)
    - i.e., if an element is in at least one of the arrays, but not in any other, it should be included (dupes included 1 time only)

  Venn Diagram Visualization:
    - https://miro.medium.com/max/3194/1*N3Z94nCNu8IHsFenIAELJw.jpeg
*/

const test1SetA = [1, 2];
const test1SetB = [2, 1];
const expected1 = [];
// Explanation: 1 and 2 are in both arrays so are excluded

const test2SetA = [1, 2, 3];
const test2SetB = [4, 5, 6];
const expected2 = [1, 2, 3, 4, 5, 6];
// Explanation: neither array has shared values, so all are included

const test3SetA = [4, 1, 2, 3, 4];
const test3SetB = [1, 2, 3, 5, 5, 2];
const expected3 = [4, 5];
/*
  Explanation: 1, 2, and 3 are shared so are excluded
    4 and 5 are included because they exist only in 1 array,
    but have duplicates, so only one copy of each is kept.
*/

function symmetricDifferences(setA, setB) {
  // code here
}


// Monica's solution from when she was a student
function disjunctiveUnion(arr1, arr2) {
  newArr = [];
  let temp = 0;

  for (let i = 0; i < arr1.length; i++) {
    temp = arr1[i];
    dupeFound = false;
    for (let j = 0; j < arr2.length; j++) {
      
      if (arr1[i] == arr2[j]){
        dupeFound = true;
        break;
      }
    }
    if (dupeFound == false && arr[i] != newArr[newArr.length - 1]) {
      newArr.push(arr1[i]);
    }
    
    // here is where if dupeFound is found, push
  }
  return newArr;
}

/*****************************************************************************/
// After done, take a headstart and review the reading for today's discussion
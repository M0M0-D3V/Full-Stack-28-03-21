/*
  Given an honorific (name title) and array of full name strings,
  in "LastName, FirstName" format

  Return a new array of strings in this format: "Honorific FirstName LastName"

  Bonus: re-write it with built in functional programming methods
*/

// const honorific1 = "Mr."
// const names1 = []
// const expected1 = []

// const honorific2 = "Sir"
// const names2 = ["Sanchez, Rick", "Smith, Jerry"]
// const expected2 = ["Sir Rick Sanchez", "Sir Jerry Smith"]

// const honorific3 = "Mrs."
// const names3 = ["HorseDoctor, Beth"]
// const expected3 = ["Mrs. Beth HorseDoctor"]

function addHonorific(honorific, fullNames) {
  // code here
  return fullNames.map((fullName) =>
    fullName
      .split(", ")
      .reduce((lastName, firstName) => `${honorific} ${firstName} ${lastName}`)
  );
}

/*****************************************************************************/

/*
  Given two strings, version1, and version2, both representing version numbers
  If version1 > version2 return 1; if version1 < version2 return -1; otherwise return 0.

  Helpful methods:
    - .split(characterToSplitOn)
      - returns an array of items: "a-b-c".split("-") returns ["a", "b", "c"]
    - .parseInt
      - given a string, converts it to and returns int or NaN (Not a Number) if conversion fails

  Bonus, solve without .split
*/

const test1V1 = "0.1";
const test1V2 = "1.1";
const expected1 = -1;

const test2V1 = "1.0.1";
const test2V2 = "1";
const expected2 = 1;

const test3V1 = "7.5.2.4";
const test3V2 = "7.5.3";
const expected3 = -1;

const test4V1 = "7.5.2.4";
const test4V2 = "7.5.2";
const expected4 = 1;

const test5V1 = "1.01.";
const test5V2 = "1.001.";
const expected5 = 0;
// Explanation: Ignoring leading zeroes, both “01” and “001" represent the same number “1”

const test6V1 = "1.0.1";
const test6V2 = "1";
const expected6 = 1;

function compareVersionNumbers(v1, v2) {
  // code here
  const v1Split = v1.split("."); // array contains: 7, 5, 2, 4
  console.log(v1Split);
  const v2Split = v2.split("."); // array contains: 7, 5, 2

  for (let i = 0; i < v1Split.length || i < v2Split.length; i++) {
    // || 0 means if whatever is to the left of || is falsy, use 0 as the value instead
    const v1RevisionNum = parseInt(v1Split[i]) || 0;
    console.log(v1RevisionNum);
    const v2RevisionNum = parseInt(v2Split[i]) || 0;

    if (v1RevisionNum > v2RevisionNum) {
      return 1;
    } else if (v1RevisionNum < v2RevisionNum) {
      return -1;
    }
  }
  return 0;
}
let result1 = compareVersionNumbers(test4V1, test4V2);
let result2 = compareVersionNumbers(test5V1, test5V2);
console.log(result1);
console.log(result2);

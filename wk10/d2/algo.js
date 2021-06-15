/*
  Given an array of objects that contain a category key,
  return a hash table to group the objects by their category.

  Make the grouping case-insensitive.

  Bonus: allow the key that is grouped by to be provided.
*/

// const objects = [
//   {
//     name: "Baby Yoda",
//     category: "cute",
//   },
//   {
//     name: "Cricket Protein",
//     category: "food",
//   },
//   {
//     name: "Shibe",
//     category: "Cute",
//   },
//   {
//     name: "Ancient India",
//     category: "Cradle of Civilization",
//   },
//   {
//     name: "Wasp Crackers",
//     category: "Food",
//   },
//   {
//     name: "The Fertile Crescent",
//     category: "Cradle of Civilization",
//   },
// ]

// const expected = {
//   cute: [
//     {
//       name: "Baby Yoda",
//       category: "cute",
//     },
//     {
//       name: "Shibe",
//       category: "Cute",
//     },
//   ],
//   food: [
//     {
//       name: "Cricket Protein",
//       category: "food",
//     },
//     {
//       name: "Wasp Crackers",
//       category: "Food",
//     },
//   ],
//   "cradle of civilization": [
//     {
//       name: "Ancient India",
//       category: "Cradle of Civilization",
//     },
//     {
//       name: "The Fertile Crescent",
//       category: "Cradle of Civilization",
//     },
//   ],
// }

function categoryTableBuilder(items) {
  // code here
}

/*****************************************************************************/

/*
  Given two strings S and T containing only lowercase letters and "#" characters,
  return if they are equal when both are typed into empty text editors.
  # character means a backspace character.

  i.e., after processing the backspaces, are the two strings equal?

  Bonus: solve in O(n) time
*/

// const S1 = "ab#c";  ac
// const T1 = "ad#c";  ac
// const expected1 = true;
// // Explanation: Both S and T become "ac"

// const S2 = "ab##";  
// const T2 = "c#d#";  
// const expected2 = true;
// // Explanation: Both S and T become ""

// const S3 = "a##c";
// const T3 = "#a#c";
// const expected3 = true;
// // Explanation: Both S and T become "c"

// const S4 = "a#c";
// const T4 = "b";
// const expected4 = false;
// // Explanation: S becomes "c" while T becomes "b".

function backspaceStringCompare(S, T) {
  const sBackspaced = getBackspacedStack(S);
  const tBackspaced = getBackspacedStack(T);

  if (sBackspaced.length !== tBackspaced.length) {
    return false;
  }

  for (let i = 0; i < sBackspaced.length; i++) {
    if (sBackspaced[i] !== tBackspaced[i]) {
      return false;
    }
  }
  return true;
}

function getBackspacedStack(str) {
  const backspacedStack = [];

  for (const char of str) {
    if (char !== "#") {
      backspacedStack.push(char);
    } else if (backspacedStack.length > 0) {
      backspacedStack.pop();
    }
  }

  return backspacedStack;
}

// another solution
function backspaceCompare2(S, T) {
  let sBackspaced = processBackspaces(S);
  let tBackspaced = processBackspaces(T);

  if (sBackspaced === tBackspaced) {
    return true;
  } else {
    return false;
  }
}

function processBackspaces(s) {
  let backspaceCount = 0;
  let newS = "";

  for (let i = s.length - 1; i >= 0; --i) {
    let isBackspace = s[i] === "#";

    if (backspaceCount > 0 && !isBackspace) {
      backspaceCount--;
    } else if (isBackspace) {
      backspaceCount++;
    } else {
      newS = s[i] + newS;
    }
  }
  return newS;
}
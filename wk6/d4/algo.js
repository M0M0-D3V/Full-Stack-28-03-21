/*
  Sum To One Digit
  Implement a function sumToOne(num)​ that,
  given a number, sums that number’s digits
  repeatedly until the sum is only one digit. Return
  that final one digit result.

  Tips:
    to access digits from a number, need to convert it .toString() to access each digit via index
    parseInt(arg) returns arg parsed as an integer, or NaN if it couldn't be converted to an int
    isNaN(arg) used to check if something is NaN
*/

// const num1 = 5
// const expected1 = 5

// const num2 = 10  => 1
// const expected2 = 1

// const num3 = 25  => 7
// const expected3 = 7

// const num4 = 25761  => 21  => 3
// // 21
// // 3
// const expected4 = 3

function sumToOneDigit(num) {
  // code here
}

/*****************************************************************************/

/*
    String Anagrams
  
    Given a string,
    return array where each element is a string representing a different anagram (a different sequence of the letters in that string).
  // methods like yseterday: substring, slice...
    examples of anagram: cat => tac => act => tca
    sdlfhsjdfh => ldfhsjdfhs => dfhsjdfhsl => fhshfhsld => jdhsfshld
    Ok to use built in methods
  */
// total length of array should be = length * (length-1)
// const str11 = "lim";
// const expected11 = ["ilm", "iml", "lim", "lmi", "mil", "mli"];
// Order of the output array does not matter

// const str12 = "abra"  => 4 * 3 = 12 length

function generateAnagrams(str, partial = "", arr = []) {
  // find a way to continue the array
  // base case to determine how to create annagram
  // for loop to go through the length of str
  // var newString = "";
  if (str.length == 0) {
    arr.push(partial);
    return arr;
  }       //    2
  for (var i = 0; i < str.length; i++) {
    // create string
    // newString += str[i + 1];
    generateAnagrams(
      str.slice(0, i) + str.slice(i + 1, str.length), // taking 2 sides of the string in chunks to recreate str
      partial + str[i], //
      arr
    );
  }
  return arr;
}
console.log(generateAnagrams("cat"));

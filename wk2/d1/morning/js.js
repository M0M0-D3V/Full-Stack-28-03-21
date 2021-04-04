// variables
// variables are to store value or data
// hold data that may change
// to pass a value
var number = 10; // javascript will know it to be integer
var float = 10.5; // javascript will know to be a float or double
var number2 = "10";
// string 3 ways of expressing
// "", ' ', ` `
// ` ` can be used for string interpolation
var string1 = "i am a string!";
var string2 = "i am also a string!";
var string3 = `i am still also a string!`;
// var string4 = "there is an   in the sentence"
console.log("console logging" + number);
console.log(`console logging ${number}`);
console.log(`**********watching for variable ${number2}`);
// boolean - true or false, 0 == false, 1 == true
var isSunday = true;
var isWeekend = false;
var x = 0;
var y = 1;
if (!x) {
  // code
  console.log("we are here!");
}
// what is difference between:
// =, ==,  === ?
// loops
// for
var array = [1, 2, 3, 4];
//  start       end              step
for (var i = 10; i >= 0; i--) {}
// while
var x = 0;
while(x < 10) {
    // do something
    console.log(x)
    x++
}
// do - while
var isHungry = true
do {
    console.log("eating some food!")
    isHungry = !isHungry
  }
  while (isHungry == true);
var number = 1
for (let i = 0; i < 10; i++) {
    //something    
    console.log(number)
    number++
    // number += 1
    // number = number + 1
}
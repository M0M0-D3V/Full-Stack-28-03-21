//  JAVASCRIPT FUNDAMENTALS

// [] ECMAScript
// [] Debugging
// console.log(something);
// console.log(x);
// var x = 14;

// [] Scope
// const beatles = Object.freeze(["Paul", "George", "John", "Ringo"]);
// console.log(beatles);
// beatles[0] = "Andy";

// const beatles = ["Paul", "George", "John", "Ringo"];
// function printNames(names) {
//   function actuallyPrintingNames() {
//     for (let index = 0; index < names.length; index++) {
//       const name = names[index];
//       name = names;

//       console.log(name + " was found at index " + index);
//     }
//   }
//   actuallyPrintingNames();
// }
// printNames(beatles);

// [] Hoisting

// console.log(magicalUnicorns);
// let magicalUnicorns = "awesome";

// what happens?
// var magicalUnicorns;
// console.log(magicalUnicorns);
// magicalUnicorns = "awesome";

// var foo = "bar";
// function magic(){
//     var foo;
//     foo = "hello world";
//     console.log(foo);
// }
// magic();
// console.log(foo);

// console.log(hello);
// var hello = 'world';

// // predict
// var hello
// console.log(hello);
// hello = 'world';

// ********
// [] Destructuring
const person = {
  firstName: "Bob",
  lastName: "Marley",
  email: "bob@marley.com",
  password: "sekureP@ssw0rd9",
  username: "barley",
  createdAt: 1543945177623,
};
const animals = [
  "horse",
  "dog",
  "fish",
  "cat",
  "bird",
  "turtle",
  "dog",
  "hamster",
];
// [] Before ES6
// var email = person.email;
// console.log(email);
var firstAnimal = animals[0];
// console.log(firstAnimal);

// [] After ES6

// const { email } = person;
// console.log(email);
// const [firstAnimal, secondAnimal] = animals;
const [, , thirdAnimal] = animals;
// console.log(email);
// => bob@marley.com
console.log(thirdAnimal);
// => horse
console.log(secondAnimal);

// nested destructured object
const person = {
  firstName: "Bob",
  lastName: "Marley",
  email: "bob@marley.com",
  password: "sekureP@ssw0rd9",
  username: "barley",
  addresses: [
    {
      address: "1600 Pennsylvania Avenue",
      city: "Washington, D.C.",
      zipcode: "20500",
    },
    {
      address: "221B Baker St.",
      city: "London",
      zipcode: "WC2N 5DU",
    },
  ],
  createdAt: 1543945177623,
};

const {
  addresses: [whiteHouse, sherlock],
} = person;
console.log(whiteHouse);
console.log(sherlock);

// ********

// [] Rest / Spread

const animals = ["horse", "dog", "fish", "cat", "bird"];
const [firstAnimal, secondAnimal, ...animalsCopy] = animals;
const anotherExp = [...animals];
console.log(animalsCopy);
console.log(secondAnimal);
console.log(anotherExp);

const person = {
  firstName: "Bob",
  lastName: "Marley",
  email: "bob@marley.com",
  password: "sekureP@ssw0rd9",
  username: "barley",
  addresses: [
    {
      address: "1600 Pennsylvania Avenue",
      city: "Washington, D.C.",
      zipcode: "20500",
    },
    {
      address: "221B Baker St.",
      city: "London",
      zipcode: "WC2N 5DU",
    },
  ],
  createdAt: 1543945177623,
};

//   const { firstName, lastName, ...attributes } = person;
// console.log(attributes)

// last example
const personCopy = { ...person };

console.log(personCopy == person);
// => false
console.log(personCopy.addresses == person.addresses);
// => true

// ********
// [] Arrow Functions

function name(parameters) {
  // we write code here!
  return;
}

const name = function (parameters) {
  // the same thing
  return;
};

const name = (parameters) => {
  // code here
};

document.getElementById("button").onclick = () => {
  setBackgroundColorById("paragraph", "blue");
};
document.getElementById("alert").onclick = () => {
  alert(document.getElementById("popup-input").value);
};
document.getElementById("hover-this").onmouseover = function () {
  setBackgroundColorById("body", "red");
};
document.getElementById("hover-this").onmouseout = function () {
  setBackgroundColorById("body", "white");
};
const getValueFromId = (id) => {
  document.getElementById(id).value;
};
function setBackgroundColorById(id, color) {
  document.getElementById(id).style = "background-color: " + color;
}
function mouseOverFunction(el) {
  el.style = "background-color: black";
}

// ********
// [] Ternary Operator

let isAge = 255;

if (isAge < 20) {
  console.log("something if true");
} else if (isAge > 50) {
  console.log("super young");
} else {
  console.log("something if false");
}

isAge < 20
  ? console.log("something if true")
  : console.log("something if false");

// ********
// Optionals
// - Big O Notation
// - Quick Sort
// - Jest Unit Testing

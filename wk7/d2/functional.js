// setTimeout( function() {
//     console.log("start")
//   }, 3000 );

//   console.log("end");

// // changed to the below
// // const startLog = function () {
// //     console.log("start");
// // };

// // setTimeout(startLog, 3000);

// // console.log("end");

// var exampleFunction = function(message){
//     console.log( message );
//   };

//   exampleFunction( "Hello from exampleFunction" );

// //   example from MD Docs
//   function greeting(name) {
//     alert('Hello ' + name);
//   }

//   function processUserInput(callback) {
//     var name = prompt('Please enter your name.');
//     callback(name);
//   }
// //   the entire greeting function is passed in as argument
//   processUserInput(greeting);

// Object.Freeze()
const arr = [1, 2, 3, 4]; // we can modify existing content but we cannot reassign
arr.push(300); // even though arr is declared with `const` we can still push new values into it
console.log(arr);

const arr2 = Object.freeze([1, 2, 3, 4]);
// arr2.push(300); // we're no longer allowed to change `arr`
console.log(arr2);

// const groceryList = Object.freeze([
//   { item: "carrots", haveIngredient: false },
//   { item: "onions", haveIngredient: true },
//   { item: "celery", haveIngredient: false },
//   { item: "cremini mushrooms", haveIngredient: false },
//   { item: "butter", haveIngredient: true },
// ]);
// const copyOfGrocery = [...groceryList];
// // const needThyme = [...groceryList, { item: "thyme", haveIngredient: false }];

// const needThyme = groceryList.concat([
//   { item: "thyme", haveIngredient: false },
// ]);
// console.log(needThyme);
// const otherList = [
//   { item: "carrots", haveIngredient: false },
//   { item: "onions", haveIngredient: true },
//   { item: "celery", haveIngredient: false },
//   { item: "cremini mushrooms", haveIngredient: false },
//   { item: "butter", haveIngredient: true },
// ];
// otherList.push({ item: "thyme", haveIngredient: false });

// map()
// const groceries = ["pearl onions", "cremini mushrooms", "thyme"];
// const groceryList = groceries.map((item) => console.log(`<li>${item}</li>`));

// const values = [1, 2, 3, 4, 5];
// const cubes = values.map((val) => val ** 3); // val ^3
// console.log(cubes);

// const values = [1, 2, 3, 4, 5];
// const evens = numbers.filter((val) => val % 2 === 0);

// same as before:
// var newNum = [];
// for (let i = 0; i < values.length; i++) {
//   if (value % 2 === 0) {
//     newNum.push(values[i]);
//   }
//   return newNum;
// }

const groceries = ["pearl onions", "cremini mushrooms", "thyme"];
const oFoods = groceries.filter((item) => item.includes("o"));
console.log(oFoods);

const values = [1, 2, 3, 4, 5];
const oddCubes = values.filter((val) => val % 2 !== 0).map((val) => val ** 3);
console.log(oddCubes);

// Object master
const pokémon = Object.freeze([
  { id: 1, name: "Bulbasaur", types: ["poison", "grass"] },
  { id: 5, name: "Charmeleon", types: ["fire"] },
  { id: 9, name: "Blastoise", types: ["water"] },
  { id: 12, name: "Butterfree", types: ["bug", "flying"] },
  { id: 16, name: "Pidgey", types: ["normal", "flying"] },
  { id: 23, name: "Ekans", types: ["poison"] },
  { id: 24, name: "Arbok", types: ["poison"] },
  { id: 25, name: "Pikachu", types: ["electric"] },
  { id: 37, name: "Vulpix", types: ["fire"] },
  { id: 52, name: "Meowth", types: ["normal"] },
  { id: 63, name: "Abra", types: ["psychic"] },
  { id: 67, name: "Machamp", types: ["fighting"] },
  { id: 72, name: "Tentacool", types: ["water", "poison"] },
  { id: 74, name: "Geodude", types: ["rock", "ground"] },
  { id: 87, name: "Dewgong", types: ["water", "ice"] },
  { id: 98, name: "Krabby", types: ["water"] },
  { id: 115, name: "Kangaskhan", types: ["normal"] },
  { id: 122, name: "Mr. Mime", types: ["psychic"] },
  { id: 133, name: "Eevee", types: ["normal"] },
  { id: 144, name: "Articuno", types: ["ice", "flying"] },
  { id: 145, name: "Zapdos", types: ["electric", "flying"] },
  { id: 146, name: "Moltres", types: ["fire", "flying"] },
  { id: 148, name: "Dragonair", types: ["dragon"] },
]);

// [x] an array of pokémon objects where the id is evenly divisible by 3
const idDiv3 = pokémon.filter((nintendo) => nintendo.id % 3 === 0);
console.log(idDiv3);
// [x] an array of pokémon objects that are "fire" type
const fireTypes = pokémon.filter((types) => types.types.includes("fire"));
console.log(fireTypes);

// arrays
// we use arrays to hold more than one value in the same variable
// can use any type
var newArray = [10, "string", false, [3, 2, 1], {}];
// how to access the values? -> by index
// newArray[0] => 10
console.log(newArray[0]);
newArray[0] = 20;
console.log(newArray[0]);
console.log(newArray);
// newArray[1] => "string"
// how to access nested array?
// use [][]!
newArray[3][0]; // will reach the nested array
// objects?
// very similar to array but instead of index, we use:
// key, values
var object = {
  example: "value",
};
// how to get example?
console.log(object.example);
object.example = "tree";
console.log(object.example);
console.log(object["example"]);

// WHY DO WE WANT TO USE OBJECT?
// sometimes we have different properties for the same item
var cup = {
  height: "6cm",
  weight: "1kg",
  color: "yellow",
};
// LETS TALK ABOUT KABSA
// rice with meat sauce
// can be spicy
var riceType = ["long rice", "short rice", "basmatic rice"];
var meat = ["camel", "sheep", "chicken"];
var spices = ["shata", "cardamom", "black lemon"];
var vegetables = ["onion", "tomato", "potato", "carrot", "garlic"];

// make another order for Aldanah
var riceType2 = "long rice";
var meat2 = "sheep";
var spices2 = ["shata", "cardamom", "black lemon"];
var vegetables2 = ["onion", "tomato", "carrot", "garlic"];

// make another order Mohammed
var riceType3 = "short rice";
var meat3 = "camel";
var spices3 = ["shata", "cardamom", "black lemon"];
var vegetables3 = ["onion", "tomato", "carrot", "garlic", "truffle"];

function makeKabsa(riceType, meat, spices, vegetables) {
  console.log(`rice type is: ${riceType}`);
  console.log(meat);
  console.log(spices);
  console.log(vegetables);
  console.log("Order is ready!");
}
makeKabsa(riceType2, meat2, spices2, vegetables2);
makeKabsa(riceType3, meat3, spices3, vegetables3);

var aldanah = {
  riceType: "long rice",
  meat: "sheep",
  spices: ["shata", "cardamom", "black lemon"],
  vegetables: ["onion", "tomato", "carrot", "garlic"],
  display: function() {
    console.log(`rice is: ${this.riceType}`);
    console.log(`meat is: ${this.meat}`);
    console.log(`spices is: ${this.spices}`);
    console.log(`vegetables is: ${this.vegetables}`);
  }
};
var mohammed = {
  riceType: "short rice",
  meat: "camel",
  spices: ["shata", "cardamom", "black lemon"],
  vegetables: ["onion", "tomato", "carrot", "garlic", "truffle"],
  display: function() {
    console.log(`rice is: ${this.riceType}`);
    console.log(`meat is: ${this.meat}`);
    console.log(`spices is: ${this.spices}`);
    console.log(`vegetables is: ${this.vegetables}`);
  }
};

function makeBetterKabsa(orderName) {
    console.log(`rice type is: ${orderName.riceType}`);
    orderName.display();
    console.log("Order is ready!");
}
makeBetterKabsa(aldanah);
makeBetterKabsa(mohammed);

// more advanced OOP subject using class
class Kabsa {
  constructor(riceType2, meat, spices, vegetables) {
    this.riceType = riceType2;
    this.meat = meat;
    this.spices = spices;
    this.vegetables = vegetables;
  }
  display() {
    console.log(`rice is: ${this.riceType}`);
    console.log(`meat is: ${this.meat}`);
    console.log(`spices is: ${this.spices}`);
    console.log(`vegetables is: ${this.vegetables}`);
  }
}
// declaring new variable of class Kabsa
var newOrder = new Kabsa("long rice", "chicken", "shata", [
  "potato",
  "garlic",
  "onion",
  "truffle",
]);
newOrder.display()

console.log(console)
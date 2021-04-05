console.log("I am ready!");
// create the flipImage function
var isFlipped = false;
function flipImage(element) {
  console.log(element.src);
  if (isFlipped) {
    element.src = "img/anime1.jpg";
    element.style.borderColor = "pink";
    element.style.borderWidth = "5px";
    // isFlipped = false;
  } else {
    element.src = "img/anime2.jpg";
    element.style.borderColor = "green";
    element.style.borderWidth = "5px";

    // isFlipped = true;
  }
  isFlipped = !isFlipped;
}
// element is an object with key value pairs
// img {
// id: "img1",
// src: "img/anime1.jpg"...
// }
document.addEventListener("DOMContentLoaded", function () {
  console.log("Hey our document is ready to go!");
  document.getElementById("img2").onclick = function () {
    flipImage(this);
  };
  //   document.getElementById("img3").addEventListener("click", flipImage(this));
});

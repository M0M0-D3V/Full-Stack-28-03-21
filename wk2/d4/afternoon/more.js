console.log("We made it!");
// document.addEventListener("DOMContentLoaded", function () {
//   console.log("Hey our document is ready!");
//   for (var i = 1; i <= 150; i++) {
//     fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
//       .then((response) => response.json())
//       .then((data) => {
//         console.log(data);
//         // how do we retrieve just the images for the pokemon from the api?
//         console.log(data.sprites.front_default);
//         var body = document.querySelector("body");
//         //   console.log(body);
//         var pokemon = document.createElement("img");
//         var pokemonImgUrl = data.sprites.front_default;
//         pokemon.src = pokemonImgUrl;
//         body.appendChild(pokemon);
//       })
//       .catch((error) => {
//         console.log(error)
//       // run another code
//     });
//   }
// });
$(document).ready(function () {
  console.log("Dom is ready yo");
  // [x] repeat for 150 pokemon
  for (var i = 1; i <= 150; i++) {
    // [x] append it to id pokedex
    $("#pokedex").append(
      `<img id="${i}" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png">`
    );
  }
  $("img").hover(function () {
    // [x] get id
    var imgId = $(this).attr("id");
    // [x] what is url
    var url = "https://pokeapi.co/api/v2/pokemon";
    // [x] get pokemon picture
    $.get(`${url}/${imgId}`, function (pokemon) {
      var pokemonInfo = "";
      pokemonInfo += `<h2>${pokemon.name}</h2>`;
      $("#display").html(pokemonInfo);
    });
  });
});

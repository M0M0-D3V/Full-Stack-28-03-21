console.log("We made it!");
document.addEventListener("DOMContentLoaded", function () {
  console.log("Hey our document is ready!");
  for (var i = 1; i <= 150; i++) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        // how do we retrieve just the images for the pokemon from the api?
        console.log(data.sprites.front_default);
        var body = document.querySelector("body");
        //   console.log(body);
        var pokemon = document.createElement("img");
        var pokemonImgUrl = data.sprites.front_default;
        pokemon.src = pokemonImgUrl;
        body.appendChild(pokemon);
      })
      .catch((error) => {
        console.log(error)
      // run another code
    });
  }
});

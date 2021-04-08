console.log("script is connected");
$(document).ready(function () {
  console.log("document is ready yo!");
  // [x] how to fetch in jquery -> use $.get
  //  [x] put through loop to get 10
  for (var i = 1; i <= 150; i++) {
    //   var pokemonSrc = ""
    $("#pokedex").append(
      `<img id="${i}" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png">`
    );
  }
  //   [x] hover over image
  $("img").hover(function () {
    var pokemonId = $(this).attr("id");
    console.log(pokemonId);
    //   [x] display pokemon info
    //   the get method will make a get request through HTTP and it is async and will come back when each is ready
    $.get(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`, function (pokemon) {
      console.log(pokemon);
      var pokemonStr = "";
      pokemonStr += `<h1>${pokemon.name}<h1>`;
      pokemonStr += `<h4>Height: ${pokemon.height}</h4>`;
      pokemonStr += `<h4>Weight: ${pokemon.weight}</h4>`;
      pokemonStr += `<h4>Image: <img src="${pokemon.sprites.front_default}"></h4>`;
      pokemonStr += `<h4>Types</h4>`;
      for (var i = 0; i < pokemon.types.length; i++) {
        pokemonStr += `<p>${pokemon.types[i].type.name}</p>`;
      }
      $("#display").html(pokemonStr);
    });
  });

  //   reminder to write all jquery above this ending bracket
});

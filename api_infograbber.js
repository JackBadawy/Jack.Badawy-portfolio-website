const apiMainEl = document.getElementById("api-main-el");
let mainPara = document.getElementById("main-para"); //detlete if not used
let pokeApi = "https://pokeapi.co/api/v2/pokemon/"; //eventually we're going to plus equals the specific pokemon we want
let pokeSpeciesUrl;
let pokeData;
let pokeSpeciesData;
apiInitialize(); //function needs to be triggered above these element grabbers
let searchBtn = document.getElementById("search-btn");
let searchBar = document.getElementById("search-bar");
let searchContainer = document.getElementById("search-container");
let infoGenerated = false;

function apiInitialize() {
  // this funciton is going to add the search bar, button and other related elements to clean up the top a bit
  //const searchForm = document.createElement("form");
  const searchBar = document.createElement("input");
  const searchBtn = document.createElement("button");
  const searchContainer = document.createElement("div");
  searchBar.type = "text";
  searchBar.placeholder = "Search a Pokemon!";
  searchBar.id = "search-bar";
  searchBtn.textContent = "Search";
  searchBtn.id = "search-btn";
  searchContainer.id = "search-container";

  //apiMainEl.insertBefore(searchForm, apiMainEl.lastChild);
  apiMainEl.insertBefore(searchContainer, apiMainEl.lastChild);
  searchContainer.insertBefore(searchBtn, searchContainer.lastChild);
  searchContainer.insertBefore(searchBar, searchContainer.lastChild);
}

searchBtn.addEventListener("click", function () {
  pokeApi = "https://pokeapi.co/api/v2/pokemon/" + searchBar.value;

  getData();
});

async function getData() {
  const response = await fetch(pokeApi);
  pokeData = await response.json();
  console.log(pokeData.species.name); //successfully returns ditto comment out later
  pokeSpeciesUrl = pokeData.species.url;
  //getMoreData();
  const responseTwo = await fetch(pokeSpeciesUrl);
  pokeSpeciesData = await responseTwo.json();
  displayInfo();
}

async function getMoreData() {
  //delete
  /* const response = await fetch(pokeSpeciesUrl);
  pokeSpeciesData = await response.json(); */
}

function displayInfo() {
  if (infoGenerated === true) {
    document.getElementById("master-div").remove();
  }
  infoGenerated = true;
  const masterDiv = document.createElement("div");
  const infoDiv = document.createElement("div"); //make another div container so the image can be next to the general info
  const nameParagraph = document.createElement("p");
  let evolvesFrom = false;

  masterDiv.id = "master-div";
  infoDiv.id = "info-div";
  nameParagraph.id = "name-paragraph";

  nameParagraph.innerHTML = "<b>Name: </b>" + pokeData.species.name;
  apiMainEl.insertBefore(masterDiv, apiMainEl.lastChild);
  masterDiv.insertBefore(infoDiv, masterDiv.lastChild);
  infoDiv.insertBefore(nameParagraph, infoDiv.lastChild);

  if (pokeSpeciesData.evolves_from_species) {
    const evolvesFromParagraph = document.createElement("p");
    evolvesFromParagraph.id = "evolves-from-paragraph";
    evolvesFromParagraph.innerHTML =
      "<b>Evolves from:</b> " + pokeSpeciesData.evolves_from_species.name;

    infoDiv.lastChild.after(evolvesFromParagraph); //change apimain el to container maybe?
  }

  const pokedexNumberParagraph = document.createElement("p");
  pokedexNumberParagraph.id = "pokedex-number-paragraph";
  pokedexNumberParagraph.innerHTML =
    "<b>Pokedex Entry: </b>" + pokeSpeciesData.order;

  infoDiv.lastChild.after(pokedexNumberParagraph);

  const pokeDescription = document.createElement("p");
  pokeDescription.id = "poke-description";
  pokeDescription.innerHTML =
    "<b>Description: </b>" + pokeSpeciesData.flavor_text_entries[0].flavor_text; //looks like an object change to .0
  infoDiv.lastChild.after(pokeDescription);

  const pokeImage = document.createElement("img");
  pokeImage.id = "poke-image";
  pokeImage.src = pokeData.sprites.front_default; // check that we can write .src
  pokeImage.alt = searchBar.value;
  masterDiv.lastChild.after(pokeImage);
}

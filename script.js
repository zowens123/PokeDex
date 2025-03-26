"use strict";

const pokeNum = 150;
let poke = {};

const fetchPokemon = async () => {
	for (let i = 1; i <= pokeNum; i++) {
		await getPokemon(i);
	}
};

const getPokemon = async (id) => {
	const url = `https://pokeapi.co/api/v2/pokemon/${id}/`;
	const r = await fetch(url);
	poke = await r.json();
	createPokeList(poke);
};

fetchPokemon();

const pokelist = document.getElementById("pokeList");

function createPokeList(pokemon) {
	const name = pokemon.name[0].toUpperCase() + pokemon.name.slice(1);
	const pokeElement = document.createElement("div");
	const pokeInnerHtml = `<ol class='pokeRow' onclick="selectPokemon(${pokemon.id});pendo.pageLoad('https://zowens123.github.io/PokeDex/${pokemon.name.slice(1)}')">#${pokemon.id.toString().padStart(3, "0")}: ${name}`;

	pokeElement.innerHTML = pokeInnerHtml;

	pokelist.appendChild(pokeElement);
}

const selectPokemon = async (id) => {
	const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
	const res = await fetch(url);
	const pokeman = await res.json();
	displayPokemanPopup(pokeman);
};

const displayPokemanPopup = function (pokemon) {
	// console.log(pokeman);
	const type = pokemon.types.map((type) => type.type.name).join(", ");
	const htmlString = `
        <div class="popup">
            <button id="closeBtn" onclick="closePopup()">Back</button>
            <div class="card">
                <img class="card-image" src="${pokemon.sprites.other["official-artwork"]["front_default"]}"/>
                <h2 class="card-title">${pokemon.name}</h2>
                <p><small>Type: ${type} | Height:</small> ${pokemon.height} | Weight: ${pokemon.weight}</p>
            </div>
        </div>
    `;
	pokeList.innerHTML = htmlString + pokeList.innerHTML;
};

const closePopup = () => {
	const popup = document.querySelector(".popup");
	popup.parentElement.removeChild(popup);
};

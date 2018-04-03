console.log("connected")

function renderPage(trainer1, trainer2) {
	console.log("123");
	renderIcons(trainer1);
	renderIcons(trainer2);
	

}

function renderIcons(trainer) {

	for(i=0; i<trainer.pokemonArray.length; i++) {
		let thisPokemon = trainer.pokemonArray[i]
		let $pokemonLinkTag = $('<a id="pokemon-' + trainer.myPokemon[thisPokemon].name + '" class="btn-floating btn-large waves-effect waves-light pokemon-link"><img id="pokemon-icon-' + trainer.myPokemon[thisPokemon].name + '" src="' + trainer.myPokemon[thisPokemon].frontImg + '">"</a>');
		let $pokemonIconTag = $('<div class="col s12 m4 center-align pokemon-icon"/>').append($pokemonLinkTag);
		$(".pokemon-icons").append($pokemonIconTag);

	}
	

}
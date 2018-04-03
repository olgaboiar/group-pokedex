let olga = new Trainer()
olga.name = "olga"
olga.pokemonArray = [
    "vileplume",
    "golem",
    "muk"
]

let david = new Trainer()
david.name = "david"
david.pokemonArray = [
    "electrode",
    "electabuzz",
    "dugtrio"
]


let globalCounter = 0

function initializePokemon(trainer) {
    let localCounter = 0

		trainer.pokemonArray.forEach(function (pokemon) {
			$.ajax({
				url: `https://pokeapi.co/api/v2/pokemon/${pokemon}`,
				success: function (data) {
					trainer.myPokemon[pokemon] = new Pokemon(data)
                    localCounter++
                    globalCounter++
                    
                    if (localCounter === 3) {
                        localStorage.setItem(`${trainer.name}.myPokemon`, JSON.stringify(trainer.myPokemon));
                        console.log(`${trainer.name}.myPokemon`)
                        console.log(trainer.myPokemon)
                    }
                    if(globalCounter === 3){
                        initializePokemon(david)
                    }
                    if(globalCounter === 6){
                        renderPage(olga, david);

                        // end the preloader
                    }
				}
			})
		})
}



function setUpPokemon(){
    if (localStorage.getItem(`olga.myPokemon`) && localStorage.getItem(`david.myPokemon`)) {
        console.log("local")
        olga.myPokemon = JSON.parse(localStorage.getItem(`olga.myPokemon`))
        david.myPokemon = JSON.parse(localStorage.getItem(`david.myPokemon`))
        console.log(olga)
        
        renderPage(olga, david);
        //end the preloader
    } else {
        console.log("no local")
        initializePokemon(olga)
    }
}

setUpPokemon()

function renderPokemon(){
    console.log("tried to render pokemon")
}
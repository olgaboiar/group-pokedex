let olga = new Trainer()
olga.name = "olga"
olgaPokemon = [
    "vileplume",
    "golem",
    "muk"
]

let david = new Trainer()
david.name = "david"
davidPokemon = [
    "electrode",
    "electabuzz",
    "dugtrio"
]


let globalCounter = 0

function initializePokemon(trainer, pokemonArray) {
    let counter = 0

		pokemonArray.forEach(function (pokemon) {
			$.ajax({
				url: `https://pokeapi.co/api/v2/pokemon/${pokemon}`,
				success: function (data) {
					trainer.myPokemon[pokemon] = new Pokemon(data)
                    counter++
                  
					if (counter === 3) {
                        localStorage.setItem(`${trainer.name}.myPokemon`, JSON.stringify(trainer.myPokemon));
                        console.log(`${trainer.name}.myPokemon`)
                        console.log(trainer.myPokemon)
                    }
                     if(globalCounter === 6){
                        renderPokemon(olga)
                        renderPokemon(david)

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
        renderPokemon(olga)
        renderPokemon(david)
        //end the preloader
    } else {
        console.log("no local")
        initializePokemon(david, davidPokemon)
        initializePokemon(olga, olgaPokemon)
    }
}

setUpPokemon()

function renderPokemon(){
    console.log("tried to render pokemon")
}
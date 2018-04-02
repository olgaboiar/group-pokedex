class Trainer {
	constructor() {
		this.myPokemon = {}
		this.name = ""
		this.pokemonArray = []
	}
}

class Pokemon {
	constructor(data) {
		this.data = data
		this.name = data.name
		this.frontImg = data.sprites.front_shiny
		this.backImg = data.sprites.back_shiny
		this.hp = data.stats[5].base_stat
		this.attack = data.stats[4].base_stat
		this.defense = data.stats[3].base_stat
		this.abilities = data.abilities.reduce(function (abilityArr, ability) {
			let thisAbility = ability.ability.name
			abilityArr.push(thisAbility)
			return abilityArr
		}, [])
	}
}
class Trainer {
	constructor() {
		this.myPokemon = {}
		this.name = "" 
	}
}

class Pokemon {
	constructor(data) {
		this.data = data
		this.name = data.name
		this.imgLink = data.sprites.front_shiny
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
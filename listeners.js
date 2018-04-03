console.log("listeners connected")

$(".pokemon-link").on("click", function(e){
    let parentClass = $(this).parent().parent().attr('class')
    let thisPokemon = $(this).attr('id')
    let area
    let trainer
    let animationDirectionClass

    console.log(thisPokemon)
    

    if(/olga/.test(parentClass)){
        area = "1"
        trainer = olga
        animationDirectionClass = 'moveRight'
    } else{
        area = "2"
        trainer = david
        animationDirectionClass = 'moveLeft'
    }

    $(`#pokemon${area}`).html(`<div class=${animationDirectionClass}><div class="yAxis"><img id="pokemonImg${area}" src="${trainer.myPokemon[thisPokemon].frontImg}" alt="pokemon${area}"></div></div>`)

    $(`#pokemon-info-${area}`).html(`<div><span class="statHeading">hp</span>: ${trainer.myPokemon[thisPokemon].hp}</div><div><span class="statHeading">attack</span>: ${trainer.myPokemon[thisPokemon].attack}</div><div><span class="statHeading">defense</span>: ${trainer.myPokemon[thisPokemon].defense}</div><div><span class="statHeading">abilities</span>: <span id="abilities-${area}"></span></div>`)

    trainer.myPokemon[thisPokemon].abilities.forEach(function(ability) {$(`#abilities-${area}`).append(ability + "    &nbsp;&nbsp;&nbsp;&nbsp;")})

    $(`#pokemon-info-${area}`).show( "explode", {pieces: 16}, 6000 );
    //$(`#pokemon-info-${area}`).toggle( "explode", {pieces: 16}, 750);


})
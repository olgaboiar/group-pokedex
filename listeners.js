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
     

})
console.log("listeners connected")

$(".pokemon-link").on("click", function(e){
    let parentClass = $(this).parent().parent().attr('class')
    let thisPokemon = $(this).attr('id')
    let area
    let trainer
    

    if(/olga/.test(parentClass)){
        area = "1"
        trainer = olga
    } else{
        area = "2"
        trainer = david
        console.log(trainer)
    }

    $(`#pokemon${area}`).html(`<img src="${trainer.myPokemon[thisPokemon].frontImg}" alt="pokemon${area}">`)
     

})
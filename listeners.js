

$(".pokemon-link").on("click", function(e){
    let parentClass = $(this).parent().parent().attr('class')
    let area = ""
    let trainer

    if(/olga/.test(parentClass)){
        area = "1"
        trainer = olga
    } else{
        area = "2"
        trainer = david
    }

    $('#gym').remove(`#pokemon${area}`)
    $('#gym').append(`<div id="pokemon${area}"> <img src="${trainer.frontImg}" alt="pokemon${area}"> </div>`)

})
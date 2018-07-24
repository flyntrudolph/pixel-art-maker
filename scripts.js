
function clickColor(event){
$(event.target).css("background-color", currentColor)
}

$(".pixel").click(clickColor);


$(function(){

for (let i = 0; i < 2500; i++){
    $('.canvas').append("<div class='pixel'></div>")
}


function erase(event){
$('.pixel').css('background-color', 'white')
}

$('.flyntErase').click(erase)



let currentColor;

function changeColor(event){
currentColor = $(event.target).css("background-color")
$(".flyntColor").css("background-color", currentColor)
}


$(".color").click(changeColor)





$('.pixel').mousemove(function(e){
if(e.buttons==1) {
 $(event.target).css("background-color", currentColor)
}

});




});

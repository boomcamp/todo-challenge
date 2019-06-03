$(document).ready(function(){
    $( ".btn" ).click(function() {
        alert( "Handler for .click() called." ); 
            $(".list").append('<textarea class="txtarea" rows="1" cols="30"></textarea>');
            $('.txtarea').keypress(function(event){
            var keycode = (event.keyCode ? event.keyCode : event.which);
            if(keycode == '13'){
                let message = $(this).val();
                $(".list").append(`<div class="list-item"> ${message}</div>`);
                $(".txtarea").remove();
            }
        });     
    });     
});

$( document).on( "click", ".list-item", function( event ) {
    event.preventDefault();
    event.stopPropagation();
    let message  =  $(this).text();
    console.log('look' + message);
    $(".list-2").append(`<div class="list-item-2"> ${message}</div>`);
    $(this).fadeOut("normal", function() {
        $(this).remove();
    });
});
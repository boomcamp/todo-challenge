$(document).ready(function(){
    $( ".btn" ).click(function() {
        alert( "Handler for .click() called." ); 
            $(".list").append('<textarea class="txtarea" rows="1" cols="30"></textarea>');
            $('.txtarea').keypress(function(event){
            var keycode = (event.keyCode ? event.keyCode : event.which);
            if(keycode == '13'){
                let message = $(this).val();
                $(".list").append(`<div class="list-item a href="#"> ${message}</div>`);
                $(".txtarea").remove();
            }
        });     
    });

    // $(".list-item").click(function(){
    //     $(this).fadeOut("normal", function() {
    //         $(this).remove();
    //     });
    //     });

     
});

$( document).on( "click", ".list-item", function( event ) {
    event.preventDefault();
    let message = $(this).val();
    $(".list-2").append(`<div class="list-item-2 a href="#"> ${message}</div>`);
    $(this).fadeOut("normal", function() {
        $(this).remove();
    });
});
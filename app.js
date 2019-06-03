$(document).ready(function(){
    $( ".btn" ).click(function() {
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

$( document).on( "click", ".list-item-2", function( event ) {
    event.preventDefault();
    event.stopPropagation();
    let message  =  $(this).text();
    console.log('look' + message);
    $(".list-3").append(`<div class="list-item-3"> ${message}</div>`);
    $(this).fadeOut("normal", function() {
        $(this).remove();
    });
});

$( document).on( "click", ".list-item-3", function( event ) {
    event.preventDefault();
    event.stopPropagation();
    let message  =  $(this).text();
    console.log('look' + message);
    $(this).fadeOut("normal", function() {
        $(this).remove();
    });
});
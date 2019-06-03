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

  
 
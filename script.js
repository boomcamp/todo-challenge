$(document).ready(function(){  
    $('.toppart').hide();
    $('label').css('top', '-10px');
    
 
  
   function deleteTodo(){
    $('#delete').on('click', function(){
        $(this).parent().parent().remove();
    })
   }
  deleteTodo()

    $('#textArea').on('focus', function(){
        $('label').css('font-size', '10px');
        $('label').css('top', '15px');
        $(this).addClass('text2');
        $(this).removeClass('text');
        $('.note').css('width', '80%');
        $('.toppart').show();

        
        
    });

    $('#textArea').on('blur', function(){
        if(this.value  == ''){
        $('.toppart').hide();
        $('label').css('top', '-10px');
        $('label').css('font-size', '16px');
        $(this).removeClass('text2');
        $(this).addClass('text');
        $('.note').css('width', '');
        $('#buttodAdd').prop('disabled', true);
      
        }
    });




    let counter = 0;
     

    $('#buttonAdd').on ('click', function(){

        $('.toppart').hide();
        $('label').css('top', '-10px');
        $('label').css('font-size', '16px');
        $('#textArea').removeClass('text2');
        $('#textArea').addClass('text');
        $('.note').css('width', '');

        var task = $('#textArea').val()
        ++counter;

        $('#toDo').prepend(`
        <div class='task' id='${counter}'>
        <p>${task}</p>
         <div class="ikon">
            <i id="moveToProg" class="fa fa-arrow-down"></i>
            <i id="edit" class="fa fa-pencil-alt"></i>
            <i id="delete" class="fa fa-trash"></i>
         </div>
        </div>
        `);

        $('#edit').on('click', function(){
            $('#textArea').val(task);    
            $('#textArea').addClass('text2');
            $('#textArea').removeClass('text');
            $('.note').css('width', '80%');
            $('.toppart').show();
            $('label').html('<i id="edit" class="fa fa-pencil-alt"></i>');
            $('#buttonAdd').html('Save<i id="edit" class="fa fa-pencil-alt">');
            $(this).parent().parent().remove();
        });

        //after edit, return to add
        $('#buttonAdd').on('click', function(){
            $(this).html('Add<i class="far fa-plus-square"></i>');
        });


        $('#textArea').val('');

        //todo delete button
        deleteTodo()

        // todo down button
        $('#moveToProg').on('click', function(){
            $('#inProg').prepend(`
            <div class='task' id='${counter}'>
            <p>${task}</p>
                <div class="ikon">
                    <i id="moveToDone" class="fa fa-arrow-down"></i>
                    <i id="moveToDo" class="fa fa-arrow-up"></i>
                    <i id="edit" class="fa fa-pencil-alt"></i>
                    <i id="delete2" class="fa fa-trash"></i>
                </div>
            </div>
            `);
            $(this).parent().parent().remove();
            // prog move up button
            $('#moveToDo').on('click', function(){
                $('#toDo').prepend(`
                <div class='task' id='${counter}'>
                <p>${task}</p>
                    <div class="ikon">
                        <i id="moveToProg" class="fa fa-arrow-down"></i>
                        <i id="edit" class="fa fa-pencil-alt"></i>
                        <i id="delete2" class="fa fa-trash"></i>
                    </div>
                </div>
                `);
                $(this).parent().parent().remove();
                // try lang 
                // dapat idelete

            });
            // prog move delete button
            $('#delete2').on('click', function(){
                $(this).parent().parent().remove();
            });
            // prog move down button
            $('#moveToDone').on('click', function(){
                $(this).parent().parent().remove();
                $('#doNe').prepend(`
                <div class='task' id='${counter}'>
                <p>${task}</p>
                    <div class="ikon">
                        <i id="moveToDone" class="fa fa-arrow-up"></i>
                        <i id="edit" class="fa fa-pencil-alt"></i>
                        <i id="delete3" class="fa fa-trash"></i>
                    </div>
                </div>
                `);
                // done delete button
                $('#delete3').on('click', function(){
                    $(this).parent().parent().remove();
                });
            });

            
        });
    });
});
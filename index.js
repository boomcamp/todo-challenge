$(document).ready(() => {
    
    

    $('.taskTextfield').hide();

    $('.add-task').on('click', () =>{
        $('.add-task').hide(); 
        $('.taskTextfield').fadeIn('slow');
    });

    $('.cancelAddTask').on('click', (event) =>{
        event.preventDefault();
        $('.add-task').show();
        $('.taskTextfield').hide();
    });

    var counter = 1;

    $('#addInputTask').on('click', () =>{
        
        var newTaskValue = $('#inputTask').val();
        var newTask = 
       ` <div class="task-content-inner">

            &#8226;<span class="tci-text">${newTaskValue}</span>
            <button class ="btn-edit" id="edit1"><i class="fas fa-edit"></i></button>
            <div class="tci-btn">
            <button class ="btn-start"  id="start-todo1"><i class="fas fa-play"></i></button>
            <button class ="btn-delete" id="delete-todo1"><i class="fas fa-trash-alt"></i></button>
            <button class ="btn-back" id="back-todo1"><i class="fas fa-undo"></i></button>
            
            <div>
        </div>`
        ;
           
        
        $(".task-content").append(newTask);
        $('.taskTextfield').hide();
        $('.add-task').show();
        $('#inputTask').val('')
        

        // 1
        
        $(`#back-todo1`).hide();
        $(`#Done1`).hide();

        $('.task-content').on('click', `#delete-todo1`,function(){
            $(this).parent().parent().remove();
        });

        $('.task-content').on('click', `#start-todo1`,function(){
            $('.progress-content').append($(this).parent().parent());       
            $(`#back-todo1`).show();
        });
        $('.progress-content').on('click', `#delete-todo1`,function(){
            $(this).parent().parent().remove();       
        });
        $('.progress-content').on('click', `#back-todo1` ,function(){
            $('.task-content').append($(this).parent().parent());
            $(`#back-todo1`).hide();
        })
        $('.progress-content').on('click', `#start-todo1`,function(){
            $('.done-content').append($(this).parent().parent());       
            $(`#back-todo1`).show();
        });
        $('.done-content').on('click', `#delete-todo1`,function(){
            $(this).parent().parent().remove();
        });
        $('.done-content').on('click', `#back-todo1` ,function(){
            $('.progress-content').append($(this).parent().parent());
        })


        $('.task-content').on('click', '#edit1', function(){
            $(this).prev().attr('contenteditable', 'true');
            $(this).prev().addClass('edit');
            $(this).prev().focus();
         });

         $('.task-content').on('focusout', 'span', function(){
            $(this).removeAttr('contenteditable');
            $(this).removeClass('edit');
        })

        $('.progress-content').on('click', '#edit1', function(){
            $(this).prev().attr('contenteditable', 'true');
            $(this).prev().addClass('edit');
            $(this).prev().focus();
         });

         $('.progress-content').on('focusout', 'span', function(){
            $(this).removeAttr('contenteditable');
            $(this).removeClass('edit');
        })
        
        $('.done-content').on('click', '#edit1', function(){
            $(this).prev().attr('contenteditable', 'true');
            $(this).prev().addClass('edit');
            $(this).prev().focus();
         });

         $('.done-content').on('focusout', 'span', function(){
            $(this).removeAttr('contenteditable');
            $(this).removeClass('edit');
        })

        
    });


    

    
    

    


})
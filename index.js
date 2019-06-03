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
            ${newTaskValue} 
            <button class ="btn-start"  id="start-todo${counter}">Move</button>
            <button class ="btn-delete" id="delete-todo${counter}">Delete</button>
            <button class ="btn-back" id="back-todo${counter}">Back</button>
            <button class ="btn-done" id="Done${counter}">Mark as Done</button>
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
            $(this).parent().remove();
        });

        $('.task-content').on('click', `#start-todo1`,function(){
            $('.progress-content').append($(this).parent());       
            $(`#back-todo1`).show();
        });
        $('.progress-content').on('click', `#delete-todo1`,function(){
            $(this).parent().remove();       
        });
        $('.progress-content').on('click', `#back-todo1` ,function(){
            $('.task-content').append($(this).parent());
        })
        $('.progress-content').on('click', `#start-todo1`,function(){
            $('.done-content').append($(this).parent());       
            $(`#back-todo1`).show();
        });
        $('.done-content').on('click', `#delete-todo1`,function(){
            $(this).parent().remove();
        });
        $('.done-content').on('click', `#back-todo1` ,function(){
            $('.progress-content').append($(this).parent());
        })



        // 2
        
        // $(`#back-todo2`).hide();
        // $(`#Done2`).hide();

        // $('.task-content').on('click', `#delete-todo2`,function(){
        //     $(this).parent().remove();
        // });

        // $('.task-content').on('click', `#start-todo2`,function(){
        //     $('.progress-content').append($(this).parent());       
        //     $(`#back-todo2`).show();
        // });
        // $('.progress-content').on('click', `#delete-todo2`,function(){
        //     $(this).parent().remove();       
        // });

        // // 3
        
        // $(`#back-todo3`).hide();
        // $(`#Done3`).hide();

        // $('.task-content').on('click', `#delete-todo3`,function(){
        //     $(this).parent().remove();
        // });

        // $('.task-content').on('click', `#start-todo3`,function(){
        //     $('.progress-content').append($(this).parent());       
        //     $(`#back-todo3`).show();
        // });
        // $('.progress-content').on('click', `#delete-todo3`,function(){
        //     $(this).parent().remove();       
        // });

        // // 4
        
        // $(`#back-todo4`).hide();
        // $(`#Done4`).hide();

        // $('.task-content').on('click', `#delete-todo4`,function(){
        //     $(this).parent().remove();
        // });

        // $('.task-content').on('click', `#start-todo4`,function(){
        //     $('.progress-content').append($(this).parent());       
        //     $(`#back-todo4`).show();
        // });
        // $('.progress-content').on('click', `#delete-todo4`,function(){
        //     $(this).parent().remove();       
        // });

        // // 5
        
        // $(`#back-todo5`).hide();
        // $(`#Done5`).hide();

        // $('.task-content').on('click', `#delete-todo5`,function(){
        //     $(this).parent().remove();
        // });

        // $('.task-content').on('click', `#start-todo5`,function(){
        //     $('.progress-content').append($(this).parent());       
        //     $(`#back-todo5`).show();
        // });
        // $('.progress-content').on('click', `#delete-todo5`,function(){
        //     $(this).parent().remove();       
        // });
        


        

        //counter = counter +1;

    });


    

    
    

    


})
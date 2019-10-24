$(document).ready(function(){
    let id=0, edit_id=0;

    function hideEdit(todo){
        var todo = todo.parentNode;
        $(todo).children(".todo_task").fadeIn();
        $(todo).children(".edit_todo, .edit_todo_btn, .cancel_edit").fadeOut();
        $(todo).children(".actions, .todo_btn, .move_todo, .move_done, .move_inprogress").show();
    }

    /* ------------------------------- CREATE LIST ------------------------------- */  
    $(".addlist_btn, .cancel").on('click', function(){
        $(".create_list").slideToggle();
        $(".text_todo").css("border", "1px solid grey")
        $(".text_todo").val('');
    });
    
    $(".submit_todo").on('click', function(){
        if($(".text_todo").val() == ""){
            $(".text_todo").css("border", "1px solid red")
        }
        else{
            $(".todo_class").append(`
            <div class="todo_list">
                <h3 class="todo_task todo-${id}" data-id=${id}>${$(".text_todo").val()}</h3>
        
                <div class="actions">
                    <ion-icon name="create" class="edit"></ion-icon>
                    <ion-icon name="trash" class="delete"></ion-icon>
                </div>

                <input type="text" class="edit_todo" placeholder="Edit Todo List..." value=${$(".text_todo").val()}>
                <button class="edit_todo_btn">Submit</button>
                <button class="cancel_edit">Cancel</button>

                <li class="todo_btn"><ion-icon name="trending-down"></ion-icon> Move to In-Progress</li>                 
            </div>`);
            // if($(".todo_class > .todo_list").length != 0)
            //     $(".empty_todo").remove();
            $(".create_list").slideToggle()
            $(".text_todo").val('');
            $(".text_todo").css("border", "1px solid grey")
            id += 1;
        }
    });
    
    /* ------------------------------- EDIT/DELETE LIST ------------------------------- */  
    $(document).on('click', '.edit', function(){
        var todo = this.parentNode.parentNode;

        edit_id = $(todo).children(".todo_task").data("id");

        $(todo).children(".todo_task").fadeOut();
        setTimeout(function(){
            $(todo).children(".edit_todo, .edit_todo_btn, .cancel_edit").fadeIn();
            $(todo).children(".actions, .todo_btn, .move_todo, .move_done, .move_inprogress").hide();
        }, 200)
    });

    $(document).on('click', '.edit_todo_btn', function(){
        hideEdit(this);
        // var id = $(this.parentNode).children(".todo_task").data('id');
        // console.log($(this).siblings(`.todo-${id}`));
        // alert(edit_id)

        $(this).siblings(`.todo-${edit_id}`).text($(".edit_todo").val());
        // alert("Successfully Updated");
    });

    $(document).on('click', '.cancel_edit', function(){
        hideEdit(this);
    });

    $(document).on('click', '.delete', function(){
        if(confirm("Are you sure you want to delete this Task?")){
            var todo = this.parentNode.parentNode;
            todo.remove();
        }
        // if($(".todo_class").children().length == 1){
        //     $(".todo_class").append('<h3 class="empty_todo">Todo List is Empty...</h3>')
        // }
    });
    

    /* ------------------------------- UPDATE STATUS ------------------------------- */  
    $(document).on('click', '.todo_btn', function(){
        var todo = this.parentNode;
        $(todo).appendTo(".progress_class");                
        $(todo).children(".todo_btn").remove();
        $(todo).children(".actions").after(
        `<i class="move_todo"><ion-icon name="trending-up"></ion-icon> Todo </i>
        <i class="move_done"><ion-icon name="checkmark"></ion-icon>Done <i>`)

        // if($(".todo_class > .todo_progress").length != 0)
        //     $(".empty_progress").remove();
    }); 

    $(document).on('click', '.move_todo', function(){
        var todo = this.parentNode;
        $(todo).appendTo(".todo_class");
        $(todo).children(".move_todo, .move_done").remove()
        $(todo).children(".actions").after(`<li class="todo_btn"><ion-icon name="trending-down"></ion-icon> Move to In-Progress</li>`);
    });

    $(document).on('click', '.move_inprogress', function(){
        var todo = this.parentNode;
        $(todo).appendTo(".progress_class");  
        $(todo).children(".move_inprogress").remove();
        $(todo).children(".todo_task").css("text-decoration", "none");
        $(todo).children(".actions").after(
        `<i class="move_todo"><ion-icon name="trending-up"></ion-icon> Todo </i> 
         <i class="move_done"><ion-icon name="checkmark"></ion-icon>Done <i>`);
    }); 

    $(document).on('click', '.move_done', function(){
        var todo = this.parentNode;
        $(todo).appendTo(".done_class");
        $(todo).children(".todo_task").css("text-decoration", "line-through");
        $(todo).children(".move_todo, .move_done").remove()
        $(todo).children(".actions").after(`<i class="move_inprogress"><ion-icon name="trending-up"></ion-icon> In-Progress </i>`)
    });
});
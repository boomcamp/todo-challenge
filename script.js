$(document).ready(function(){
    let id=0;

    function hideEdit(edit){
        if($(edit).text() == ""){
            $(edit).css("border", "1px solid red");
        }
        else
            $(edit).attr("contenteditable", false).addClass("todo_task").removeClass("edit_task").css("border", "none");
    }

    function hideCreate(){
        $(".create_list").slideToggle();
        $(".text_todo").css("border", "1px solid grey");
        $(".text_todo").val('').focus();
    }

    /* ------------------------------- CREATE LIST ------------------------------- */ 
    $(".addlist_btn, .cancel").on('click', function(){
        hideCreate();
    });
    
    $(".submit_todo").on('click',function(){
        if($(".text_todo").val() == ""){
            $(".text_todo").css("border", "1px solid red")
        }
        else{
            $(".todo_class").append(`
            <div class="todo_list">
                <h3 class="todo_task" data-id=${id}>${$(".text_todo").val()}</h3>

                <div class="actions">
                    <ion-icon name="create" class="edit"></ion-icon>
                    <ion-icon name="trash" class="delete"></ion-icon>
                </div>

                <li class="todo_btn"><ion-icon name="trending-down"></ion-icon> In-Progress</li>                 
            </div>`);

            hideCreate()
            id += 1;
        }
    });
    
    /* ------------------------------- EDIT/DELETE LIST ------------------------------- */  
    $(document).on('click', '.edit', function(){
        var todo = this.parentNode;
        $(todo).siblings(".todo_task").attr("contenteditable", true).addClass("edit_task").focus().removeClass("todo_task");
    });

    $(document).on("keypress", ".edit_task, .todo_task",function(e) {
        if(e.keyCode == 13){
            e.preventDefault();
            hideEdit(this, e);
        }
    });

    $(document).on("blur", ".edit_task" ,function(){
        hideEdit(this);
    });

    $(document).on('mousedown', '.delete', function(){
        var todo = this.parentNode.parentNode;
        if(confirm(`Are you sure you want to delete ${$(todo).children(".todo_task").text()} Task?`)){
            todo.remove();
        }
    });

    /* ------------------------------- UPDATE STATUS ------------------------------- */  
    $(document).on('click', '.todo_btn', function(){
        var todo = this.parentNode;
        $(todo).appendTo(".progress_class");                
        $(this).remove();
        $(todo).children(".actions").after(
        `<i class="move_todo"><ion-icon name="trending-up"></ion-icon> Todo </i>
        <i class="move_done"><ion-icon name="checkmark"></ion-icon>Done <i>`)
    }); 

    $(document).on('click', '.move_todo', function(){
        var todo = this.parentNode;
        $(todo).appendTo(".todo_class");
        $(todo).children(".move_todo, .move_done").remove()
        $(todo).children(".actions").after(`<li class="todo_btn"><ion-icon name="trending-down"></ion-icon> In-Progress</li>`);
    }); 

    $(document).on('click', '.move_inprogress', function(){
        var todo = this.parentNode;
        $(todo).appendTo(".progress_class");  
        $(this).remove();
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
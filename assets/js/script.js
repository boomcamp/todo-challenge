$(document).ready(function(){

    const tasks = [];

    function Task(task_id, task,task_status){
        this.task_id = task_id;
        this.task = task;
        this.task_status = "todo";
    }

    function saveTask(task,task_id){
        if(task){
            task = new Task(task_id, task);
            tasks.push(task);
        }
    }
    
    function checkLength(rem){
        if(rem <= 150){
            $(".input-count").text(rem);
            if(rem <= 10){
                $(".input-count").addClass("danger");
            }else{
                $(".input-count").removeClass("danger");
            }
            if(rem === 150){
                $('.btn-add-task').attr("disabled", true);
            }else{
                $('.btn-add-task').attr("disabled", false);
            }
        }
    }

    function hideTaskArea(){
        $('.task-popup').hide(300);
        $('.list').removeClass('adding-task');
        $('.btn-add-task')
            .text("+ Add Task")
            .removeAttr("id")
            .attr("disabled", false);   
    }

    function showTaskArea(){
        $('.task-popup').show(300);
        $('.list').addClass('adding-task');  
        $('.btn-add-task').attr('id', 'save-task').text("Save Task");
    }

    function clearTaskArea(){
        $("#composeTask").val('');
        hideTaskArea();
    }

    //jQuery
    $('.task-popup').hide();

    let counter = 0;
    //add task
    $('.btn-add-task').on('click', function(){
        showTaskArea();
        let rem = 150 - $('#composeTask').val().length;
        checkLength(rem);
        $('#save-task').on('click', function(){
            let task = $('#composeTask').val();
            if(task){
                var newTodoRow =                 
                `<tr id="${counter}">
                    <td class="task">${task}</td>
                    <td class="move-task" "><i class="fa fa-check-circle" title="Done"></i></td>
                    <td class="edit-task"><i class="fa fa-pencil" title="Edit"></i></td>
                    <td class="remove-task"><i class="fa fa-trash" title="Delete Task"></i></td>
                </tr>`;
                $('#todo').append(newTodoRow);
                saveTask(task,counter);
                counter++;
                clearTaskArea();
            }
        })
    });
    //move task to in-progress
    $('#todo').on('click', '.fa-check-circle',function(){
        let thisTaskID = $(this).parent().parent().attr("id");
        let getTask = tasks[thisTaskID].task;
        tasks[thisTaskID].task_status = 'inprogress';
        var newInProgRow = 
        `<tr id="${thisTaskID}">
            <td class="task">${getTask}</td>
            <td class="back-task"><i class="fa fa-arrow-left" title="Undo Task"></i></td>
            <td class="move-task" "><i class="fa fa-check-circle" title="Done"></i></td>
            <td class="edit-task"><i class="fa fa-pencil" title="Edit"></i></td>
        </tr>`;
        $('#inProgress').append(newInProgRow);
        $(this).parent().parent().remove();
    });
    //move task to done
    $('#inProgress').on('click', '.fa-check-circle',function(){
        let thisTaskID = $(this).parent().parent().attr("id");
        let getTask = tasks[thisTaskID].task;
        tasks[thisTaskID].task_status = 'done';
        var newDoneRow = 
        `<tr id="${thisTaskID}">
            <td class="task">${getTask}</td>
            <td class="back-task"><i class="fa fa-arrow-left" title="Undo Task"></i></td>
            <td class="edit-task"><i class="fa fa-pencil" title="Edit"></i></td>
            <td class="remove-task"><i class="fa fa-trash" title="Delete Task"></i></td>
        </tr>`;
        $('#done').append(newDoneRow);
        $(this).parent().parent().remove();
    });
    //go back task to todo
    $('#inProgress').on('click', '.fa-arrow-left',function(){
        let thisTaskID = $(this).parent().parent().attr("id");
        let getTask = tasks[thisTaskID].task;
        tasks[thisTaskID].task_status = 'todo';
        var newTodoRow = 
        `<tr id="${thisTaskID}">
            <td class="task">${getTask}</td>
            <td class="move-task" "><i class="fa fa-check-circle" title="Done"></i></td>
            <td class="edit-task"><i class="fa fa-pencil" title="Edit"></i></td>
            <td class="remove-task"><i class="fa fa-trash" title="Delete Task"></i></td>
        </tr>`;
        $('#todo').append(newTodoRow);
        $(this).parent().parent().remove();
    });
    //go back to in progress
    $('#done').on('click', '.fa-arrow-left',function(){
        let thisTaskID = $(this).parent().parent().attr("id");
        let getTask = tasks[thisTaskID].task;
        tasks[thisTaskID].task_status = 'todo';
        var newInProgRow = 
        `<tr id="${thisTaskID}">
            <td class="task">${getTask}</td>
            <td class="back-task"><i class="fa fa-arrow-left" title="Undo Task"></i></td>
            <td class="move-task" "><i class="fa fa-check-circle" title="Done"></i></td>
            <td class="edit-task"><i class="fa fa-pencil" title="Edit"></i></td>
        </tr>`;
        $('#done').append(newInProgRow);
        $(this).parent().parent().remove();
    });
    //edit
    $('#todo, #inProgress, #done').on('click', '.fa-pencil',function(){
        $(this).parent().siblings(".task").attr("contenteditable", true).focus();
    })
    .on('focusout', '.task', function(){
        let thisTaskID = $(this).parent().attr("id");
        tasks[thisTaskID].task = $('.task').text();
        $(this).removeAttr('contenteditable');
        
    });
    //remove
    $('#todo, #done').on('click', '.fa-trash',function(){
        $(this).parent().parent().remove();
        let thisTaskID = $(this).parent().parent().attr("id");
        tasks.splice(thisTaskID, 1);
    });

    $('#composeTask').on('focus input', function(){
        let rem = 150 - $(this).val().length;
        checkLength(rem);
    });

    $('#composeTask').keypress(function(e){
        if (e.keyCode == 13){
            e.preventDefault();
        }
    });

    $('#composeTask').blur(function(){
        if($('#composeTask').val().length == 0){
            hideTaskArea();
        }
    });

    $(".task-statuses, header").on('click', function(){
        if($('#composeTask').val().length == 0){
            hideTaskArea();
        }
    });
   
});
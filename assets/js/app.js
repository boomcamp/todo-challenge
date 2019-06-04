let taskID = 1;

$(document).ready(function() {

    $('.task-btn').click(function() {
        $('#modal-main').toggle();
        event.preventDefault();
    });

    $('#modal-main span').click(function() {
        $('#modal-main').toggle();
        event.preventDefault();
    });

    $('.sub-btn').click(function() {
        let taskData = $('#info').val();
        $('#modal-main').toggle();
        $('#info').val('');
        event.preventDefault();
        addTask(taskData);
    });
    
});

//Removes the task
function removeT(x) {
    $(`.task${x}`).remove();
}

//Moves the task forward the line
function moveFor(x) {
    let str = $(`.task${x}`).data("pos");
    let task = $(`.task${x}`).text();
    let htm = $(`.task${x}`).detach();
    if(str === "todo") {
        $('.unord-prog').prepend(htm);
        $(`.task${x}`).data("pos","prog");
    } else if(str === "prog") {
        $('.unord-done').prepend(htm);
        $(`.task${x}`).data("pos","done");
    }
}

//Moves the task backward
function moveBack(x) {
    let str = $(`.task${x}`).data("pos");
    let task = $(`.task${x}`).text();
    let htm = $(`.task${x}`).detach();
    if(str === "prog") {
        $('.unord-todo').prepend(htm);
        $(`.task${x}`).data("pos","todo");
    } else if(str === "done") {
        $('.unord-prog').prepend(htm);
        $(`.task${x}`).data("pos","prog");
    }
}

function addTask(task) {
    $('.unord-todo').prepend(`
    <li data-id="${taskID}" data-pos="todo" class="task${taskID}"><p contenteditable=true title="Click to edit text.">${task}</p><span><i class="fa fa-lg fa-trash-o"  onclick="removeT(${taskID});" title="Delete the task"></i><i title="Move it one step back" onclick="moveBack(${taskID})" class="fa fa-lg fa-eraser"></i><i title="Move task forward" onclick="moveFor(${taskID});" class="fa fa-lg fa-check-square-o"></i></span></li>
    `);
    taskID+=1;
}
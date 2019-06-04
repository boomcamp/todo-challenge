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

function removeT(x) {
    $(`.task${x}`).remove();
}

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

function moveBack() {
    let str = $(`.task${x}`).data("pos");
    let task = $(`.task${x}`).text();
    let htm = $(`.task${x}`).detach();
    if(str === "prog") {
        $('.unord-todo').prepend(htm);
    }
}

function addTask(task) {
    $('.unord-todo').prepend(`
    <li data-id="${taskID}" data-pos="todo" class="task${taskID}">${task}<i class="fa fa-lg fa-trash-o"  onclick="removeT(${taskID});" title="Delete the task"></i><i title="Move it one step back" class="fa fa-lg fa-eraser"></i><i title="Move task forward" onclick="moveFor(${taskID});" class="fa fa-lg fa-check-square-o"></i></li>
    `);
    taskID+=1;
}
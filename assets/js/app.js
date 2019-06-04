let task = [];
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

function alRt(x) {
    $(`.task${x}`).remove();
}

function Task(task) {
    this.task = task;
    this.id = 0;
}

function addTask(task) {
    $('.unord').prepend(`
    <li data-id="${taskID}" onclick="alRt(${taskID});" class="task${taskID}">${task} <i class="fa fa-lg fa-"></i></li>
    `);
    taskID+=1;
}
$(document).ready(function() {
    $('.task-btn').click(function() {
        $('#modal-main').toggle();
        event.preventDefault();
    });
    $('#modal-main span').click(function() {
        $('#modal-main').toggle();
        event.preventDefault();
    });
});
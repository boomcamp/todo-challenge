
$( document ).ready(function() {
    var tasks = [];
    
    var x = 1;
    $('#add-btn').on('click', function() {
        var newTask = $('.task-input').val();
        tasks.push(newTask);
        var addTask = `
        <div class="box-item gray">
            <label class="task-name" for="styled-checkbox-1">${newTask}${x}</label>
            <i class="far fa-trash-alt"></i>
            <i class="far fa-edit"></i>
            <i class="far fa-check-circle" id="task${x}"></i>
            <i class="fas fa-angle-double-left"></i>
        </div>
        `
        $('.new-task').append(addTask);
        $('.task-input').val('');
       x++;
    })

    $('.box-list').on('click', '.fa-trash-alt',function(){
        $(this).parent().remove();
    });

    $('.new-task').on('click', '.fa-check-circle',function(){
        $('.progress').append($(this).parent());
        $('.fa-angle-double-left').show();
    })


    $('.progress').on('click', '.fa-check-circle',function(){
        $('.done').append($(this).parent());
        $('.task-name').css('text-decoration', 'line-through')
    })

    $('.progress').on('click', '.fa-angle-double-left',function(){
        $('.new-task').append($(this).parent());
        $('.task-name').css('text-decoration', 'none')
    })

    $('.done').on('click', '.fa-angle-double-left',function(){
        $('.progress').append($(this).parent());
        $('.task-name').css('text-decoration', 'none')
    })

});
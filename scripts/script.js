$(document).ready(function(){
    var tasks = [];
    var i = 1;
    $('#add-btn').on('click', function() {
        var newTask = $('.input-task').val();
        tasks.push(newTask);
        var addTask = `
        <div class="box-item">
            <label class="task-name" for="styled-checkbox-1">${newTask}${i}</label>
            <img class="trash" src="img/trash.png" alt="">
            <img class="prog-img" id="task${i}" src="img/progress.png" alt="">
        </div>
        `
        $('.new-task').append(addTask);
        $('.input-task').val('');
      x++;
    })
    
      $('.box-list').on('click', '.trash',function(){
        $(this).parent().remove();
    });

    $('.new-task').on('click', '.prog-img',function(){
        $('.in-progress').append($(this).parent());
    })


    $('.in-progress').on('click', '.prog-img',function(){
        $('.done').append($(this).parent());
        $('.task-name').css('text-decoration', 'line-through')
    })

    $('.done').on('click', '.fa-angle-double-left',function(){
      $('.progress').append($(this).parent());
      $('.task-name').css('text-decoration', 'none')
    })
})
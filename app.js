const list = JSON.parse(localStorage.getItem('task')) || [];
$(document).ready(function(){
    $('#todo').click(function(){
        $('.done').removeClass('selected');
        $('.in-progress').removeClass('selected');
        $('.stat').removeClass('active');
        $('.todo').addClass('selected');
        $(this).addClass('active');
    
    });
    
    $('#current').click(function(){
        $('.done').removeClass('selected');
        $('.todo').removeClass('selected');
        $('.stat').removeClass('active');
        $(this).addClass('active');
        $('.in-progress').addClass('selected');
    });
    $('#done').click(function(){
        $('.todo').removeClass('selected');
        $('.in-progress').removeClass('selected');
        $('.stat').removeClass('active');
        $(this).addClass('active');
        $('.done').addClass('selected');
        
    });
    $(document).on("click", "button.delete", function(){
        //  alert("clicked");
        $(this).parent().remove();
        list.forEach((val, i) => {
            if(val.task==$(this).siblings('span').text()){
                list.splice(i, 1);
            }
        });
        localStorage.setItem('task', JSON.stringify(list));
    });
    $(document).on("click", "button.move1", function(){
        //   alert("clicked");
        list.map(val => {
            if(val.task==$(this).siblings('span').text()){
                val.stat='in-progress';
            }
        });
        localStorage.setItem('task', JSON.stringify(list));
        var newHtml = `<li><span contenteditable="true">${$(this).siblings('span').text()}</span><button title=" to todo" class="move3">&lsaquo;</button><button title="to done" class="move2">&rsaquo;</button></li>`;
        $('.in-progress .list').append(newHtml);
        $(this).parent().remove();
    });
    $(document).on("click", "button.move2", function(){
        //   alert("clicked");
        list.map(val => {
            if(val.task==$(this).siblings('span').text()){
                val.stat='done';
            }
        });
        localStorage.setItem('task', JSON.stringify(list));
         var newHtml = `<li><span contenteditable="true">${$(this).siblings('span').text()}</span><button class="delete" title="remove">&times;</button><button title=" to in progress" class="move1">&lsaquo;</button></li>`;
        $('.done .list').append(newHtml);
        $(this).parent().remove();
    });
    $(document).on("click", "button.move3", function(){
        //   alert("clicked");
        list.map(val => {
            if(val.task==$(this).siblings('span').text()){
                val.stat='in-progress';
            }
        });
        localStorage.setItem('task', JSON.stringify(list));
         var newHtml = `<li><span contenteditable="true">${$(this).siblings('span').text()}</span><button class="delete" title="remove">&times;</button><button title=" to in progress" class="move1">&rsaquo;</button></li>`;
        $('.todo .list').append(newHtml);
        $(this).parent().remove();
    });
    function Task(task) {
        this.task = task;
        this.stat = 'new';
    }
    
    function addTask(task) {
        if (task) {
          const newTask = new Task(task);
          //console.log(newTask.task);
          list.push(newTask);
          $('input').val('');

          var newHtml = `<li><span contenteditable="true">${newTask.task}</span><button class="delete" title="remove">&times;</button><button title=" to in progress" class="move1">&rsaquo;</button></li>`;
          $('.todo .list').append(newHtml);
        }
    }

    $('#add').click(function(){
        const task = $('input').val().trim();
        addTask(task);
        localStorage.setItem('task', JSON.stringify(list));

    });
    
    
    list.forEach(val => {
        if(val.stat =='new'){
            var newHtml = `<li><span contenteditable="true">${val.task}</span><button class="delete" title="remove">&times;</button><button title=" to in progress" class="move1">&rsaquo;</button></li>`;
            $('.todo .list').append(newHtml);
        }
        else if(val.stat =='in-progress'){
            var newHtml = `<li><span contenteditable="true">${val.task}</span><button title=" to todo" class="move3">&lsaquo;</button><button title="to done" class="move2">&rsaquo;</button></li>`;
            $('.in-progress .list').append(newHtml);
        }
        else if(val.stat =='done'){
            var newHtml = `<li><span contenteditable="true">${val.task}</span><button class="delete" title="remove">&times;</button><button title=" to in progress" class="move1">&lsaquo;</button></li>`;
            $('.done .list').append(newHtml);
        }
        
    });



    
})
$(document).ready(function(e) {

    const list = [];
    var counter = 0;
    var placement = "newList";
    
    function Task(task){
            this.task = task;
            this.id = counter;
            this.placement =placement;
    }
    $('.updateinput').prop('disabled', true);

    $('#add').click( (e) =>{
        var item = $('#text').val();
        addlist(item);
        $('#text').val('')
    })

    $('#update').click( (e) =>{
        var item = $('.updateinput').val();
        if(item){
            var id = $('#update').val();

            if(list[id]["placement"] == "newList"){
                addlist(item);
            } else if(list[id]["placement"] == "currentList"){
                list[id]["task"] = item;
                var file =list[id]
                currentList(file);
                
            } else{
                list[id]["task"] = item;
                var file =list[id]
                archivedList(file);
            }
            $('.updateinput').val('') 
            $('.updateinput').prop('disabled', true);
        }
  

    })

    $(document).on('click','.edit',function(e) {
            let id = $(this).attr('id');
            $('.updateinput').val(list[id]["task"])
            $('#update').val(id)
            $('#'+id).remove()
            $('.updateinput').prop('disabled', false);
            console.log(list[id])
        });

    function addlist(task){
        if(task !== 0) {
            const adding = new Task(task);
            list.push(adding);
            var newItem = 
                '<li id='+adding.id+' >'+'<span id="'+adding.id+'">'+adding.task+'</span>'+
                '<button id='+adding.id+' class="delete">del</button>'+
                ' <button id='+adding.id+' class="edit">edit</button>'+
                '<button id='+adding.id+' class="next">next</button></li>';
            $('.newList').prepend(newItem);
            }
            counter++;	
    }
    function currentList(task){
        if(task !== 0) {
            let progressItem = 
            '<li id='+task["id"]+'>'+'<span id="'+task["id"]+'">'+task["task"]+'</span>'+
                    '<button id='+task["id"]+' class="backtodo">back</button>'+
                    ' <button id='+task["id"]+' class="edit">edit</button>'+
                    '<button id='+task["id"]+' class="nextdone">next</button></li>';
            +'</li>';
            $('#'+task["id"]).remove();
            $('.currentList').append(progressItem);
        }
    }

    function archivedList(task){
        if(task !== 0) {
            let doneItem = 
            '<li id='+task["id"]+'>'+'<span id="'+task["id"]+'">'+task["task"]+'</span>'+
                    '<button id='+task["id"]+' class="next">back</button>'+
                    ' <button id='+task["id"]+' class="edit">edit</button>'+
                    '<button id='+task["id"]+' class="delete">delete</button></li>';
            +'</li>';
        $('#'+task["id"]).remove();
        $('.archivedList').append(doneItem);
        }
    }
    
    $(document).on('click','.next',function(e) {
        let id = $(this).attr('id');
        list[id]["placement"] = "currentList"
        let progressItem = 
            '<li id='+id+'>'+'<span id="'+id+'">'+list[id]["task"]+'</span>'+
                    '<button id='+id+' class="backtodo">back</button>'+
                    ' <button id='+id+' class="edit">edit</button>'+
                    '<button id='+id+' class="nextdone">next</button></li>';
            +'</li>';
        $('#'+id).remove();
        $('.currentList').append(progressItem);
    
    });
    
    $(document).on('click','.backtodo',function(e) {
        let id = $(this).attr('id');
        let todoItem = 
        '<li id='+id+'>'+'<span id="'+id+'">'+list[id]["task"]+'</span>'+
        '<button id='+id+' class="delete">delete</button>'+
        ' <button id='+id+' class="edit">edit</button>'+
        '<button id='+id+' class="next">next</button></li>';
        $('#'+id).remove();
        $('.newList').prepend(todoItem);
    
    });
    
    $(document).on('click','.nextdone',function(e) {
        let id = $(this).attr('id');
        list[id]["placement"] = "archivedList"
        let doneItem = 
            '<li id='+id+'>'+'<span id="'+id+'">'+list[id]["task"]+'</span>'+
                    '<button id='+id+' class="next">back</button>'+
                    ' <button id='+id+' class="edit">edit</button>'+
                    '<button id='+id+' class="delete">delete</button></li>';
            +'</li>';
        $('#'+id).remove();
        $('.archivedList').append(doneItem);
    
    });
    
    $(document).on('click','.delete',function(e) {
        let id = $(this).attr('id');
        $('#'+id).remove();
    });
       
      
    });
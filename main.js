$(document).ready(function(){

    
    //opens the modal, prepared for adding
    $("#modalOpen").click(function(){
        console.log('modal');
        $(".modal > h2").text('Add Todo');
        $('#addTodo').show();
        $('#editTodo').hide();
        $("#modal").slideDown("fast");
        $("#modalContainer").slideDown("fast");
    });

    var todoCount = 0;
    var todosArr = [];
    $(".newTodo").hide();

    //Add todos
    $("#addTodo").click(function(){
        //get value of textarea
        var myTodo =  $("#text").val();

        if(myTodo.length > 0){
            //clone the template
            var template = $(".newTodo").clone();
            $(".newTodo:first").show();

            //add todo
            todoCount++;
            var newClass = todoCount;
            $(".newTodo:first").attr('id', newClass);
            $("#"+newClass).removeClass('newTodo');
            $("#"+newClass+">label").text(myTodo);
            $("#text").val('');
            $("#modal").slideUp("fast");
            $("#modalContainer").slideUp("fast");

            $("#"+newClass+" .edit").attr('id', newClass);
            $("#"+newClass+" .stat_todo").attr('id', newClass); 
            $("#"+newClass+" .stat_progress").attr('id', newClass); 
            $("#"+newClass+" .stat_done").attr('id', newClass); 

            $("#"+newClass+" .stat_todo").hide()
            $("#"+newClass+" .stat_done").hide()

            $("#"+newClass+" .delete").attr('id', newClass);
            $("#todos").prepend(template).
            $("#todos").slideDown('slow');
            //console.log(todo)
            //close modal, delete val of textarea
           
        }
        else{
            $("#modal").slideUp("fast");
            $("#modalContainer").slideUp("fast");
        }
    });


    $(document).on('click', '.edit', function() {
        var target = event.target.id;
        var foredit =  $("#" + target + " > label").text()
        console.log(target);
        console.log(foredit);
        $(".modal > h2").text('Edit Todo');
        $('#addTodo').hide();
        $('#editTodo').show();
        $("#text").val(foredit);
        $("#modal").slideDown("fast");
        $("#modalContainer").slideDown("fast");

        $(document).one('click', '#editTodo', function(){
            var editedTodo =  $("#text").val();
            console.log(target);
            $("#" + target + " > label").text(editedTodo)
            $("#modal").slideUp("fast");
            $("#modalContainer").slideUp("fast");
            $("#text").val('');
        });
      });


      $(document).on('click', '.edit', function() {
        var target = event.target.id;
        var foredit =  $("#" + target + " > label").text()
        console.log(target);
        console.log(foredit);
      });

      // delete
      $(document).on('click', '.delete', function() {
        var rem = event.target.id;
        console.log(rem);
        $("li#"+rem).remove()
      });

      //set to in progress
      $(document).on('click', '.stat_progress', function() {
        var id = event.target.id;
        console.log(id);
        $("li#"+id).prependTo('ul.progress')
        $("li#"+id+" a.stat_todo").show();
        $("li#"+id+" a.stat_progress").hide(); 
        $("li#"+id+" a.stat_done").show();
        $("li#"+id+" a.delete").hide();
      });

      //set to in todo
      $(document).on('click', '.stat_todo', function() {
        var id = event.target.id;
        console.log(id);
        $("li#"+id).prependTo('ul.todo')
        $("li#"+id+" a.stat_todo").hide();
        $("li#"+id+" a.stat_progress").show(); 
        $("li#"+id+" a.stat_done").hide();
        $("li#"+id+" a.delete").show();
      });

       //set to done
       $(document).on('click', '.stat_done', function() {
        var id = event.target.id;
        console.log(id);
        $("li#"+id).prependTo('ul.done')
        $("li#"+id+" a.stat_todo").show();
        $("li#"+id+" a.stat_progress").show(); 
        $("li#"+id+" a.stat_done").hide();
        $("li#"+id+" a.delete").show();
      });
});
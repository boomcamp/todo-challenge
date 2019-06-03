$(document).ready(function(){

    //modal opens
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

        //clone the template
        var template = $(".newTodo").clone();
        $(".newTodo:first").show();

        //add todo
        todoCount++;
        var newClass = todoCount;
        $(".newTodo:first").attr('id', newClass);
        $("#"+newClass).removeClass('newTodo');
        $("#"+newClass+">label").text(myTodo);

        $("#"+newClass+" .edit").attr('id', newClass);
        $("#"+newClass+" .progress").attr('id', newClass);
        $("#todos").prepend(template);
        //console.log(todo)
        //close modal, delete val of textarea
        $("#text").val('');
        $("#modal").slideUp("fast");
        $("#modalContainer").slideUp("fast");
    });


    $(".edit").click(function() {
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

        $("#editTodo").click(function(){
            var editedTodo =  $("#text").val();
            $("#" + target + " > label").text(editedTodo)
            $("#modal").slideUp("fast");
            $("#modalContainer").slideUp("fast");
        });
      });

     


    
    

});
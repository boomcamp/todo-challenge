var delBtn = '<img id="del" src="img/baseline-delete-24px.svg"/>';
var editBtn = '<img id="edit" src="img/baseline-create-24px.svg"/>';
var inProgBtn = '<img id="inProg" src="img/baseline-forward-24px.svg"/>';
var toDoBtn = '<img id="backToDo" src="img/baseline-backward-24px.png"/>';
var toProgBtn = '<img id="backToProg" src="img/baseline-backward-24px.png"/>';
var doneBtn = '<img id="done" src="img/baseline-forward-24px.svg"/>';

    $(document).ready(function() {
        $('.addBtn').click(function() {
            if($('.addText').val() !== '') {
                var newTask = $('.addText').val();
                var newLi = $('<li id="toDoLi">' + newTask + inProgBtn + delBtn + editBtn + '</li>');

                //delete a task
                $('#del').click(function() {
                    $('#toDoLi').remove();
                });  

                $('#toDoUl').prepend(newLi);
                //clear inputs
                $('.addText').val('');
                    return false; 
            }
            else {
                $('.addBtn').prop('disabled', true);
                alert('You must add a task first!');
            }
        });

        $(document).click(function() {
            //from 'To Do' to 'In Progress'
            $('#inProg').click(function() {
                var toBeProg =  $('#del').replaceWith(toDoBtn);
                var toBeProg =  $('#inProg').replaceWith(doneBtn);
                var toBeProg =  $('#toDoLi').remove();
                toBeProg.prependTo('#inProgUl');              
            });

            //from 'In Progress' back to 'To Do'
            $('#backToDo').click(function() {
                var toToDo =  $('#done').replaceWith(inProgBtn);
                var toToDo =  $('#backToDo').replaceWith(delBtn);
                var toToDo =  $('#inProgUl li:first').remove();
                toToDo.prependTo('#toDoUl');
            });

            //from 'In Progress' to 'Done'
            $('#done').click(function() {
                var toDone =  $('#done').replaceWith(delBtn);
                var toDone =  $('#backToDo').replaceWith(toProgBtn);
                var toDone =  $('#inProgUl li:first').remove();
                toDone.prependTo('#doneUl');
            });

            //from 'Done' back to 'In Progress'
            $('#backToProg').click(function() {
                var toProg =  $('#backToProg').replaceWith(toDoBtn);
                var toProg =  $('#del').replaceWith(doneBtn);
                var toProg =  $('#doneUl li:first').remove();
                toProg.prependTo('#inProgUl');
            });

            //delete a task
            $('#del').click(function() {
                $('#doneUl li:first').remove();
            });
        });

        // $('#edit').click(function() {
        //     var str = $('#toDoLi').val();
        //     $('#toDoLi').text(str);
        // });

        // $('#toDoUl:first #edit').click(function() {
        //     var str = $('#toDoLi').val();
        //     $('#toDoLi').text(str);
        // });
        
    });

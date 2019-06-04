var delBtn = '<img id="del" src="img/baseline-delete-24px.svg"/>';
var editBtn = '<img id="edit" src="img/baseline-create-24px.svg"/>';
var inProgBtn = '<img id="inProg" src="img/baseline-forward-24px.svg"/>';
var toDoBtn = '<img id="backToDo" src="img/baseline-backward-24px.png"/>';
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
                //delete all
                // $('#del').click(function() {
                //     $('#toDoUl').empty();
                // }); 
                //  OR
                // $('#del').click(function() {
                //     $('#toDoUl li').remove();
                // });

                //transfer from 'To Do' to 'In Progress'
                $('#inProg').click(function() {
                    var toBeProg =  $('#del').replaceWith(toDoBtn);
                    var toBeProg =  $('#inProg').replaceWith(doneBtn);
                    var toBeProg =  $('#toDoLi').remove();
                    toBeProg.prependTo('#inProgUl');

                    // var toBeProg = $('#toDoLi:first').remove();
                    // var newProg = $('<li id="inProgLi">' + toBeProg + doneBtn + toDoBtn + editBtn + '</li>');
                    // $('#inProgUl').prepend(newProg);
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

        // function gobackTodo(target){
        //     document.getElementById('toDoUl').append(target);
        //     var lastChild = document.getElementById('toDoUl').lastChild;
        //     lastChild.children[0].remove();
        //     lastChild.children[0].insertAdjacentHTML("afterend", inProgBtn);
        //     lastChild.children[0].remove();
        // }

        // $('.inProgUl').focus(function() {
        //  $('#backToDo').click(function() {
            //back to 'To Do'
            // $('#backToDo').click(function() {
            //     var toToDo =  $('#done').replaceWith(inProgBtn);
            //     var toToDo =  $('#backToDo').replaceWith(delBtn);
            //     var toToDo =  $('#backToDo').remove();
            //     toToDo.prependTo('#toDoUl');
            // });

            // //to 'Done'
            // $('#done').click(function() {
            //     var toDone =  $('#done').replaceWith(delBtn);
            //     var toDone =  $('#done').remove();
            //     toDone.prependTo('#DoneUl');
            // });
        // });
        
        
    });
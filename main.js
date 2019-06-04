$(document).ready(() => {
    $('#todoInput').on('keyup', event => {
        const input = $(event.currentTarget).val();
        if(input.length !== 0){
            $('.post').removeAttr('disabled');
        }else{
            $('.post').attr('disabled','disabled');
        }
    })

    //add
    $('.post').on('click', () => {
        var todo = $('#todoInput').val();
        var newEl = $(`
        <div class="box-new">
            <button class="del-btn">Del</button>
            <button class="prog-btn">In progress</button>
            <button class="edit-btn">Edit</button>
            <p>
                ${todo} 
            </p>
            
        </div>	
    `);

        $('#content1').append(newEl);
        $('#todoInput').val('');
    })
    
    //delete
    // var del = Array.from(document.getElementsByClassName('del-btn'));
    // for(let i=0; i<del.length; i++){
    //     del[i].addEventListener('click', function(e){
    //         e.target.parentElement.remove();
    //     })
    // }
    $('.del-btn').on('click', event => {
        event.target.parentElement.remove();
    })
    //from todo-inprogress
    var newToProg = Array.from(document.getElementsByClassName('prog-btn'));
    for(let i = 0; i < newToProg.length; i++){
        newToProg[i].addEventListener('click', function(event){
            if(newToProg[i] === event.target){
                var parentEl = event.target.parentElement;
                $('#content2').append(parentEl);
                var lastElem = document.getElementById('content2').lastChild;
                lastElem.children[0].remove();
                lastElem.children[0].remove();
                var last = lastElem.children[0];
                var btnTodo = document.createElement('button');
                btnTodo.className = "todo-btn";
                btnTodo.innerText = "Todo";
                last.parentElement.prepend(btnTodo);
                var btnDone = document.createElement('button');
                btnDone.className = "complete-btn";
                btnDone.innerText = "Done";
                last.parentElement.prepend(btnDone);      
            }
        })
    }

    //from inprogress-done
    var progTodone = Array.from(document.getElementsByClassName('complete-btn'));
    for(let i = 0; i < progTodone.length; i++){
        progTodone[i].addEventListener('click', function(event){
            if(progTodone[i] === event.target){
                var parentEl = event.target.parentElement;
                $('#content3').append(parentEl);
                var lastElem = document.getElementById('content3').lastChild;
                lastElem.children[0].remove();
                lastElem.children[0].remove();
                var last = lastElem.children[0];
                var btnProg = document.createElement('button');
                btnProg.className = "prog-btn";
                btnProg.innerText = "In progress";
                last.parentElement.prepend(btnProg);
                var btnDel = document.createElement('button');
                btnDel.className = "del-btn";
                btnDel.innerText = "Del";
                last.parentElement.prepend(btnDel); 
            }

            
            
        })
    }

    //from in progress to todo
    var progToNew = Array.from(document.getElementsByClassName('todo-btn'));
    for(let i = 0; i < progToNew.length; i++){
        progToNew[i].addEventListener('click', function(event){
            if(progToNew[i] === event.target){
                var parentEl = event.target.parentElement;
                $('#content1').append(parentEl);
                var lastElem = document.getElementById('content1').lastChild;
                lastElem.children[0].remove();
                lastElem.children[0].remove();
                var last = lastElem.children[0];
                var btnProg = document.createElement('button');
                btnProg.className = "prog-btn";
                btnProg.innerText = "In progress";
                last.parentElement.prepend(btnProg);
                var btnDel = document.createElement('button');
                btnDel.className = "del-btn";
                btnDel.innerText = "Del";
                last.parentElement.prepend(btnDel); 
            }
        })
    }
    
});


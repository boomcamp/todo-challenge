var todoTitle = document.querySelector('.m-input');
var submitBtn = document.querySelector('.submit-btn');
let todoList = [];
function add_todo(){
    submitBtn.addEventListener('click',addTodo);
    todoTitle.addEventListener('keyup',checkTodo);
    function checkTodo(e){
        if(todoTitle.value!=''){
            if(e.keyCode == 13){ 
                addTodo();
            }
        }   
    }
    function TodoList(title){
        this.title = title;
    }

    function addTodo(){
        
        var todoTable = document.getElementById('todo-table-home');
        var newTodoList = document.createElement('div');
        let newTodo = new TodoList(todoTitle.value);
        todoList.push(newTodo);
        console.log(todoList);
        modal.style.display = "none";
        newTodoList.innerHTML = 
        `
        <button id="home-${todoList.findIndex(x => x.title == todoTitle.value)}" class="accordion" value="${todoTitle.value}"> <span style="color:rgb(81, 206, 248);">${todoList.findIndex(x => x.title == todoTitle.value)+1}.) </span> ${todoTitle.value}  <span id="trash-${todoList.findIndex(x => x.title == todoTitle.value)}" style="float:right;color:red" class="fa fa-trash"> </span> <span id="plus-${todoList.findIndex(x => x.title == todoTitle.value)}" style="margin-right:20px;float:right;color:white" class="fa fa-plus"> </span></button>
        `;
        newTodoList.setAttribute('id','home-'+todoList.findIndex(x => x.title == todoTitle.value));
        todoTable.prepend(newTodoList);
        
        //window.localStorage.setItem('newTodo',newTodoList.innerHTML);
        trash_todo(todoTitle.value,'home');
        progress_todo(todoTitle);
    }
}

function progress_todo(todoTitle){
    //in-progress
    
    var todoTable_progress = document.getElementById('todo-table-progress');
    var count = todoList.findIndex(x => x.title == todoTitle.value)
    console.log(count);
    var inProgress = document.getElementById(`plus-${count}`);
    var divId = document.getElementById(`home-${count}`);
    var btnId = document.querySelector(`button#home-${count}`);
    let btn_value = btnId.value;
    
    todoTitle.value='';
    
    inProgress.addEventListener('click',putProgress);

    function putProgress(){
        alert('Work in progress');
        divId.remove();
        var newInProgress = document.createElement('div');
        newInProgress.innerHTML = 
        `
        <button id="progress-${count}" class="accordion"  value="${btn_value}"><span style="color:rgb(81, 206, 248);">${todoList.findIndex(x => x.title == btn_value)+1}.) </span> ${btn_value}  <span id="trash-${count}" style="float:right;color:red" class="fa fa-trash"> </span> <span id="check-${count}" style="margin-right:20px;float:right;color:#75ff75;" class="fa fa-check"> </span></button>
        `;
        newInProgress.setAttribute('id',`progress-${count}`);
        todoTable_progress.prepend(newInProgress);
        done_todo(btn_value);
        trash_todo(btn_value,'progress');
    }
}

function done_todo(btn_value){
    //done
    var todoTable_done = document.getElementById('todo-table-done');
    var counts = todoList.findIndex(x => x.title == btn_value)
    var DoneTodo = document.getElementById(`check-${counts}`);
    var divId_done = document.getElementById(`progress-${counts}`);
    var btnId_done = document.querySelector(`button#progress-${counts}`);
    let btn_value_done = btnId_done.value;

    
    DoneTodo.addEventListener('click',putDone);

    function putDone(){
        alert('Work Done');
        divId_done.remove();
        var newDone = document.createElement('div');
        newDone.innerHTML = 
        `
        <button id="done-${counts}" class="accordion" value="${btn_value_done}"><span style="color:rgb(81, 206, 248);">${todoList.findIndex(x => x.title == btn_value)+1}.) </span> ${btn_value_done}  <span id="trash-${counts}" style="float:right;color:red" class="fa fa-trash"> </span> <span id="back-${counts}" style="margin-right:20px;float:right;color:#75ff75;" class="fa fa-arrow-left" aria-hidden="true"> </span></button>
        `;
        newDone.setAttribute('id',`progress-${counts}`);
        todoTable_done.prepend(newDone);
        back_progress_todo(btn_value_done);
        trash_todo(btn_value_done,'done');
    }
}

function trash_todo(TrashValue,holder){
    var todoTable_trash = document.getElementById('todo-table-trash');
    var counter_trash = todoList.findIndex(x => x.title == TrashValue);
    var trashIcon = document.getElementById(`trash-${counter_trash}`);
    var divId_trash = document.getElementById(`${holder}-${counter_trash}`);
    var btnId_trash = document.querySelector(`button#${holder}-${counter_trash}`);
    let btn_value_trash = btnId_trash.value;

    trashIcon.addEventListener('click',putTrash);

    function putTrash(){
        alert('Put Trash');
        divId_trash.remove();
        var PutinTrash = document.createElement('div');
        PutinTrash.innerHTML = 
        `
        <button id="trash-${counter_trash}" class="accordion"  value="${btn_value_trash}"><span style="color:rgb(81, 206, 248);">${todoList.findIndex(x => x.title == btn_value_trash)+1}.) </span> <span style="text-decoration:line-through">${btn_value_trash}</span>  <span id="trash-${counter_trash}" style="float:right;color:red" class="fa fa-trash"> </span> <span id="check-${counter_trash}" style="margin-right:20px;float:right;color:#75ff75;" class="fa fa-arrow-up"> </span></button>
        `;
        PutinTrash.setAttribute('id',`trash-${counter_trash}`);
        todoTable_trash.prepend(PutinTrash);
        remove_permanent(counter_trash);
    }
}
function remove_permanent(btn_value_trash){
    console.log(btn_value_trash);
    var removeIcon = document.getElementById(`trash-${btn_value_trash}`);
    var divId_trash = document.getElementById(`trash-${btn_value_trash}`);

    removeIcon.addEventListener('click', removePerma);

    function removePerma(){
        divId_trash.remove();
    }
}


function back_progress_todo(btn_value_done){
    
    var todoTable_progress = document.getElementById('todo-table-progress');
    var counter = todoList.findIndex(x => x.title == btn_value_done)
    var backProgress = document.getElementById(`back-${counter}`);
    var divId_back_progress = document.getElementById(`done-${counter}`);
    var btnId_back_progress = document.querySelector(`button#done-${counter}`);
    let btn_value_back_progress = btnId_back_progress.value;

    backProgress.addEventListener('click',putProgressagain);

    function putProgressagain(){
        alert('Work in progress again');
        divId_back_progress.remove();
        var backInProgress = document.createElement('div');
        backInProgress.innerHTML = 
        `
        <button id="progress-${counter}" class="accordion"  value="${btn_value_back_progress}"><span style="color:rgb(81, 206, 248);">${todoList.findIndex(x => x.title == btn_value_back_progress)+1}.) </span> ${btn_value_back_progress}  <span id="trash-${counter}" style="float:right;color:red" class="fa fa-trash"> </span> <span id="check-${counter}" style="margin-right:20px;float:right;color:#75ff75;" class="fa fa-check"> </span></button>
        `;
        backInProgress.setAttribute('id',`progress-${counter}`);
        todoTable_progress.prepend(backInProgress);
        done_todo(btn_value_back_progress);
        trash_todo(btn_value_back_progress);
    }
}



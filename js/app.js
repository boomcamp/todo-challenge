var reset = (function reset() {

    var todo = document.querySelector('.todo');
    var inProgress = document.querySelector('.in-progess');
    var done = document.querySelector('.done');
    var textBox = document.querySelector('.add-text').value='';

    if(todo.childElementCount == 1)
        todo.style.display = 'none';
    else
        todo.style.display = '';
    if(inProgress.childElementCount == 1)
        inProgress.style.display = 'none';
    else
        inProgress.style.display = ''; 
    if(done.childElementCount == 1)
        done.style.display = 'none';
    else
        done.style.display = '';
    return reset;
})()

const addBtn = document.querySelector('.circle-btn');
const textBox = document.querySelector('.add-text');
const todo = document.querySelector('.todo');

addBtn.addEventListener('click', function(){
    if(textBox.value)
        addTodo(textBox.value);
})

//adding
function addTodo(text){
    const todoItem = document.createElement('div');
    todoItem.className = 'todo-div';
    const item = document.querySelector('.todo').appendChild(todoItem);
    item.innerHTML += `<button class='btn' onclick="addtodoBtn(this, this.value)" value=${text}>&plus;</button><input value=${text} class="item" onkeyup="changeValue(this, this.value)"><button class='btn' onclick="removetodoBtn(this)">&times;</button>`;
    reset();
}

function addinProgress(text){
    const pItem = document.createElement('div');
    pItem.className = 'inProgress-div';
    const item = document.querySelector('.in-progess').appendChild(pItem);
    item.innerHTML += `<button class='btn' value=${text} onclick="addPBtn(this, this.value)">&plus;</button><input value=${text} class="item" onkeyup="changeValue2(this, this.value)"><button class='btn' onclick="backPBtn(this, this.value)" value=${text}>&minus;</button>`;
    reset();
}

function addDone(text){
    const pItem = document.createElement('div');
    pItem.className = 'done-div';
    const item = document.querySelector('.done').appendChild(pItem);
    item.innerHTML += `<button class='btn' onclick="addtodoBtn(this, this.value)" value=${text}>&minus;</button><input value=${text} class="item" onkeyup="changeValue3(this, this.value)"><button class='btn' value=${text} onclick="removetodoBtn(this)">&times;</button>`;
    reset();
}

//edit
function changeValue(e, text){
    e.parentNode.parentNode.removeChild(e.parentNode);
    addTodo(text);
}
function changeValue2(e, text){
    e.parentNode.parentNode.removeChild(e.parentNode);
    addinProgress(text);
}
function changeValue3(e, text){
    e.parentNode.parentNode.removeChild(e.parentNode);
    addDone(text);
}

//remove
function removetodoBtn(e){
    e.parentNode.parentNode.removeChild(e.parentNode);
    reset();
}

//moving
function addtodoBtn(e, str){
    e.parentNode.parentNode.removeChild(e.parentNode);
    reset();
    addinProgress(str);
}

function backPBtn(e, str){
    e.parentNode.parentNode.removeChild(e.parentNode);
    reset();
    addTodo(str);
}

function addPBtn(e, str){
    e.parentNode.parentNode.removeChild(e.parentNode);
    reset();
    addDone(str);
}




var addInput = document.querySelector('#new-task');
var addBtn = document.querySelector('#add');
var incHolder = document.querySelector('#inc-task');
var going = document.querySelector('#todoList');
var removeTodo = document.querySelector('.delete');
var goBack = document.querySelector('.back');

goBack.addEventListener('click', previous);
removeTodo.addEventListener('click', removeList);
going.addEventListener('click', moveFromTodo);
addBtn.addEventListener('click', addinputBtn);
addInput.addEventListener('keyup', showBtn);


/* Add Todo */

function addinputBtn() {
  var panel = document.querySelector('#incomplete-tasks');
  var addTodo = document.createElement('li');
  
  addTodo.innerHTML = 
    ` <input type="checkbox" id="todoList">
      <p> ${addInput.value} </p><input type="text">
      
      <span class="back"><i class="fa fa-arrow-circle-left"></i></span>
      <span class="delete"><i class="fa fa-trash"></i></span>
    `;
    
    addTodo.classList.add('inc-tasks');
    panel.prepend(addTodo);

    addInput.value = "";
    
    showBtn();

    var goBack = document.querySelector('.back');
    goBack.addEventListener('click', previous);
    
    var removeTodo = document.querySelector('.delete');
    removeTodo.addEventListener('click', removeList);
    var going = document.querySelector('#todoList');
    going.addEventListener('click', moveFromTodo);
}


/** Input Todo Task */

function showBtn(e) {
  if(addInput.value != "") {
    addBtn.disabled = false;
    if(e.keyCode==13){
      addinputBtn();
    }
  } else {
    addBtn.disabled = true;
  }
}

/**Delete Todo Task */

function removeList() {
  this.parentNode.remove();
}

/**Move from Going task */

function moveFromTodo(){
  this.removeAttribute('id');
  this.setAttribute('id', 'goingList');
  $('#on-going-tasks').prepend(this.parentNode);
  let outgoing = document.querySelector('#goingList');
  outgoing.addEventListener('click', moveFromGoing);
}

function moveFromGoing(){
  $('#completed-tasks').prepend(this.parentNode);
}
function previous() {

  let outgoing = document.querySelector('#goingList');
  outgoing.removeAttribute('id');
  outgoing.setAttribute('id', 'todoList');
  $('#incomplete-tasks').prepend(this.parentNode);
  var going = document.querySelector('#todoList');
  going.addEventListener('click', moveFromTodo);
}

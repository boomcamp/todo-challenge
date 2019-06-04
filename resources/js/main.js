
// local storage
var data = (localStorage.getItem('todoList')) ? JSON.parse(localStorage.getItem('todoList')): {
  todo: [],
  completed: []
};
data.done = [];

//icons
var removeSVG = '<img src="trash.png"/> ';
var completeSVG = '<img src="complete.png"/> ';
var editList = '<img src="edit.png"/> ';
var doneList = '<img src="progress.png"/> ';
renderTodoList();

document.getElementById('add').addEventListener('click', function() {
  var value = document.getElementById('item').value;
  if (value) {
    addItem(value);
  }
});

document.getElementById('item').addEventListener('keydown', function (e) {
  var value = this.value;
  if ((e.code === 'Enter' || e.code === 'NumpadEnter') && value) {
    addItem(value);
  }
});

function addItem (value) {
  addItemToDOM(value);
  document.getElementById('item').value = '';

  data.todo.push(value);
  dataObjectUpdated();
}

function renderTodoList() {
  if (!data.todo.length && !data.completed.length) return;

  for (var i = 0; i < data.todo.length; i++) {
    var value = data.todo[i];
    addItemToDOM(value);
  }

  for (var j = 0; j < data.completed.length; j++) {
    var value = data.completed[j];
    addItemToDOM(value, true);
  }  
}

function dataObjectUpdated() {
  localStorage.setItem('todoList', JSON.stringify(data));
}

function removeItem() {
  var item = this.parentNode.parentNode;
  var parent = item.parentNode;
  var id = parent.id;
  var value = item.innerText;

  if (id === 'todo') {
    data.todo.splice(data.todo.indexOf(value), 1);
  } else if (id === 'completed') {
    data.completed.splice(data.completed.indexOf(value), 1);
  } else {
    data.done.splice(data.done.indexOf(value), 1);
  }
  dataObjectUpdated();

  parent.removeChild(item);
}

function completeItem() {
  var item = this.parentNode.parentNode;
  var parent = item.parentNode;
  var id = parent.id;
  var value = item.innerText;

  if (id === 'todo') {
    data.todo.splice(data.todo.indexOf(value), 1);
    data.completed.push(value);
  } else {
    data.completed.splice(data.completed.indexOf(value), 1);
    data.todo.push(value);
  }
  dataObjectUpdated();

  // Check if the item should be added to the completed list or to re-added to the todo list
  var target = (id === 'todo') ? document.getElementById('completed'):document.getElementById('todo');

  parent.removeChild(item);
  target.insertBefore(item, target.childNodes[0]);
}

function doneItem() {
  var item = this.parentNode.parentNode;
  var parent = item.parentNode;
  var id = parent.id;
  var value = item.innerText;

  if (id === 'completed') {
    data.completed.splice(data.completed.indexOf(value), 1);
    data.done.push(value);
  } else {
    data.done.splice(data.done.indexOf(value), 1);
    data.completed.push(value);
  }
  dataObjectUpdated();

  // Check if the item should be added to the completed list or to re-added to the todo list
  var target = (id === 'completed') ? document.getElementById('done'):document.getElementById('completed');

  parent.removeChild(item);
  target.insertBefore(item, target.childNodes[0]);
}

//edit task
function editItem() {
  console.log("Edit Task...");
  console.log("Change 'edit' to 'save'");
  
  
  var listItem=this.parentNode;
  
  var editInput=listItem.querySelector('input[type=text]');
  var label=listItem.querySelector("label");
  var containsClass=listItem.classList.contains("editMode");
      //If class of the parent is .editmode
      if(containsClass){
  
      //switch to .editmode
      //label becomes the inputs value.
        label.innerText=editInput.value;
      }else{
        editInput.value=label.innerText;
      }
  
      //toggle .editmode on the parent.
      listItem.classList.toggle("editMode");
}

// editButton.onclick=editTask;

// Adds a new item to the todo list
function addItemToDOM(text, completed) {
  var list = (completed) ? document.getElementById('completed'):document.getElementById('todo');

  var item = document.createElement('li');
  item.innerText = text;

  var buttons = document.createElement('div');
  buttons.classList.add('buttons');

  var remove = document.createElement('button');
  remove.classList.add('remove');
  remove.innerHTML = removeSVG;

  // Add click event for removing the item
  remove.addEventListener('click', removeItem);

  var complete = document.createElement('button');
  complete.classList.add('complete');
  complete.innerHTML = doneList;

  complete.addEventListener('click', completeItem);

  var edit = document.createElement('button');
  edit.classList.add('edit');
  edit.innerHTML = editList;

  var donetask = document.createElement('button');
  donetask.classList.add('donetask');
  donetask.innerHTML = completeSVG;
  donetask.addEventListener('click', doneItem);

  buttons.appendChild(complete);
  buttons.appendChild(edit);
  buttons.appendChild(donetask);
  buttons.appendChild(remove);
  item.appendChild(buttons);

  list.insertBefore(item, list.childNodes[0]);
}


document.getElementById('remove').title="Delete Task";

  


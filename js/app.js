const list = [];
function Task(task){
  this.task = task;
  this.id = 'new';
}

  

const newTaskForm = document.getElementById('new-task-container')
newTaskForm.style.display = 'none';
document.getElementById('add-task').addEventListener('click', function() {
  newTaskForm.style.display = '';
});

document.getElementById('cancel').addEventListener('click', function(event) {
  event.preventDefault();
  newTaskForm.style.display = 'none';
});

document.getElementById('saveTask').addEventListener('click', function(event){
  event.preventDefault();
  const task = document.getElementById('new-task').value.trim();
  addTask(task)
})

// TODO LIST FUNCTIONS//
document.getElementById('todo-list').addEventListener('click',function(event){
  if(event.target.classList.contains('del')){
    if(confirm("Delete this Todo task?"))
    {
      event.target.parentElement.parentElement.remove();    
    }
  }

  if(event.target.classList.contains('next')){
    if(confirm("Move to Progress?"))
    {

      const btn = document.createElement('button');
      btn.className = "back";
      btn.innerHTML = "Back";
      btn.style.float = "right";
      event.target.parentElement.append(btn);
      document.getElementById('progress-list').append(event.target.parentElement.parentElement);
      document.getElementById('edit').remove(); 
    }
  }
  if(event.target.classList.contains('edit')){
    if(confirm("Edit this task?"))
    {
      const save = document.createElement('button');
      save.className = "save";
      save.id = "save";
      save.innerHTML = "Save";
      save.style.float = "right";
      const change = document.createElement('input');
      change.className = "change";
      change.id = "change"
      change.type = "text";
      event.target.parentElement.append(change);
      event.target.parentElement.append(save);
      document.getElementById('todo-list').append(event.target.parentElement.parentElement);
      document.getElementById('del').style.display = "none";
      document.getElementById('next').style.display = "none";
      document.getElementById('edit').style.display = "none";
      document.getElementById('lbl').style.display = "none";
    }
  }
  if(event.target.classList.contains('save')){
    if(confirm("Save this changes?"))
    {
      var lbl = document.getElementById('lbl');
      lbl.innerText = document.getElementById('change').value;
      document.getElementById('del').style.display = "";
      document.getElementById('next').style.display = "";
      document.getElementById('edit').style.display = "";
      document.getElementById('lbl').style.display = "";
      document.getElementById('todo-list').append(event.target.parentElement.parentElement);
      document.getElementById('save').remove(); 
      document.getElementById('change').remove(); 
    }
  }    
})

// IN-PROGRESS FUNCTIONS //
document.getElementById('progress-list').addEventListener('click',function(event){
  if(event.target.classList.contains('del')){
      if(confirm("Delete this In-Progress task?"))
      {
           event.target.parentElement.parentElement.remove();    
      }
  }
  if(event.target.classList.contains('back')){
    if(confirm("Move to Todo List?"))
    {
      document.getElementById('todo-list').append(event.target.parentElement.parentElement); 
      event.target.remove();
    }
  }
  if(event.target.classList.contains('next')){
    if(confirm("Move to Done List?"))
    {
      document.getElementById('done-list').append(event.target.parentElement.parentElement); 
      event.target.remove();
    }
  }
})

// DONE FUNCTIONS //

document.getElementById('done-list').addEventListener('click',function(event){
  if(event.target.classList.contains('del')){
      if(confirm("Delete this done task?"))
      {
           event.target.parentElement.parentElement.remove();    
      }
  }
  if(event.target.classList.contains('back')){
    if(confirm("Move to In-Progress List?"))
    {
      const btn = document.createElement('button');
      btn.className = "back";
      btn.innerHTML = "Back";
      btn.style.float ="right";
      event.target.parentElement.append(btn);
      const next = document.createElement('button');
      next.className = "next";
      next.innerHTML = "Next";
      next.style.float ="right";
      event.target.parentElement.append(next);
      document.getElementById('progress-list').append(event.target.parentElement.parentElement); 
      event.target.remove();
    }
  }
})  

function addTask(task){
  if(task){
      const newTask = new Task(task);
      list.push(newTask);
      document.getElementById('new-task').value = '';

      const taskElem = document.createElement('ul');
      taskElem.id = 'item';

      const item = document.getElementById('todo-list').appendChild(taskElem);
      item.innerHTML = `
          <li id="tsk" class="tsk">
            <label id="lbl">${newTask.task}</label>
            <input type="submit" class="edit" style="float:right; width:40px" id="edit" value="Edit"> 
            <input type="submit" class="del" id="del" style="float:right" value="Delete">
            <input type="submit" class="next" id="next" style="float:right" value="Next">
          </li>
      `; 
}
  newTaskForm.style.display = 'none';   
}
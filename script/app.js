const myArr = [];
function doTask(task){
  this.task = task;
  this.id = 'new';
}

const newTaskForm = document.getElementById('btn-input-id')

//Button Function here
document.getElementById('button-id').addEventListener('click', function(event){
  event.preventDefault();
  const task = document.getElementById('text-id').value.trim();
  addTask(task)
}) //End 

function addTask(task){ //Adding List here
    if(task){
        const newTask = new doTask(task);
        myArr.push(newTask);
        
        const taskElem = document.createElement('ul');
        taskElem.id = 'item';
  
        const item = document.getElementById('todoId').appendChild(taskElem);
        item.innerHTML = `
            <li style="list-style:none;">
                 ${newTask.task}
                 <input type="submit" class="del" style="float:right; 
                 font-weight:bold; color:red;" value="Delete">&nbsp;&nbsp;
                 <input type="submit" class="next" style="float:right; 
                 font-weight:bold; color:green;" value="Move">
            </li><hr>`; 
          } 
  } //End of Adding List

// TODO Functions here
document.getElementById('todoId').addEventListener('click',function(event){
  if(event.target.classList.contains('del')){
      if(confirm("Delete task?"))
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
      document.getElementById('in-progressId').append(event.target.parentElement.parentElement);
    }
}
}) //end of TODO Functions

// In-Progress Functions here
document.getElementById('in-progressId').addEventListener('click',function(event){
  if(event.target.classList.contains('del')){
      if(confirm("Delete task?"))
      {
           event.target.parentElement.parentElement.remove();    
      }
  }
  if(event.target.classList.contains('back')){
    if(confirm("Move List?"))
    {
      document.getElementById('todoId').append(event.target.parentElement.parentElement); 
      event.target.remove();
    }
  }
  if(event.target.classList.contains('next')){
    if(confirm("Move List?"))
    {
      document.getElementById('doneId').append(event.target.parentElement.parentElement); 
      event.target.remove();
    }
  }
}) //End of In-Progress

// DONE Functions here
document.getElementById('doneId').addEventListener('click',function(event){
  if(event.target.classList.contains('del')){
      if(confirm("Delete task?"))
      {
           event.target.parentElement.parentElement.remove();    
      }
  }
  if(event.target.classList.contains('back')){
    if(confirm("Move List?"))
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
      document.getElementById('in-progressId').append(event.target.parentElement.parentElement); 
      event.target.remove();
    }
  }
})  //End of DONE Functions
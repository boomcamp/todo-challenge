const tasklist = [];
const proglist = [];


//constructor
function Task(task) {
    this.task = task;
    this.id = 'new';
  }



//add
  function addTask(task) {
    // if 'task' is "truthy"
     if (task) {
 
         const newTask = new Task(task);
         tasklist.push(newTask);
         document.getElementById('input_task').value = '';
     
         const taskElem = document.createElement('div');
         taskElem.id = 'todolist';
     
         const item = document.getElementById('todo').appendChild(taskElem);
         item.innerHTML = `
         <div class="todolist">
         <div class="right">
                  <button class="update"><img src="img/edit.png" alt="edit"> </button>  <br>
                  <button class="del"><img src="img/del.png" alt="del" id="del"> </button>
         </div>
         <p>  ${newTask.task} </p>
           
         <button id = "inprogbtn" class="right inprog_btn">In Progress</button>
             
        </div> 
           
           `;
 
       }
      }


     
//saving
 // event handler that calls the addTask function when we click the saveNewItem button element
 document.getElementById('addtask').addEventListener('click', function(event) { event.preventDefault();
  const task = document.getElementById('input_task').value.trim();
  addTask(task);
});



//to inprogress
document.getElementById('todo').addEventListener('click', function(event) {
 
  if (event.target.matches('button#inprogbtn')) {

   //event.target.parentElement.remove('inprogbtn');
   $(event.target).addClass("left todo_btn"); 
   var btn1 = document.createElement("BUTTON");
   event.target.setAttribute('id','todobtn');
   event.target.innerText = 'ToDo';

   var btn = document.createElement("BUTTON");
   $(btn).addClass("right done_btn"); 
   event.target.parentElement.append(btn);
   btn.setAttribute('id','donebtn');
   btn.appendChild(document.createTextNode('Done'));
   //event.target.parentElement.addClass('done');
   document.getElementById('inprogress').append(event.target.parentElement.parentElement);
  
  }
});



//to done
document.getElementById('inprogress').addEventListener('click', function(event) {
 
  if (event.target.matches('button#donebtn')) {
 
   
   //for in prog 
   var q = event.target.parentElement.querySelector('#todobtn');
   console.log(q);
   q.setAttribute('id','inprogbtn');
   q.innerText = 'In Progress';

   //for del
   var p = event.target.parentElement.querySelector('#donebtn');
    console.log(p);
    p.setAttribute('class','right del_btn');
    p.setAttribute('id','delbtn');
    event.target.innerText = 'Delete Task';




   document.getElementById('done').append(event.target.parentElement.parentElement);
  // element.parentNode.removeChild(element);
  }
});


//back todo
document.getElementById('inprogress').addEventListener('click', function(event) {
 
  if (event.target.matches('button#todobtn')) {
   
    //declare var for del btn of todo
   var element = event.target.parentElement.querySelector('#todobtn');

   //update btn
   var q = event.target.parentElement.querySelector('#donebtn');
   q.setAttribute('id','inprogbtn');
   q.innerText = 'In Progress';

   document.getElementById('todo').append(event.target.parentElement.parentElement);
   
   element.parentNode.removeChild(element);
  }
});

//back inprogress
document.getElementById('done').addEventListener('click', function(event) {
 
  if (event.target.matches('button#inprogbtn')) {
  //for in prog 
  var q = event.target.parentElement.querySelector('#inprogbtn');
  console.log(q);
  q.setAttribute('id','todobtn');
  q.innerText = 'To Do';

  var p = event.target.parentElement.querySelector('#delbtn');
  console.log(q);
  p.setAttribute('id','donebtn');
  p.innerText = 'Done';
 
    document.getElementById('inprogress').append(event.target.parentElement.parentElement);

  }
});


//delete task
document
.getElementById('done')
.addEventListener('click', function(event) {
  if (event.target.matches('button#delbtn')) {
    const itemText = event.target.innerText;
    
    tasklist.splice(tasklist.findIndex(function(item) { 
      console.log(item);
      return item.task === itemText }, 1))
    event.target.parentElement.parentElement.remove();
    alert("Delete Task Done");
  }
});

//del btn
document
.addEventListener('click', function(event) {
  if (event.target.matches('img#del')) {
    const itemText = event.target.innerText;
    console.log(itemText);
    tasklist.splice(tasklist.findIndex(function(item) { 
    
      return item.task === itemText }, 1))
    event.target.parentElement.parentElement.parentElement.remove();
    alert("Delete Task");
  }
});




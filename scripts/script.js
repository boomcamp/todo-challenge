const list = [];

function Task(task) {
    this.task = task;
    this.id = 'new-todo';
  }

  var newTask = document.querySelector('.taskSection')
  
  function addTask(task) {
    if (task) {
      const newTask = new Task(task);
      list.push(newTask);
      document.getElementById('newInput').value = '';
  
      const taskElem = document.createElement('li');
      taskElem.id = 'item';
  
      const item = document.getElementById('newList').appendChild(taskElem);
      item.innerHTML = 
      `<a id="new-todo" class="list-item">
        ${newTask.task}
        </a>` + `<br><button id="progress" class="list-button progress">
        In-progress
        </button>` + `<button id="done" class="list-button done">
        Done
        </button>`
        ;
    }
  }

  document.getElementById('submit')
  .addEventListener('click', function(event) {
    event.preventDefault();
    const task = document.getElementById('newInput').value.trim();
    addTask(task);
  });


  var buttonProgress = document.getElementById('newList');
  buttonProgress.addEventListener('click', function(event) {
    if (event.target.matches('list-item')) {
        event.target.id = 'inProgress';
        document.getElementById('currentList').append(event.target);
      }
  });

  var matchProgress = document.getElementById('currentList');
  matchProgress.addEventListener('click', function(event) {
    if (event.target.matches('list-item')) {
      event.target.id = 'archived';
      document.getElementById('archivedList').append(event.target);
    }
  });

$(document).ready(function(){
    $('.progress').on('click', () => {
        
    })

})
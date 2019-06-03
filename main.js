const list = [];

function Task(task) {
    this.task = task;
    this.id = 'new';
  }

  function addTask(task) {
    if (task) {
      const newTask = new Task(task);
      list.push(newTask);
      document.getElementById('newTodo').value = '';

      const taskElem = document.createElement('div');
      taskElem.id = 'item';

      const item = document.getElementById('newList').appendChild(taskElem);
      item.innerHTML = `
          <div id="new" class="todo-bg">
            ${newTask.task} &nbsp;
            <i class="fa fa-edit"></i>&nbsp;
            <i class="fa fa-trash-alt"></i>
          </div>
        `;
    }

  }

document
.getElementById('saveNewItem')
.addEventListener('click', function(event) {
event.preventDefault();
const task = document.getElementById('newTodo').value.trim();
addTask(task);
});




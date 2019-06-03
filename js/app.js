const list = [];

//function to add input
function Task(task){
    this.task = task;
    this.id = 'new';
}

function add_file(task){
    if(task){
        const newTask = new Task(task);
        list.push(newTask);
        document.getElementById('new_filed').value='';
        
        const taskElem = document.createElement('li');
        taskElem.id = 'item';//name for html element

        const item= document.getElementById('todo').appendChild(taskElem);
        item.innerHTML = `
            <a id="delete_id">
            <span class="fa fa-trash-o fa-lg" style="font-size:30px"></span>
            </a>
            
            <a id="move_id">
            <span class="fa fa-angle-double-right fa-lg" style="font-size:30px"></span>
            </a>
            <a id="new" class="list-grouped">
            ${newTask.task}
            </a>
            <br><br>
        `;
    }

}

//saving
document.getElementById('saved_new_filed').addEventListener('click', function(event){
  event.preventDefault();
  const task = document.getElementById('new_filed').value.trim();
  add_file(task);
});
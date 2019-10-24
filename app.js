function startTime() {
  var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();
  m = checkTime(m);
  s = checkTime(s);
  document.getElementById("time").innerHTML = h + ":" + m + ":" + s;
  var t = setTimeout(startTime, 500);
}
function checkTime(i) {
  if (i < 10) {
    i = "0" + i;
  } // add zero in front of numbers < 10
  return i;
}

const list = [];
function Task(task) {
  this.task = task;
  this.id = "new";
}
function addTask(task) {
  if (task) {
    const newTask = new Task(task);
    list.push(newTask);
    document.getElementById("my-input").value = "";

    const taskElem = document.createElement("li");
    taskElem.id = "item";

    const item = document.getElementById("newList").appendChild(taskElem);
    item.innerHTML = `
          <a id="new" class="list-group-item">
            ${newTask.task}
          </a>
        `;
  }
  newTaskForm.classList.toggle("hide");
}

document
  .getElementById("add-button")
  .addEventListener("click", function(event) {
    event.preventDefault();
    const task = document.getElementById("my-input").value.trim();
    addTask(task);
  });

document.getElementById("my-button").onclick = function() {
  document.getElementById("my-input").classList.toggle("show");
  document.getElementById("add-button").classList.toggle("show");
};

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
              <span id="buttons" style="float:right;" >
                <button id="next" class="next">move</button>
                <button id="remove" class="remove">delete</button>
                </span>
            </a>
          `;
  }
}

document
  .getElementById("add-button")
  .addEventListener("click", function(event) {
    event.preventDefault();
    const task = document.getElementById("my-input").value.trim();
    addTask(task);
  });

document.getElementById("newList").addEventListener("click", function(e) {
  if (e.target.classList.contains("remove")) {
    if (confirm("Delete this Todo task?")) {
      e.target.parentElement.parentElement.remove();
    }
  }
  if (e.target.classList.contains("next")) {
    if (confirm("Move to Progress?")) {
      const btn = document.createElement("button");
      btn.className = "back";
      btn.innerHTML = "Back";
      e.target.parentElement.append(btn);
      document
        .getElementById("currentList")
        .append(e.target.parentElement.parentElement);
    }
  }
});

document.getElementById("currentList").addEventListener("click", function(e) {
  if (e.target.classList.contains("remove")) {
    if (confirm("Delete this Todo task?")) {
      e.target.parentElement.parentElement.remove();
    }
  }
  if (e.target.classList.contains("next")) {
    if (confirm("Move to Done?")) {
      document
        .getElementById("doneList")
        .append(e.target.parentElement.parentElement);
    }
  }
  if (e.target.classList.contains("back")) {
    if (confirm("Back to Todo?")) {
      document
        .getElementById("newList")
        .append(e.target.parentElement.parentElement);
      event.target.remove();
    }
  }
});

document.getElementById("doneList").addEventListener("click", function(e) {
  if (e.target.classList.contains("remove")) {
    if (confirm("Delete this Todo task?")) {
      e.target.parentElement.parentElement.remove();
    }
  }
  if (e.target.classList.contains("back")) {
    if (confirm("Back to InProgress?")) {
      document
        .getElementById("currentList")
        .append(e.target.parentElement.parentElement);
    }
  }
});

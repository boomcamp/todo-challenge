window.onload = function(){
const list = [];
function Task(task) {
  this.task = task;
  this.id = "new";
}
function addTask(task) {
  if (task) {
    const newTask = new Task(task);
    list.push(newTask);
    document.getElementById("composeInput").value = "";

    const taskElem = document.createElement("tr");
    taskElem.id = "item";

    const item = document.getElementById("newList").appendChild(taskElem);
    item.innerHTML = `
            <td id="new" align="center">
               ${newTask.task}
               </td>
               <td>
               
                <img src ="img/next.png" id="next" class="next">
                <img src ="img/delete.png" class="remove"> 
               
            </td>
          `;
  }
}

    document.getElementById("addBtn").addEventListener("click",(event)=> {
    event.preventDefault();
    const task = document.getElementById("composeInput").value;
    if (task === "") {
    alert("NO TASK CAN BE ADDED ");
    }else{
    addTask(task);

  }
  });

document.getElementById("newList").addEventListener("click",(el)=>{

  if (el.target.classList.contains("remove")) {
    if (confirm("Delete this To do task?")) {
      el.target.parentElement.parentElement.remove();
    }
  }
  if (el.target.classList.contains("next")) {
    if (confirm("Move to Progress?")) {
      const btn = document.createElement("img");
      btn.src ="img/back.png";
      btn.className = "back";
      btn.innerHTML = "Back";
       el.target.parentElement.append(btn);
       document.getElementById("prgList").append(el.target.parentElement.parentElement);
    }
  }
});

document.getElementById("prgList").addEventListener("click",(e)=> {
  document.getElementById("next").style.display ="none";

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
       document.getElementById("next").style.display ="inline-flex";
       document.getElementById("next").style.width ="15%";

    if (confirm("Move to To do?")) {

      document.getElementById("newList").append(e.target.parentElement.parentElement);
      event.target.remove();
    }
  }
});

document.getElementById("doneList").addEventListener("click", (e)=> {
document.getElementById("next").style.display ="none";
document.getElementById("next").style.width ="15%";
  if (e.target.classList.contains("remove")) {
    if (confirm("Delete this To do task?")) {
      e.target.parentElement.parentElement.remove();
    }
  }
  if (e.target.classList.contains("back")) {
    document.getElementById("next").style.display ="inline-flex";
    if (confirm("Back to In Progress?")) {
      document.getElementById("prgList").append(e.target.parentElement.parentElement);
    }
  }
});
}
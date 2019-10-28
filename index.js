// checkbox

function todolist(evt, tasks) {
   var i, tabcontent, tablinks;

   tabcontent = document.getElementsByClassName("tabcontent");
   for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
   }

   tablinks = document.getElementsByClassName("tablinks");
   for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
   }

   document.getElementById(tasks).style.display = "block";
   evt.currentTarget.className += " active";
}

document.getElementById("defaultOpen").click();

// ---------add task---------

document.querySelector(".a-task").addEventListener("click", addTask);

function addTask() {
   var form = document.querySelector(".i-form").value;
   var allTasks = document.querySelector(".tasks-added");

   allTasks.insertAdjacentHTML(
      "afterend",
      `<div class="tasks-added" id="added-Task"> <label class="container"><p contentEditable="true">${form}</p><div class=icons><i class="fas fa-spinner" onclick="moveFunc(this)"></i><i class="far fa-trash-alt" id="pad" onclick="myFunc(this)"></i></div></label></div>`
   );
   document.querySelector(".i-form").value = "";
}

//------Edit Task

function editFunc(edit) {
   var editText = edit.parentNode.parentNode.querySelector("p").innerText;
   document.getElementById("s").value = editText;
   document.getElementById("save").addEventListener("click", function() {
      document.getElementById("superman").innerHTML = document.getElementById("s").value;

      document.getElementById("s").remove();
   });
}

// ----------delete task------------

function myFunc(elem) {
   let i = elem.parentNode;

   if (confirm("Are you sure you want to delete?")) i.parentNode.parentNode.remove();
   else false;
}

// ---------move task to in progress -------//

function moveFunc(move) {
   var mv = move.parentNode.parentNode.querySelector("p").innerText;
   var inProgress = document.querySelector(".inprogress");
   var rmProgress = move.parentNode.parentNode.parentNode;

   inProgress.insertAdjacentHTML(
      "afterend",
      `<div class="tasks-added"><label class="container"><p contentEditable="true">${mv}</p><div class="icons"><i class="far fa-check-circle" onclick="doneFunc(this)"></i> <i class="far fa-list-alt" id="pad" onclick="inProgToDo(this)"></i><i class="far fa-trash-alt" id="pad" onclick="rmInProgress(this)"></i></div> </label></div>`
   );

   rmProgress.remove();
}

//remove task in in progress

function rmInProgress(prog) {
   var rvInProgress = prog.parentNode.parentNode.parentNode;

   if (confirm("Are you sure you want to delete?")) rvInProgress.remove();
   else false;
}

// IN PROGRESS task to DONE

function doneFunc(done) {
   var doneTask = done.parentNode.parentNode.parentNode.querySelector("p").innerText;
   var dTask = document.querySelector(".done");
   var finished = done.parentNode.parentNode.parentNode;

   dTask.insertAdjacentHTML(
      "afterend",
      `<label class="container"><strike><p contentEditable="true">${doneTask}</p></strike> <div class="icons"><i class="far fa-list-alt" onclick="backToDo(this)"></i> <i class="fas fa-spinner" id="pad" onclick="backInProgress(this)"></i><i class="far fa-trash-alt" id="pad" onclick="removeDoneTask(this)"></i></div> </label>`
   );

   finished.remove();
}

//remove task in done

function removeDoneTask(removeDone) {
   var remDone = removeDone.parentNode.parentNode.parentNode;

   if (confirm("Are you sure you want to delete?")) remDone.remove();
   else false;
}

// DONE back to TO DO //

function backToDo(back) {
   var backTodo = back.parentNode.parentNode.querySelector("p").innerText;
   var backTD = document.querySelector(".tasks-added");
   var Back = back.parentNode.parentNode;

   backTD.insertAdjacentHTML(
      "afterend",
      `<div class="tasks-added" id="added-Task"> <label class="container"><p contentEditable="true">${backTodo}</p><div class=icons><i class="fas fa-spinner" onclick="moveFunc(this)"></i></i><i class="far fa-trash-alt" id="pad" onclick="myFunc(this)"></i></div></label></div>`
   );

   Back.remove();
}

// DONE task back to IN PROGRESS //

function backInProgress(backProg) {
   var backProgress = backProg.parentNode.parentNode.querySelector("p").innerText;
   var backIP = document.querySelector(".inprogress");
   var BackInProg = backProg.parentNode.parentNode;

   backIP.insertAdjacentHTML(
      "afterend",
      `<div class="tasks-added"> <label class="container"><p contentEditable="true">${backProgress}</p><div class="icons"><i class="far fa-check-circle" onclick="doneFunc(this)"></i><i class="far fa-list-alt" id="pad" onclick="backToDo(this)"></i><i class="far fa-trash-alt" id="pad" onclick="rmInProgress(this)"></i></div> </label></div>`
   );

   BackInProg.remove();
}

// IN PROGRESS task back to TO DO //

function inProgToDo(backtoTODO) {
   var progToToDo = backtoTODO.parentNode.parentNode.parentNode.querySelector("p").innerText;
   var backToDoProg = document.querySelector(".tasks-added");
   var progressToTodo = backtoTODO.parentNode.parentNode.parentNode;

   backToDoProg.insertAdjacentHTML(
      "afterend",
      `<div class="tasks-added" id="added-Task"> <label class="container"><p contentEditable="true">${progToToDo}</p><div class=icons><i class="fas fa-spinner" onclick="moveFunc(this)"></i><i class="far fa-trash-alt" id="pad" onclick="myFunc(this)"></i></div></label></div>`
   );

   progressToTodo.remove();
}

//-----clock----

var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var radius = canvas.height / 2;
ctx.translate(radius, radius);
radius = radius * 0.9;
setInterval(drawClock, 1000);

function drawClock() {
   drawFace(ctx, radius);
   drawNumbers(ctx, radius);
   drawTime(ctx, radius);
}

function drawFace(ctx, radius) {
   var grad;
   ctx.beginPath();
   ctx.arc(0, 0, radius, 0, 2 * Math.PI);
   ctx.fillStyle = "white";
   ctx.fill();
   grad = ctx.createRadialGradient(0, 0, radius * 0.95, 0, 0, radius * 1.05);
   grad.addColorStop(0, "#333");
   grad.addColorStop(0.5, "white");
   grad.addColorStop(1, "#333");
   ctx.strokeStyle = grad;
   ctx.lineWidth = radius * 0.1;
   ctx.stroke();
   ctx.beginPath();
   ctx.arc(0, 0, radius * 0.1, 0, 2 * Math.PI);
   ctx.fillStyle = "#333";
   ctx.fill();
}

function drawNumbers(ctx, radius) {
   var ang;
   var num;
   ctx.font = radius * 0.15 + "px arial";
   ctx.textBaseline = "middle";
   ctx.textAlign = "center";
   for (num = 1; num < 13; num++) {
      ang = (num * Math.PI) / 6;
      ctx.rotate(ang);
      ctx.translate(0, -radius * 0.85);
      ctx.rotate(-ang);
      ctx.fillText(num.toString(), 0, 0);
      ctx.rotate(ang);
      ctx.translate(0, radius * 0.85);
      ctx.rotate(-ang);
   }
}

function drawTime(ctx, radius) {
   var now = new Date();
   var hour = now.getHours();
   var minute = now.getMinutes();
   var second = now.getSeconds();
   //hour
   hour = hour % 12;
   hour = (hour * Math.PI) / 6 + (minute * Math.PI) / (6 * 60) + (second * Math.PI) / (360 * 60);
   drawHand(ctx, hour, radius * 0.5, radius * 0.07);
   //minute
   minute = (minute * Math.PI) / 30 + (second * Math.PI) / (30 * 60);
   drawHand(ctx, minute, radius * 0.8, radius * 0.07);
   // second
   second = (second * Math.PI) / 30;
   drawHand(ctx, second, radius * 0.9, radius * 0.02);
}

function drawHand(ctx, pos, length, width) {
   ctx.beginPath();
   ctx.lineWidth = width;
   ctx.lineCap = "round";
   ctx.moveTo(0, 0);
   ctx.rotate(pos);
   ctx.lineTo(0, -length);
   ctx.stroke();
   ctx.rotate(-pos);
}

const addBtn = document.querySelector(".input-button");
const textBox = document.querySelector(".add-text");
const todo = document.querySelector(".todo");

//TIME AND DATE
function startTime() {
  var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();
  m = checkTime(m);
  s = checkTime(s);
  document.getElementById("txt").innerHTML = h + ":" + m + ":" + s;
  var t = setTimeout(startTime, 500);

  let dateDisplay = document.querySelector(".date-display");

  let date =
    today.toLocaleString("en-us", { month: "long" }) +
    " " +
    today.getDate() +
    ", " +
    today.getFullYear();
  dateDisplay.innerHTML = date;
}
function checkTime(i) {
  if (i < 10) {
    i = "0" + i;
  } // add zero in front of numbers < 10
  return i;
}

addBtn.addEventListener("click", function() {
  if (textBox.value) addTodo(textBox.value);
  textBox.value = "";
});

//ADD
function addTodo(text) {
  const todoItem = document.createElement("div");
  todoItem.className = "todo-div";
  const item = document.querySelector(".todo").appendChild(todoItem);
  item.innerHTML += `<div class="user-content user-text" >
  <textarea class="item" onblur="changeValue(this, this.value)">${text}</textarea>
  <button
    class="remove-list fas fa-trash-alt"
    onclick="removetodoBtn(this)"
  ></button>
  <button
    class="done-todo fas fa-check-circle"
    onclick="addinProgress(this, this.value)" value="${text}"
  ></button>
</div>`;
}

function backTodo(e, text) {
  const todoItem = document.createElement("div");
  todoItem.className = "todo-div";
  const item = document.querySelector(".todo").appendChild(todoItem);
  item.innerHTML += `<div class="user-content user-text">
  <textarea class="item" onblur="changeValue5(this, this.value)">${text}</textarea>
  <button
    class="remove-list fas fa-trash-alt"
    onclick="removetodoBtn(this)"
  ></button>
  <button
    class="done-todo fas fa-check-circle"
    onclick="addinProgress(this, this.value)" value="${text}"
  ></button>
</div>`;
  e.parentNode.remove();
}

function addinProgress(e, text) {
  const pItem = document.createElement("div");
  pItem.className = "inprogress-div";
  const item = document.querySelector(".inprogress").appendChild(pItem);
  item.innerHTML += `<div class="user-content user-text">
  <textarea class="item" onblur="changeValue2(this, this.value)">${text}</textarea>
  <button
    class="progress-list fas fa-undo-alt"
    onclick="backTodo(this, this.value)" value="${text}"
  ></button>
  <button
    class="done-todo fas fa-check-circle"
    onclick="addDone(this, this.value)" value="${text}"
  ></button>
</div>`;
  e.parentNode.remove();
}

function backProgress(e, text) {
  const pItem = document.createElement("div");
  pItem.className = "inprogress-div";
  const item = document.querySelector(".inprogress").appendChild(pItem);
  item.innerHTML += `<div class="user-content user-text">
  <textarea class="item" onblur="changeValue4(this, this.value)">${text}</textarea>
  <button
    class="progress-list fas fa-undo-alt"
    onclick="backTodo(this, this.value)" value="${text}"
  ></button>
  <button
    class="done-todo fas fa-check-circle"
    onclick="addDone(this, this.value)" value="${text}"
  ></button>
</div>`;
  e.parentNode.remove();
}

function addDone(e, text) {
  const pItem = document.createElement("div");
  pItem.className = "done-div";
  const item = document.querySelector(".done").appendChild(pItem);
  item.innerHTML += `<div class="user-content user-text">
  <textarea class="done-text item" onblur="changeValue3(this, this.value)">${text}</textarea>
  <button
    class="remove-list fas fa-trash-alt"
    onclick="removetodoBtn(this)"
  ></button>
  <button
    class="done-todo fas fa-undo-alt"
    onclick="backProgress(this, this.value)" value="${text}"
  ></button>
</div>`;
  e.parentNode.remove();
}

//EDIT
function changeValue(e, text) {
  e.parentNode.parentNode.removeChild(e.parentNode);
  addTodo(text);
}
function changeValue2(e, text) {
  e.parentNode.parentNode.removeChild(e.parentNode);
  addinProgress(e, text);
}
function changeValue3(e, text) {
  e.parentNode.parentNode.removeChild(e.parentNode);
  addDone(e, text);
}
function changeValue4(e, text) {
  e.parentNode.parentNode.removeChild(e.parentNode);
  backProgress(e, text);
}
function changeValue5(e, text) {
  e.parentNode.parentNode.removeChild(e.parentNode);
  backTodo(e, text);
}

//DELETE
function removetodoBtn(e) {
  e.parentNode.parentNode.removeChild(e.parentNode);
}

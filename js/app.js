const todoBtn = document.querySelector(".btn-todo");
const progBtn = document.querySelector(".btn-prog");
const doneBtn = document.querySelector(".btn-done");
const input = document.querySelector(".task");
const input2 = document.querySelector(".task2");
const addBtn = document.querySelector(".add-btn");
const todo = document.querySelector(".content-area-todo");
const prog = document.querySelector(".content-area-prog");
const done = document.querySelector(".content-area-done");
const delBtn = document.querySelector(".del-btn");
const checkBtn = document.querySelector(".check-btn");
const backBtn = document.querySelector(".back-btn");

let clicked = false;

prog.style.display = "none";
done.style.display = "none";

todoBtn.addEventListener("click", function() {
  todo.style.display = "";
  prog.style.display = "none";
  done.style.display = "none";
});

progBtn.addEventListener("click", function() {
  todo.style.display = "none";
  prog.style.display = "";
  done.style.display = "none";
});

doneBtn.addEventListener("click", function() {
  todo.style.display = "none";
  prog.style.display = "none";
  done.style.display = "";
});

addBtn.addEventListener("click", function() {
  if (input.value) add(input.value);
  input.value = "";
});

function add(text) {
  var div = document.createElement("div");
  div.innerHTML += `<div class="t-cont">
  <textarea class="task2" type="text" onblur="changeValue(this, this.value)">${text}</textarea>
  <button class="fa fa-check check-btn" onclick="addprog(this, this.value)" value="${text}"></button>
  <button class="fa fa-trash del-btn" onclick="return this.parentNode.remove();"></i></button>
</div>`;
  todo.append(div);
}

function addprog(e, text) {
  var div = document.createElement("div");
  div.innerHTML += `<div class="t-cont">
  <textarea class="task2" type="text" onblur="changeValue2(this, this.value)">${text}</textarea>
  <button class="fa fa-check check-btn" onclick="adddone(this, this.value)" value="${text}"></button>
  <button class="fa fa-edit back-btn add-mar" onclick="backprog(this, this.value)" value="${text}"></button>
  </div>`;
  prog.append(div);
  e.parentNode.remove();
}

function backtodo(e, text) {
  var div = document.createElement("div");
  div.innerHTML += `<div class="t-cont">
  <textarea class="task2" type="text" onblur="changeValue5(this, this.value)">${text}</textarea>
  <button class="fa fa-check check-btn" onclick="addprog(this, this.value)" value="${text}"></button>
  <button class="fa fa-edit back-btn add-mar" onclick="addprog(this, this.value)" value="${text}"></button>
  </div>`;
  prog.append(div);
  e.parentNode.remove();
}

function backprog(e, text) {
  var div = document.createElement("div");
  div.innerHTML += `<div class="t-cont">
  <textarea class="task2" type="text" onblur="changeValue4(this, this.value)">${text}</textarea>
  <button class="fa fa-check check-btn" onclick="backtodo(this, this.value)" value="${text}"></button>
  <button class="fa fa-trash del-btn" onclick="return this.parentNode.remove();"></i></button>
  </div>`;
  todo.append(div);
  e.parentNode.remove();
}
function backdone(e, text) {
  var div = document.createElement("div");
  div.innerHTML += `<div class="t-cont">
  <textarea class="task2" type="text" onblur="changeValue6(this, this.value)">${text}</textarea>
  <button class="fa fa-check check-btn" onclick="adddone(this, this.value)" value="${text}"></button>
  <button class="fa fa-edit back-btn add-mar" onclick="add(this.value)" value="${text}"></button>
  </div>`;
  done.append(div);
  e.parentNode.remove();
}

function adddone(e, text) {
  var div = document.createElement("div");
  div.innerHTML += `<div class="t-cont">
  <textarea class="task2" type="text" onblur="changeValue3(this, this.value)">${text}</textarea>
  <button class="fa fa-edit back-btn"  onclick="addprog(this, this.value)" value="${text}"></button>
  <button class="fa fa-trash del-btn" onclick="return this.parentNode.remove();"></button>
  </div>`;
  done.append(div);
  e.parentNode.remove();
}

function changeValue(e, text) {
  e.parentNode.parentNode.removeChild(e.parentNode);
  add(text);
}
function changeValue2(e, text) {
  e.parentNode.parentNode.removeChild(e.parentNode);
  addprog(e, text);
}
function changeValue3(e, text) {
  e.parentNode.parentNode.removeChild(e.parentNode);
  adddone(e, text);
}
function changeValue4(e, text) {
  e.parentNode.parentNode.removeChild(e.parentNode);
  backprog(e, text);
}
function changeValue5(e, text) {
  e.parentNode.parentNode.removeChild(e.parentNode);
  backtodo(e, text);
}
function changeValue6(e, text) {
  e.parentNode.parentNode.removeChild(e.parentNode);
  backdone(e, text);
}

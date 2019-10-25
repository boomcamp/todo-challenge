const todoBtn = document.getElementsByClassName("btn")[0];
const progressBtn = document.getElementsByClassName("btn")[1];
const doneBtn = document.getElementsByClassName("btn")[2];
const todo = document.querySelector(".todo");
const progress = document.querySelector(".progress");
const done = document.querySelector(".done");
const input = document.querySelector(".inputText");
const addTodo = document.querySelector(".add-todo");
const divTodoIn = document.querySelector(".divTodoIn");
const move2progress = document.querySelector(".move2progress");
const t = document.getElementsByClassName("divTodo").length;
const p = document.getElementsByClassName("divProgress").length;
const d = document.getElementsByClassName("divDone").length;

let clicked = false;

progress.style.display = "none";
done.style.display = "none";
addTodo.style.display = "none";

todoBtn.addEventListener("click", function(event) {
  todo.style.display = "";
  progress.style.display = "none";
  done.style.display = "none";
  todoBtn.classList.remove("color");
  todoBtn.classList.add("color");
  progressBtn.classList.remove("color");
  doneBtn.classList.remove("color");
  event.stopPropagation();
});

progressBtn.addEventListener("click", function(event) {
  todo.style.display = "none";
  progress.style.display = "";
  done.style.display = "none";
  todoBtn.classList.remove("color");
  progressBtn.classList.add("color");
  doneBtn.classList.remove("color");
  event.stopPropagation();
});

doneBtn.addEventListener("click", function(event) {
  todo.style.display = "none";
  progress.style.display = "none";
  done.style.display = "";
  todoBtn.classList.remove("color");
  progressBtn.classList.remove("color");
  doneBtn.classList.add("color");
  event.stopPropagation();
});

input.addEventListener("focus", function() {
  if (!clicked) {
    // input.classList.add("extend");
    addTodo.style.display = "";
    clicked = true;
  }
});
input.addEventListener("blur", function() {
  if (clicked && input.value.length == 0) {
    // input.classList.remove("extend");
    addTodo.style.display = "none";
    clicked = false;
  }
});
input.addEventListener("input", function() {
  if (input.value.length === 0) {
    addTodo.disabled = true;
  } else {
    addTodo.disabled = false;
  }
});
addTodo.addEventListener("click", function() {
  var text = input.value;
  var div = document.createElement("div");
  div.innerHTML += `<div class="divTodo">
          <textarea class="ptext" onblur="edit1(this, this.value)">${input.value}</textarea>
          <button class="fa fa-trash-alt del" onclick="return this.parentNode.remove();"></button>
          <button class="fa fa-check-circle next" onclick="addProgress(this, this.value)" value="${text}"></button>
        </div>`;
  todo.append(div);
  input.value = "";
  input.classList.remove("extend");
  addTodo.style.display = "none";
  clicked = false;
});
function addTo(e, text) {
  var div = document.createElement("div");
  div.innerHTML += `<div class="divTodo">
          <textarea class="ptext" onblur="edit1(this, this.value)">${text}</textarea>
          <button class="fa fa-trash-alt del" onclick="return this.parentNode.remove();"></button>
          <button class="fa fa-check-circle next" onclick="addProgress(this, this.value)" value="${text}"></button>
        </div>`;
  todo.append(div);
  e.parentNode.remove();
}
function addProgress(e, text) {
  var div = document.createElement("div");
  div.innerHTML += `<div class="divProgress">
          <textarea class="ptext" onblur="edit2(this, this.value)">${text}</textarea>
          <button class="fas fa-undo return" onclick="addTo(this, this.value)" value="${text}"></button>
          <button class="fa fa-check-circle next" onclick="addDone(this, this.value)" value="${text}"></button>
        </div>`;
  progress.append(div);
  e.parentNode.remove();
}
function addDone(e, text) {
  var div = document.createElement("div");
  div.innerHTML += `<div class="divDone">
          <textarea class="ptext" onblur="edit3(this, this.value)">${text}</textarea>
          <button class="fas fa-undo return" onclick="addProgress(this, this.value)" value="${text}"></button>
          <button class="fa fa-trash-alt del" onclick="return this.parentNode.remove();"></button>
        </div>`;
  done.append(div);
  e.parentNode.remove();
}
function edit1(e, text) {
  e.parentNode.remove();
  addTo(e, text);
}
function edit2(e, text) {
  e.parentNode.remove();
  addProgress(e, text);
}
function edit3(e, text) {
  e.parentNode.remove();
  addDone(e, text);
}

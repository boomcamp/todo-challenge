loadEvents();
function loadEvents(){
document.querySelector('form').addEventListener('submit',submit);
document.querySelectorAll('ul')[0].addEventListener('click',deleteOrTick);
document.querySelectorAll('ul')[1].addEventListener('click',deleteOrTick);
document.querySelectorAll('ul')[2].addEventListener('click',deleteOrTick);
document.getElementById('clear').addEventListener('click',clearList);

}

function submit(e){
  e.preventDefault();
  let input = document.querySelector('input');
  if(input.value != '')
    addTask(input.value);
  input.value = '';
}
var counter = 0;
function addTask(task){
  let ul = document.querySelector('ul');
  let li = document.createElement('li');
    li.setAttribute("id",counter); 
    counter++;
  li.innerHTML = `<span class="delete">×</span><img src="left.png" alt="left" id="left"><img src="right.png" alt="right" id="right"><input class="check" type="checkbox"><input type= "text" id = "add" value ="${task}">`;
  ul.appendChild(li);
  document.querySelector('.tasks').style.display = 'block';


} 
document
.getElementById('newList')
.addEventListener('click', function(event) {
  var li = document.getElementById(event.target.parentNode.id);
  if (event.target.matches('img#right')) {
    document.getElementById('currentList').append(li);
  }
});

document
.getElementById('currentList')
.addEventListener('click', function(event) {
  var li = document.getElementById(event.target.parentNode.id);
  if (event.target.matches('img#left')) {
    document.getElementById('newList').append(li);
  }
});

document
.getElementById('currentList')
.addEventListener('click', function(event) {
  var li = document.getElementById(event.target.parentNode.id);
  if (event.target.matches('img#right')) {  
    document.getElementById('archivedList').append(li);
  }
});

document
.getElementById('archivedList')
.addEventListener('click', function(event) {
  var li = document.getElementById(event.target.parentNode.id);
  if (event.target.matches('img#left')) {  
    document.getElementById('currentList').append(li);
  }
});
function deleteOrTick(e){
  if(e.target.className == 'delete')
    deleteTask(e);
  else {
    tickTask(e);
  }  
}

function deleteTask(e){
  let remove = e.target.parentNode;
  let parentNode = remove.parentNode;
  parentNode.removeChild(remove);
}


function tickTask(e){
  const task = e.target.nextSibling;
  if(e.target.checked){
    task.style.textDecoration = "line-through";
    task.style.color = "#ff0000";
  }else {
    task.style.textDecoration = "none";
    task.style.color = "#2f4f4f";
  }
}

function clearList(e){
  let ul = document.getElementById('archivedList').innerHTML = '';
}

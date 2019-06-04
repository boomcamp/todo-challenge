var myNodelist = document.getElementsByTagName("LI");
var i;
 for (i = 0; i < myNodelist.length; i++) {
   var span = document.createElement("SPAN");
   var txt = document.createTextNode("x");
   span.className = "close";
   span.appendChild(txt);
   myNodelist[i].appendChild(span);
 }
 
var close = document.getElementsByClassName("close");
var i;
 for (i = 0; i < close.length; i++) {
   close[i].onclick = function() {
     var div = this.parentElement;
     div.style.display = "none";
   }
 }
 
var myNodelist = document.getElementsByTagName("LI");
var i;
  for (i = 0; i < myNodelist.length; i++) {
   var span = document.createElement("SPAN");
   var button = document.createElement('button');
   button.innerText = 'Edit';
   span.className = "button";
   span.appendChild(button);
   myNodelist[i].appendChild(span);
  }
 
 function newElement() {
   var li = document.createElement("li");
   var inputValue = document.getElementById("myInput").value;
   
    var span = document.createElement("SPAN");
    var button = document.createElement('button');
    button.innerText = 'Edit';
    span.className = "button";
    span.appendChild(button);
    li.appendChild(span);
   
   var span = document.createElement("SPAN");
   var t = document.createTextNode(inputValue);
   li.appendChild(t);
   if (inputValue === '') {
     // Does not accept blank input
   } else {
     document.getElementById("toDoList").appendChild(li);
   }
   document.getElementById("myInput").value = "";
  
   var span = document.createElement("SPAN");
   var txt = document.createTextNode("x");
   span.className = "close";
   span.appendChild(txt);
   li.appendChild(span);
  
 
   for (i = 0; i < close.length; i++) {
     close[i].onclick = function() {
       var div = this.parentElement;
       div.style.display = "none";
     }
   }
 }
 
document.getElementById('toDoList').addEventListener('click', function(event) {
  if (event.target.matches ('LI')) { 
    event.target.id = 'myToDo';
    document.getElementById('toProgress').append(event.target);

  }
});

document.getElementById('toProgress').addEventListener('click', function(event) {
  if (event.target.matches ('LI')) { 
    event.target.id = 'myInProgress';
    document.getElementById('doneTasks').append(event.target);
      if (event.target.tagName === 'LI') {
        event.target.classList.toggle('checked');
      }
    }
});

document.getElementById('doneTasks').addEventListener('click', function(event) {
  if (event.target.matches ('LI')) { 
    event.target.id = 'myDoneTasks';
    document.getElementById('allTasks').append(event.target);

  }
});

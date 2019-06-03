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
   button.innerText = 'To-do';
   span.className = "button";
   span.appendChild(button);
   myNodelist[i].appendChild(span);
 }
 
 
//

 
 var list = document.querySelector('ul');
 list.addEventListener('click', function(ev) {
   if (ev.target.tagName === 'LI') {
     ev.target.classList.toggle('checked');
   }
 }, false);
 
 function newElement() {
   var li = document.createElement("li");
   var inputValue = document.getElementById("myInput").value;
   
   var span = document.createElement("SPAN");
   var button = document.createElement('button');
   button.innerText = 'To-do';
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

 $( document ).ready(function() {
  $( ".toDoList" ).click(function() {
    $('#button').hide();
});
});
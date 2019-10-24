// js modal
var modal = document.getElementById("modal");
var btn = document.getElementById("btn");
var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
  modal.style.display = "block"; // open the modal 
}

span.onclick = function() {
  modal.style.display = "none"; // close modal
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none"; // close modal(clicked outside modal)
  }
}

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
  var todoTitle = document.querySelector('.m-input').focus();
  add_todo();
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


var home_todo_div = document.querySelector('#todo-home');
var progress_todo_div = document.querySelector('#todo-progress');
var done_todo_div = document.querySelector('#todo-done');
var trash_todo_div = document.querySelector('#todo-trash');

progress_todo_div.style.display = 'none';
done_todo_div.style.display = 'none';
trash_todo_div.style.display = 'none';

var footer_btn_active = document.querySelector('.actib');
var home = document.querySelector('button[data-id="home"]');
var progress = document.querySelector('button[data-id="progress"]');
var done = document.querySelector('button[data-id="done"]');
var trash = document.querySelector('button[data-id="trash"]');


home.addEventListener('click',actib);
done.addEventListener('click',actib);
progress.addEventListener('click',actib);
trash.addEventListener('click',actib);

function actib(){
    footer_btn_active.classList.remove('actib');
    footer_btn_active.removeAttribute('id');
    this.classList.add('actib');
    footer_btn_active = document.querySelector('.actib');
    footer_btn_active.setAttribute('id','ftr-btn');
    if(this.value=='progress'){
        progress_todo_div.style.display = '';
        done_todo_div.style.display = 'none';
        trash_todo_div.style.display = 'none';
        home_todo_div.style.display = 'none';
        btn.style.display = 'none';
    }else if(this.value=='home'){
        progress_todo_div.style.display = 'none';
        done_todo_div.style.display = 'none';
        trash_todo_div.style.display = 'none';
        home_todo_div.style.display = '';
        btn.style.display = '';
    }else if(this.value=='done'){
        progress_todo_div.style.display = 'none';
        done_todo_div.style.display = '';
        trash_todo_div.style.display = 'none';
        home_todo_div.style.display = 'none';
        btn.style.display = 'none';
    }else if(this.value=='trash'){
        progress_todo_div.style.display = 'none';
        done_todo_div.style.display = 'none';
        trash_todo_div.style.display = '';
        home_todo_div.style.display = 'none';
        btn.style.display = 'none';
    }
}


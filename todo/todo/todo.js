var dropdown = document.getElementById('dropdown');
var body = document.getElementsByTagName('body')[0];
var dropdownCont = document.querySelector('.dropdown-content');
var add = document.querySelector('.addBtn');
var todobtns = '<div class="edit">&#9998</div>' +
    '<div class="next">&#10004</div>' +
    '<div class="deletebtn">&#10006</div>';
var inprogbtns = '<div class="edit">&#9998</div>' +
    '<div class="dropdown" id="dropdown">&#10004' +
    '<div class="dropdown-content">' +
    '<p>To do</p>' +
    '<p>Done</p>' +
    '</div>' +
    '</div>' +
    '<div class="deletebtn">&#10006</div>';
var donebtns = '<div class="edit">&#9998</div>' +
    '<div class="next">&#11013</div>' +
    '<div class="deletebtn">&#10006</div>';
var nextbtn = '<div class="back">&larr;</div>' +
'<div class="proceed">&rarr;</div>';

add.addEventListener('click', function () {
    var newTask = document.getElementById('myInput').value;
    var newli = document.createElement('li');
    newli.innerHTML = newTask + todobtns;
    document.getElementById('todo').append(newli);
    document.getElementById('myInput').value = '';
})

window.setInterval(function(){


// delete activity from todo, in progress and done
var delArr = document.getElementsByClassName('deletebtn');
for(let z=0; z<delArr.length; z++){
    $(delArr[z]).on('click', function (e) {
        for (let x = 0; x < delArr.length; x++) {
            if (delArr[x] === e.target) {
                if(confirm('Are you sure?')){
                    e.target.parentElement.remove();
                }
                
            }
        }
    })
}


// transfer to progress
var nextArr = Array.from(document.getElementsByClassName('next'));
for(let z=0; z<nextArr.length; z++){
    nextArr[z].addEventListener('click', function (e) {
        for (let x = 0; x < nextArr.length; x++) {
            if (nextArr[x] === e.target) {
                document.getElementById('inprogress').append(e.target.parentElement);
                var last = document.getElementById('inprogress').lastChild;
                last.children[0].remove();
                last.children[0].remove();
                last.children[0].remove();
                last.insertAdjacentHTML('beforeend', '<div class="back">&larr;</div>' +
                '<div class="proceed">&rarr;</div>');
                console.log('transfer to progress');
                // // e.target.parentElement.remove;
            }
        }
    })
}

// transfer back to todo
var ddArr = Array.from(document.getElementsByClassName('back'));
for(let z=0; z<ddArr.length; z++){
    ddArr[z].addEventListener('click', function (e) {
        for (let x = 0; x < ddArr.length; x++) {
            if (ddArr[x] === e.target) {
                gobackTodo(e.target.parentElement);
                console.log('back to todo');
            }
        }
    })
}

// transfer to done
var ppArr = Array.from(document.getElementsByClassName('proceed'));
for(let z=0; z<ppArr.length; z++){
    ppArr[z].addEventListener('click', function (e) {
        for (let x = 0; x < ppArr.length; x++) {
            if (ppArr[x] === e.target) {
                goDone(e.target.parentElement);
            }
        }
    })
}

function gobackTodo(target){
    document.getElementById('todo').append(target);
    var last = document.getElementById('todo').lastChild;
    last.children[0].remove();
    last.children[0].remove();
    last.insertAdjacentHTML('beforeend', '<div class="edit">&#9998</div>' +
    '<div class="next">&#10004</div>' +
    '<div class="deletebtn">&#10006</div>');
    console.log(target);
}

function goDone(target){
    document.getElementById('done').append(target);
    var last = document.getElementById('done').lastChild;
    last.children[0].remove();
    last.children[0].remove();
    last.insertAdjacentHTML('beforeend', '<div class="edit">&#9998</div>' +
    '<div class="next">&#11013</div>' +
    '<div class="deletebtn">&#10006</div>');
}

// transfer to progress from done
var doneArr = Array.from(document.getElementsByClassName('backprogress'));
for(let z=0; z<doneArr.length; z++){
    doneArr[z].addEventListener('click', function (e) {
        for (let x = 0; x < doneArr.length; x++) {
            if (doneArr[x] === e.target) {
                document.getElementById('inprogress').append(e.target.parentElement);
                var last = document.getElementById('inprogress').lastChild;
                last.children[1].remove();
                last.children[1].remove();
                var firstChild = last.children[0];
                firstChild.classList.remove('edit');
                firstChild.classList.add('inprogress');
                firstChild.insertAdjacentHTML("afterend", '<div class="back">&larr;</div>' +
                '<div class="proceed">&rarr;</div>');
                // // e.target.parentElement.remove;
            }
        }
    })
}


// when editing task
var editArr = Array.from(document.getElementsByClassName('edit'));
for(let z=0; z<editArr.length; z++){
    editArr[z].addEventListener('click', function (e) {
        for (let x = 0; x < editArr.length; x++) {
            if (editArr[x] === e.target) {
                var value = e.target.parentElement.textContent;
                document.getElementById('editVal').value = value;
                e.target.parentElement.id = 'idd';
            }
        }
    })
}

// when editing task
var edit2Arr = Array.from(document.getElementsByClassName('edit'));
for(let z=0; z<edit2Arr.length; z++){
    edit2Arr[z].addEventListener('click', function (e) {
        for (let x = 0; x < edit2Arr.length; x++) {
            if (edit2Arr[x] === e.target) {
                e.target.id = 'modalBtn';
                
            }
        }
    })
}

// when saving
document.getElementById('modalSaveBtn').addEventListener('click', function(){
    var newVal = document.getElementById('editVal').value;
    document.getElementById('idd').textContent = '';
    document.getElementById('idd').textContent = newVal;
    document.getElementById('idd').insertAdjacentHTML("beforeend", todobtns);
    document.querySelector('.modal').style.display = 'none';
    document.getElementById('modalBtn').id = '';
    document.getElementById('idd').id = '';
    
    
})


// modal

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("modalBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
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
}, 1000)

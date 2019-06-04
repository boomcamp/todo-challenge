

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
var nextbtn = '<div class="dropdown" id="dropdown">&#10004' +
'<div class="dropdown-content">' +
'<p>To do</p>' +
'<p>Done</p>' +
'</div>' +
'</div>';

// design
// document.body.addEventListener('mouseover', function(e){
//     var x = e.offsetX;
//     var y = e.offsetY;
//     console.log(x);
//     document.body.style.background = 'linear-gradient(to left, rgb(255, 204, 255), rgb(204, 204, 255))';
// })

// dropdown events
dropdown.addEventListener('click', function () {
    dropdownCont.style.display = 'block';
})

document.addEventListener('click', function (e) {
    if (e.target === dropdownCont || e.target === dropdown) {
        // do nothing
    }
    else {
        dropdownCont.style.display = 'none';
    }
})

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


// add task
add.addEventListener('click', function () {
    var newTask = document.getElementById('myInput').value;
    var newli = document.createElement('li');
    newli.innerHTML = newTask + todobtns;
    document.getElementById('todo').append(newli);
    document.getElementById('myInput').value = '';
})

// transfer to progress
var nextArr = Array.from(document.getElementsByClassName('next'));
for(let z=0; z<nextArr.length; z++){
    nextArr[z].addEventListener('click', function (e) {
        for (let x = 0; x < nextArr.length; x++) {
            if (nextArr[x] === e.target) {
                document.getElementById('inprogress').append(e.target.parentElement);
                var last = document.getElementById('inprogress').lastChild;
                last.children[1].remove();
                last.children[1].remove();
                var firstChild = last.children[0];
                firstChild.classList.remove('edit');
                firstChild.classList.add('inprogress');
                firstChild.insertAdjacentHTML("afterend", nextbtn);
                // // e.target.parentElement.remove;
            }
        }
    })
}

// transfer either to todo or done
var ddArr = Array.from(document.getElementsByClassName('dropdown'));
for(let z=0; z<ddArr.length; z++){
    ddArr[z].addEventListener('click', function (e) {
        for (let x = 0; x < ddArr.length; x++) {
            if (ddArr[x] === e.target) {
                var dropdownChild = e.target.children[0];
                //var todo = dropdownChild.children;
                dropdownChild.addEventListener('click', function(e){
                    if(e.target.innerText === 'To do'){
                        gobackTodo(e.target.parentElement.parentElement.parentElement);
                    }
                    else if(e.target.innerText === 'Done'){
                        goDone(e.target.parentElement.parentElement.parentElement);
                    }
                })

            }
        }
    })
}

function gobackTodo(target){
    document.getElementById('todo').append(target);
    var lastChild = document.getElementById('todo').lastChild;
    lastChild.children[0].remove();
    lastChild.children[0].insertAdjacentHTML("afterend", todobtns);
    lastChild.children[0].remove();
}

function goDone(target){
    document.getElementById('done').append(target);
    var lastChild = document.getElementById('done').lastChild;
    lastChild.children[0].remove();
    lastChild.children[0].insertAdjacentHTML("afterend", donebtns);
    lastChild.children[0].remove();
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
                firstChild.insertAdjacentHTML("afterend", nextbtn);
                // // e.target.parentElement.remove;
            }
        }
    })
}

// editing a task
var editArr = Array.from(document.getElementsByClassName('edit'));
for(let z=0; z<editArr.length; z++){
    editArr[z].addEventListener('click', function (e) {
        for (let x = 0; x < editArr.length; x++) {
            if (editArr[x] === e.target) {
                // variables
                var parent = e.target.parentElement;
                var grandParent = parent.parentElement;
                parent.classList.add('editInput');
                var parentVal = $('.editInput').contents().first('[nodeType=3]').text();
                console.log(parentVal);
                // create li element and appends other elements
                var createLi = document.createElement('li');
                var createEdit = document.createElement('input');
                createEdit.value = parentVal;
                createEdit.setAttribute("type", "text");
                var createbtn = document.createElement('div');
                createbtn.classList.add('edit2');
                createbtn.id = 'edit2';
                createbtn.appendChild(document.createTextNode('Save'));
                createLi.append(createEdit);
                createLi.append(createbtn);
                $(".editInput").after(createLi);
                
                
            }
        }
    })
}

// saving edit text
// var edit2Arr = Array.from(document.getElementsByClassName('edit2'));
// for(let z=0; z<edit2Arr.length; z++){
//     edit2Arr[z].addEventListener('click', function(e){
//         for(let x=0; x<edit2Arr.length; x++){
//             if(edit2Arr[x] === e.target){
//                 console.log(e.target);
//             }
//         }
//     })
// }

// var btnsArr = document.getElementsByClassName('btns');
// for(let x=0; x<btnsArr.length; x++){
    $('.btns').on('click', function(e){
        console.log(e.target);
    })
// }

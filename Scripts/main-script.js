(function(){
    
    let add = document.getElementById('addForm');
    let inTxt = document.getElementById('txtVal');
    let todo = document.getElementById('todoLists');
    let prog = document.getElementById('progressLists');
    let done = document.getElementById('doneList');
    let all = document.getElementById('list');
    
    let items = [];

    add.addEventListener('submit', addItem);

    function addItem(e){
        e.preventDefault();
        
        let newItem = document.getElementById('txtVal').value;
        let li = document.createElement('li');
        let rem = document.createElement('span');
        let inProg = document.createElement('span');
        
        li.className = 'list-item hover';
        li.appendChild(document.createTextNode(newItem));

        rem.className = 'hover remove-item';
        rem.appendChild(document.createTextNode('x'));

        li.appendChild(rem);
        todo.appendChild(li);

        inTxt.value = "";
    }

    inTxt.addEventListener('input',enableSubmit);

    function enableSubmit(){
        let submit = document.getElementById('submit');
        if(inTxt.value){
            submit.removeAttribute('disabled');
        }else{
            submit.setAttribute("disabled", "disabled");
        }
    }

    todo.addEventListener('click', remItem);

    function remItem(e){
        if(e.target.classList.contains('remove-item')){
            if(confirm('Are you sure you want to remove this item from the list?')){
                let li = e.target.parentElement;
                todo.removeChild(li);
            }
        }else{
            let btn = e.target.outerHTML
                        .replace(/remove-item">x/gm,'up">back');
            todo.removeChild(e.target);
            prog.insertAdjacentHTML('afterbegin',btn);
        }
    }

    prog.addEventListener('click', inProg);

    function inProg(e){
        if(e.target.classList.contains('up')){
            let btn = e.target.parentElement.outerHTML
                        .replace(/up">back/gm,'remove-item">x');
            prog.removeChild(e.target.parentElement);
            todo.insertAdjacentHTML('afterbegin',btn);
        }else{
            prog.removeChild(e.target);
            done.appendChild(e.target);
        }
    }

    done.addEventListener('click', doneF);

    function doneF(e){
        if(e.target.classList.contains('up')){
            done.removeChild(e.target.parentElement);
            prog.appendChild(e.target.parentElement);
        }else{
            if(confirm('Are you sure you want to remove this item from the done list?')){
                let li = e.target;
                done.removeChild(li);
            }
        }
    }

    all.addEventListener('click', editItem);

    function editItem(e){
        if(e.target.classList.contains('list-item')){
            // add edit button
            // open edit form
            // save / cancel
        }
    }

})()
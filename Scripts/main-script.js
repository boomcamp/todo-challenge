(function(){
    
    function initLocalStorage(){
        localStorage.setItem("todo",[]);
        localStorage.setItem("active",[]);
        localStorage.setItem("done",[]);
    }

    let add = document.getElementById('addForm');
    let inTxt = document.getElementById('txtVal');
    let todo = document.getElementById('todoLists');
    let prog = document.getElementById('progressLists');
    let done = document.getElementById('doneList');
    let overlay = document.getElementById('overlay');
    
    let items = [];

    add.addEventListener('submit', addItem);

    function addItem(e){
        e.preventDefault();

        let newItem = document.getElementById('txtVal').value;
        let li = document.createElement('li');
        let rem = document.createElement('span');
        let edit = document.createElement('span');
        
        li.className = 'list-item hover';
        li.appendChild(document.createTextNode(newItem));

        rem.className = 'hover remove-item';

        edit.className = 'hover edit-item';

        li.appendChild(rem);
        li.appendChild(edit);
        todo.appendChild(li);

        if(!localStorage.length)
        initLocalStorage();
        addLS('todo',inTxt.value);

        inTxt.value = "";
        submit.setAttribute("disabled", "disabled");
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

    todo.addEventListener('click', todoF);

    function todoF(e){
        if(e.target.classList.contains('remove-item')){
            if(confirm('Are you sure you want to remove this item from the list?')){
                let li = e.target.parentElement;
                removeFromLS('todo',li.firstChild.textContent);
                todo.removeChild(li);
            }
        }else if(e.target.classList.contains('edit-item')){
            updateItem(e);
        }else{
            let btn = e.target.outerHTML
                        .replace(/remove-item">/gm,'up">');
            addLS('active',e.target.firstChild.textContent);
            removeFromLS('todo',e.target.firstChild.textContent);
            todo.removeChild(e.target);
            prog.insertAdjacentHTML('afterbegin',btn);
        }
    }

    prog.addEventListener('click', inProg);

    function inProg(e){
        if(e.target.classList.contains('up')){
            let li = e.target.parentElement;
            let btn = li.outerHTML
                        .replace(/up">/gm,'remove-item">');
            addLS('todo',li.firstChild.textContent);
            removeFromLS('active',li.firstChild.textContent);
            prog.removeChild(li);
            todo.insertAdjacentHTML('afterbegin',btn);
        }else if(e.target.classList.contains('edit-item')){
            updateItem(e);
        }else{
            addLS('done',e.target.firstChild.textContent);
            removeFromLS('active',e.target.firstChild.textContent);
            prog.removeChild(e.target);
            done.appendChild(e.target);
        }
    }

    done.addEventListener('click', doneF);

    function doneF(e){
        if(e.target.classList.contains('up')){
            let li = e.target.parentElement;
            addLS('active',li.firstChild.textContent);
            removeFromLS('done',li.firstChild.textContent);
            done.removeChild(li);
            prog.appendChild(li);
        }else if(e.target.classList.contains('edit-item')){
            updateItem(e);
        }else{
            if(confirm('Are you sure you want to remove this item from the done list?')){
                let li = e.target;
                removeFromLS('done',li.parentElement.firstChild.textContent);
                done.removeChild(li);
            }
        }
    }

    let editing = document.getElementById('edit-item');
    editing.addEventListener('input', updating);

    function updateItem(e){
        let li = e.target.parentElement;
        overlay.style.display = "block";
        editing.value = li.firstChild.textContent;

        let updItem = document.getElementById('update');
        updItem.addEventListener('click', submitUpdate);

        function submitUpdate(){
            let taskList = li.parentElement.getAttribute('id');
            let task = taskList === 'todoLists' ? 'todo' : (taskList === 'doneList' ? 'done': 'active');
            editLS(task, li.firstChild.textContent, editing.value);
            
            li.firstChild.textContent = editing.value;
            closeForm();
            updItem.removeEventListener('click', submitUpdate);
        }
    }

    function updating(){
        let updBtn = document.getElementById('update');
        if(editing.value) updBtn.removeAttribute('disabled');
        else updBtn.setAttribute("disabled", "disabled");
    }

    let cancel = document.getElementById('cancel');
    cancel.addEventListener('click', closeForm);

    function closeForm(){
        overlay.style.display = "none";
    }

    function removeFromLS(task,item){
        let ls_arr = localStorage.getItem(task).split(',');
        let newArr = [];
        for(k in ls_arr){
            if(ls_arr[k]!==item)
            newArr.push(ls_arr[k]);
        }
        localStorage.setItem(task,newArr);
    }

    function addLS(task,item){
        let lsGetItem = localStorage.getItem(task).split(",");
        
        lsGetItem.push(item);

        localStorage.setItem(task,lsGetItem);
    }

    function editLS(task,old,item){
        let ls_arr = localStorage.getItem(task).split(',');
        let newArr = [];
        for(k in ls_arr){
            if(ls_arr[k]!==old)
            newArr.push(ls_arr[k]);
            else
            newArr.push(item);
        }
        localStorage.setItem(task,newArr);
    }
})()
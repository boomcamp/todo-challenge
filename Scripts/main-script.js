(function(){
    
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
        let inProg = document.createElement('span');
        let edit = document.createElement('span');
        
        li.className = 'list-item hover';
        li.appendChild(document.createTextNode(newItem));

        rem.className = 'hover remove-item';
        rem.appendChild(document.createTextNode('x'));

        edit.className = 'hover edit-item';
        edit.appendChild(document.createTextNode('e'));

        li.appendChild(rem);
        li.appendChild(edit);
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
        }else if(e.target.classList.contains('edit-item')){
            updateItem(e);
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
        }else if(e.target.classList.contains('edit-item')){
            updateItem(e);
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
        }else if(e.target.classList.contains('edit-item')){
            updateItem(e);
        }else{
            if(confirm('Are you sure you want to remove this item from the done list?')){
                let li = e.target;
                done.removeChild(li);
            }
        }
    }

    let editing = document.getElementById('edit-item');
    editing.addEventListener('input', updating);

    function updateItem(e){
        overlay.style.display = "block";
        editing.value = e.target.parentElement.firstChild.textContent;

        let updItem = document.getElementById('update');
        updItem.addEventListener('click', submitUpdate);

        function submitUpdate(){
            e.target.parentElement.firstChild.textContent = editing.value;
            closeForm();
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
})()
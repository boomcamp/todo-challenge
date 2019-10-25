const monthNames = ["January", "February", "March", "April", "May", "June","July", "August", "September", "October", "November", "December"];
const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

var today = new Date();
var date = today.getDate();
var day = today.getDay();
var month = today.getMonth();
var year = today.getFullYear();


document.querySelector('.date').innerHTML = dayNames[day] + " " + date + " " + monthNames[month];
// fetch data to the localStorage if have
if(localStorage.getItem('todo') !==  null)
{
    let  gtodo = JSON.parse(localStorage.getItem('todo'));

    for(let i = 0; i < gtodo.length; i++){
        const   gtr = document.createElement('tr');
                gtr.className = "itemNew";
                gtr.innerHTML = `<td class="item"><input type="text" value="${gtodo[i]}" class="content" disabled></td>
                            <td  width="300px">
                                <button class="edit">Edit</button>
                                <button class="delete">Delete</button>
                                <button class="next">Next</button>
                            </td>`;
            
        const gpost = document.querySelector('.todo-items');
        gpost.appendChild(gtr);
    }
}

document.querySelector('.btn').addEventListener('click',function(e){
    let input = document.querySelector('.post').value;

    if(input == ''){
        alert("Fill up the text!");
    }else{
        
        const tr = document.createElement('tr');
        tr.className = "itemNew";
        tr.innerHTML = `<td class="item"><input type="text" value="${input}" class="content" disabled></td>
                        <td  width="300px">
                            <button class="edit">Edit</button>
                            <button class="delete">Delete</button>
                            <button class="next">Next</button>
                        </td>`;
        
        const post = document.querySelector('.todo-items');
        post.appendChild(tr);

        // Local Storage
        if(localStorage.getItem('todo') ===  null){
            let todolist = [];
            todolist.push(input);
            localStorage.setItem('todo',JSON.stringify(todolist)); //Turn to a string
        }else{
            let todolist = JSON.parse(localStorage.getItem('todo'));
            todolist.push(input);
            localStorage.setItem('todo',JSON.stringify(todolist));
        }
        document.querySelector('.post').value = '';
    }
})

document.querySelector('.todo-items').addEventListener('click',function(e){
    if(e.target.classList.contains('delete')){
        if(confirm("Are you  sure?"))
        {
            let value = e.target.parentElement.previousElementSibling.firstChild.value;
            e.target.parentElement.parentElement.remove();   
            let  dtodo = JSON.parse(localStorage.getItem('todo'));
            for(let i = 0; i < dtodo.length; i++){
                if(dtodo[i] === value){
                    dtodo.splice(i, 1);
                }
            }
            localStorage.setItem('todo',JSON.stringify(dtodo));
        }
    }
    if(e.target.classList.contains('next')){
        if(confirm("Are you  sure you want to move?"))
        {
            const btn = document.createElement('button');
            btn.className = "back";
            btn.innerHTML = "Back";
            e.target.parentElement.append(btn);
            document.querySelector('.inProg-items').append(e.target.parentElement.parentElement); 

            let value = e.target.parentElement.previousElementSibling.firstChild.value;
            let  dtodo = JSON.parse(localStorage.getItem('todo'));
            for(let i = 0; i < dtodo.length; i++){
                if(dtodo[i] === value){
                    dtodo.splice(i, 1);
                }
            }
            localStorage.setItem('todo',JSON.stringify(dtodo));
        }
    }
    if(e.target.classList.contains('edit')){
        let item = e.target.parentElement;
        let td = item.previousElementSibling.firstChild;
        item.innerHTML = `<button class="save">Save</button>`;
        td.disabled = false;
        td.style.border = "1px solid #aaa";
    }
    if(e.target.classList.contains('save')){
        let item = e.target.parentElement;
        let td = item.previousElementSibling.firstChild;
        td.disabled = true;
        td.style.border = "none";
        item.innerHTML = `<button class="edit">Edit</button><button class="delete">Delete</button><button class="next">Next</button>`;
    }
})
document.querySelector('.inProg-items').addEventListener('click',function(e){
    if(e.target.classList.contains('delete')){
        if(confirm("Are you  sure?"))
        {
             e.target.parentElement.parentElement.remove();    
        }
    }
    if(e.target.classList.contains('back')){
        if(confirm("Are you  sure you want to move?"))
        {
            document.querySelector('.todo-items').append(e.target.parentElement.parentElement); 
            e.target.remove();
        }
    }
    if(e.target.classList.contains('next')){
        if(confirm("Are you  sure you want to move?"))
        {
            document.querySelector('.done-items').append(e.target.parentElement.parentElement); 
            e.target.remove();
        }
    }
    if(e.target.classList.contains('edit')){
        let item = e.target.parentElement;
        let td = item.previousElementSibling.firstChild;
        item.innerHTML = `<button class="save">Save</button>`;
        td.disabled = false;
        td.style.border = "1px solid #aaa";
    }
    if(e.target.classList.contains('save')){
        let item = e.target.parentElement;
        let td = item.previousElementSibling.firstChild;
        td.disabled = true;
        td.style.border = "none";
        item.innerHTML = `<button class="edit">Edit</button><button class="delete">Delete</button><button class="next">Next</button><button class="back">Back</button>`;
    }
})
document.querySelector('.done-items').addEventListener('click',function(e){
    if(e.target.classList.contains('delete')){
        if(confirm("Are you  sure?"))
        {
             e.target.parentElement.parentElement.remove();    
        }
    }
    if(e.target.classList.contains('back')){
        if(confirm("Are you  sure you want to move?"))
        {
            const btn = document.createElement('button');
            btn.className = "next";
            btn.innerHTML = "Next";
            e.target.parentElement.append(btn);
            document.querySelector('.inProg-items').append(e.target.parentElement.parentElement); 
        }
    }
    if(e.target.classList.contains('edit')){
        let item = e.target.parentElement;
        let td = item.previousElementSibling.firstChild;
        item.innerHTML = `<button class="save">Save</button>`;
        td.disabled = false;
        td.style.border = "1px solid #aaa";
    }
    if(e.target.classList.contains('save')){
        let item = e.target.parentElement;
        let td = item.previousElementSibling.firstChild;
        td.disabled = true;
        td.style.border = "none";
        item.innerHTML = `<button class="edit">Edit</button><button class="delete">Delete</button><button class="back">Back</button>`;
    }
})

function addTask(description , date){
    this.description = description;
    this.date = date;
}
let itemsArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [];

function listCreate(description , date){
    var taskList = $(
        '<li class="list-group-item">' +
            '<span class="description">'+ description+'</span>'+
        '</li>'
    );

    $('#taskList').prepend(taskList);
}
function listDisplay(){
    const data = JSON.parse(localStorage.getItem('items'))
    data.forEach(element => {
            listCreate(element.description);
    })
}
$(document).ready(function(){
 
   $('#todoForm').on('submit' , function(){
        var description = document.querySelector('.text');
        var date = new Date();
        var newTask = new addTask(description.value , date);

       

        itemsArray.push(newTask);

        console.log(itemsArray);

        localStorage.setItem('items', JSON.stringify(itemsArray))
        
        description.value = '';
        
   });

   
   listDisplay();

  
   

})


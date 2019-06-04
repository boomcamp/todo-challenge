
let itemsArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [];

function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    var ampm = h >= 12 ? 'pm' : 'am';
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('header-time').innerHTML =
    h + ":" + m + ":" +  s +" " + ampm;
    var t = setTimeout(startTime, 500);
  
  
    let dateDisplay = document.querySelector('.date-display');
   
    let date = today.toLocaleString('en-us', { month: 'long' })+ ' ' + today.getDate() + ', ' + today.getFullYear();
    dateDisplay.innerHTML = date
  
  }
  function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
    }

function addTask(taskId , description , date , status){
    this.taskId = taskId;
    this.description = description;
    this.date = date;
    this.status = status;
}


function normalState(id){
    itemsArray[id].status = 'pending';
  
    localStorage.clear();
    localStorage.setItem('items', JSON.stringify(itemsArray))
    console.log(itemsArray);
    location.reload();
}

function completeTask(id){
    itemsArray[id].status = 'done';
  
    localStorage.clear();
    localStorage.setItem('items', JSON.stringify(itemsArray))
    console.log(itemsArray);
    location.reload();
}


function progressTask(id){
    itemsArray[id].status = 'progress';
  
    localStorage.clear();
    localStorage.setItem('items', JSON.stringify(itemsArray))
    console.log(itemsArray);
    location.reload();
}

function deleteTask(id){


    newItemsArr = itemsArray;
    newItemsArr.splice(id, 1);

    localStorage.clear();

    localStorage.setItem('items', JSON.stringify(newItemsArr))
    console.log(newItemsArr);
    
    location.reload();
    
}


function listCreate(taskId , description , date , number , status){
    var flagBtn = '';
    var taskDescription = '';




    if(status == 'pending'){
        flagBtn = '<button class="btn btn-proceed" id="progressTask" onclick="progressTask('+number+')"><i class="fa fa-flag-o"></i></button>';

        taskDescription = '<a href="#">'+ description +'</a> ';
    }
    else if(status == 'progress'){
        flagBtn = '<button class="btn btn-done" id="progressTask" onclick="completeTask('+number+')"><i class="fa fa-check"></i></button>';

        taskDescription = '<a href="#" class="orange">'+ description +'</a>&nbsp;<small class="small-add orange">(In Progress)</small>'

    }
    else if(status == 'done'){
        flagBtn = '<button class="btn btn-cancel" id="progressTask" onclick="normalState('+number+')"><i class="fa fa-minus"></i></button>';
        
        taskDescription = '<del ><a href="#" class="green">'+ description +'</a></del> &nbsp;<small class="small-add green">(Completed)</small>';

    }

    var taskList = $(
        '<li class="list-group-item item-'+number+'">' +
            '<div class="description">' +
                taskDescription +
                
                '<br>' +
                

                '<div class="description-date">' +
                    '<i class="fa fa-clock-o"></i>&nbsp;&nbsp;'+ 
                     jQuery.timeago(date) +
                '</div>' +
            '</div>' +

            '<div class="actions">'+ 
                 flagBtn +
                
                '<button class="btn btn-delete" id="deleteTask" onclick="deleteTask('+number+')"><i class="fa  fa-trash-o"></i></button>'+
               
            '</div>' +
        '</li>' 
    );
  
    $('#taskList').prepend(taskList);
}
function listDisplay(){
    
    data = JSON.parse(localStorage.getItem('items'))
    if(data.length > 0){
        var num = 0;
        data.forEach(element => {
            

         

            listCreate(element.taskId ,element.description , element.date , num , element.status);


            num++;
        })

        $('.no-task').remove();
    }
    
}
$(document).ready(function(){
    startTime();
   $('#todoForm').on('submit' , function(){
        var description = document.querySelector('.text');
        var date = new Date();
        var taskId = itemsArray.length;

        var newTask = new addTask(taskId , description.value , date , 'pending');
        
        itemsArray.push(newTask);

        console.log(itemsArray);

        localStorage.setItem('items', JSON.stringify(itemsArray))
        
        description.value = '';

        
        
   });

   listDisplay();

})



var i = 0;
function displayDate(){
    


}

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

function todoDone(id){
    console.log('id = ' + id);
    var x = '.' + id;
    let elem = document.getElementsByClassName(id);

    
    $(x).addClass('done');
    removeProgress(id);
    cancelDone(id);
}


function cancelDone(elementId){
    var CancelElem = '.cancelAction-'+elementId;
    
    var addCancel = $(
        '<span class="pull-right cancelAction-'+elementId+'">' +
            '<button class="btn btn-cancel" onclick="normalState('+elementId+')">'+
                '<i class="fa fa-minus-square"></i>'+                 
            '</button>'+
        '</span>'    
    );
    
    $(CancelElem).prepend(addCancel);
}


function removeProgress(elementId){
    var Elem = '.description-'+elementId;

    $(Elem).remove();

    var removeDoneAction = '.doneAction-' + elementId;

    $(removeDoneAction).remove();


}
function progressTodo2(id){
    console.log(id);
}

function normalState(elementId){
    console.log('asdasd' + elementId);

    var cancelThis = '.cancelAction-' + elementId;

    $(cancelThis).remove();

    var addProgress = $(

        '<span class="pull-right action1-'+i+'">' +
            '<button class="btn btn-proceed" onclick="progressTodo2('+elementId+')">'+
             '<i class="fa fa-flag"></i>'+
            '</button>'+
        '</span>'
    ); 
    
    var progressElem = '.progressAction-' + elementId;

    $(progressElem).prepend(addProgress);
    
    var x = '.' + elementId;
  
    $(x).removeClass('done');

}
function progressTodo(id){
    console.log('xexe' + id);
    var description_id = '.description-'+id;
    var action1 = '.action1-'+id;
    var doneAction = '.doneAction-'+id;
    
    var flagTodo = $(
        '<small style="color:orange">(In progress)</small>'
    );

    $(description_id).prepend(flagTodo);
    
    $(action1).remove();


    var addDone = $(
        '<span class="pull-right action-1-'+id+'">' +
            '<button class="btn btn-done" onclick="todoDone('+id+')">'+
                '<i class="fa fa-check"></i>'+                 
            '</button>'+
        '</span>'                 
    );

    $(doneAction).prepend(addDone);
    console.log(document.querySelector(description_id));
    
}


function removeNoTask(){
    let noTask = document.querySelector('.no-task');
    if(i > 0){
        noTask.style.display = 'none';
    }
    else{
        noTask.style.display = 'flex';
    }
}


function deleteTodo(id){
    i--;
    var x = '.'+id;
    $(x).remove();

    removeNoTask();
}   

$(document).ready(function(){
    startTime();
    
    $('#todoForm').on('submit' , function(e){
        var todoInput = document.querySelector('.text');
        

        var newTodo = $(
            '<li class="list-group-item '+i+'">' +
                '<span class="description">'+todoInput.value+' <span class="description-'+i+'"></span></span> ' + 
                
                '<span class="pull-right progressAction-'+i+'"></span>'+
                '<span class="pull-right doneAction-'+i+'"></span>'+
                '<span class="pull-right cancelAction-'+i+'"></span>'+
                
                '<span class="pull-right action1-'+i+'">' +
                    '<button class="btn btn-proceed" onclick="progressTodo('+i+')">'+
                       '<i class="fa fa-flag"></i>'+
                    '</button>'+
                '</span>'+

                '<span class="pull-right">' +
                    '<button class="btn btn-delete" onclick="deleteTodo('+i+')">'+
                       '<i class="fa fa-trash"></i>'+
                    '</button>'+
                '</span>'+
                
            '</li>'
          
            
                            
         );

        $('.list-group').prepend(newTodo);
        todoInput.value = '';
        i++;

        removeNoTask();
            
console.log(i);

    console.log(newTodo);
    })
   
   
});

$(document).ready(function(){
  var taskList = [];
  var TDnum, IPnum, Fnum;
  $('.buttonList').on('click', function() {
    var newTask = $('input#inputList').val();
    if(!newTask){
      return;
    }
    taskList.push(newTask);
    var idx = taskList.indexOf(newTask);
    console.log(taskList);
    var postTask =
    '<li class="font20 padded" id="newTask">'+
      '<div class="taskTitle task" id="'+idx+'">'+
        newTask+
      '</div>'+
    '</li>';
    $('#List').prepend(postTask);
    $('#inputList').val('');
  });

  $('.tasks').on('click', function(event){
    for(let x in taskList){
      if(taskList[x] == event.target.innerHTML){
        console.log(taskList[x]);
        $(event.target).addClass('active');
        $('#title').replaceWith('<div class="title" id="title">'+taskList[x]+'</div>');
        $('#list').replaceWith('');
      }
    }
  });
  
  $(document).on('input','input#inputTD', function(){
    if(jQuery.inArray($('input#inputTD').val(), tasks) !== -1){
      $('.buttonTD').attr('disabled', true)
    }else{
      $('.buttonTD').attr('disabled', false)
    }
  })

  var tasks = [];

  $(document).on('click', '.buttonTD', function(){
    newTD = $('input#inputTD').val();
    if(!newTD){
      return;
    }
    if(jQuery.inArray($('input#inputTD').val(), tasks) !== -1){
      return;
    }
    tasks.push(newTD);
    var TDid = tasks.indexOf(newTD);
    var postTD =
      '<li class="font20 padded" id="TD'+TDid+'">'+
        '<div class="taskTitle task-container TDinfo">'+
          '<i class="fa fa-trash remove TD" id="'+TDid+'" value="'+newTD+'" aria-hidden="true"></i>'+
          '<i class="fa fa-arrow-right TD-okay" id="'+TDid+'" value="'+newTD+'" aria-hidden="true"></i>'+
          '<div id="taskTD">'+newTD+'</div>'+    
        '</div>'+
      '</li>';
    $('#toDo').append(postTD);
    $('input#inputTD').val('');
    console.log('To-do Added!');
    TDnum =+ 1;
    $('div.to-do').text(TDnum);
  });

  var newIP;
  var IPid;

  $(document).on('click', 'i.TD-okay', function(event){
    event.preventDefault();
    newIP = event.target.getAttribute('value');
    IPid = event.target.getAttribute('id');
    var postIP = 
      '<li class="font20 padded" id="IP'+IPid+'">'+
        '<div class="taskTitle task-container IPinfo">'+
          '<i class="fa fa-arrow-left IP-return" id="'+IPid+'" value="'+newIP+'" aria-hidden="true"></i>'+
          '<i class="fa fa-arrow-right IP-okay" id="'+IPid+'" value="'+newIP+'" aria-hidden="true"></i>'+
          '<div id="taskIP">'+newIP+'</div>'+    
        '</div>'+
      '</li>';
    $('li#TD'+IPid+'').replaceWith('');
    $('ul.tasks#inProgress').prepend(postIP);
    console.log('Task moved to In Progress');  
    TDnum =- 1;
    IPnum =+ 1; 
    if(TDnum <= 0){
      $('div.to-do').text('0');
    }else{
      $('div.to-do').text(TDnum);
    }
    $('div.in-Prog').text(IPnum);
  });

  var newF;
  var Fid; 
  
  $(document).on('click', 'i.IP-okay', function(event){
    event.preventDefault();
    newF = event.target.getAttribute('value');
    Fid = event.target.getAttribute('id');
    var postF = 
      '<li class="font20 padded" id="F'+Fid+'">'+
        '<div class="taskTitle task-container Finfo">'+
          '<i class="fa fa-arrow-left F-return" id="'+Fid+'" value="'+newF+'" aria-hidden="true"></i>'+
          '<i class="fa fa-check F-done" id="'+Fid+'" value="'+newF+'" aria-hidden="true"></i>'+
          '<div id="taskIP">'+newF+'</div>'+    
        '</div>'+
      '</li>';
    $('li#IP'+Fid+'').replaceWith('');
    $('ul.tasks#Finished').prepend(postF);
    console.log('Task moved to Finished');
    IPnum =- 1;
    Fnum =+ 1;
    if(IPnum <= 0){
      $('div.in-Prog').text('0');
    }else{
      $('div.in-Prog').text(IPnum);
    }
    $('div.Fin').text(Fnum);
  });

  $(document).on('click', 'i.IP-return', function(event){
    event.preventDefault();
    newTD = event.target.getAttribute('value');
    TDid = event.target.getAttribute('id');
    var postTD = 
    '<li class="font20 padded" id="TD'+TDid+'">'+
      '<div class="taskTitle task-container TDinfo">'+
        '<i class="fa fa-trash remove TD" id="'+TDid+'" value="'+newTD+'" aria-hidden="true"></i>'+
        '<i class="fa fa-arrow-right TD-okay" id="'+TDid+'" value="'+newTD+'" aria-hidden="true"></i>'+
        '<div id="taskTD">'+newTD+'</div>'+    
      '</div>'+
    '</li>';
    $('li#IP'+TDid+'').replaceWith('');
    $('ul.tasks#toDo').prepend(postTD);
    console.log('Task returned to To-Do');
    TDnum =+ 1;
    IPnum =- 1;
    $('div.to-do').text(TDnum);
    if(IPnum <= 0){
      $('div.in-Prog').text('0');
    }else{
      $('div.in-Prog').text(IPnum);
    }
  });

  $(document).on('click', 'i.F-return', function(event){
    event.preventDefault();
    newIP = event.target.getAttribute('value');
    IPid = event.target.getAttribute('id');
    var postIP = 
      '<li class="font20 padded" id="IP'+IPid+'">'+
        '<div class="taskTitle task-container IPinfo">'+
          '<i class="fa fa-arrow-left IP-return" id="'+IPid+'" value="'+newIP+'" aria-hidden="true"></i>'+
          '<i class="fa fa-arrow-right IP-okay" id="'+IPid+'" value="'+newIP+'" aria-hidden="true"></i>'+
          '<div id="taskIP">'+newIP+'</div>'+    
        '</div>'+
      '</li>';
    $('li#F'+IPid+'').replaceWith('');
    $('ul.tasks#inProgress').prepend(postIP); 
    console.log('Task returned to In Progress');
    IPnum =+ 1;
    Fnum =- 1; 
    $('div.in-Prog').text(IPnum);
    if(Fnum <= 0){
      $('div.Fin').text('0');
    }else{
      $('div.Fin').text(Fnum);
    }
  });

  var delValue;
  var delID;

  $(document).on('click', 'i.remove', function(event){
    event.preventDefault();
    delValue = event.target.getAttribute('value');
    delID = event.target.getAttribute('id');
    console.log('Task Deleted!');
    console.log(delValue);
    $('li#TD'+delID).replaceWith('');
    tasks.splice(delValue);
    TDnum =- 1;
    if(TDnum <= 0){
      $('div.to-do').text('0');
    }else{
      $('div.to-do').text(TDnum);
    }
  });

  var doneValue;
  var doneID;

  $(document).on('click', 'i.F-done', function(event){
    event.preventDefault();
    doneValue = event.target.getAttribute('value');
    doneID = event.target.getAttribute('id');
    console.log('Task Finished!')
    $('li#F'+doneID).replaceWith('');
    tasks.splice(doneValue);
    Fnum =- 1;
    if(Fnum <= 0){
      $('div.Fin').text('0');
    }else{
      $('div.Fin').text(Fnum);
    }
  });
});
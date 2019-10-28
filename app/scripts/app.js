
$(document).ready(function(e){





  const mylist = [];
  var con = 0;
  var type = "todocontent";

  function Con(task){
    this.task = task;
    this.id = con;
    this.type =type;

  }

  $("#cancel").click(function(){
    $(".container1").fadeOut();
    $(".containerupdate").fadeOut();
});
$("#add").click(function(){
    $(".container1").fadeIn();
});
    //update button
   $('#update').click( (e) =>{
    var item = $('#updateinput').val();
    if(item){
      var id = $('#update').val();
      if( mylist[id]["type"] == "todocontent" ){
        mylist[id]["task"] = item
        var data = mylist[id]
        add_nl(data)
      }
      else if ( mylist[id]["type"] == "cl" ){
        mylist[id]["task"] = item
        var data = mylist[id]
        add_cl(data)
      } else {
        mylist[id]["task"] = item
        var data = mylist[id]
        add_al(data)
      }
      $(".containerupdate").fadeOut();
    }
    $('#updateinput').val('')
})
  //edit 
  $(document).on('click','.edit',function(e) {
    let id = $(this).attr('id');
    $('#updateinput').val(mylist[id]["task"])
  $('#update').val(id)
  $('#'+id).remove()
  $(".containerupdate").fadeIn();
    
  
})

  
    function addTask(task) {
        if (task) {
          const newTask = new Con(task);
          mylist.push(newTask);
          console.log(newTask.id)
          var newItem = 
          '<li id="'+newTask.id+'" class="list"> '+
          '<span class="text2" class="list-grouped" id="'+newTask.id+'">'+newTask.task+'</span>'+
          ' <i class="fa fa-pencil-square-o edit" id="'+newTask.id+'" aria-hidden="true"></i>'+
          '<div class="wiws"><i id='+newTask.id+' class="fa fa-trash red tododel"  style="font-size:20px"></i>' +
          '<i id="'+newTask.id+'"class="fa fa-angle-double-right progressmove"   style="font-size:20px"></div>'+
          '</i></li></li>';
          $('#todocontent').prepend(newItem);
         
          }else{
            alert("hahahahaha ")
          }

          con++;	
          $(".container1").fadeOut();
  }

  function add_nl(task){
    var nlItem = 
    '<li id='+task["id"]+' class="list"> '+
    '<span class="text2" class="list-grouped" id='+task["id"]+'>'+task["task"]+'</span>'+
    ' <i class="fa fa-pencil-square-o edit" id='+task["id"]+' aria-hidden="true"></i>'+
    '<div class="wiws"><i id='+task["id"]+' class="fa fa-trash red tododel"  style="font-size:20px"></i>' +
    '<i id='+task["id"]+' class="fa fa-angle-double-right progressmove"   style="font-size:20px"></div>'+
    '</i></li></li>';
  $('#todocontent').prepend(nlItem);
  
  }
  function add_cl(task){
      let clItem ='<li id="'+task["id"]+'" class="list"> <span id="'+task["id"]+'"class="fa fa-angle-double-left back" align="right"  style="font-size:20px"></span><span class="text" id="'+task["id"]+'" class="list-grouped">'+task["task"]+'</span>'
	    +'<span id="'+task["id"]+'"class="fa fa-angle-double-right todomove"   style="font-size:20px"></span></div>'
      +' <i class="fa fa-pencil-square-o edit" id='+task["id"]+' aria-hidden="true"></i>'
      +'</li>';
  $('#cl').append(clItem);
  }
  function add_al(task){
      let alItem = '<li id="'+task["id"]+'" class="list"> <span id="'+task["id"]+'"class="fa fa-angle-double-left progressmove" align="right"  style="font-size:20px"></span><span class="text" id="'+task["id"]+'" class="list-grouped">'+task["task"]+'</span>'
      +'<span id='+task["id"]+' class="fa fa-trash red tododel"  style="font-size:20px"></span>'
      +' <i class="fa fa-pencil-square-o edit" id='+task["id"]+' aria-hidden="true"></i>'+
      '</li>';
  $('#al').append(alItem);
  }
  


  //adding in todo list 
  $('#save').click( (e) =>{
    var item = $('#newinput').val();
    addTask(item);
    $('#newinput').val('')
})
  $(document).on('click','.back',function(e) {
    let id = $(this).attr('id');
    mylist[id]["type"] = "todocontent"
    let todoItem ='<li id="'+id+'" class="list"> '+
    '<span class="text2" class="list-grouped" id="'+id+'">'+mylist[id]["task"]+'</span>'+
    ' <i class="fa fa-pencil-square-o edit" id='+id+' aria-hidden="true"></i>'+
    '<div class="wiws"><i id='+id+' class="fa fa-trash red tododel"  style="font-size:20px"></i>' +
    '<i id="'+id+'"class="fa fa-angle-double-right progressmove"   style="font-size:20px"></div>'+
    '</i></li></li>';
  $('#'+id).remove();
  $('#todocontent').prepend(todoItem);
});


  $(document).on('click','.progressmove',function(e) {
    let id = $(this).attr('id');
    mylist[id]["type"] = "cl"
    let todoItem ='<li id="'+id+'" class="list"> <span id="'+id+'"class="fa fa-angle-double-left back" align="right"  style="font-size:20px"></span><span class="text" id="'+id+'" class="list-grouped">'+mylist[id]["task"]+'</span>'
	  +'<span id="'+id+'"class="fa fa-angle-double-right todomove"   style="font-size:20px"></span></div>'
    +' <i class="fa fa-pencil-square-o edit" id='+id+' aria-hidden="true"></i>'
    +'</li>';
  $('#'+id).remove();
  $('#cl').append(todoItem);

});

$(document).on('click','.todomove',function(e) {
    let id = $(this).attr('id');
    mylist[id]["type"] = "al"
    let doneItem = '<li id="'+id+'" class="list"> <span id="'+id+'"class="fa fa-angle-double-left progressmove" align="right"  style="font-size:20px"></span><span class="text" id="'+id+'" class="list-grouped">'+mylist[id]["task"]+'</span>'
    +'<span id='+id+' class="fa fa-trash red tododel"  style="font-size:20px"></span>'
    +' <i class="fa fa-pencil-square-o edit" id='+id+' aria-hidden="true"></i>'+
    '</li>';
  $('#'+id).remove();
  $('#al').append(doneItem);
});

  $(document).on('click','.tododel',function(e) {
    let id = $(this).attr('id');
    console.log(id)
  $('#'+id).remove();
});



});
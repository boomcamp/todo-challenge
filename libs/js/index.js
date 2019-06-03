$(document).ready(function(e) {

function moveThis(e) {
	alert();
}
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
var inProgress = $('#in-progress');
var done = $('#done');
var todo = $('#todo');
var counter = 0;

const list =[];
function Task(task) {
	this.task = task;
	this.id= counter;

}

function addNewTask(task) {
	if(task) {
	const newTodo = new Task(task);
	list.push(newTodo);
	var newItem = '<li id="'+newTodo.id+'" class="currentTask"><span class="taskText" id="span-'+newTodo.id+'">'
	+newTodo.task+'</span><i id='+newTodo.id+' class="fa fa-trash red todoDelete" title="Delete this task"></i>'+
	'<i id="'+newTodo.id+'"class="fa fa-angle-double-right todoMove"  title="Move to in progress">'+
	'</i><i class="fa fa-edit editTask" title="Edit task" id="'+newTodo.id+'"></i></li></li>';
	$('#todo').prepend(newItem);
	}
// var lista = document.querySelector('.currentTask');
// lista.addEventListener('click',function(event) {
// 	var id = event.target.id


// 	$('.todoMove').click(function(e){
// 	let id = $(this).attr('id');
// 	let progressItem = '<li class="progressTask" id="'+id+'">'+list[id]["task"]+'<i class="fa fa-angle-double-right progressMoveToDOne" id="'+id+'" title="Move to Done"></i>'
// 	+'<i class="fa fa-angle-double-left progressMoveToTodo" id="'+id+'" title="Move to todo"></i></li>';
// 	inProgress.append(progressItem);
// 	//in progress task eventlistener
// 	$('.progressMoveToDOne').click(function(e){
// 		var id = $(this).attr('id');
// 		alert(id + " this id");
// 		let doneItem = '<li class="doneTask" id="'+id+'">'+list[id]["task"]+'<i id='+newTodo.id+' class="fa fa-trash red todoDelete" title="Delete this task"></i>'
// 						+'<i class="fa fa-angle-double-left doneMoveToProgress" id="'+id+'" title="Move to todo"></i></li>';
// 		$('#'+id).remove();
		
// 		done.prepend(doneItem);
// 		('.doneMoveToProgress').
// 	});
// 	//move to todo
// 	$('.progressMoveToTodo').click(function(e) {
// 		var id = $(this).attr('id');
// 		var newItem = '<li id="'+id+'" class="currentTask">'
// 					+list[id]["task"]+'<i id='+id+' class="fa fa-trash red todoDelete" title="Delete this task"></i>'+
// 					'<i id="'+id+'"class="fa fa-angle-double-right todoMove"  title="Move to in progress">'+
// 					'</i></li>';
// 	$('#'+id).remove();
// 	$('#todo').prepend(newItem);



// 	});
// //
// 	$('#'+id).remove();
// 	});
// 	$('.todoDelete').click(function(e){
// 	let id = $(this).attr('id');
// 	$('#'+id).remove();
// 	});
	counter++;	
}



$('#saveNewTask').click(function(e) {
	var item = $('#newTask').val();
	addNewTask(item);
	$('#newTask').val('');
	
});

$(document).on('click','.todoMove',function(e) {
	let id = $(this).attr('id');
	let progressItem = '<li class="progressTask" id="'+id+'"><span id="span-'+id+'">'+list[id]["task"]+'</span><i class="fa fa-angle-double-right progressMoveToDOne" id="'+id+'" title="Move to Done"></i>'
	+'<i class="fa fa-angle-double-left progressMoveToTodo" id="'+id+'" title="Move to todo"></i>'
	+'<i class="fa fa-edit editTask" title="Edit task" id="'+id+'"></i></li>';
	$('#'+id).remove();
	inProgress.append(progressItem);
	console.log(list);

});
$(document).on('click','.progressMoveToTodo',function(e) {
	var id = $(this).attr('id');
	var newItem = '<li id="'+id+'" class="currentTask"><span id="span-'+id+'">'+list[id]["task"]+'</span>'
	+'<i id='+id+' class="fa fa-trash red todoDelete" title="Delete this task"></i>'+
	'<i id="'+id+'"class="fa fa-angle-double-right todoMove"  title="Move to in progress"></i><i class="fa fa-edit editTask" title="Edit task" id="'+id+'"></i>'+
	'</li>';
	$('#'+id).remove();
	$('#todo').prepend(newItem);

});
$(document).on('click','.todoDelete',function(e) {
	let id = $(this).attr('id');
	$('#'+id).remove();
});
$(document).on('click','.progressMoveToDOne',function(e){
	var id = $(this).attr('id');
		let doneItem = '<li class="doneTask" id="'+id+'"><span id="span-'+id+'">'+list[id]["task"]+'</span><i id='+id+' class="fa fa-trash red todoDelete" title="Delete this task"></i>'
						+'<i class="fa fa-angle-double-left todoMove" id="'+id+'" title="Move to todo"></i><i class="fa fa-edit editTask" id="'+id+'"></i></li>';
		$('#'+id).remove();
		done.prepend(doneItem);
	});
$(document).on('click','.editTask',function(e){
	var id = e.target.id;
	var editedTask = prompt('Edit your task',list[id]["task"]);
	if(editedTask !== null) {
		$('#span-'+id).text(editedTask);
		list[id]["task"] = editedTask;
	}
});

});



$(document).ready(function(){
	var  id = 0;
	var list = [];
	function Task(task) {
		this.task = task;
		this.id = id;
	}
	
	function addNewTask(task){
		const newTask = new Task(task);
		list.push(newTask);

		$('.modal').css('display', 'none');

		var to_do = '<div id="'+id+'">'+
					'<span id="'+id+'" class="fa fa-angle-double-right"></span>'+
					'<span id="'+id+'" class="fa fa-edit"></span>'+					
					'<span id="'+id+'" class="fa fa-trash"></span>'+
					'<li id="'+id+'"><span id="span'+id+'">'+$('.input-text').val()+'</span></li></div><br>';

		$('.todo-body').append(to_do);

		// mer(id);
		
		$('.input-text').val('');
		id++;
	}

	$('#newTask').click(function(){
		$('.modal').css('display','block');
		$('.modal-add').css('display','block');
		$('.input-text').focus();
	});
	$('#close').on('click', () => {
		$('.modal').css('display', 'none');
	});


	$('#save').click(function(){
		addNewTask($('.input-text').val());
		

	});

		$(document).on('click', '.fa-angle-double-right', function(e){
			var id = e.target.id;

			var to_do = '<div id="'+id+'">'+
					'<span id="'+id+'" class="fa fa-angle-double-left"></span>'+
					'<span id="'+id+'" class="fa fa-angle-double-right done"></span>'+
					// '<span id="'+id+'" class="fa fa-angle-double-right"></span>'+
					'<span id="'+id+'" class="fa fa-edit"></span>'+					
					'<span id="'+id+'" class="fa fa-trash"></span>'+
					'<li id="'+id+'"><span id="span'+id+'">'+list[id]['task']+'</span></li></div><br>';
			$('#'+id).remove();
			$('.progress-body').append(to_do);
		});

		$(document).on('click', '.fa-angle-double-left', function(i){
			var id = i.target.id;

			var to_do = '<div id="'+id+'">'+
					// '<span id="'+id+'" class="fa fa-angle-double-left"></span>'+
					'<span id="'+id+'" class="fa fa-angle-double-right"></span>'+
					'<span id="'+id+'" class="fa fa-edit"></span>'+					
					'<span id="'+id+'" class="fa fa-trash"></span>'+
					'<li id="'+id+'"><span id="span'+id+'">'+list[id]['task']+'</span></li></div><br>';
			$('#'+id).remove();
			$('.fr-todo').append(to_do);
			

		});

		$(document).on('click', '.done', function(i){
			var id = i.target.id;

			var to_do = '<div id="'+id+'">'+
					'<span id="'+id+'" class="fa fa-angle-double-left done-back"></span>'+
					// '<span id="'+id+'" class="fa fa-angle-double-right"></span>'+
					'<span id="'+id+'" class="fa fa-edit"></span>'+					
					'<span id="'+id+'" class="fa fa-trash"></span>'+
					'<li id="'+id+'"><span id="span'+id+'">'+list[id]['task']+'</span></li></div><br>';
			$('#'+id).remove();
			$('.fr-done').append(to_do);			
		});


		$(document).on('click', '.done-back', function(e){
			var id = e.target.id;

			var to_do = 
					'<li id="'+id+'">'+
					'<span id="'+id+'" class="fa fa-angle-double-left"></span>'+
					'<span id="'+id+'" class="fa fa-angle-double-right done"></span>'+
					'<span id="'+id+'" class="fa fa-edit"></span>'+					
					'<span id="'+id+'" class="fa fa-trash"></span>'+
					'<span id="span'+id+'">'+list[id]['task']+'</span></li>';
			$('#'+id).remove();
			$('.fr-progress').append(to_do);
		});



		$(document).on('click', '.fa-edit', function(e){
			var id = e.target.id;	
			$('.modal').css('display','block');
			$('.modal-add').css('display','block');
			$('.input-text').focus();			
			
		});	
		$(document).on('click', '.fa-trash', function(e){
			var id = e.target.id;
			$('#'+id).remove();
		});

		let currentIndex = 0;

		$(document).on('click', '.fa-edit', function(e){
			var id = e.target.id;	
			$('.modal').css('display','block');
			$('.modal-add').css('display','block');
			$('.input-text').focus();
			$('#update').css('display', 'block');
			$('#save').hide();	

			var x  = list[id]['task'];
			$('.input-text').val(x);
			currentIndex = id;		
			
		});	
		$(document).on('click', '.fa-trash', function(e){
			var id = e.target.id;
			$('#'+id).remove();
		});

		

		$(document).on('click', '#update', function(e){
			var id = e.target.id;
			// var x = list[id]['task'];
			$('#span'+currentIndex).text($('.input-text').val());
			$('#update').hide();
			$('#save').show();
			
			$('.modal').css('display', 'none');
			// alert($('.input-text').val());
			list[currentIndex]['task'] = $('.input-text').val();
			$('.input-text').val('');
		});	


	

	

});
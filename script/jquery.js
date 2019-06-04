

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

		var to_do = '<li id="'+id+'">'+
					'<span id="'+id+'" class="fa fa-angle-double-right"></span>'+
					'<span id="'+id+'" class="fa fa-edit"></span>'+					
					'<span id="'+id+'" class="fa fa-trash"></span>'+
					'<span id="span'+id+'">'+$('.input-text').val()+'</span></li>';

		$('.todo-ul').prepend(to_do);
		
		$('.input-text').val('');

		id++;
	}

	$('#newTask').click(function(){
		$('.modal').css('display','block');
		$('.modal-add').css('display','block');
		$('.input-text').focus();
		$('#close1').hide();
		$('#close').show();
	});
	$('#close').on('click', () => {
		$('.modal').css('display', 'none');
	});


	$('#save').click(function(){
		if($('.input-text').val() == ''){
			alert('Input task before saving!');
		}else{
			addNewTask($('.input-text').val());
		}
	});

		$(document).on('click', '.fa-angle-double-right', function(e){
			
			var id = e.target.id;

			var to_do = '<li id="'+id+'">'+
						'<span id="'+id+'" class="fa fa-angle-double-left"></span>'+
						'<span id="'+id+'" class="fa fa-angle-double-right done"></span>'+
						'<span id="'+id+'" class="fa fa-edit"></span>'+					
						'<span id="'+id+'" class="fa fa-trash"></span>'+
						'<span id="span'+id+'">'+list[id]['task']+'</span></li>';
			$('#'+id).remove();
			$('.prog-ul').prepend(to_do);
		});

		$(document).on('click', '.fa-angle-double-left', function(i){
			var id = i.target.id;

			var to_do = '<li id="'+id+'">'+
						'<span id="'+id+'" class="fa fa-angle-double-right"></span>'+
						'<span id="'+id+'" class="fa fa-edit"></span>'+					
						'<span id="'+id+'" class="fa fa-trash"></span>'+
						'<span id="span'+id+'">'+list[id]['task']+'</span></li>';
			$('#'+id).remove();
			$('.todo-ul').prepend(to_do);
			

		})

		$(document).on('click', '.done', function(i){
			var id = i.target.id;

			var to_do = '<li id="'+id+'">'+
						'<span id="'+id+'" class="fa fa-angle-double-left done-back"></span>'+				
						'<span id="'+id+'" class="fa fa-edit"></span>'+					
						'<span id="'+id+'" class="fa fa-trash"></span>'+
						'<span id="span'+id+'">'+list[id]['task']+'</span></li>';
			$('#'+id).remove();
			$('.done-ul').prepend(to_do);			
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
			$('.prog-ul').prepend(to_do);
		});



		let currentIndex = 0;

		$(document).on('click', '.fa-edit', function(e){
			var id = e.target.id;	
			$('.modal').css('display','block');
			$('.modal-add').css('display','block');
			$('.input-text').focus();
			$('#update').css('display', 'block');
			$('#save').hide();
			$('#close').hide();
			$('#close1').show();

			var x  = list[id]['task'];
			$('.input-text').val(x);
			currentIndex = id;		
			
		});	

		$('#close1').click(function(){
			$('.modal').css('display', 'none');
			$('.input-text').val('');
			$('#save').show();
			$('#update').css('display', 'none');
		});

		// $('.fa-edit').on('click', () => {
		// 	alert();
		// });

		$(document).on('click', '.fa-trash', function(e){
			if(confirm('Are you sure')) {
				var id = e.target.id;
				$('#'+id).remove();
			}else
			{
				return false;
			}
		});

		

		$(document).on('click', '#update', function(e){
			var id = e.target.id;
			$('#span'+currentIndex).text($('.input-text').val());
			$('#update').hide();
			$('#save').show();
			
			$('.modal').css('display', 'none');
			list[currentIndex]['task'] = $('.input-text').val();
			$('.input-text').val('');
		});	


	

	

});
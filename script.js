$(document).ready(function(){  
    $('.toppart').hide();
    $('label').css('top', '-10px');
   
   function deleteTodo(){
    $('#delete').on('click', function(){
        $(this).parent().parent().remove();
    })
   }
  deleteTodo()

    $('#textArea').on('focus', function(){
        $('label').css('font-size', '10px');
        $('label').css('top', '15px');
        $(this).addClass('text2');
        $(this).removeClass('text');
        $('.note').css('width', '80%');
        $('.toppart').show();
	});

    $('#textArea').on('blur', function(){
        if(this.value  == ''){
        $('.toppart').hide();
        $('label').css('top', '-10px');
        $('label').css('font-size', '16px');
        $(this).removeClass('text2');
        $(this).addClass('text');
        $('.note').css('width', '');
        $('#buttodAdd').prop('disabled', true);
		}
    });

	$(".btn-add").on("click", function() {
		var task = $("#textArea").val();
		  var addTask = `
		  <div class="task">
			<p class="dtask">${task} </p>
			<div class="ikon">
				<i id="down" class="fa fa-arrow-down"></i>
				<i id="up" class="fa fa-arrow-up"></i>
				<i id="edit" class="fa fa-pencil-alt"></i>
				<i id="delete" class="fa fa-trash"></i>
			</div>
		   
		  </div>
		  `;

		$('#toDo').prepend(addTask);
		$('.toppart').hide();
		$('label').css('top', '-10px');
		$('label').css('font-size', '16px');
		$('#textArea').removeClass('text2', 1000);
		$('#textArea').addClass('text', 1000);
		$('.note').css('width', '');
		$('#textArea').val('');
	});
	
	//from toDO move down to inProg	
	$('#toDo').on('click', '#down', function(){
		$('#inProg').prepend($(this).parent().parent());
			
	});
	
	
	//from inProg move down to DoNe
	$('#inProg').on('click', '#down', function(){
		$('#doNe').prepend($(this).parent().parent());
		
	});
	
	//from inProg move up to toDo
	$('#inProg').on('click', '#up', function(){
		$('#toDo').append($(this).parent().parent());
	
	});
	
	//from inProg move up to toDo
	$('#doNe').on('click', '#up', function(){
		$('#inProg').append($(this).parent().parent());
	});
	
	//edit button
	$('.box').on('click', '#edit', function(){
		$(this).parent().prev().attr('contenteditable', 'true');
		$(this).parent().prev().css('color', 'lightgreen');
		$(this).parent().prev().css('outline', 'lightgreen');
		$(this).css('color', 'lightgreen');
		$(this).parent().prev().focus();
	});
	
	$('.box').on('focusout', '.dtask', function(){
		$(this).css('color', 'green');
		$(this).removeAttr('contenteditable');
		$(this).next().children().css('color', 'green');
		
	});
	
	
	//delete button
	$('.box').on('click', '#delete', function(){
		$(this).parent().parent().remove();
		
	});
	
	
	
	
	
	
	
    
  });


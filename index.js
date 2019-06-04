$(document).ready(() => {

    var x = 0;
    $('.add').on('click', () => {
        var $done = $('input').val();

            
           var $nDone = `<div class="con1-task" id="${x}">`+
           
           '<span class="span-edit">'+$done+'</span>'+'<br/>'+
           `<span><button id="${x}" class="revert" ><i class="fa fa-backward"></i></button></span>`+ 
           `<span><button id="${x}" class="remove" ><i class="fa fa-trash"></i></button></span>`+
           `<span><button id="${x}" class="progress" ><i class="fa fa-tasks"></i></button></span>`+
           `<span><button id="${x}" class="done" ><i class="fa fa-check"></i></button></span>`+
           `<span><button id="${x}" class="edit" ><i class="fa fa-edit"></i></button></span>`+  
           '</div>';
    
           $('.list').append($nDone);
           $('input').val('');
           x =  x+1;
    })


    
    //start remove

    $('.list').on('click', '.remove', function() {
        $(this).parent().parent().remove();
    });

    $('.list1').on('click', '.remove', function() {
        $(this).parent().parent().remove();
    });

    $('.list2').on('click', '.remove', function() {
        $(this).parent().parent().remove();
    });

    //end remove


    //start move

    $('.list').on('click', '.progress', function() {
        $('.list1').append($(this).parent().parent());

    });

    $('.list1').on('click', '.done', function() {
        $('.list2').append($(this).parent().parent());

    });

    $('.list').on('click', '.done', function() {
        $('.list2').append($(this).parent().parent());
    
    });

    //end move


    //start edit

    $('.list').on('click', '.edit', function() {
        var id = $(this).attr('id');
        $('.span-edit').attr('contenteditable', 'true');
        $('.span-edit').focusOut();
    })

    $('.list1').on('click', '.edit', function() {
        var id = $(this).attr('id');
        $('.span-edit').attr('contenteditable', 'true');
        $('.span-edit').focusOut();
    })

    $('.list2').on('click', '.edit', function() {
        var id = $(this).attr('id');
        $('.span-edit').attr('contenteditable', 'true');
        $('.span-edit').focus();
    })

    //end edit


    //start back

    $('.list1').on('click', '.revert', function() {
        $('.list').append($(this).parent().parent());

    });

    $('.list2').on('click', '.revert', function() {
        $('.list1').append($(this).parent().parent());
    
    });


    //end back
    

    

    




})
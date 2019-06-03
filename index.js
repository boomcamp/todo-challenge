$(document).ready(() => {

    var x = 0;
    $('.add').on('click', () => {
        var $done = $('input').val();
        
           var $nDone = `<div class="con1-task" id="${x}">`+
           '<span>'+$done+'</span>'+'<br/>'+
           `<span><button id="${x}" class="remove" ><i class="fa fa-trash"></i>Remove</button></span>`+
           `<span><button id="${x}" class="progress" ><i class="fa fa-tasks"></i> Progress</button></span>`+
           `<span><button id="${x}" class="done" ><i class="fa fa-check"></i>Done</button></span>`+  
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
        $('.progress').hide();
    });

    $('.list1').on('click', '.done', function() {
        $('.list2').append($(this).parent().parent());
        $('.progress').hide();
        $('.done').hide();
    });

    $('.list').on('click', '.done', function() {
        $('.list2').append($(this).parent().parent());
        $('.progress').hide();
        $('.done').hide();
    });

    //end move


    

    

    




})
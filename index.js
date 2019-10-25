const toDo = document.querySelector('.header-con1-toDo');
const inProgress = document.querySelector('.header-con2-inProgress');
const done = document.querySelector('.header-con3-done');
const addToDo = document.querySelector('.addImage');
const edit = document.querySelector('.editIcon');
const move = document.querySelector('.move');
const trash = document.querySelector('.trashIcon');
const inProgressContent = document.querySelector('.inProgressContent');
const doneContent = document.querySelector('.done-content');
const toDoContent = document.querySelector('.toDo-content');
const task = document.querySelector('.tasks');
const task1 = document.querySelector('.tasks1');
const submit = document.querySelector('.submit');
const inputToDo = document.querySelector('.inputToDo');

$(".inputToDo, .submit").hide();
$('.header-con1-toDo').css("background-color", "#F0D5F7 ");
     $('.header-con2-inProgress').css("background-color", "#D1A7DB");
     $('.header-con3-done').css("background-color", "#D1A7DB ");
     $('.toDo-content').show();
     $('.inProgress-content').css("display", "none");;
     $('.done-content').css("display", "none");

toDo.addEventListener('click', function(e){
    //var toDoTab = document.createElement('div');
     $('.header-con1-toDo').css("background-color", "#F0D5F7 ");
     $('.header-con2-inProgress').css("background-color", "#D1A7DB");
     $('.header-con3-done').css("background-color", "#D1A7DB ");
     $('.toDo-content').show();
     $('.inProgress-content').css("display", "none");
     $('.done-content').css("display", "none");
     $('.addToDo').show();
    })
addToDo.addEventListener('click', function(e){
    $(".inputToDo, .submit").show();
    $('.addImage').hide();
    })


submit.addEventListener('click', function(e){
        $('.tasks').prepend(`<div class="listBox">
          <p class="taskList">${inputToDo.value}</p>
          <input type="text" value="" class="text" maxlength="40" hidden>
            <div class="icons">
            <img class="editIcon" src="img/edit.png">
            <img class="move" src="img/icon2.png">
            <img class="trashIcon" src="img/trash.png">
            </div>
        </div>`);
    inputToDo.value = null;
})

inProgress.addEventListener('click', function(e){
     $('.header-con2-inProgress').css("background-color", "#F0D5F7 ");
     $('.header-con1-toDo').css("background-color", "#D1A7DB ");
     $('.header-con3-done').css("background-color", "#D1A7DB ");
     $('.inProgress-content').show();
     $('.toDo-content').css("display", "none");
     $('.done-content').css("display", "none");
     $('.addImage').css("display", "none");
     
})
done.addEventListener('click', function(e){
    //var toDoTab = document.createElement('div');
     $('.header-con3-done').css("background-color", "#F0D5F7 ");
     $('.header-con1-toDo').css("background-color", "#D1A7DB ");
     $('.header-con2-inProgress').css("background-color", "#D1A7DB");
     $('.done-content').show();
     $('.inProgress-content').css("display", "none");
     $('.toDo-content').css("display", "none");
     $('.addToDo').css("display", "none");
})

$('body').on('click', '.move', function(){
    $(this).hide(); 
    $(this).before(`<img class="progressToDo" src="img/icon1.png">`);
    $(this).before(`<img class="moveDone" src="img/icon3.png">`);
    $('.tasks1').append(`<div class="listBox">${$(this).parent().parent().html()}</div>`);
    $(this).parent().parent().remove();
})

$('body').on('click', '.doneToDo', function(){
    $(this).hide();
    $(this).siblings('.doneProgress').hide();
    $(this).before(`<img class="move" src="img/icon2.png">`);
    $('.tasks').append(`<div class="listBox">${$(this).parent().parent().html()}</div>`);
    $(this).parent().parent().remove();
})

$('body').on('click', '.progressToDo', function(){
    $(this).hide();
    $(this).siblings('.moveDone').hide();
    $(this).before(`<img class="move" src="img/icon2.png">`);
    $('.tasks').append(`<div class="listBox">${$(this).parent().parent().html()}</div>`);
    $(this).parent().parent().remove();
})

$('body').on('click', '.moveDone', function(){
    $(this).hide();
    $(this).siblings('.progressToDo').hide();
    $(this).before(`<img class="doneToDo" src="img/icon1.png">`);
    $(this).before(`<img class="doneProgress" src="img/back.png">`);
    $('.tasks2').append(`<div class="listBox">${$(this).parent().parent().html()}</div>`);
    $(this).parent().parent().remove();
})

$('body').on('click', '.doneProgress', function(){
    $(this).hide();
    $(this).siblings('.doneToDo').hide();
    $(this).before(`<img class="progressToDo" src="img/icon1.png">`);
    $(this).before(`<img class="moveDone" src="img/icon3.png">`);
    $('.tasks1').append(`<div class="listBox">${$(this).parent().parent().html()}</div>`);
    $(this).parent().parent().remove();
})

$('body').on('click', '.doneToDo', function(){
    $(this).hide();
    $(this).siblings('.doneProgress').hide(); 
    $(this).before(`<img class="move" src="img/icon2.png">`);
    $('.tasks1').append(`<div class="listBox">${$(this).parent().parent().html()}</div>`);
    $(this).parent().parent().remove();
})

$('body').on('click', '.done', function(){
    $('.tasks2').append($(this).parent().parent().parent().html());
    $(this).hide();
    $(this).siblings('.backToDo').show();
    $(this).parent().parent().parent().remove();
    
})
$('body').on('click', '.moveDone', function(){
    $('.tasks2').append($(this).parent().parent().parent().html());
    $(this).siblings('.done').hide();
    $(this).siblings('.backToDo').show();
    $(this).parent().parent().parent().remove();
    
})

$('body').on('click', '.trashIcon', function(){
    if(confirm("Are you sure you want to delete this task?")){
        $(this).parent().parent().remove();
    }
    
})

$('body').on('click', '.editIcon', function(){
    $(this).hide();
    $(this).before(`<img class="save" src="img/save.png">`);
    var text = $(this).parent().siblings('.taskList').text();
    //console.log($(this).parent().siblings());
    $(this).parent().siblings('.taskList').hide();
    $(this).parent().siblings('.text').show();
    $(this).parent().siblings('.text').focus().val('').val(text);
})

$('body').on('click', '.save', function(){
    $(this).hide();
    $(this).before(`<img class="editIcon" src="img/edit.png ">`);
    var newText = $(this).parent().siblings('.text').val();
    $(this).parent().siblings('.taskList').show();
    $(this).parent().siblings('.text').hide();
    $(this).parent().siblings('.taskList').html(newText);
})




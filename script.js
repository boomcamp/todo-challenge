var count = 0;
$(document).ready(function(){
    $('.sidebar').addClass("none");
    $('.menu').click(function(){
        $('.menu').addClass("none");
        $('.sidebar').removeClass("none");
    });
    $('.close').click(function(){
        $('.menu').removeClass("none");
        $('.menu').addClass("animate-left");
        $('.sidebar').addClass("none");
    });
    $('.add').click(function(){
        var text = $('.text-input').val();
        if($('.text-input').val() === ""){
            alert("Empty todo");
        }else{
            addTaskFunc(text);
        }
        $('.text-input').val('')
    });
});
function deletethis(e){
    if(confirm("You sure to Delete this task?")){
        $(`.input${e}`).remove();
    }
}
function addsub(e){

}
function movedown(e){
    let txt = $(`.input${e}`).text();
    let data = $(`.input${e}`).data("pos");
    let temp = $(`.input${e}`).detach();
    if(data === "todo"){
        $('.progress').append(temp);
        $(`.input${e}`).data("pos", "prog")
    }else if(data === "prog"){
        $('.done').append(temp);
        $(`.input${e}`).data("pos","done");
    }
}
function moveup(e){
    let txt = $(`.input${e}`).text();
    let data = $(`.input${e}`).data("pos");
    let temp = $(`.input${e}`).detach();
    if(data === "prog"){
        $('.todo').append(temp);
        $(`.input${e}`).data("pos", "todo")
    }else if(data === "done"){
        $('.progress').append(temp);
        $(`.input${e}`).data("pos","prog");
    }
}
function editme(e){
    $(`.edittxt${e}`).attr("contenteditable", "true");
    $(`.edittxt${e}`).addClass("text");
    $(`.edittxt${e}`).keydown(function(press){
        if(press.keyCode === 13){
            $(`.edittxt${e}`).removeClass("text");
            $(`.edittxt${e}`).attr("contenteditable", "false");
        }
    });
}
function addTaskFunc(task){
    count+=1;
    $('.todo').append(`
    <li data-pos="todo" class="margin input${count}">
        <p contenteditable=false class="edittxt${count} animate-left">${task}<p>
        <div class="options center animate-left">
            <button title="Press Enter after you Edit task to save it" class="white"><ion-icon onclick="editme(${count})" name="create"></ion-icon></button>
            <button class="movedown white" title="Move Task"><ion-icon onclick="movedown(${count});" name="checkmark-circle-outline"></ion-icon></button>
            <button class="moveup white" title="Cancel Task"><ion-icon onclick="moveup(${count});" name="remove-circle-outline"></ion-icon></button>
            <button class="delete white" onclick="deletethis(${count});" title="Delete Task"><ion-icon name="trash"></ion-icon></button>
        </div>
    </li>`);
}
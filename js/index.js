var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
var today  = new Date();
$('nav p:last-of-type').text(today.toLocaleDateString("en-US", options));
// Others
(function($){
    $(function(){
        var tabNav = $('.tab-nav');
        tabNav.on('click', 'label', function(){
        tabNav.find('label').removeClass('active');
        $(this).addClass('active');
})
});
})(jQuery);
$( document ).ready(function() {
    var name;
    if (localStorage.getItem("name") === null) {
        name = prompt("What's your name?");
        localStorage.setItem("name", name);
    }
    name = localStorage.getItem("name");
    if(name) $('nav h1').html(`Good Day, ${name}`);
    else $('nav h1').html(`Good Day`);
    // Start
    if (localStorage.getItem("toDoList") === null) {
        var toDoList = [];
        localStorage.setItem("toDoList", JSON.stringify(toDoList));
    }
    if (localStorage.getItem("inProgress") === null) {
        var inProgress = [];
        localStorage.setItem("inProgress", JSON.stringify(inProgress));
    }
    if (localStorage.getItem("done") === null) {
        var done = [];
        localStorage.setItem("done", JSON.stringify(done));
    }
    var storedToDoList = JSON.parse(localStorage.getItem("toDoList"));
    var storedInProgressList = JSON.parse(localStorage.getItem("inProgress"));
    var storedDoneList = JSON.parse(localStorage.getItem("done"));
    // End
    if(storedToDoList.length > 0){
        storedToDoList.reverse().forEach(element => {
            $('.tab-contents .tab-1 .tab-content ul li:first-of-type').after(`<li>
                <div class="left">
                    <p class="p">${element}</p>
                </div>
                <div>
                    <button class="btn bttn btn-hover teal save" title='Save' style="display: none;"><img src="./img/save.png"></button>
                    <button class="btn bttn btn-hover red putBack" title='Put back to To Do' style="display: none;"><img src="./img/back.png"></button>
                    <button class="btn bttn btn-hover blue editBtn"><img src="./img/edit.png"></button>
                    <button class="btn bttn btn-hover teal inProgress" title='Add to In Progress'><img src="./img/in-progress_white.png"></button>
                    <button class="btn bttn btn-hover red delete"><img src="./img/trash.png"></button>
                </div>
            </li>`);
        });
    }
    if(storedInProgressList.length > 0){
        storedInProgressList.reverse().forEach(element => {
            $('.tab-contents .tab-2 .tab-content ul').prepend(`<li>
                <div class="left">
                    <label class="control control--checkbox">
                        <input type="checkbox">
                        <div class="control__indicator"></div>
                    </label>
                    <p class="p">${element}</p>
                </div>
                <div>
                    <button class="btn bttn btn-hover teal save" title="Save" style="display: none;"><img src="./img/save.png"></button>
                    <button class="btn bttn btn-hover red putBack" title="Put back to To Do"><img src="./img/back.png"></button>
                    <button class="btn bttn btn-hover blue editBtn"><img src="./img/edit.png"></button>
                    <button class="btn bttn btn-hover teal inProgress" title="Add to In Progress" style="display: none;"><img src="./img/in-progress_white.png"></button>
                    <button class="btn bttn btn-hover red delete"><img src="./img/trash.png"></button>
                </div>
            </li>`);
        });
    }
    if(storedDoneList.length > 0){
        storedDoneList.reverse().forEach(element => {
            $('.tab-contents .tab-3 .tab-content ul').prepend(`<li>
                <div class="left">
                    <p class="p" style="text-decoration: line-through;">${element}</p>
                </div>
                <div>
                    <button class="btn bttn btn-hover teal save" title='Save' style="display: none;"><img src="./img/in-progress_white.png"></button>
                    <button class="btn bttn btn-hover red putBack" title='Put back to In Progress'><img src="./img/in-progress_white.png"></button>
                    <button class="btn bttn btn-hover blue editBtn"><img src="./img/edit.png"></button>
                    <button class="btn bttn btn-hover teal inProgress" title='Add to In Progress' style="display: none;"><img src="./img/in-progress_white.png"></button>
                    <button class="btn bttn btn-hover red delete"><img src="./img/trash.png"></button>
                </div>
            </li>`);
        });
    }
    $('body').on('click', '.add', function(e) {
        e.preventDefault();
        if($('.to-input').val()){
            $('.tab-contents .tab-1 .tab-content ul li:first-of-type').after(`<li>
                <div class="left">
                    <p class="p">${$('.to-input').val()}</p>
                </div>
                <div>
                    <button class="btn bttn btn-hover teal save" title='Save' style="display: none;"><img src="./img/save.png"></button>
                    <button class="btn bttn btn-hover red putBack" title='Put back to To Do' style="display: none;"><img src="./img/back.png"></button>
                    <button class="btn bttn btn-hover blue editBtn"><img src="./img/edit.png"></button>
                    <button class="btn bttn btn-hover teal inProgress" title='Add to In Progress'><img src="./img/in-progress_white.png"></button>
                    <button class="btn bttn btn-hover red delete"><img src="./img/trash.png"></button>
                </div>
            </li>`);
            storedToDoList.push($('.to-input').val());
            localStorage.setItem("toDoList", JSON.stringify(storedToDoList));
            $(this).parent().siblings('.left').children(":last").val('');
        }else alert('Error! Please add content');
    });
    $('body').on('click', '.delete', function(e) {
        e.preventDefault();
        if (confirm("Are you sure you want to delete this task?")){
            var vals;
            if($(this).parent().siblings('.left').children('.to-input').length) vals = $(this).parent().siblings('.left').children('.to-input').val();
            else vals = $(this).parent().siblings('.left').children('.p').html();
            if($(this).closest('.tab-content').closest('ul li').attr('class') == 'tab-1'){
                storedToDoList.splice(storedToDoList.indexOf(vals), 1);
                localStorage.setItem("toDoList", JSON.stringify(storedToDoList));
            }else if($(this).closest('.tab-content').closest('ul li').attr('class') == 'tab-2'){
                storedInProgressList.splice(storedInProgressList.indexOf(vals), 1);
                localStorage.setItem("inProgress", JSON.stringify(storedInProgressList));
            }else{
                storedDoneList.splice(storedDoneList.indexOf(vals), 1);
                localStorage.setItem("done", JSON.stringify(storedDoneList));
            }
            $(this).parent().parent().remove();
        } 
        return false;
    });
    $('body').on('click', '.editBtn', function(e) {
        e.preventDefault();
        var inputValue = $(this).parent().siblings('.left').children(".p").text();
        $(this).parent().siblings('.left').children(".p").remove();
        $(this).parent().siblings('.left').append(`<input type="text" class="to-input" required value="${inputValue}"/>`);
        $(this).parent().siblings('.left').addClass('edit');
        $(this).parent().siblings('.left').children(".to-input").focus().val('').val(inputValue);
        $(this).siblings('.save').show();
        $(this).parent().siblings('.left').children(".control").children("input").attr("disabled", true);
        $(this).hide();
        if($(this).closest('.tab-content').closest('ul li').attr('class') == 'tab-1'){
            storedToDoList.splice(storedToDoList.indexOf(inputValue), 1);
            localStorage.setItem("toDoList", JSON.stringify(storedToDoList));
        }else if($(this).closest('.tab-content').closest('ul li').attr('class') == 'tab-2'){
            storedInProgressList.splice(storedInProgressList.indexOf(inputValue), 1);
            localStorage.setItem("inProgress", JSON.stringify(storedInProgressList));
        }else{
            storedDoneList.splice(storedDoneList.indexOf(inputValue), 1);
            localStorage.setItem("done", JSON.stringify(storedDoneList));
        }
    });
    $('body').on('click', '.save', function(e) {
        e.preventDefault();
        var inputValue = $(this).parent().siblings('.left').children(".to-input").val();
        $(this).parent().siblings('.left').children(".to-input").remove();
        $(this).parent().siblings('.left').append(`<p class="p">${inputValue}</p>`);
        $(this).parent().siblings('.left').removeClass('edit');
        $(this).siblings('.editBtn').show();
        $(this).parent().siblings('.left').children(".control").children("input").attr("disabled", false);
        if($(this).closest('.tab-content').closest('ul li').attr('class') == 'tab-3'){
            $(this).parent().siblings('div:last').children('p').css('text-decoration','line-through');
        }
        $(this).hide();
        if($(this).closest('.tab-content').closest('ul li').attr('class') == 'tab-1'){
            storedToDoList.push(inputValue);
            localStorage.setItem("toDoList", JSON.stringify(storedToDoList));
        }else if($(this).closest('.tab-content').closest('ul li').attr('class') == 'tab-2'){
            storedInProgressList.push(inputValue);
            localStorage.setItem("inProgress", JSON.stringify(storedInProgressList));
        }else{
            storedDoneList.push(inputValue);
            localStorage.setItem("done", JSON.stringify(storedDoneList));
        }
    });
    $('body').on('click', '.inProgress', function(e) {
        e.preventDefault();
        var vals;
        if($(this).parent().siblings('.left').children('.to-input').length) vals = $(this).parent().siblings('.left').children('.to-input').val();
        else vals = $(this).parent().siblings('.left').children('.p').html();
        storedToDoList.splice(storedToDoList.indexOf(vals), 1);
        storedInProgressList.push(vals);
        localStorage.setItem("toDoList", JSON.stringify(storedToDoList));
        localStorage.setItem("inProgress", JSON.stringify(storedInProgressList));
        $(this).parent().siblings('.left').prepend(`<label class="control control--checkbox"><input type="checkbox"/><div class="control__indicator"></div></label>`);
        $(this).siblings('.putBack').show();
        $(this).hide();
        $(this).siblings('.putBack').children('img').prop('src', './img/back.png');
        $('.tab-2 .tab-content ul').prepend(`<li>${$(this).parent().parent().remove().html()}</li>`);
        // storedToDoList.splice(storedToDoList.indexOf(inputValue), 1);
    });
    $('body').on('click', '.putBack', function(e) {
        e.preventDefault();
        var vals;
        if($(this).parent().siblings('.left').children('.to-input').length) vals = $(this).parent().siblings('.left').children('.to-input').val();
        else vals = $(this).parent().siblings('.left').children('.p').html();
        $(this).parent().parent().children('.left').children('label').remove();
        $(this).parent().siblings('div:last').children('p').css('text-decoration','none');
        if($(this).closest('.tab-content').closest('ul li').attr('class') == 'tab-3'){
            if (confirm("Are you sure you want to put it back to In Progress List?")) {
                storedDoneList.splice(storedDoneList.indexOf(vals), 1);
                storedInProgressList.push(vals);
                localStorage.setItem("done", JSON.stringify(storedDoneList));
                localStorage.setItem("inProgress", JSON.stringify(storedInProgressList));
                $(this).parent().siblings('.left').prepend(`<label class="control control--checkbox"><input type="checkbox"/><div class="control__indicator"></div></label>`);
                $(this).children('img').prop('src', './img/back.png');
                $('.tab-2 .tab-content ul').prepend(`<li>${$(this).parent().parent().remove().html()}</li>`);
            }
        }else{ 
            if (confirm("Are you sure you want to put it back to To Do List?")) {
                storedInProgressList.splice(storedInProgressList.indexOf(vals), 1);
                storedToDoList.push(vals);
                localStorage.setItem("inProgress", JSON.stringify(storedInProgressList));
                localStorage.setItem("toDoList", JSON.stringify(storedToDoList));
                $(this).siblings('.inProgress').show();
                $(this).hide();
                $('.tab-1 .tab-content ul li:first-of-type').after(`<li>${$(this).parent().parent().remove().html()}</li>`);
            }
        }
    })
    $('body').on('click', 'input[type=checkbox]', function(e) {
        var vals;
        if($(this).closest('.left').children('.to-input').length) vals = $(this).closest('.left').children('.to-input').val();
        else vals = $(this).closest('.left').children('.p').html();
        e.preventDefault();
        if (confirm("Are you sure you want to mark this task as done?")) {
            storedInProgressList.splice(storedInProgressList.indexOf(vals), 1);
            storedDoneList.push(vals);
            localStorage.setItem("done", JSON.stringify(storedDoneList));
            localStorage.setItem("inProgress", JSON.stringify(storedInProgressList));
            $(this).parent().parent().children('label').hide();
            $(this).parent().parent().siblings(':last').children('.putBack, .editBtn').show();
            $(this).parent().siblings('p').css('text-decoration','line-through');
            $(this).parent().parent().siblings(':last').children('.putBack').prop('title', 'Put back to In Progress');
            $(this).parent().parent().siblings(':last').children('.putBack').children('img').prop('src', './img/in-progress_white.png');
            $('.tab-3 .tab-content ul').prepend(`<li>${$(this).parent().parent().parent().remove().html()}</li>`);
        }
    });
});
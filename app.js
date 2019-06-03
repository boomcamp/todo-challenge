$(document).ready(function() {
    var taskInput = document.getElementsByClassName("new-task");
        
    $('#button').click(
        function(){
            var toAdd = $('input[name=ListItem]').val();
            $('#tasks').append(`
            <li id="new-task">
                <label>${toAdd}</label>
                <input type="text">
                <a><i class = "fa fa-trash"></i></a>
                <button class="edit-task" style="float: right;"><i class = "fa fa-edit"></i></button>
                <button class="save-task" style="float: right;"><i class = "fa fa-check"></i></button>
            </li>`
            );
            $('input[name=ListItem]').val('');
        });

    $(document).on('click', '#new-task a', function(){
        $(this).parent().toggleClass('strike').fadeOut('slow');
        $($(this).siblings()[0]).toggleClass('strike').fadeOut('slow');
    });    
    
    $("form").submit(function() { return false; });

    $(document).on('click', '.edit-task', function(){
        var value = $(this).siblings()[0].innerText
        $($(this).siblings()[0]).hide();
        $($(this).siblings()[1]).show();
        $($(this).siblings()[1]).attr("value", value);
        $(this).hide();
        $($(this).siblings()[3]).show();
        console.log($(this).siblings());
    });

    $(document).on('click', '.save-task', function(){
        var value = $($(this).siblings()[1]).val();
        $($(this).siblings()[0]).show();
        $($(this).siblings()[1]).hide();
        $(this).hide();
        $($(this).siblings()[3]).show();
        $(this).siblings()[0].innerHTML = value;
        console.log($(this).siblings());
    });



    $("input[name=ListItem]").keyup(function(event){
        if(event.keyCode == 13){
            $("#button").click();
        }         
    });

    $(document).on('click', '#new-task label', function(){

        $('#incomplete-tasks').append(
        `
        <li class="incomplete">
            <input type="checkbox">
            <label>${$(this).text()}</label>
            <input type="text">
            <button class="edit"><i class = "fa fa-edit top"></i></button>
            <button class="save"><i class = "fa fa-check top"></i></button>
            <button class="delete"><i class = "fa fa-trash top"></i></button>
            <button class="return"><i class = "fa fa-backward top"></i></button>
        </li>
        `
        );
        $(this).parent().toggleClass('mark').fadeOut(800);
    });

    $(document).on('click', '.edit', function(){
        var value = $(this).siblings()[1].innerText
        $($(this).siblings()[1]).hide();
        $($(this).siblings()[2]).show();
        $($(this).siblings()[2]).attr("value", value);
        $(this).hide();
        $($(this).siblings()[3]).show();
    });

    $(document).on('click', '.save', function(){
        var value = $($(this).siblings()[2]).val();
        $($(this).siblings()[1]).show();
        $($(this).siblings()[2]).hide();
        $(this).hide();
        $($(this).siblings()[3]).show();
        $(this).siblings()[1].innerHTML = value;
    });

    $(document).on('click', '.delete', function(){
        $(this).parent().toggleClass('strike').fadeOut('slow');
        $($(this).siblings()[1]).toggleClass('strike').fadeOut('slow');
    });

    $(document).on('click', '.return', function(){
        var value = $(this).siblings()[1].innerText;
        $(this).parent().toggleClass('strike').fadeOut('slow');
        $($(this).siblings()[1]).toggleClass('return-strike').fadeOut(800);
        
        $('#tasks').append(`
            <li id="new-task">
                <label>${value}</label>
                <input type="text">
                <a><i class = "fa fa-trash"></i></a>
                <button class="edit-task" style="float: right;"><i class = "fa fa-edit"></i></button>
                <button class="save-task" style="float: right;"><i class = "fa fa-check"></i></button>
            </li>`
        );
    });

    $(document).on('change', "input:checkbox", function() {
        if(this.checked) {
            var value = $(this).siblings()[0].innerHTML;
            $(this).parent().toggleClass('strike').fadeOut(1000);
            $($(this).siblings()[0]).toggleClass('strike').fadeOut(1000);
            $('#done-tasks').append(`
                <li class = "incomplete">
                    <input type="checkbox" checked >
                    <label>${value}</label>
                    <button class="delete" id="done"><i class = "fa fa-trash"></i></button>
                </li>
            `);
            console.log(value);
        }   
    });
    

    $(document).on('change', "input:checkbox", function(){
        if (!this.checked) {
            value = $(this).siblings()[0].innerText
            
            $('#incomplete-tasks').append(
                `
                <li class="incomplete">
                    <input type="checkbox">
                    <label>${value}</label>
                    <input type="text">
                    <button class="edit"><i class = "fa fa-edit top"></i></button>
                    <button class="save"><i class = "fa fa-check top"></i></button>
                    <button class="delete"><i class = "fa fa-trash top"></i></button>
                    <button class="return"><i class = "fa fa-backward top"></i></button>
                </li>
                `
                );
            $(this).parent().toggleClass('strike').fadeOut('slow');
        }
    });

    
      
      /*$('input').focus(function() {
        $(this).val('');
      });*/
      
      $('ol').sortable();
      
    }
);

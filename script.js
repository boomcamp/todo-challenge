$(document).ready(function(){
    $('.sidebar').addClass("none");
    $('.menu').click(function(){
        $('.menu').addClass("none");
        $('.sidebar').removeClass("none");
    });
    $('.close').click(function(){
        $('.menu').removeClass("none");
        $('.menu').addClass("animate-left");
        // $('.sidebar').addClass("animate-left")
        $('.sidebar').addClass("none");
    });
    // ${$('.input-again-todo').text()}
    $('.add').click(function(){
        var text = $(`
        <div class="flex">
            <input class="thisCheck" type="checkbox">
            <p class="input">${$('.text-input').val()}<p>
        </div>`);
        if($('.text-input').val() === ""){
            alert("Empty todo");
        }else{
            $('.todo').append(text);
        }
        $('.text-input').val('')
    });

    $(document).on('click', '.delete',function(){
        if($('.thisCheck').is(':checked')){
            if(confirm("Delete this task?")){
                var element = document.querySelector('.flex');
                element.remove();
            } 
        }
    });

    $(document).on('click','#movedown1', function(){
        if($('.thisCheck').is(':checked')){
            var text = $(`
                <div class="flex">
                    <input class="thisCheck" type="checkbox">
                    <p class="input">${$('.input').text()}<p>
                </div>`);
            console.log(text)
            $('.progress').append(text);

            var element = document.querySelector('.flex');
            element.remove();
        }else{
            alert('Check Items first')
        }
        
    });
    $(document).on('click','#movedown2', function(){
        if($('.thisCheck').is(':checked')){
            var text = $(`
                <div class="flex">
                    <input class="thisCheck" type="checkbox">
                    <p class="input">${$('.input').text()}<p>
                </div>`);
            $('.done').append(text);

            var element = document.querySelector('.flex');
            element.remove();
        }else{
            alert('Check Items first')
        }
        
    });
    $(document).on('click','#moveup1', function(){
        if($('.thisCheck').is(':checked')){
            var text = $(`
                <div class="flex">
                    <input class="thisCheck" type="checkbox">
                    <p class="input">${$('.input').text()}<p>
                </div>`);
            $('.todo').append(text);
            var element = document.querySelector('.flex');
            element.remove();
        }else{
            alert('Check Items first')
        }
    });
    $(document).on('click','#moveup2', function(){
        if($('.thisCheck').is(':checked')){
            var text = $(`
                <div class="flex">
                    <input class="thisCheck" type="checkbox">
                    <p class="input">${$('.input').text()}<p>
                </div>`);
            $('.progress').append(text);
            var element = document.querySelector('.flex');
            element.remove();
        }else{
            alert('Check Items first')
        }
    });
    // $(document).on('click', '.again-to-todo', function(){
    //     var text = `
    //     <div class="flex">
    //         <p class="input">${$('.flex1').children(".input").text()}<p>
    //         <div class="options">
    //             <button class="delete"><ion-icon name="trash"></ion-icon></button>
    //             <button class="move-to-progress"><ion-icon name="arrow-down"></ion-icon></button>
    //             <button class="edit"><ion-icon name="create"></ion-icon></button>
    //         </div>
    //     </div>`;
    //     $('.todo').append(text);
    //     $('.flex1').remove();
    // });
    // $(document).on('click', '.move-to-done', function(){
    //     var text = `
    //     <div class="flex">
    //         <p class="input">${$('.flex1').children(".input").text()}<p>
    //         <div class="options">
    //             <button class="delete"><ion-icon name="trash"></ion-icon></button>
    //             <button class="again-to-progress"><ion-icon name="arrow-up"></ion-icon></button>
    //             <button class="edit"><ion-icon name="create"></ion-icon></button>
    //         </div>
    //     </div>`;
    //     $('.done').append(text);
    //     $('.flex1').remove();
    // });
    // $(document).on('click', '.again-to-progress', function(){
    //     var text = `
    //     <div class="flex1">
    //         <p class="input">${$('.flex').children(".input").text()}<p>
    //         <div class="options">
    //             <button class="delete"><ion-icon name="trash"></ion-icon></button>
    //             <button class="move-to-done"><ion-icon name="arrow-down"></ion-icon></button>
    //             <button class="again-to-todo"><ion-icon name="arrow-up"></ion-icon></button>
    //             <button class="edit"><ion-icon name="create"></ion-icon></button>
    //         </div>
    //     </div>`;
    //     $('.progress').append(text);
    //     $('.flex').remove();
    // });
});
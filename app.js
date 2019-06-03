$(document).ready(function() {
    //hidden by default{
    $('.NewTask-form').hide();

    //}

    ! function() {
        const monthNames = ["January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
        ];
        const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        var d = new Date();
        var month = d.getMonth() + 1;
        var year = d.getFullYear();
        var dd = d.getDate();


        $('.day').html(dd);
        $('.year').html(year);
        $('.month').html(monthNames[d.getMonth()]);
        $('.week').html(dayNames[d.getDay()]);
    }();

    $('.add-todo').click(function() {
        $('.NewTask-form').toggle();
    })

})


$('#add2do').click(function() {
    $('.todo-list').append(
        '<div class="todo">' +
        $('#todo-input').val() +
        ' <button class="todo-del"><i class="btn-ico fas fa-trash-alt"></i></button>' +
        '</div>'
    )
    event.preventDefault();
});

$(document).on("click", ".todo-del", function(e) {
    e.stopPropagation();
    e.preventDefault();
    $(this).parent().remove();
});
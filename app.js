$(document).ready(function() {
    //hidden by default{
    $('.NewTask-form').hide();
    $('.prog-container').hide();
    $('.done-container').hide();

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
    });

    $('#add2do').click(function() {
        var regEx = /^\s+$/;
        var checkArray = $('#todo-input').val()
        if (checkArray == '') {
            alert('Enter something!');
        } else {
            $('.todo-list').append(
                '<div class="todo">' +
                '<span>' +
                $('#todo-input').val() +
                '</span>' +
                '<button class="todo-del"><i class="btn-ico fas fa-trash-alt"></i></button>' +
                '<button class="edit"><i class="btn-ico far fa-edit"></i></button>' +
                '</div>'
            )
            $('#todo-input').val('');
            $('.NewTask-form').hide();
        }

        event.preventDefault();
    });

    $('.progress').click(function() {
        $('.prog-container').toggle();
    })

    $('.done').click(function() {
        $('.done-container').toggle();
    })


});


$(document).on("click", ".todo-del", function(e) {
    e.stopPropagation();
    e.preventDefault();
    $(this).parent().remove();
});

$(document).on("click", ".todo-undo", function(e) {
    e.stopPropagation();
    e.preventDefault();

    $('.todo-list').append(
        '<div class="todo">' +
        '<span>' +
        $(this).parent().text() +
        '</span>' +
        '<button class="todo-del"><i class="btn-ico fas fa-trash-alt"></i></button>' +
        '<button class="edit"><i class="btn-ico far fa-edit"></i></button>' +
        '</div>'
    )

    $(this).parent().remove();
})

$(document).on("click", ".todo", function(e) {
    e.stopPropagation();
    e.preventDefault();
    $('.prog-list').append(
        '<div class="prog">' +
        '<span>' +
        $(this).text() +
        '</span>' +
        '<button class="todo-undo"><i class="btn-ico fas fa-undo-alt"></i></button>' +
        '</div>'
    )
    $(this).fadeOut("normal", function() {
        $(this).remove();
    });
})

$(document).on("click", ".prog", function(e) {
    e.stopPropagation();
    e.preventDefault();
    $('.done-list').append(
        '<div class="jobDone">' +
        '<button class="prog-undo"><i class="btn-ico fas fa-undo-alt"></i></button>' +
        '<span>' +
        $(this).text() +
        '</span>' +
        '</div>'
    )
    $(this).fadeOut("normal", function() {
        $(this).remove();
    });
});

$(document).on("click", ".jobDone", function(e) {
    e.stopPropagation();
    e.preventDefault();
    $(this).fadeOut("normal", function() {
        $(this).remove();
    });
});

$(document).on("click", ".prog-undo", function(e) {
    e.stopPropagation();
    e.preventDefault();
    $('.prog-list').append(
        '<div class="prog">' +
        '<span>' +
        $(this).parent().text() +
        '</span>' +
        '<button class="todo-undo"><i class="btn-ico fas fa-undo-alt"></i></button>' +
        '</div>'
    )
    $(this).parent().remove();
});

$(document).on("click", ".edit", function(e) {
    e.stopPropagation();
    e.preventDefault();
    $(this).hide();
    var content = $(this).parent().text();
    $(this).parent().html(
        '<input class="edit-area" value="' + content + '"></input> ' +
        '<button class="save-edit"><i class="btn-ico fas fa-save"></i></button>');

})

$(document).on("click", ".edit-area", function(e) {
    e.preventDefault();
    e.stopPropagation();
});

$(document).on("click", ".save-edit", function(e) {
    e.preventDefault();
    e.stopPropagation();
    var updated = $('.edit-area').val();
    $(this).parent().html(
        '<span>' + updated + '</span>' +
        '<button class="todo-del"><i class="btn-ico fas fa-trash-alt"></i></button>' +
        '<button class="edit"><i class="btn-ico far fa-edit"></i></button>'
    )

})
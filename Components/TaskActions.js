export default function TaskActions() {
    $('.all-task-container').on('click','.action',function(e){
        let leftval, topval;

        let status = $(e.target).attr('data-status');
        $('.todo-buttons-container .task-status').html(status);
        $('.todo-buttons-container').insertAfter(this).toggle();

        if($('body .todo-buttons-container').get().length === 0){
            $('body').append(todobuttonscontainer);0
        }
    });
}



const todobuttonscontainer = `<div class="todo-buttons-container" style="display:none">
<p class="task-status secondary-font">\</p>

<!--action button imitation -->
<div class="button-group">
        <i id="edit-action" class="material-icons-outlined">
                edit
        </i>
        <i id="delete-action" class="material-icons-outlined">
                delete
                </i>
</div>
</div>`

let once = true;
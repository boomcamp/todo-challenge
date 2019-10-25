export default function TaskActions() {
    $('.all-task-container').on('click','.action',function(e){
        let leftval, topval;

        let status = $(e.target).attr('data-status');
        $('.todo-buttons-container .task-status').html(status);
        $('.todo-buttons-container').insertAfter(this).toggle();

        // console.log(status);

        if($('body .todo-buttons-container').get().length === 0){
            $('body').append(todobuttonscontainer);
        }

        if(status=='todo'){
            $('.status-control').remove();
            $('.todo-buttons-container').prepend(sc_todo);        
        }
        if(status=='doing'){
            $('.status-control').remove();
            $('.todo-buttons-container').prepend(sc_doing); 
        }
        if(status=='done'){
            $('.status-control').remove();
            $('.todo-buttons-container').prepend(sc_done); 
        }
    });
}

const todobuttonscontainer = `<div class="todo-buttons-container" style="display:none">
<!--insert status control here -->

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


const sc_todo = `<div class="status-control">
                    <p class="task-status secondary-font">TODO</p>

                    <i class="material-icons-outlined scbtn" data-goto='doing'>
                    arrow_right
                    </i>
                </div>`;

const sc_doing = `<div class="status-control">
                    <i class="material-icons-outlined scbtn" data-goto='todo'>
                    arrow_left
                    </i>

                    <p class="task-status secondary-font">DOING</p>

                    <i class="material-icons-outlined scbtn" data-goto='done'>
                    arrow_right
                    </i>
                </div>`;
const sc_done = `<div class="status-control">
                    <i class="material-icons-outlined scbtn" data-goto='doing'>
                    arrow_left
                    </i>

                    <p class="task-status secondary-font">DONE</p>
                </div>`;
let once = true;
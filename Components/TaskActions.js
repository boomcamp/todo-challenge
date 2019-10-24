export default function TaskActions() {
    $('.all-task-container').on('click','.action',function(e){
        let leftval, topval;

        let status = $(e.target).attr('data-status');
        $('.todo-buttons-container .task-status').html(status);
        $('.todo-buttons-container').insertAfter(this).toggle();
    });
}

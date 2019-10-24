export default function AddTask() {

    $('.add-task').on('click',function(){
        $('.task-input').show();
    });

    $('#add-this-button').on('click',function(){
        $('.todo-task-container').append(processInput($('.newtask').val(), 'todo'));

        //return modified and called elements to default
        $('.newtask').val('');
        $('.task-input').hide();
    });
}


export function processInput(taskText, status){

    let processedInput = `<section class="todo-task-actionable action" data-status="${status}">
                            <label class="todo-task-action">
                                <p class="task-statement secondary-font">${taskText}</p>
                                <input type="checkbox" class="template-checkbox">
                                <span class="checkmark"></span>
                            </label>
                        </section>`;
    return processedInput;
}

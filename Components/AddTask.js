
import ProcessData from './ProcessData.js';

export default function AddTask() {

    let inputstatus = 'todo';

    //toggle add input form
    $('.add-task').on('click',function(e){

        inputstatus = $(e.target).attr('data-status');
        
        taskinput.insertAfter($(e.target).parent()[0]).show().addClass('.task-open');
    });


    //append newly created task
    $('.all-task-container').on('click','#add-this-button',function(){

        //append according to status
        // $(`.${inputstatus}-task-container`).append(displayData($('.newtask').val(), inputstatus));

        //process to data
        ProcessData($('.newtask').val(), inputstatus);

        //return modified and called elements to default
        $('.newtask').val('');
        $('.task-input').hide();
    });
}


export function displayData(taskText, status){

    let processedInput = `<section class="todo-task-actionable action" data-status="${status}">
                            <label class="todo-task-action">
                                <p class="task-statement secondary-font">${taskText}</p>
                                <input type="checkbox" class="template-checkbox">
                                <span class="checkmark"></span>
                            </label>
                        </section>`;

    return processedInput;
}


const taskinput = $('.task-input');

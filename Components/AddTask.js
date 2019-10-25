
import ProcessData from './ProcessData.js';

export default function AddTask() {

    let inputstatus = 'todo';

    //toggle add input form
    $('.add-task').on('click',function(e){

        inputstatus = $(e.target).attr('data-status');
        
        taskinput.insertAfter($(e.target).parent()[0]).toggle();
    });

    //append newly created task
    $('.all-task-container').on('click','#add-this-button',function(){

        //process to data
        let taskForProcess = {
            task: $('.newtask').val(),
            status: inputstatus 
        }

        ProcessData(taskForProcess);

        //return modified and called elements to default
        taskinput.hide();
        $('.todo-buttons-container').hide();
        console.log('closing');
    });
}


export function displayData(taskData){

    const ischecked = taskData.isChecked?'checked':'';

    let processedInput = `<section id="${taskData.id}" class="todo-task-actionable action" data-status="${taskData.status}" data-id="${taskData.id}">
                            <label class="todo-task-action">
                                <p class="task-statement main-font">${taskData.task}</p>
                                <input type="checkbox" class="template-checkbox" ${ischecked}>
                                <span class="checkmark"></span>
                            </label>
                        </section>`;

    return processedInput;
}

const taskinput = $('.task-input');

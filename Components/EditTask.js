import {DataToTab } from "./ProcessData.js";

export default function EditTask(){    

    let idref;

    $('.all-task-container').on('click','#edit-action',function(e){
        const TasktoEdit =  $('#edit-action').parent().parent().prev().attr('id');

        idref = TasktoEdit;

        const statement = $(`#${TasktoEdit} .task-statement`).html();
        const statusref = $(`#${TasktoEdit}`).attr('data-status');

        // remove the statement container
        $(`#${TasktoEdit} .todo-task-action`).remove();
        // $(`#${TasktoEdit} .editting-container`).remove();

         // disable edit button, avoid redundant append
         $(e.target).css('pointer-events', 'none');

        //hide action button group
        $('.todo-buttons-container').hide();
            
        // add input buttons
        $(`#${TasktoEdit}`).append(`
                    <div class="editting-container">
                        <input type="text" class="newtask secondary-font editting">
                        <i id="add-this-button-edit" data-status="${statusref}" class="material-icons-outlined">
                                add_box
                        </i>
                    </div>
        `);

        // add stored value to new input 
        $('.editting').val(statement);
    });


    $('.all-task-container').on('click','#add-this-button-edit',function(){
        const newval = $('.editting-container input').val();

        const EditTodo = {
            id: idref,
            task: newval
        }

        EditData(EditTodo);

        // enable edit button, avoid redundant append
        $('#edit-action').css('pointer-events', 'auto');
    });
}


export function EditData(datain){

    // console.log(datain);
    

    var oldState = JSON.parse(window.localStorage.getItem('todoStatelocal')) || [];


    oldState.map(datamatch=> datain.id === datamatch.id ? datamatch.task = datain.task:null);

    window.localStorage.setItem('todoStatelocal', JSON.stringify(oldState));

    DataToTab(JSON.parse(window.localStorage.getItem('todoStatelocal')));
}


import {DataToTab} from './ProcessData.js';

export default function DeleteTask(){

    $('.all-task-container').on('click','#delete-action',function(e){

        const TaskidToDel = $('#delete-action').parent().parent().prev().attr('id');

        //hide action button group
        $('.todo-buttons-container').hide();

        DeleteData(TaskidToDel);
    });
}

export function DeleteData(datain){

    var oldState = JSON.parse(window.localStorage.getItem('todoStatelocal')) || [];

    let indextoremove;

    for(let i in oldState){
        if(oldState[i].id === datain)
            indextoremove=i;
    }

    oldState.splice(indextoremove,1);

    window.localStorage.setItem('todoStatelocal', JSON.stringify(oldState));

    DataToTab(JSON.parse(window.localStorage.getItem('todoStatelocal')));
}
import {DataToTab } from "./ProcessData.js";

export default function CheckedMod(){
    $('.all-task-container').on('click','.todo-task-action',function(e){
    
        const TasktoEdit = $(this).parent().attr('id');

        const checkStatus = $(this).children('input')[0].checked;
        
        const data = {
            id: TasktoEdit,
            isChecked: !checkStatus
        };

        console.log(data);

        EditCheckedData(data);
    });
}

export function EditCheckedData(datain){
    var oldState = JSON.parse(window.localStorage.getItem('todoStatelocal')) || [];

    console.log(oldState);

    oldState.map(datamatch => datain.id === datamatch.id ? datamatch.isChecked = datain.isChecked:null);

    console.log(oldState);


    window.localStorage.setItem('todoStatelocal', JSON.stringify(oldState));

    DataToTab(JSON.parse(window.localStorage.getItem('todoStatelocal')));
}


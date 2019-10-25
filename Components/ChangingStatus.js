import {DataToTab} from './ProcessData.js';

export default function ChangingStatus(){
    $('.all-task-container').on('click','.scbtn',function(e){
        const Taskdir = $(e.target).attr('data-goto');

        const TasktoEdit =  $('.scbtn').parent().parent().prev().attr('id');
        
        const MoveTask = {
            id: TasktoEdit,
            status: Taskdir
        };

        EditState(MoveTask);

        $('.todo-buttons-container').hide();

        // console.log(TasktoEdit);
    });
}


export function EditState(datain){

    var oldState = JSON.parse(window.localStorage.getItem('todoStatelocal')) || [];

    oldState.map(datamatch=> datain.id === datamatch.id ? datamatch.status = datain.status:null);
    
    window.localStorage.setItem('todoStatelocal', JSON.stringify(oldState));

    DataToTab(JSON.parse(window.localStorage.getItem('todoStatelocal')));
}
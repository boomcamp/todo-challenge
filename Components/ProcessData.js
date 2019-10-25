import AddTask, {displayData} from './AddTask.js';
import randomId from './RandomID.js';

export default function ProcessData(newTaskdata) {

    $('.newtask').val('');


    var oldState = JSON.parse(window.localStorage.getItem('todoStatelocal')) || [];

    var newTodo = {
        id:randomId(),
        task: newTaskdata.task,
        status: newTaskdata.status
    };

    oldState.push(newTodo);

    
    window.localStorage.setItem('todoStatelocal', JSON.stringify(oldState));

    // window.localStorage.clear();

    DataToTab(JSON.parse(window.localStorage.getItem('todoStatelocal')));
}

let initial = true;

export function DataToTab(todos){

    initial = true;

    $('.todo-task-container :first').nextAll('.action').remove();
    $('.doing-task-container :first').nextAll('.action').remove();
    $('.done-task-container :first').nextAll('.action').remove();

    todos.map(todo=>{
        if(todo.status === 'todo'){
            $('.todo-task-container').append(displayData(todo));
        }
        if(todo.status === 'doing'){
            $('.doing-task-container').append(displayData(todo));
        }
        if(todo.status === 'done'){
            $('.done-task-container').append(displayData(todo));
        }
    });
}

export function LoadData(datain){
    DataToTab(datain);
}
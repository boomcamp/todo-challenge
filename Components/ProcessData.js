import AddTask, {displayData} from './AddTask.js';

export default function ProcessData(data,status) {

    var oldState = JSON.parse(window.localStorage.getItem('todoStatelocal')) || [];

    var newTodo = {
        id:1,
        task: data,
        status: status
    };

    oldState.push(newTodo);

    
    window.localStorage.setItem('todoStatelocal', JSON.stringify(oldState));

    // window.localStorage.clear();

    DataToTab(JSON.parse(window.localStorage.getItem('todoStatelocal')));
}

let initial = true;

export function DataToTab(todos){

    initial = true;

    // $('.todo-task-container').after().after().empty();
    // $('.doing-task-container').not(':first').empty();
    // $('.done-task-container').not(':first').empty();

    $('.todo-task-container :first').nextAll().remove();
    $('.doing-task-container :first').nextAll().remove();
    $('.done-task-container :first').nextAll().remove();

    todos.map(todo=>{
        if(todo.status === 'todo'){
            $('.todo-task-container').append(displayData(todo.task,todo.status));
        }
        if(todo.status === 'doing'){
            $('.doing-task-container').append(displayData(todo.task,todo.status));
        }
        if(todo.status === 'done'){
            $('.done-task-container').append(displayData(todo.task,todo.status));
        }
    });
}

function removeTab(container){
    container.not(':first').empty();
}


//sample data
// const todoState = {
//     todos:[{
//         id:1,
//         task: 'get it done',
//         status: 'todo'
//     },{
//         id:2,
//         task: 'dont be average',
//         status: 'doing'
//     },{
//         id:3,
//         task: 'chat jowa',
//         status: 'todo'
//     },{
//         id:4,
//         task: 'never drink',
//         status: 'done'
//     },{
//         id:5,
//         task: 'reinforcement meeting',
//         status: 'doing'
//     },{
//         id:6,
//         task: 'build project',
//         status: 'doing'
//     }]
// };


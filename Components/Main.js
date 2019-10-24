import AddTask, {processInput} from './AddTask.js'
import TaskActions from './TaskActions.js';

let todoState = {
    todos:[{
        id:1,
        task: 'get it done',
        status: 'todo'
    },{
        id:2,
        task: 'dont be average',
        status: 'doing'
    },{
        id:3,
        task: 'chat jowa',
        status: 'todo'
    },{
        id:4,
        task: 'never drink',
        status: 'done'
    },{
        id:5,
        task: 'reinforcement meeting',
        status: 'doing'
    },{
        id:6,
        task: 'build project',
        status: 'doing'
    }]
};


export default function DefaultController(){
    // default properties
    $('.task-input').hide();
    $('.todo-buttons-container').hide();
}

export function LoadData(){
    todoState.todos.map(todo=>{
        if(todo.status === 'todo'){
            $('.todo-task-container').append(processInput(todo.task,todo.status));
        }
        if(todo.status === 'doing'){
            $('.doing-task-container').append(processInput(todo.task,todo.status));
        }
        if(todo.status === 'done'){
            $('.done-task-container').append(processInput(todo.task,todo.status));
        }
    });
}


LoadData();
DefaultController();
AddTask();
TaskActions();
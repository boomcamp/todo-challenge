import AddTask, {displayData} from './AddTask.js'
import TaskActions from './TaskActions.js';
import ProcessData, {DataToTab, LoadData} from './ProcessData.js';
import EditTask from './EditTask.js';
import DeleteTask from './DeleteTask.js';



export default function DefaultController(){
    // default properties
    $('.task-input').hide();
    $('.todo-buttons-container').hide();

}

LoadData(JSON.parse(window.localStorage.getItem('todoStatelocal')) || []);
DefaultController();
AddTask();
TaskActions();
EditTask();
DeleteTask();
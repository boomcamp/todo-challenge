import AddTask, {displayData} from './AddTask.js'
import TaskActions from './TaskActions.js';
import ProcessData, {DataToTab} from './ProcessData.js';



export default function DefaultController(){
    // default properties
    $('.task-input').hide();
    $('.todo-buttons-container').hide();
}



export function InitializedData(){

}


// DataToTab();
DefaultController();
AddTask();
TaskActions();
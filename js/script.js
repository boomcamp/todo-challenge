let tasks = [];
tasks  = JSON.parse(localStorage['tasks']);

let flag = false;
let gid;
let updateFlag = false;

dataLoader();

new Task('Edit by clicking the task.');

function Task(task){
    let t = {
        id:  tasks.length+1,
        task,
        done: false,
        active: false,
        remove: true,
       

    }
    tasks.unshift(t);
    dataLoader();
    localStorage['tasks'] = JSON.stringify(tasks);
   
}


function completedLoader(){
    let page2 = "";
    let counter = 1;
    let color = "";
    let done = "",remove="",active="",state="Done";
    tasks.forEach(key=>{
        if(!key.done) return;
        !key.active ? active = "Set Active":state="Active";
        key.remove? remove = "Remove":"";
        counter%2===0?color="gray":"";
        
        let a1 = !key.done?'<button onclick="setItem('+key.id+',1)" class="ic">'+done+'</button>':"";
        let a2 = key.remove?'<button onclick="setItem('+key.id+',2)" class="ic"> '+remove+'</button>':"";
        let a3 = !key.active?'<button onclick="setItem('+key.id+',3)" class="ic"> '+active+'</button>':"";
       
        page2 += '<div class="list '+color+'">'+
        '<a onclick="edit('+key.id+')" class="task">'+
        key.task+
   ' <sup>'+state+'</sup></a>'+
   

    '<div class="icons">'+
      a1+
      a2+
      a3+
    '</div>'+
'</div>';
   counter++;
    });
    $('.completed').html(page2);
}


function activeLoader(){
    let page1 = "";
    let counter = 1;
    let color = "";
    let done = "",remove="",active="",state="Active";
    tasks.forEach(key=>{
        if(!key.active) return;
        !key.done ? done = "Set Done":state="Done";
        key.remove? remove = "Remove":"";
        counter%2===0?color="gray":"";
        
        let a1 = !key.done?'<button onclick="setItem('+key.id+',1)" class="ic">'+done+'</button>':"";
        let a2 = key.remove?'<button onclick="setItem('+key.id+',2)" class="ic"> '+remove+'</button>':"";
        let a3 = !key.active?'<button onclick="setItem('+key.id+',3)" class="ic"> '+active+'</button>':"";
       
        page1 += '<div class="list '+color+'">'+
        '<a onclick="edit('+key.id+')" class="task">'+
        key.task+
   ' <sup>'+state+'</sup></a>'+
   

    '<div class="icons">'+
      a1+
      a2+
      a3+
    '</div>'+
'</div>';
   counter++;
    });
    $('.active').html(page1);
}


function update(){
    tasks.forEach(t => {
        if(t.id===gid){
            t.task = $('.addtask').val();
        }
    });
    dataLoader();
   
}

function edit(key){
//   let task1 = prompt("Edit task");
//   tasks.forEach(t=>{
//       if(t.id===key){
//           t.task=task1;
//       }
//   });
//   dataLoader();
    $('.edit2').css('display','block');
    $('.input').css('display','block');
    updateFlag = true;
    gid=key;
    $('.add').text("UPDATE");
    let name = "";
    tasks.forEach(k=>{
        if(k.id===key){
            name=k.task;
        }
    });
    $('.addtask').val(name);
    localStorage['tasks'] = JSON.stringify(tasks);
    // let ht = '<div class="edit"><div class="con">'+
    //     '<input type="text" class="updatetask" placeholder="Update Task" value="'+name+'" required>'+
    // '</div></div>';
    //     $('.edit2').html(ht);
}

function dataLoader(){
    
    let page = "";
    let counter = 1;
    let color = "";
    let done = "Set Done",remove="",active="Set Active",state="";
    tasks.forEach(key=>{
        
        !key.done ? done = "Set Done":state="Done";
        !key.active ? active = "Set Active":state="Active";
        key.remove? remove = "Remove":"";
        counter%2===0?color="gray":"";
        
        let a1 = !key.done?'<button onclick="setItem('+key.id+',1)" class="ic">'+done+'</button>':"";
        let a2 = key.remove?'<button onclick="setItem('+key.id+',2)" class="ic"> '+remove+'</button>':"";
        let a3 = !key.active?'<button onclick="setItem('+key.id+',3)" class="ic"> '+active+'</button>':"";
       
        page += '<div class="list '+color+'">'+
    '<a onclick="edit('+key.id+')" class="task">'+
       key.task+
   ' <sup>'+state+'</sup></a>'+
   

    '<div class="icons">'+
      a1+
      a2+
      a3+
    '</div>'+
'</div>';
   counter++;
    });
    $('.body').html(page);
    
    
   
}


function setItem(key,state){

    
    
  switch(state){
      case 1:
        tasks.forEach(x=>{
            if(x.id===key){
              x.done = true;
              x.active = false;
              return;
            }
        });
        // activeLoader();
       
        
       
      break;
      case 2:
            tasks=tasks.filter(y=>y.id!==key); 
            dataLoader();  
            activeLoader();
            completedLoader();
      break;
      case 3: 
            tasks.forEach(x=>{
            if(x.id===key){
              x.active = true;
              x.done = false;
              return;
            }
        });
        // completedLoader();
        
      break;

      default: 
      
       
  }
  
   
   dataLoader();
   localStorage['tasks'] = JSON.stringify(tasks);
//    activeLoader();
//    completedLoader();
   
  
}

$(document).ready(()=>{
    // starting
    $('#start').css({'background':'red','color':'#fff'});
    $('.actual').on('click',function(){
        $('.actual').css({'background':'none','color':'#111'});
        
        $(this).css({'background':'red','color':'white'});
        $('.completed').css({'display':'none'});
        $('.active').css({'display':'none'});
        $('.body').css({'display':'block'});
        
    });
    $('.add').on('click',function(){


        if($('.addtask').val()<1 && flag){
            alert("Add a task.!");
        }
        else{
        if(updateFlag){
            update();
            updateFlag=false;
            gid="";
            $('.edit2').css('display','none');
            $('.add').text('ADD');
            $('.input').css('display','none');
        }
        else{


       if(!flag){
        $('.input').css('display','block');
        flag=true;
       }
       else {
           Task($('.addtask').val());
           $('.addtask').val('');
           $('.addtas').val('');
           $('.input').css('display','none');
           flag = false;
       }
    }
}
    });

    $('#active').on('click',function(){
        // activeLoader();
        $('.body').css({'display':'none'});
        $('.completed').css({'display':'none'});
        $('.active').css({'display':'block'});
        activeLoader();
    });

    $('#completed').on('click',function(){
        // activeLoader();
        $('.body').css({'display':'none'});
        $('.active').css({'display':'none'});
        $('.completed').css({'display':'block'});
        completedLoader();
    })
   
});

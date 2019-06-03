let tasks = [];
let flag = false;
let gid;
let updateFlag = false;

dataLoader();

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
}


function completedLoader(){
    let page = "";
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
       
        page += '<div class="list '+color+'">'+
        '<button onclick="edit('+key.id+')" class="task">'+
        key.task+
   ' <sup>'+state+'</sup></button>'+
   

    '<div class="icons">'+
      a1+
      a2+
      a3+
    '</div>'+
'</div>';
   counter++;
    });
    $('.completed').html(page);
}


function activeLoader(){
    let page = "";
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
       
        page += '<div class="list '+color+'">'+
        '<button onclick="edit('+key.id+')" class="task">'+
        key.task+
   ' <sup>'+state+'</sup></button>'+
   

    '<div class="icons">'+
      a1+
      a2+
      a3+
    '</div>'+
'</div>';
   counter++;
    });
    $('.active').html(page);
}

function edit(key){
//   let task1 = prompt("Edit task");
//   tasks.forEach(t=>{
//       if(t.id===key){
//           t.task=task1;
//       }
//   });
//   dataLoader();
        let ht = '<div class="edit"><div class="con">'+
        '<input type="text" class="updatetask" placeholder="Update Task">'+
    '</div></div>';
        $('.edit2').html(ht);
}

function dataLoader(){
    
    let page = "";
    let counter = 1;
    let color = "";
    let done = "",remove="",active="",state="";
    tasks.forEach(key=>{
        
        !key.done ? done = "Set Done":state="Done";
        !key.active ? active = "Set Active":state="Active";
        key.remove? remove = "Remove":"";
        counter%2===0?color="gray":"";
        
        let a1 = !key.done?'<button onclick="setItem('+key.id+',1)" class="ic">'+done+'</button>':"";
        let a2 = key.remove?'<button onclick="setItem('+key.id+',2)" class="ic"> '+remove+'</button>':"";
        let a3 = !key.active?'<button onclick="setItem('+key.id+',3)" class="ic"> '+active+'</button>':"";
       
        page += '<div class="list '+color+'">'+
    '<button onclick="edit('+key.id+')" class="task">'+
       key.task+
   ' <sup>'+state+'</sup></button>'+
   

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
            }
        })    
      break;
      case 2:
            tasks=tasks.filter(y=>y.id!==key);   
      break;
      case 3: 
            tasks.forEach(x=>{
            if(x.id===key){
              x.active = true;
              x.done = false;
            }
        })      
      break;

      default: 
       
  }
   
   completedLoader();
   activeLoader();
   dataLoader();
  
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

const input = document.getElementById('composeInput');
const post = document.querySelector('.post');



input.addEventListener('focus', function(){
    input.classList.add("expanded");

  
})

input.addEventListener('blur' ,function(){
    input.classList.remove("expanded");
  
    if(input.value.length > 0){
        input.classList.add("expanded");
    }else{
        input.classList.remove("expanded"); 
    }
})

input.addEventListener('keyup',function(){
    let total =  input.maxLength - input.value.length;
    console.log(total);
    if(input.value.length > 0){
        post.disabled =  false;
}else{
        post.disabled =  true;
       
      
    }
   
})


const textInp = document.querySelector('#textInput');
const btn = document.querySelector('.add-btn');

textInp.addEventListener('focus', function(event){
  textInp.classList.add('expanded');
});

textInp.addEventListener('blur', function(event){
  textInp.classList.remove('expanded');
});


textInp.addEventListener('input', function(event){
  if(event.target.value.length){
    btn.disabled = false;
  }else{
    btn.disabled = true;
  }
});

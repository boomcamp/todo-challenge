const textInp = document.querySelector("#textInput");
const btn = document.querySelector(".add-btn");
// // Conntainers
//const todoCont = document.querySelector('#a');

textInp.addEventListener("focus", function(event) {
  textInp.classList.add("expanded");
});

textInp.addEventListener("blur", function(event) {
  if ($(this).val() === "") {
    textInp.classList.remove("expanded");
  }
});

textInp.addEventListener("input", function(event) {
  if (event.target.value.length) {
    btn.disabled = false;
  } else {
    btn.disabled = true;
  }
});

$(document).ready(function() {
  let x = 0;

  $(".add-btn").on("click", function() {
    var inpVal = $("#textInput").val();
    ++x;
    if (inpVal) {
      var addNewTask = `
      <div class="todo-task">
      <p>
        ${inpVal}
      </p>
        <div class="btn-cont">
          <button class="btn-check" id="check${x}"><i class="fa fa-check"></i></button>
          <button class="btn-undo" id="undo"><i class="fa fa-undo"></i></button>
          <button class="btn-trash" id="trash"><i class="fa fa-trash"></i></button>
          
        </div>
      </div>
      `;

      
    }

    $(".a").prepend(addNewTask);

    $("#textInput").val("");
    textInp.classList.remove("expanded");
    btn.disabled = true;
  });

  //MOVE

  $(".a").on("click", ".btn-check", function(){
    $(".b").append($(this).parent().parent());
    
  });

  $(".b").on("click", ".btn-check", function(){
    $(".c").append($(this).parent().parent());
    
  });

  $(".b").on("click", ".btn-undo", function(){
    $(".a").append($(this).parent().parent());
    
  });

  $(".c").on("click", ".btn-undo", function(){
    $(".b").append($(this).parent().parent());
    
  });

  //DELETE

  $(".box").on("click", ".btn-trash", function(){
    $(this).parent().parent().remove();
    
  });
  


});


$(document).ready(() => {
  var i = 0;
  $("#addTask").hide();
  $("#newTask").on("click", () => {
    $(".current").css("height", "480px");
    $("#addTask").fadeIn("slow");
    $("#newTask").hide();
  });
  $(".task-container").on("click", () => {
    $("#addTask").hide();
    $("#newTask").show();
    $(".current").css("height", "680px");
  });

  $("#task").on("click", () => {
    var taskTxt = $("#task-input").val();
    var task = `<div class="todo">
        
        <p id='tasktxt${i}'>${taskTxt}</p>
        
        <button id="move${i}"><i class="fas fa-hand-point-right" ></i></button>
        <button id="remove${i}"><i class="fas fa-trash-alt" ></i></button>
        <button id="back${i}"><i class="fas fa-hand-point-left" ></i></button>
        <button id="edit${i}"><i class="fas fa-edit" ></i></button>
       
        
        
        </div>`;
    if (taskTxt != "") {
      $(".new-task").append(task);
    }
    $("#task-input").val("");
    console.log(i);

    $("#remove" + i).on("click", function() {
      $(this)
        .parent()
        .remove();
    });
    $(".new-task").on("click", "#move" + i, function() {
      $(".current").append($(this).parent());
      
    });
    $(".current").on("click", "#back" + i, function() {
      $(".new-task").append($(this).parent());
    });
    
    $(".current").on("focus", "#move" + i, function() {
      $(".done").append($(this).parent());
    });

    $(".done").on("click", "#back" + i, function() {
      $(".current").append($(this).parent());
    });
    $(".task-container").on("click", "#edit" + i, function() {
      $(this)
        .prev()
        .prev()
        .prev()
        .prev()
        .attr("contenteditable", "true");
      $(this)
        .prev()
        .prev()
        .prev()
        .prev()
        .addClass("edit");
      $(this)
        .prev()
        .prev()
        .prev()
        .prev()
        .focus();
    });

    $(".task-container").on("focusout", "p", function() {
      $(this).removeAttr("contenteditable");
      $(this).removeClass("edit");
    });

    i += 1;
  });
});

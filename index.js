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
    var task = `<div class="todo" id="">
        <label>
        <p>${taskTxt}</p>
        <button id="move${i}">Next Phase</button>
        <button id="remove${i}">Remove</button>
        <button id="back${i}">Revert</button>
        </label>
        </div>`;
    $(".new-task").append(task);
    // $("#back" + i).hide();
    $("#task-input").val("");
    $
    console.log(i);

    $(".new-task").on("click", "#remove" + i, function() {
      $(this)
        .parent()
        .parent()
        .remove();
    });
    $(".new-task").on("click", "#move" + i, function() {
      $(".current").append(
        $(this)
          .parent()
          .parent()
      );
      $("#back" + i).show();
    });
    $(".current").on("click", "#back" + i, function() {
      $(".new-task").append(
        $(this)
          .parent()
          .parent()
      );
      $("#back" + i).hide();
    });
    $(".current").on("click", "#remove" + i, function() {
      $(this)
        .parent()
        .parent()
        .remove();
    });
    $(".current").on("click", "#move" + i, function() {
      $(".done").append(
        $(this)
          .parent()
          .parent()
      );
    });
    $(".done").on("click", "#remove" + i, function() {
      $(this)
        .parent()
        .parent()
        .remove();
    });
    $(".done").on("click", "#back" + i, function() {
      $(".current").append(
        $(this)
          .parent()
          .parent()
      );
    });
    
    i += 1;
  });
});

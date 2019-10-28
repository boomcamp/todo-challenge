// js modal
var modal = document.getElementById("modal");
var btn = document.getElementById("btn");
var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
  modal.style.display = "block"; // open the modal
};

span.onclick = function() {
  modal.style.display = "none"; // close modal
};

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none"; // close modal(clicked outside modal)
  }
};

//jquery
$(document).ready(function() {
  $("#txtarea").on("input", function() {
    if ($(this).val().length > 0) {
      $(".add-btn").attr("disabled", false);
    } else {
      $(".add-btn").attr("disabled", true);
    }
  });

  //adding task
  $(".add-btn").click(function() {
    var newTask = $("#txtarea").val();
    var newdiv = `
    <div id='newtask'>
    <div contenteditable="true">${newTask}</div>
    <button id='deletebtn'>delete</button>
    <button id='nextbtn'>next</button>
    </div>
    `;
    $(".added-task").prepend(newdiv);
    $("#txtarea").val("");
    $(".close").click();

    //delete
    $("#newtask").on("click", "#deletebtn", function() {
      $(this)
        .parent()
        .remove();
    });

    $("#newtask").on("click", "#nextbtn", function() {
      textval = $(this)
        .prev()
        .prev()
        .html();
      targetdiv = `
      <div id='done'>
      <div contenteditable="true">${textval}</div>
      <button id='deletebtn'>delete</button>
      <button id='backbtn'>back</button>
      <button id='nextbtn'>next</button>
      </div>
      `;
      //in progress
      $(".in-progress").prepend(targetdiv);
      $(this)
        .parent()
        .remove();

      //done task
      $("#done").on("click", "#nextbtn", function() {
        progval = $(this)
          .prev()
          .prev()
          .prev()
          .html();
        progtargetdiv = `
        <div id='newtask'>
        <div contenteditable="true">${progval}</div>
        <button id='okaybtn'>okay</button>
        <button id='backbtn'>back</button>
        </div>
        `;
        $(".done-task").prepend(progtargetdiv);
        $(this)
          .parent()
          .remove();
        $("#okaybtn").click(function() {
          $(this)
            .parent()
            .remove();
        });
      });
    });
  });
});

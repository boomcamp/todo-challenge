$(document).ready(function() {
//Creation of task
  //counter
    var i = 0;    
$("#create-task-button").on('click', function(){
     var inputed = $("#task-input").val();
    
      if(inputed.length < 1){
        alert("Write something...");
      }else{ 
     //get the value inputted after click and append in the 'To Do Task'
     $(".task-handler").append(`
           <div class="task-box  close${i}" id="${i}">
                <div class="checkbox1">
                    <label class="container">
                        <input type="checkbox" class="checkid rem${i}"  id="${i}">
                        <span class="checkmark"></span>
                     </label>
                </div>
                <div class="close-task">
                        <a class="boxclose" id="${i}"></a>
                </div>
                <div class="checkbox2">
                    <label class="container">
                        <span class="checkmark1 hid${i}" id="${i}">O</span>
                     </label>
                </div>
                <div class="task-description"><p>${inputed}</p></div>
            </div>
    `);
    //increment i
    i++;
    }
    //back to the initial state after click
     $("#task-input").val("");
     modal.style.display = "none";
});
//removing of created task
$(document).on('click','[class*="boxclose"]', function(){
  var deleteid = $(this).attr("id");
  $(".close"+deleteid).remove();
});
//if checked moved task to the 'on progess'
$(document).on('change','[class*="checkid"]', function(){
    var changegetid = $(this).attr("id");
    //change other Done button to a prev button
    var getparentClass = $(this).parent().parent().parent().parent().parent().attr("class").split(" ")[1];
    if(getparentClass === "bx-1c"){
      //clone and append to 'Progress'
      $(".close"+changegetid).clone().appendTo(".progress-handler");
      //remove after on the task
      $(this).parent().parent().parent().remove();
      //change the atrribute to uncheck
      $('.hid'+changegetid).html("<<");
      $(".rem"+changegetid).prop('checked', false);
    }else if(getparentClass === "bx-2c"){
      //clone and append to 'Progress'
      $(".close"+changegetid).clone().appendTo(".done-handler");
      //remove after on the task
      $(this).parent().parent().parent().remove();
      $(".rem"+changegetid).prop("disabled", true);
      $(".rem"+changegetid).prop('checked', true);
    }
});
//if orange button clicked will be directly put in the done handler
$(document).on('click','[class*="checkmark1"]', function(){
    var getid = $(this).attr("id");
    var getparentClass = $(this).parent().parent().parent().parent().parent().attr("class").split(" ")[1];
    
    if(getparentClass === "bx-1c"){
    $(this).html("<<");
    //Append to done Hanler
    $(".close"+getid).clone().appendTo(".done-handler");
      //remove after on the task
    $(this).parent().parent().parent().remove();
    $(".rem"+getid).prop("disabled", true);
    $(".rem"+getid).prop('checked', true);
    }
    else if(getparentClass === "bx-2c"){
      $(this).html("O");
      //Append to done Hanler
      $(".close"+getid).clone().appendTo(".task-handler");
        //remove after on the task
      $(this).parent().parent().parent().remove();
    }
    else if(getparentClass === "bx-3c"){
    $(this).html("<<");
    //change to initial state
    $(".rem"+getid).prop("disabled", false);
    $(".rem"+getid).prop('checked', false);
    //Append to done Hanler
    $(".close"+getid).clone().appendTo(".progress-handler");
    //remove after on the task
    $(this).parent().parent().parent().remove();
    }
});

$(document).on('dblclick','[class*="task-description"]', function(){
      $(this).find('p').attr('contenteditable', 'true'); 
      $(this).focus();
});  

$(document).on('focusout','p', function(){
  $(this).removeAttr('contenteditable');
})


//doc end
});

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

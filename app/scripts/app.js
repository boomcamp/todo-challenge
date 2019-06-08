/* HEADER */
function displayDate(){
  var today = new Date();
  var date = today.getDate();
  var day = today.getDay();
  var month = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][today.getMonth()];
  var weekdays = new Array("Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday");
  var sup = "";

  switch (date % 10) {
    case 1:  sup = "st";
    case 2:  sup =  "nd";
    case 3:  sup =  "rd";
    default: sup =  "th";
  }

  document.getElementById("weekday").innerHTML = weekdays[day];
  document.getElementById("month-day").innerHTML = month +" "+ date +"<sup>"+sup+"</sup>";
} 
displayDate();

setInterval(function() {
  var date = new Date();
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var ampm = hours >= 12 ? 'PM' : 'AM';

  hours = hours % 12;
  hours = hours ? hours : 12;
  minutes = minutes < 10 ? '0'+minutes : minutes;
  var strTime = hours + ':' + minutes + ' ' + ampm;

  document.getElementById("time").innerHTML = strTime;
}, 1000);

/* WEATHER FORECAST */
const appKey = "f24f40b1c24505685fce3b8acd0fcffc";

function findWeatherDetails() {
  var searchInput = 'Legazpi';
  if (searchInput === "") {
  } else {
    let searchLink = "https://api.openweathermap.org/data/2.5/weather?q=" + searchInput + "&appid="+appKey;
   httpRequestAsync(searchLink, theResponse);
  }
 }

function theResponse(response) {
  let jsonObject = JSON.parse(response);
  var temp = parseInt(jsonObject.main.temp - 273);
  var humid = jsonObject.main.humidity + "%"
  document.getElementById("temp").innerHTML = `It's currently ${temp}&#176 and ${humid} humidity in Legazpi.`;
}

function httpRequestAsync(url, callback)
{
    var httpRequest = new XMLHttpRequest();
    httpRequest.onreadystatechange = () => { 
        if (httpRequest.readyState == 4 && httpRequest.status == 200)
            callback(httpRequest.responseText);
    }
    httpRequest.open("GET", url, true);
    httpRequest.send();
}
findWeatherDetails();

/* CONTENT */
var addList = document.querySelector('input[data-testid="addlist-input"]');
var list = document.querySelector('ul[data-testid="list"]');
var num = 1;

/* ADD LIST */
$('.circle').click(function () {
  if (addList.value) {
    if (num == 1 ) {
     var item = `<li class="active" id="${addList.value}" onclick="taskTitle('${addList.value}')"><i class="fas fa-bars"></i> &emsp;${addList.value}<i class="${addList.value}done hide far fa-check-circle"></i></li>`;
    } else {
      var item = `<li id="${addList.value}" onclick="taskTitle('${addList.value}')"><i class="fas fa-bars"></i> &emsp;${addList.value}<i class="${addList.value}done hide far fa-check-circle"></i></li>`;
    }
  }

  if (num == 1 ) {
    $('.default').hide();
    var itemDiv =
    `<div class="task-tab-content active">
        <div class="row box todo-header task-header">
            <span class="todo-header-title" id="task-title">${addList.value}<i class="fas fa-thumbtack thumbstack"></i></span>
        </div>

        <div class="container box content box-content">
          <div class="row" style="height: 55px">
            <input class="addtask col-10" id="${addList.value}addtask" type="text" placeholder="Add a task..." onclick="taskTitle('${addList.value}')"></input>
            <a href="#" id="${addList.value}addtask-btn"><i class="col-1 arrow far fa-arrow-alt-circle-down"></i></a>
          </div>

          <div class="container">
            <div class="row task-title">
                <span class="to-do">To Do</span>
            </div>

            <div class="row task">
              <div class="row box content scrollbar" id="style">
              <ul class="list-group ${addList.value}toDO" id="${addList.value}toDO">
              </ul>
              </div> 
            </div>
          </div>

          <div class="container">
            <div class="row task-title">
              <span class="to-do">In Progress</span>
            </div>

            <div class="row task">
              <div class="row box content scrollbar" id="style">
                <ul class="list-group" id="${addList.value}inProgress">
                </ul>
              </div> 
            </div>
          </div>

          <div class="container">
            <div class="row task-title">
              <span class="to-do">Completed</span>
            </div>

            <div class="row task">
              <div class="row box content scrollbar" id="style">
                <ul class="list-group" id="${addList.value}completed">
                </ul>
              </div> 
            </div>
          </div>
        </div>
     </div>`
  } else {
    var itemDiv =
    `<div class="task-tab-content">
        <div class="row box todo-header task-header">
          <span class="todo-header-title" id="task-title">${addList.value}<i class="fas fa-thumbtack thumbstack"></i></span>
        </div>

        <div class="container box content box-content">
          <div class="row" style="height: 55px">
              <input class="addtask col-10" id="${addList.value}addtask" type="text" placeholder="Add a task..."></input>
              <a href="#" id="${addList.value}addtask-btn"><i class="col-1 arrow far fa-arrow-alt-circle-down"></i></a>
          </div>

          <div class="container">
            <div class="row task-title">
                <span class="to-do">To Do</span>
            </div>

            <div class="row task">
              <div class="row box content scrollbar" id="style">
                <ul class="list-group ${addList.value}toDO" id="${addList.value}toDO">
                </ul>
              </div> 
            </div>
          </div>

          <div class="container">
            <div class="row task-title">
              <span class="to-do">In Progress</span>
            </div>

            <div class="row task">
              <div class="row box content scrollbar" id="style">
                <ul class="list-group" id="${addList.value}inProgress">
                </ul>
              </div> 
            </div>
          </div>

          <div class="container">
            <div class="row task-title">
              <span class="to-do">Completed</span>
            </div>

            <div class="row task">
              <div class="row box content scrollbar" id="style">
                <ul class="list-group" id="${addList.value}completed">
                </ul>
              </div> 
            </div>
          </div>
        </div>
     </div>`
  }
  $('.list').append(item);
  $('.task-tab').append(itemDiv);
  num++;
  addList.value = "";
});

function checkDone(value, check) {
  if (!check) {  
    if (($(`ul.${value}toDO li`).length == 0) && (($(`ul#${value}inProgress li`).length == 0))) {
      $(`.${value}done`).removeClass('hide');
      $(`.${value}done`).addClass('show');
    } else if ($(`ul#${value}inProgress li`).length != 0) {
      $(`.${value}done`).removeClass('show');
      $(`.${value}done`).addClass('hide');
    }
  } else {
    if ($(`ul#${value}completed li`).length == 0) {
      $(`.${value}done`).removeClass('show');
      $(`.${value}done`).addClass('hide');
    } else if ($(`ul#${value}inProgress li`).length == 0) {
      $(`.${value}done`).removeClass('hide');
      $(`.${value}done`).addClass('show');
    }
  }
}

function showSetting() {
  $(".task-content").animate({width: "45%"});
  $(".edit-div").css("display","block");
  $(".edit-div").animate({width: "30%"});
}

function hideSetting() {
  $(".task-content").animate({width: "75%"});
  $(".edit-div").css("display","none");
  $(".edit-div").animate({width: "0%"});
}

function taskTitle(value) {
  /* REMOVE ACTIVE CLASS */
  hideSetting();
  $( '.list' ).find( 'li.active' ).removeClass( 'active' );
  $(`#${value}`).addClass( 'active' );
  
  document.getElementById("task-title").innerHTML = value + '<i class="fas fa-thumbtack thumbstack"></i>';

  var index = $(`#${value}`).index();
  $("div.task-tab>div.task-tab-content").removeClass("active");
  $("div.task-tab>div.task-tab-content").eq(index).addClass("active");

  /* ADD TASK */
  $(`#${value}addtask-btn`).click(function () {
    var addTask = document.getElementById(`${value}addtask`);
    if (addTask.value){
      li = `<li class="list-group-item"><i class="check far fa-check-square"></i> 
              <a>${addTask.value}</a>
              <a href="#" id="${addTask.value}del" onclick="del('${addTask.value}del', '${value}', 'true')"><i class="fas fa-trash del"></i></a>
              <a href="#" id="${addTask.value}edit" onclick="edit('${addTask.value}edit')"><i class="far fa-edit edit"></i></a>
            </li>`;
      $(`.${value}toDO`).prepend(li);
      addTask.value = "";
    }
  });

  document.getElementById(`${value}toDO`).addEventListener('click', function(event) {
    if (event.target.matches('li.list-group-item')) {
      $(`#${value}inProgress`).prepend(event.target);
    }
  });

  document.getElementById(`${value}inProgress`).addEventListener('click', function(event) {
    if (event.target.matches('li.list-group-item')) {
      $(`#${value}completed`).prepend(event.target);
      $(`#${value}completed li`).addClass('strike');
      checkDone(value);
    }
  });

  document.getElementById(`${value}completed`).addEventListener('click', function(event) {
    if (event.target.matches('li.list-group-item')) {
      $(`#${value}completed li`).removeClass('strike');
      $(`#${value}inProgress`).append(event.target);
      checkDone(value);
    }
  });
}

/* EDIT TASK */
function edit(value) {
  showSetting();
  var task = $(`#${value}`).closest("li").text().trim();
  $('.edit-input').val(task);
  $('.getValue').val(value);
}

$('.edit-btn').click(function () {
  var value = $('.getValue').val();
  var newVal = $('.edit-input').val();
  $(`#${value}`).closest("li").children("a").first().text(newVal);
  hideSetting();
});

/* DELETE TASK */
function del(value, progressValue) {
  $(`#${value}`).closest("li").remove();
  checkDone(progressValue, true);
}
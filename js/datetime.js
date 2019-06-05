$(document).ready(function(){    
    var currentTime = new Date();
      let hours = currentTime.getHours();
      let minutes = currentTime.getMinutes();

	if (minutes < 10) {
	 minutes = "0" + minutes;
  }

	var suffix = "AM";
	if (hours >= 12) {
    suffix = "PM";
    hours = hours - 12;
	}
	if (hours == 0) {
	 hours = 12;
	}

	var time = hours + ":" + minutes + " " + suffix;

	$('.time').append(time);
	
	var currentDate = new Date();
	var dd = String(currentDate.getDate()).padStart(2, '0');
	var mm = String(currentDate.getMonth() + 1).padStart(2, '0'); //January is 0!
	var yyyy = currentDate.getFullYear();

	var date = mm + '/' + dd + '/' + yyyy;
	$('.date').append(date);

	function getDayName(dateStr, locale)
	{
		var date = new Date(dateStr);
		return date.toLocaleDateString(locale, { weekday: 'long' });        
	}

	var dateStr = currentDate;
	var day = getDayName(dateStr, "en-US");
	$('.day').append(day);


})
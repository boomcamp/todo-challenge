var c = 0;
var countTodo = 0;
var countInp = 0;
var countDone = 0;
document.getElementById("add").style.display = "none";

var a = document.getElementById("newtask");

a.addEventListener("focus", function() {
	document.getElementById("add").style.display = "block";
});

a.addEventListener("blur", function() {
	if (document.getElementById("newtask").value == "") {
		document.getElementById("add").style.display = "none";
	}
});

document.getElementById("add").addEventListener("click", function() {
	event.preventDefault();
	var parent = document.getElementById("dolist");
	var task = document.getElementById("newtask").value.trim();
	document.getElementById("newtask").value = "";
	document.getElementById("add").style.display = "none";

	parent.insertAdjacentHTML(
		"afterend",
		`<tr><td id="content${c}" class="list-group-item" width="90%">${task}</td><td>&#9997;</td><td class="delete">&#10060;</td></tr>`
	);
	c++;
	countTodo++;

	if (countTodo > 0) {
		document.getElementById("empty").style.display = "none";
		if (document.getElementById("empty2")) {
			document.getElementById("empty2").style.display = "none";
		}
	}
	showcount();
});

document.getElementById("todo").addEventListener("click", function(event) {
	console.log(event.target);
	if (event.target.matches("td.list-group-item")) {
		document
			.getElementById("inprogress")
			.insertAdjacentHTML(
				"afterend",
				`<tr><td id="content${c}" class="list-group-item" width="90%">${event.target.innerText}</td><td id="back">&#171;</td><td>&#9997;</td><td class="delete">&#10060;</td></tr>`
			);
		event.target.parentElement.remove();
		countTodo--;
		showMessage();

		countInp++;
		if (countInp > 0) {
			document.getElementById("emptyInp").style.display = "none";
		}
	}
	if (event.target.matches("td.delete")) {
		if (confirm("Are you sure to delete?")) {
			event.target.parentElement.remove();
			countTodo--;
			showMessage();
		} else false;
	}
	showcount();
});

document.getElementById("inp").addEventListener("click", function(event) {
	if (event.target.matches("td.list-group-item")) {
		document
			.getElementById("donetask")
			.insertAdjacentHTML(
				"afterend",
				`<tr><td id="content${c}" class="list-group-item" width="90%">${event.target.innerText}</td><td id="up">&#8648;</td><td>&#9997;</td><td class="delete">&#10060;</td></tr>`
			);
		event.target.parentElement.remove();
		countInp--;
		countDone++;

		if (countDone > 0) {
			document.getElementById("emptyDone").style.display = "none";
		}

		if (countInp == 0) {
			document.getElementById("emptyInp").style.display = "table-row";
		}
	}
	if (event.target.matches("td#back")) {
		//console.log(event.target.parentElement.querySelector("td").innerText);
		document
			.getElementById("dolist")
			.insertAdjacentHTML(
				"afterend",
				`<tr><td id="content${c}" class="list-group-item" width="90%">${
					event.target.parentElement.querySelector("td").innerText
				}</td><td>&#9997;</td><td class="delete">&#10060;</td></tr>`
			);

		countInp--;
		countTodo++;
		event.target.parentElement.remove();

		if (countTodo > 0) {
			document.getElementById("empty").style.display = "none";
		}

		if (countInp == 0) {
			document.getElementById("emptyInp").style.display = "table-row";
		}
	}
	if (event.target.matches("td.delete")) {
		if (confirm("Are you sure to delete?")) event.target.parentElement.remove();
		else false;
		countInp--;
		if (countInp > 0) {
			document.getElementById("emptyInp").style.display = "none";
		} else {
			document.getElementById("emptyInp").style.display = "table-row";
		}
	}
	showcount();
});

document.getElementById("done").addEventListener("click", function(event) {
	if (event.target.matches("td#up")) {
		console.log(true);

		document
			.getElementById("inprogress")
			.insertAdjacentHTML(
				"afterend",
				`<tr><td id="content${c}" class="list-group-item" width="90%">${
					event.target.parentElement.querySelector("td").innerText
				}</td><td id="back">&#171;</td><td>&#9997;</td><td class="delete">&#10060;</td></tr>`
			);

		countDone--;
		countInp++;
		event.target.parentElement.remove();
		if (countInp > 0) {
			document.getElementById("emptyInp").style.display = "none";
		}
		if (countDone == 0) {
			document.getElementById("emptyDone").style.display = "table-row";
		}
	}
	if (event.target.matches("td.delete")) {
		if (confirm("Are you sure to delete?")) {
			event.target.parentElement.remove();
			countDone--;
			if (countDone > 0) {
				document.getElementById("emptyDone").style.display = "none";
			} else {
				document.getElementById("emptyDone").style.display = "table-row";
			}
		} else false;
	}
	showcount();
});
function showMessage() {
	if (countTodo > 0) {
		document.getElementById("empty").style.display = "none";
	} else {
		document.getElementById("empty").style.display = "table-row";
	}
}

function showTime() {
	var date = new Date();
	var h = date.getHours(); // 0 - 23
	var m = date.getMinutes(); // 0 - 59
	var s = date.getSeconds(); // 0 - 59
	var session = "AM";

	if (h == 0) {
		h = 12;
	}

	if (h > 12) {
		h = h - 12;
		session = "PM";
	}

	h = h < 10 ? "0" + h : h;
	m = m < 10 ? "0" + m : m;
	s = s < 10 ? "0" + s : s;

	var time = h + ":" + m + ":" + s + " " + session;
	document.getElementById("MyClockDisplay").innerText = time;
	document.getElementById("MyClockDisplay").textContent = time;

	setTimeout(showTime, 1000);
}

showTime();
showcount();
function showcount() {
	document.getElementById("cDolist").innerHTML = countTodo;
	document.getElementById("cInp").innerHTML = countInp;
	document.getElementById("cDone").innerHTML = countDone;
}

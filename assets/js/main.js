var c = 0;
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
		`<tr><td id="content${c}" class="list-group-item">${task}</td><td>&#9997;</td><td id="new">&#10004;</td><td>&#10060;</td></tr>`
	);
	c++;
});

// document.getElementById("todo").addEventListener("click", function(event) {
// 	console.log(event.target);
// 	if (event.target.matches("td.list-group-item")) {
// 		console.log("jhi");
// 		var parent = document.getElementById("inprogress");

// 		var inprog = document.getElementById("content").innerText;

// 		document.getElementById("inp").append(event.target);
// 	}
// });

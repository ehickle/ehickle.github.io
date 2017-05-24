console.log("The script is running!");





function makeImageVisible() {
	console.log(Event)
	var name = dropdown.value
	if (name == "Wyatt") {
		photos[0].style.visibility = "visible";
	} else if (name == "Evan") {
		photos[1].style.visibility = "visible";
	}
}



//This section defines assigns each dropdown menu a number, 
//and adds ana Event Listener to each dropdown
var photos = document.getElementsByClassName("friend");
var dropdown = document.getElementsByTagName("select");

for (i=0; i<dropdown.length; i++) {	
dropdown[i].addEventListener("change", makeImageVisible);
}

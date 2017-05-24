console.log("The script is running!");



function makeImageVisible(event) {
	var name = event.target.value
	if (name == "Wyatt") {
		photos[0].style.visibility = "visible";
	} else if (name == "Evan") {
		photos[1].style.visibility = "visible";
	} else if (name == "Brennan") {
		photos[2].style.visibility = "visible";
	} else if (name == "Nik") {
		photos[3].style.visibility = "visible";
	} else if (name == "Ricky") {
		photos[4].style.visibility = "visible";
	} else if (name == "Stuart") {
		photos[5].style.visibility = "visible";
	} else if (name == "Bobby") {
		photos[6].style.visibility = "visible";
	} else if (name == "Pat") {
		photos[7].style.visibility = "visible";
	} else if (name == "Cole") {
		photos[8].style.visibility = "visible";
	} else if (name == "Dennis") {
		photos[9].style.visibility = "visible";
	} else if (name == "Tucker") {
		photos[10].style.visibility = "visible";
	} else if (name == "Max") {
		photos[11].style.visibility = "visible";
	} 
}

function makeImagesInvisible() {
for (i=0; i<photos.length; i++) {
	photos[i].style.visibility = "invisble";
	}
}

//This section defines assigns each dropdown menu a number, 
//and adds ana Event Listener to each dropdown
var photos = document.getElementsByClassName("friend");
console.log(photos)
var dropdown = document.getElementsByTagName("select");

for (i=0; i<dropdown.length; i++) {	
dropdown[i].addEventListener("change", makeImageVisible);
}

for (i=0; i<dropdown.length; i++) {	
dropdown[i].addEventListener("click", makeImagesInvisible);
}


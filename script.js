console.log("The script is running!");


function storeValues() {
	var dropdown = document.getElementsByTagName("select");
	var groupValues= {}
	var values = []
	var user = document.getElementById("user").value
	for (i=0; i<dropdown.length; i++) {
		values.push(dropdown[i].value)
	}
	
	// Creates hash storing each pick
	if (user == "Wyatt") {
		groupValues.wyatt = values
	} else if (user == "Max") {
		groupValues.max = values
	}  else if (user == "Evan") {
		groupValues.evan = values
	}  else if (user == "Pat") {
		groupValues.pat = values
	}  else if (user == "Brennan") {
		groupValues.brennan = values
	}  else if (user== "Bobby") {
		groupValues.bobby = values
	}  else if (user == "Tucker") {
		groupValues.tucker = values
	}  else if (user== "Stuart") {
		groupValues.stuart = values
	}  else if (user == "Nik") {
		groupValues.nik = values
	}  else if (user == "Rikcy") {
		groupValues.ricky = values
	}  else if (user== "Dennis") {
		groupValues.dennis = values
	}  else if (user == "Cole") {
		groupValues.cole = values
	}
	console.log(groupValues)
}





function changeImage(event) {
	var name = event.target.value
	for (i=0; i<photos.length; i++) {
	photos[i].style.visibility = "hidden";
	}

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


//This section defines assigns each dropdown menu a number, 
//and adds ana Event Listener to each dropdown
var photos = document.getElementsByClassName("friend");
var dropdown = document.getElementsByTagName("select");

for (i=0; i<dropdown.length; i++) {	
dropdown[i].addEventListener("change", changeImage);
}

enter= document.getElementById("save")
enter.addEventListener("click", storeValues)



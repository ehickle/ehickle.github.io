console.log("The script is running!");

function makeImageVisible() {
	var photo = document.getElementById("grotto");
	var name = dropdown1.value
	
	if (name == "Wyatt") {
	photo.style.visibility = "visible";
	}
}

var dropdown1 = document.getElementById("pick1");
 dropdown1.addEventListener("change", makeImageVisible);
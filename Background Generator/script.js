var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button = document.querySelector("button");


function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}


//add a funtion that generates random colout inputs
//rancomly change the values
function randomColor(){
	var x = 1
	body.style.background = 
	"linear-gradient(to right,rgb(" +x+","+x+","+x"),rgb("x+","+x+","+x"))";
}

// button.addEventListener("click",randomColor);

window.addEventListener("load" , setGradient);

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);
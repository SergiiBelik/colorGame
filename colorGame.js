var numSquares = 6;
var colors = generateColorsArray(numSquares);
var pickedColor = pickColor();

var square = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");

var displayMessage = document.querySelector("#message");
var h1 = document.querySelector("h1");
var reset = document.getElementById("reset");
var easyBtn = document.getElementById("easyBtn");
var hardBtn = document.getElementById("hardBtn");

easyBtn.addEventListener("click", () => {
	h1.style.background = "steelblue";
	easyBtn.classList.add("selected");	
	hardBtn.classList.remove("selected")
	colors = generateColorsArray(3);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for(var i = 0; i < square.length; i++){
		if(colors[i]){
			square[i].style.background = colors[i];
		}else{
			square[i].style.display = "none";
		}
	}
})

hardBtn.addEventListener("click", function(){
	h1.style.background = "steelblue";
	hardBtn.classList.add("selected");
	easyBtn.classList.remove("selected");
	colors = generateColorsArray(6);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for(var i = 0; i < colors.length; i++){			
		square[i].style.background = colors[i];
		square[i].style.display = "block";	
	}
})

reset.addEventListener("click", function(){
	//generate array with new colors
	colors = generateColorsArray(6);
	//update colorDisplay
	pickedColor = pickColor();
	reset.textContent = "New colors";
	//update color of the squares
	for(var i = 0; i < colors.length; i++){
		square[i].style.background = colors[i];
	};
	h1.style.background = "steelblue";
})

colorDisplay.textContent = pickedColor;

for (var i = 0; i < square.length; i++) {
	//set initial colors of the squares
	square[i].style.background = colors[i];
	//add listener to the squares
	square[i].addEventListener("click", function(){
		//grab color of clicked square
		var clickedColor = this.style.background;		
		//compare color of clicked square with picked color
		if(clickedColor === pickedColor){
			displayMessage.textContent = "Correct!";
			h1.style.background = pickedColor;
			reset.textContent = "Try Again?";
			//select all squares
			for(var i = 0; i < square.length; i++){
				//change color of the square to pickedColor
				square[i].style.background = pickedColor;
			}
			
		}
		else {
			this.style.background = "#232323";
			displayMessage.textContent = "Try again";
		}
	});
}

function pickColor(){
	var num = Math.floor(Math.random() * colors.length);
	return colors[num];
}

function generateColorsArray(num){
	//create array
	let arr = [];
	//fill array with random colors
	for(var i = 0; i < num; i++){
		arr.push(generateColor());
	}
	//return array
	return arr;
}

function generateColor(){
	var r = Math.floor(Math.random() * 266);
	var g = Math.floor(Math.random() * 266);
	var b = Math.floor(Math.random() * 266);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}
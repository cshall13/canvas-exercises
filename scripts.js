var canvas = document.getElementById('canvas');
console.dir(canvas);

var context = canvas.getContext('2d');

// Set up the base options for the pictionary board
var color = "#000";
var thickness = 10;
var colorPicker = document.getElementById('color-picker');
var thicknessPicker = document.getElementById('thickness');
// console.dir(colorPicker)
var mouseDown = false;
var mousePosition = {};
var lastMousePosition = null;

colorPicker.addEventListener('change', function(event){
	console.dir(event.target)
	color = colorPicker.value
	// color = event.target.value
	console.log(color);
});

thicknessPicker.addEventListener('change', function(event){
	thickness = thicknessPicker.value
});

canvas.addEventListener('mousedown', function(event){
	mouseDown = true;
});

canvas.addEventListener('mouseup', function(event){
	mouseDown = false;
	lastMousePosition = null;
})

canvas.addEventListener('mousemove', function(event){
	if(mouseDown){
		console.log(event)
		// console.log("user has pressed the mouse down and is moving!!")
		// The user has just show up and we dont have a last mouse position;
		// OR the user let go of the mouse and we reset the lastMousePosition
		if(lastMousePosition == null){
			lastMousePosition = {
				x: event.offsetX,
				y: event.offsetY
			}
		}
		
		mousePosition.x = event.offsetX;
		mousePosition.y = event.offsetY;
		// console.log(mousePosition.x)

		context.strokeStyle = color;
		context.lineJoin = 'round';
		context.lineWidth = thickness;
		context.beginPath();
		context.moveTo(lastMousePosition.x, lastMousePosition.y);
		context.lineTo(mousePosition.x, mousePosition.y);
		context.stroke();
		context.closePath();

		lastMousePosition = {
			x: mousePosition.x,
			y: mousePosition.y

		}
	}
});

var startTime = new Date();

setInterval(
	function(){
		var currentTime = new Date();
		var totalSeconds = (Date.parse(currentTime) - Date.parse(startTime))/1000;
		// console.log(totalSeconds);
		seconds = 120 - totalSeconds;
		minutes = Math.floor(seconds/60)
		var secondsLeft = Math.floor(seconds%60)		
		if(seconds <= 0){
			minutes = 0;
			secondsLeft = "00";			
		}
		if(secondsLeft < 10 && secondsLeft > 0){
			secondsLeft = "0" + secondsLeft;
		}
		document.getElementById('minutes').innerHTML = minutes;
		document.getElementById('seconds').innerHTML = secondsLeft;
		console.log(minutes,secondsLeft)
		
	},1000
	)
































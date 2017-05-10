
var canvas = document.getElementById("canvas");
var context = canvas.getContext('2d');
// // context.moveTo(0,0);
// // move the pen to 100,100
// context.moveTo(100,100);
// // draw a line to 200,200
// context.lineTo(200,200);
// // WITHOUT MOVING THE PEN, draw to 300,100
// context.lineTo(300,100);
// context.lineTo(100,200);
// context.lineTo(300,150);
// context.lineTo(100,100);
// context.strokeStyle = "#ff0000";
// context.stroke();

// // Draw a circle!
// context.beginPath()
// context.fillStyle = "#FFFF00";
// context.arc(400,200,50,0,2*Math.PI)
// context.fill();
// context.stroke();


var x = 200;
var y = 200;
var r = 50;
var n = 1;
var xDirection = 1;
var yDirection = 1;
var red = 0;
var blue = 0;
var green = 0;

function drawBall(){
	// fill style = red
	context.fillStyle = "#"+red+blue+green;
	context.beginPath();
	context.arc(x,y,r,0,2*Math.PI);
	context.clearRect(0,0,500,500)
	context.fill();
	if((x > 500-r) || (x < r)){
		// we have reached the right side! reverse!!
		xDirection = -xDirection;
	}
	if((y > 500-r) || (y < r)){
		// we have reached the left side! reverse!!
		yDirection = -yDirection;
	}
	var randomX = Math.random() * 4
	var randomY = Math.random() * 4
	x += randomX * xDirection;
	y += randomY * yDirection;
	red += 1;
	blue += 1;
	green += 1; 
}

var ball = setInterval(drawBall,20);


canvas.addEventListener("click", function(event){
    //console.log(event);
    if(Math.sqrt(Math.pow((event.layerY - y), 2) + Math.pow((event.layerX - x) ,2)) < 2*r){
        n++;
        x += n*xDirection;
        y += n*yDirection;
        ball = setInterval(drawBall,20);
        console.log("circle hit")
    }else{

        console.log('missed')
    }
});








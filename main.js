onload = function() {
	var canvas = document.getElementById('drawing');
	var context = canvas.getContext('2d');
	
	context.lineWidth = 10;
	context.strokeStyle = "#55f";
	
	context.moveTo(10,10);
	context.lineTo(200,10);
	context.stroke();
	
	context.beginPath();
	context.moveTo(10,50);
	context.lineTo(200,50);
	context.lineCap = "round";
	context.stroke();
	
	context.beginPath();
	context.moveTo(40,100);
	context.lineTo(200,100);
	context.lineTo(120, 150);
	context.closePath();
	context.fillStyle = "blue";
	context.fill();
	context.strokeStyle = "red";
	context.lineCap = "butt";
	context.stroke();
	
	context.beginPath();
};
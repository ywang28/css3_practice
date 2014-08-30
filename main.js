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
	context.fillRect(400,20,50,50);
	context.strokeRect(400,20,50,50);

    // draw an image on canvas
	var img = new Image();
	img.onload = function (argument) {
		// draw top half of the image
		context.drawImage(img, 0, 0, 100, 50, 250, 20, 100, 50);
		
		// pattern fill
		var pattern = context.createPattern(img, "repeat");
		context.fillStyle = pattern;
		context.rect(350, 350, 150, 150);
		context.fill();
	}
	img.src = "images/logo.png";
	
	// draw text
	context.fillStyle = "black";
	context.font = "20px Arial";
	context.textBaseline = "top";
	context.fillText("I'm half chopped little fire", 250, 80);
	
	context.lineWidth = "1";
	context.font = "30px Verdana sans-serif";
	context.strokeStyle = "red";
	context.strokeText("I'm stroked text", 250, 110);
	
	// Draw three pieces of shadowed text.
	context.shadowColor = "grey";
	context.shadowBlur = 3;
	context.shadowOffsetX = 2;
	context.shadowOffsetY = 2;
	context.fillStyle = "steelblue";
	context.fillText("This is a subtle, slightly old-fashioned shadow.", 10, 175);
	
	context.shadowBlur = 5;
    context.shadowOffsetX = 20;
    context.shadowOffsetY = 20;
    context.fillStyle = "green";
    context.fillText("This is a distant shadow...", 10, 225);
	
    context.shadowBlur = 15;
    context.shadowOffsetX = 0;
    context.shadowOffsetY = 0;
	context.shadowColor = "black";
    context.fillStyle = "white";
    context.fillText("This shadow isn't offset. It creates a halo effect.", 10,
300);

};
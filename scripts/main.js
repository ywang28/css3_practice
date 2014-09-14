$(function() {
	var canvas = document.getElementById('drawing');
	var context = canvas.getContext('2d');
	
	context.lineWidth = 10;
	context.strokeStyle = "#55f";
	
	context.moveTo(20,20);
	context.lineTo(200,20);
	context.stroke();
	
	context.beginPath();
	context.moveTo(20,50);
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
		context.rect(500, 20, 150, 150);
		context.fill();
	}
	img.src = "images/logo2.png";
	
	// draw text
	context.fillStyle = "black";
	context.font = "20px Arial";
	context.textBaseline = "top";
	context.fillText("I'm half chopped image", 250, 80);
	
	context.fillStyle = "black";
	context.font = "20px Arial";
	context.textBaseline = "top";
	context.fillText("I'm a square filled with image", 500, 180);
	
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
	context.fillText("This is a subtle, slightly old-fashioned shadow.", 20, 220);
	
	context.shadowBlur = 5;
    context.shadowOffsetX = 20;
    context.shadowOffsetY = 20;
    context.fillStyle = "green";
    context.fillText("This is a distant shadow...", 20, 255);
	
	context.font = "40px Arial"
    context.shadowBlur = 15;
    context.shadowOffsetX = 0;
    context.shadowOffsetY = 0;
	context.shadowColor = "black";
    context.fillStyle = "white";
    context.fillText("Text with halo effect", 20,
320);

    // hide contents first
	$('.content').hide();
	// jQuery toggle
	$('.subject').toggle(
		function()  {
			$(this).next('.content').fadeIn();
			$(this).addClass('minus');
		},
		function()  {
			$(this).next('.content').fadeOut();
			$(this).removeClass('minus');
		}
	);
	
	// get gallery element
	var gal = $('.gallery');
	
	$('.photos img').each(
		function()  {
			$(this).mouseover(
				function()  {
					var image = $(this).attr('src');
					var image_large = image.replace('.png','_large.png');
					var oldImg = $('.gallery img');
					var newImg = $('<img src="' + image_large + '">');
					newImg.hide();
					//gal.attr('src',newImage);
					gal.prepend(newImg);
					newImg.fadeIn(1000);
					oldImg.fadeOut(1000, function() {
						$(this).remove();
					});
				}
			);
		}
	);
});


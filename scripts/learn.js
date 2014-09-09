$(function()  {
	$('.topic').hover(
		function()  {
			$(this).stop().animate(
				{
					left:  0,
					backgroundColor:  '#5af'
				},
				500,
				'easeInSine'
			);
		},
		function()  {
			$(this).stop().animate(
				{
					left:  -280,
					backgroundColor:  '#ffd'
				},
				1500,
				'easeOutBounce'
			);
		}
	);
});
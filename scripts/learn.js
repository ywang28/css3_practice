$(function()  {
	$('.topic').hover(
		function()  {
			$(this).animate(
				{
					left:  0,
					backgroundColor:  '#ffd'
				},
				500,
				'easeInSine'
			);
		},
		function()  {
			$(this).animate(
				{
					left:  -280,
					backgroundColor:  '#5af'
				},
				1500,
				'easeOutBounce'
			);
		}
	);
});
$(function()  {
	// open external link in new window
	$('a.newwin').attr('target','_blank');
	// popup window
	$('a.popup').click(
		function()  {
			var winProp = "width=600, height=400, resizable=yes, scrollbar=yes, top=100, left=200";
			var pop = open($(this).attr('href'), 'popWin', winProp);
			return false;
		}
	);
	// fancy box window
	$('a.iframe').fancybox();
});
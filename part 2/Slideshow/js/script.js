$(document).ready(function () {
	
	// --- Styles for numeric paging widget ----
	
	$('nav li a').css({'text-decoration': 'none'});
	$('nav li').css({
		'list-style': 'none',
		'display': 'inline-block',
		'margin': '0 5px 20px 0'
	});
	
	$('nav li a').hover(function () {
		$(this).addClass('navHover');
	}, function () {
		$(this).removeClass('navHover');
	}); 
	
	// -------------- script for slideshow -------
	
	$('#slideshow img:gt(0)').hide();
	$('#header h1:gt(0), #header p:gt(0)').hide();

	$('nav li a').click(function (event) {
		var index = Number(event.currentTarget.id)-1; 

		$('#header h1').fadeOut('slow');;
		$('#header h1').eq(index).fadeIn('slow');
		$('#header p').fadeOut('slow');
		$('#header p').eq(index).fadeIn('slow');


		$('#slideshow img').fadeOut('slow');
		$('#slideshow img').eq(index).fadeIn('slow');

	});
});
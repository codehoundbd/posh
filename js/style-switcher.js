
// Color Switcher Script

// include jquery.slidePanel.min.js and call colorSwitcherInit() in document ready for color switching.

function colorSwitcherInit(){

	$("#colorchanger a").click(function() { 
		$("link.main-style").attr("href",$(this).attr('rel'));
		return false;
	});

	$('#panel2').slidePanel({
		triggerName: '#trigger2',
		triggerTopPos: '550px',
		panelTopPos: '550px'
	});

}
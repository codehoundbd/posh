
// Color Switcher Script

// include jquery.slidePanel.min.js and call colorSwitcherInit() in document ready for color switching.

function colorSwitcherInit(){

	$("#colorchanger a").click(function() {

		if($(this).hasClass("colorblue")){
			$("link.main-style").attr("href","css/style.css");
			$("link.bs-overrides").attr("href","css/bootstrap-overrides.css");
		}

		if($(this).hasClass("colorred")){
			$("link.main-style").attr("href","css/style-red.css");
			$("link.bs-overrides").attr("href","css/bootstrap-overrides-red.css");
		}

		if($(this).hasClass("colorpurple")){
			$("link.main-style").attr("href","css/style-purple.css");
			$("link.bs-overrides").attr("href","css/bootstrap-overrides-purple.css");
		}

		if($(this).hasClass("colorgreen")){
			$("link.main-style").attr("href","css/style-green.css");
			$("link.bs-overrides").attr("href","css/bootstrap-overrides-green.css");
		}

		if($(this).hasClass("colororange")){
			$("link.main-style").attr("href","css/style-orange.css");
			$("link.bs-overrides").attr("href","css/bootstrap-overrides-orange.css");
		}

		
		return false;
	});

	$('#panel2').slidePanel({
		triggerName: '#trigger2',
		triggerTopPos: '200px',
		panelTopPos: '200px'
	});

}
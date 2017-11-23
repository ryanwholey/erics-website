$(function() {
	// var squareWidgetScript = document.createElement('script');


	// squareWidgetScript.setAttribute('src', 'https://squareup.com/appointments/buyer/widget/c0e7e52a-a524-477c-b16d-480a94eb675a/8GT59EEGJ8YZW.js');


	// $('.squareup-widget').append(squareWidgetScript);
	var set = false;
	var interval = setInterval(function() {

		if (!set && $('iframe').length) {
			set = true;
			console.log('found');
			$('iframe').on('load', function(e) {
				console.log('loaded!')
				console.log(e);
				window.e = e;
			});

			clearInterval(interval);
		}	
	}, 5);

	if (navigator) {
		console.log('doot');
	}
}());
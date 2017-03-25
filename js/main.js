$(document).ready(function(){
	var toggle = $('.menu__toggle'),
		menu = $('.menu');

	toggle.click(function(e){
		menu.slideToggle();
	});
});
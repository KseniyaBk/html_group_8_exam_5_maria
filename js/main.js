$(document).ready(function(){
	var toggle = $('.menu__toggle'),
		menu = $('.menu');

	toggle.click(function(e){
		menu.slideToggle();
	});

	$('.slider').slick({
		prevArrow: '<button type="button" class="slick-prev"><i class="fa fa-chevron-left"></i></button>',
		nextArrow: '<button type="button" class="slick-next"><i class="fa fa-chevron-right"></i></button>'
	});
});
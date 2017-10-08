$(document).ready(function() {

	$(".menu-btn").click(function() {
		$(this).toggleClass("on");
		$(".header-nav").slideToggle();
	});

	$("#btn-play").click(function () {
		$(this).parent().fadeOut();
		$("#video-play").fadeIn();
		$("#video-iframe")[0].src += "?autoplay=1";
	});

	$('#slider').slick({
		// autoplay: true,
		dots: true,
		arrows: false,
		speed: 600
	});


});
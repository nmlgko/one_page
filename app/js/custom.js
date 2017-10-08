$(document).ready(function() {

	$("#btn-play").click(function () {
		$(this).parent().fadeOut();
		$("#video-play").fadeIn();
		$("#video-iframe")[0].src += "?autoplay=1";
	});

	$("#slider").slick({
		autoplay: true,
		dots: true,
		arrows: false,
		speed: 600
	});

	$(".menu-btn").click(function() {
		$(this).toggleClass("on");
		$(".header-nav").slideToggle();
	});

	newAnchor()
});

function newAnchor(){
	$('a[href^="#"]').click(function(e){
		e.preventDefault();
		var id  = $(this).attr("href"),
				headerHeight = $(".fixed-head").outerHeight(),
				top = $(id).offset().top;
				$("body,html").animate({scrollTop: top - headerHeight}, 1000);
        $(this).parent().addClass("active").siblings().removeClass("active");
        $(".header-nav").hide();   
    });
}
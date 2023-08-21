$(function () {
	var lastScrollTop = 0,
		delta = 15;
	$(window).scroll(function (event) {
		var st = $(this).scrollTop();
		if (Math.abs(lastScrollTop - st) <= delta) return;
		if (st > lastScrollTop && lastScrollTop > 0) {
			$('.header_wrap').css('top', '-24vw');
		} else {
			$('.header_wrap').css('top', '0px');
		}
		lastScrollTop = st;
	});
});

function vh(v) {
	var h = Math.max(
		document.documentElement.clientHeight,
		window.innerHeight || 0
	);
	return (v * h) / 100;
}

$(function () {
	$(window).on('scroll', function () {
		if ($(window).scrollTop() > vh(10)) {
			$('.header_wrap').addClass('active');
		} else {
			//remove the background property so it comes transparent again (defined in your css)
			$('.header_wrap').removeClass('active');
		}
	});
});

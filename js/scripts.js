$(document).ready(function(){

	// Sliders
	$('.photos-slider').slick({
		arrows: false,
		dots: false,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 4000,
		rtl: true,
		infinite: true,
		fade: true
	});

	$('.features-slider').slick({
		arrows: false,
		dots: false,
		slidesToShow: 1,
		slidesToScroll: 1,
		rtl: true,
		swipe: false,
		infinite: true,
		fade: true
	});

	$('.features-slider').on('setPosition', function () {
		$(this).find('.slick-slide img').css('max-height', $(this).height() + 'px');
	});

	$('.features-nav-slider').slick({
		arrows: true,
		dots: false,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 4000,
		rtl: true,
		asNavFor: '.features-slider',
		infinite: true
	});

	$('.products-slider').slick({
		arrows: true,
		dots: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 4000,
		rtl: true,
		infinite: true
	});

	// FB Share
	$('.fb-share').click(function(e){
		$(this).closest('.form').find('.disabled').removeClass('disabled');
		$(this).closest('.form').find('[disabled]').prop('disabled', false)
	});

	$('.fb-share').popupWindow({ 
		width: 750, 
		height: 600,
		centerBrowser: 1
	});

	// Mobile Nav
	$('.menu-opener').click(function(e){
		$(this).toggleClass('active');
		$('.mobile-nav-panel').toggleClass('visible');
	});

	$('.mobile-nav-panel a').click(function(){
		$('.mobile-nav-panel').removeClass('visible');
		$('.menu-opener').removeClass('active');
	});

	// Panels
	var scrollTop;
	$('[data-panel]').click(function(e){
		e.preventDefault();

		var dest = $( $(this).data('panel') );

		dest.addClass('opened').siblings().removeClass('opened');

		scrollTop = $('body').offset().top;
		$('body').addClass('opened-panel').scrollTop(scrollTop);
	});

	$('.panel-close').click(function(){
		$(this).closest('.panel').removeClass('opened');

		$('body').removeClass('opened-panel').scrollTop(scrollTop);
	});

	// Eko Link
	var i = 0;
	var order = [1, 0, 3, 2, 5, 4, 7, 6];
	setInterval(function(){
		$('.eko-animated-link').each(function(){
			$(this).find('.eko').removeClass('active').eq(order[i]).addClass('active');
		});
		i++;
		if (i == 8) {
			i = 0;
		};
	}, 500);


	// Scroll to anchor
	$('a[href^="#"]').click(function(){
		var headerHeight;

		if($(window).width() <= 1399){
			headerHeight = 80;
		} else{
			headerHeight = 60;
		}

		 $('html, body').animate({
			scrollTop: $( $.attr(this, 'href') ).offset().top - headerHeight - 25
		}, 500);
		return false;
	});

	// Sticky Header
	var isSticky = false;

	$(window).scroll(function(){
		if( !isSticky && $(window).scrollTop() > 30 ){
			$('.header').addClass('sticky');
			isSticky = true;
		} else if(isSticky && $(window).scrollTop() <= 30){
			$('.header').removeClass('sticky');
			isSticky = false;
		}
	});

});
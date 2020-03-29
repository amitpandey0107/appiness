$(document).ready(function() {

	// Toggle Menu
	$('.mobileicon').on('click', function () {
		$('.menuwrap').toggle();
	});

	$('.carousel').carousel({	
		buttonNav: 'bullets',
		hAlign: 'center',
		vAlign: 'center',
		hMargin: 0.5,
		vMargin: 0.2,
		frontWidth: 420,
		// frontHeight: 750,
		carouselWidth: 930,
		carouselHeight: 550,
		left: 0,
		right: 0,
		top: 0,
		bottom: 0,
		speed: 500,
		directionNav: true,
		autoplay: true,
		autoplayInterval: 5000,
		pauseOnHover: true,
		mouse: true,
		shadow: false,
		reflection: false,
		reflectionHeight: 0.5,
		reflectionOpacity: 0.5,
		reflectionColor: '255,255,255',
		description: false,
		descriptionContainer: '.description',
		backOpacity: 1,
		before: function (carousel) { },
		after: function (carousel) { }
	});

	// /* STICKY MENU */
	// jQuery(function(){
	//     jQuery(window).scroll(function() {
	//         if (jQuery(this).scrollTop() >= 100) {
	//             jQuery('.siteHeader').addClass('stickyTop');
	//         }
	//         else {
	//             jQuery('.siteHeader').removeClass('stickyTop');
	//         }
	//     });
	// });


	$('.plusminus').on('click', function(){
		var getID = $(this).attr('id');	
		// $(this).toggleClass("fa fa-minus", "a fa-plus");		
		if(getID=='ember') {
			$('#emberlist').toggle();
		} else if(getID=='partners') {
			$('#partnerslist').toggle();
		} else if(getID=='company') {
			$('#companylist').toggle();	
		} else if(getID=='contact') {
			$('#contactlist').toggle();
		}
	});


	$('.procard').on('click', function(){
		var getID = $(this).attr('id');	
		if (getID == 'procard1') {
			var a = $('#procard1 a').text();
			$('.pcontemt h4').text(a);
			$('.pcontemt h4').css('color', '#282822');
			$('.pcontemt p').css('color', '#626262');
			$('.pcontemt p').text('Ember Pro members enjoy unrestricted access to our massive collection of workouts from all six workout categories.');
			$('.proimage img').attr('src', 'assets/images/img_3.png');
			$('.procard').removeClass('active');
			$(this).addClass('active');
		} else if (getID == 'procard2') {
			var a = $('#procard2 a').text();
			$('.pcontemt h4').text(a);
			$('.procard').removeClass('active');
			$('.pcontemt h4').css('color', '#282822');
			$('.pcontemt p').css('color', '#626262');
			$('.pcontemt p').text('We are always creating fresh new workouts for you to enjoy. As a Pro member, you will gain access to all of Embers latest content.');
			$('.proimage img').attr('src', 'assets/images/img-mobile.png');
			$(this).addClass('active');
		} else if (getID == 'procard3') {
			var a = $('#procard3 a').text();
			$('.pcontemt h4').text(a);
			$('.procard').removeClass('active');
			$('.pcontemt h4').css('color', '#282822');
			$('.pcontemt p').css('color', '#626262');
			$('.pcontemt p').text('Free Ember users are limited to completing one  workout every 48 hours. Ember Pro users can workout as many times as they want, and earn an unlimited amount of flames!');
			$('.proimage img').attr('src', 'assets/images/img-mobile.png');
			$(this).addClass('active');
		} else if (getID == 'procard4') {
			var a = $('#procard4 a').text();
			$('.pcontemt h4').text(a);
			$('.pcontemt h4').css('color', '#ffffff');
			$('.pcontemt p').css('color', '#ffffff');
			$('.procard').removeClass('active');
			$('.pcontemt p').text('Ember Pro users can download workouts for offline use, so you can enjoy all of our fitness titles anywhere in the world');
			$('.proimage img').attr('src', 'assets/images/img_2.png');
			$(this).addClass('active');
		}
	})




})
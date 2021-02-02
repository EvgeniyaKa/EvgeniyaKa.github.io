jQuery(document).ready(function() {
	jQuery('.treatment').addClass("hidden").viewportChecker({
		classToAdd: 'visible animated fadeIn',
		offset:300
	});

	jQuery('.choose').addClass("hidden").viewportChecker({
		classToAdd: 'visible animated fadeInLeft',
		offset:300
	});

	jQuery('.happy_background').addClass("hidden").viewportChecker({
		classToAdd: 'visible animated fadeInRight',
		offset:300
	});
	jQuery('.works').addClass("hidden").viewportChecker({
		classToAdd: 'visible animated fadeInUp',
		offset:300
	});

	jQuery('.gallery_sed').addClass("hidden").viewportChecker({
		classToAdd: 'visible animated zoomIn',
		offset:300
	});

	jQuery('.our_team').addClass("hidden").viewportChecker({
		classToAdd: 'visible animated fadeIn',
		offset:300
	});

	 $('.treatment_img').hover(
     function() {
      $(this).addClass('animated shake'); 
     },
     function() {
      $(this).removeClass('animated shake'); 
     }
    );

	  $('.happy_img').hover(
     function() {
      $(this).addClass('animated pulse'); 
     },
     function() {
      $(this).removeClass('animated pulse'); 
     }
    );

	   $('.our_team-img').hover(
     function() {
      $(this).addClass('animated rubberBand');
     },
     function() {
      $(this).removeClass('animated rubberBand'); 
     }
    );
});
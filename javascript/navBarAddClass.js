$(function() {
  var nav_bar = $("#navBar");
  var background = $(".headerContainer");
  $(window).scroll(function(){
    var scroll = $(window).scrollTop();
    // var scroll = background.position();


    if (scroll >= 50) {
      nav_bar.addClass('navBarStuck');
      nav_bar.addClass('slideDown');
    }
    else if(scroll <= 50) {
      nav_bar.removeClass('navBarStuck');
      nav_bar.removeClass('slideDown');
    }
  });
});


$(window).scroll(function() {
		$('.ourServicesHeader').each(function(){
		var headerPos = $(this).offset().top;

		var topOfWindow = $(window).scrollTop();
			if (headerPos > topOfWindow+400) {
				$(this).addClass("ourServicesHeaderAnimation");
			}
		});
	});

$(window).scroll(function() {
		$('.article').each(function(){
		var headerPos = $(this).offset().top;

		var topOfWindow = $(window).scrollTop();
			if (headerPos > topOfWindow+400) {
				$(this).addClass("ourServicesHeaderAnimation");
			}
		});
	});
$(window).scroll(function() {
		$('.cardIcon').each(function(){
		var headerPos = $(this).offset().top;

		var topOfWindow = $(window).scrollTop();
			if (headerPos > topOfWindow+400) {
				$(this).addClass("ourServicesHeaderAnimation");
			}
		});
	});



$(window).scroll(function() {
		$('.footerClass').each(function(){
		var headerPos = $(this).offset().top;

		var topOfWindow = $(window).scrollTop();
			if (headerPos > topOfWindow+1280) {
				$(this).addClass("slideUp");
			}
		});
	});

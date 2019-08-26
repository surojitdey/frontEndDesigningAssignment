var rellax = new Rellax('.posterImage');


$(function() {
  var nav_bar = $("#navBar");
  var background = $(".headerContainer");
  $(window).scroll(function(){
    var scroll = $(window).scrollTop();
    // var scroll = background.position();


    if (scroll >= 1) {
      nav_bar.addClass('slideDown');
      nav_bar.addClass('navBarStuck');
    }
    else if(scroll < 1) {
      nav_bar.removeClass('slideDown');
      nav_bar.removeClass('navBarStuck');
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
			else if (headerPos < topOfWindow+400) {
				$(this).removeClass("ourServicesHeaderAnimation");
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



$(window).scroll(function() {
		$('.appDownloadSectionLeft').each(function(){
		var headerPos = $(this).offset().top;

		var topOfWindow = $(window).scrollTop();
			if (headerPos > topOfWindow+1400) {
				$(this).addClass("stretchLeft");
			}
		});
});
$(window).scroll(function() {
		$('.appDownloadSectionRight').each(function(){
		var headerPos = $(this).offset().top;

		var topOfWindow = $(window).scrollTop();
			if (headerPos > topOfWindow+1400) {
				$(this).addClass("stretchRight");
			}
		});
});


$(window).scroll(function() {
		$('.messageContainer').each(function(){
		var headerPos = $(this).offset().top;

		var topOfWindow = $(window).scrollTop();
			if (headerPos > topOfWindow+1800) {
				$(this).addClass("slideUp");
			}
		});
});


$(window).scroll(function() {
		$('.investorLogo').each(function(){
		var headerPos = $(this).offset().top;

		var topOfWindow = $(window).scrollTop();
			if (headerPos > topOfWindow+1900) {
				$(this).addClass("stretchRight");
			}
		});
});


// $('.investorLogo:visited').addClass("stretchRight");

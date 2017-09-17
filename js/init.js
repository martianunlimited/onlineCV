(function($) {
  "use strict";

  //Run function When Document Ready
  $(document).ready(function() {
     initTyped();
     initCheckNav();
     initClickedEvents();
     initNavbarScroll();
     initGetHWindow();
     initFitText();
  });

    
  Pace.on('start',function() {
    $('.wrapper').css('visibility', 'hide');
    $('.wrapper').css('opacity', '0.0');  
  });  
  //Run function When PACE (page loader) hide
  Pace.on('hide', function() {
    $('.wrapper').css('visibility', 'visible').animate({opacity: 1.0}, 2000, function() {
      initCheckNav();
    });
    //check if url contain hash(#)
    if (window.location.hash) {
      $('.link-inpage[href="' + window.location.hash + '"]').first().trigger('click');
    }
  });
 
  function initFitText() {
    var width=Math.min($(window).width(),1020);
    var height=($(window).height()-width/6-100);
    height=Math.max(1,height);
    var ratio=(Math.pow(400000/(height*width),1/2));
    ratio=Math.max(ratio,1);
    ratio=Math.min(ratio,2.5);
    var ratio2=Math.min(ratio,1.5);
    setTimeout(function() {
        $('h1').css('font-size',64/ratio);
        $('h2').css('font-size',56/ratio);
        $('h3').css('font-size',48/ratio);
        $('h4').css('font-size',32/ratio);
        $('h5').css('font-size',26/ratio);
        $('.fit-h5').css('font-size',30/ratio);
	$('.name').css('letter-spacing',8/ratio);
	$('.job').css('letter-spacing',4/ratio);
  	$('.fit-p').css('font-size',18/ratio2);
  	$('.fit-p2').css('font-size',16/ratio2);
  	$('.fit-p3').css('font-size',14/ratio2);
  	$('.fit-p4').css('font-size',12/ratio2);
	var breadHeight=18/ratio*1.8+" px";
	$('.breadcrumb').css("line-height",breadHeight);
	$('.breadcrumb').css("height",breadHeight);
  	$('a.fit-p3').css('line-height',1.6);
  	$('i.fit-p').css('line-height',breadHeight);
        $('.fit-icon').css('font-size',48/ratio);
	if (height>width) {
	$('.typed-container').css("top","30%");
	$('h1.name').html("Nick Lim");
	} else if (width<768) {
	$('.typed-container').css("top","40%");
	$('h1.name').html("Hi, I'm Nick Lim");
	} else if (width>1019) {
	$('h1.name').html("Hi, I'm Nick Lim Jin Sean");
	} 
	if(width>881) {
		var pictWidth=$(".my-pict").width();
		var detailHeight=$("#my-detail").height();
		if ($(".my-desc").height()<pictWidth) {
			$("#my-blurb").height(pictWidth-detailHeight);
		}
		
	} else {
	$(".my-pict").height($(".my-pict").width());
	}
	}, 100);
  }
  //Typed Animation
  function initTyped() {
    $("#typed").typed({
		stringsElement: document.getElementById('typed-strings'),
      // typing speed
      typeSpeed: 50,
      // time before typing starts
      startDelay: 100,
      // backspacing speed
      backSpeed: 10,
      // time before backspacing
      backDelay: 5000,
      // loop
      loop: true,
      // false = infinite
      loopCount: false,
      // show cursor
      showCursor: true,
      // character for cursor
      cursorChar: "|",
      // attribute to type (null == text)
      attr: null,
      // either html or text
      contentType: 'html',
      // call when done callback function
      callback: function() {
      },
      // starting callback function before each string
      preStringTyped: function() {
      },
      //callback for every typed string
      onStringTyped: function() {
      },
      // callback for reset
      resetCallback: function() {
      }
    });
  }

  //Lightbox (popup)
 

  //Click Envents
  function initClickedEvents() {


    $('.back-to-top').click(function() {
      $('html, body').stop().animate({
        'scrollTop': 0
      }, 1500, 'easeInOutExpo', function() {
      });
      return false;
    });

    $('.link-inpage').click(function(e) {
      var target = this.hash, $target = $(target);
      $('html, body').stop().animate({
        'scrollTop': $target.offset().top - ($('.menu-area').outerHeight() - 1)
      }, 1500, 'easeInOutExpo', function() {
        //window.location.hash = target;
      });
      return false;
    });
  }

  //Navbar Scroll
  function initNavbarScroll() {
    if ($('.main-header').length > 0) {
      var mainbottom = $('.main-header').offset().top + $('.main-header').height();
      $(window).on('scroll', function() {
        var stopWindow = Math.round($(window).scrollTop()) + $('.menu-area').outerHeight();
        conditionNavbar(stopWindow, mainbottom);
      });
    }
  }

  //Check Navar Show
  function initCheckNav() {
    if ($('.main-header').length > 0) {
      var mainbottom = $('.main-header').offset().top + $('.main-header').height();
      var stopWindow = Math.round($(window).scrollTop()) + $('.menu-area').outerHeight();
      conditionNavbar(stopWindow, mainbottom);
    }
  }

  //Condition Navbar
  function conditionNavbar(stopWindow, mainbottom) {
    if (stopWindow > mainbottom) {
      $('.menu-area').addClass('nav-fixed');
    } else {
      $('.menu-area').removeClass('nav-fixed nav-black-bg');
    }
    if ((stopWindow) > $('.menu-area').outerHeight()) {
      $('.menu-area').addClass('nav-black-bg');
    }
  }


  //Set header to window
  function initGetHWindow() {
    var wHeight = $(window).height();
      $('.main-header, .header-content-fixed').height(wHeight);
  }

  //Map
 

  function initHold() {
    $('[data-holdwidth]').each(function(index, el) {
      var width = $(el).data('holdwidth');
      $(el).css('width', width);
    });
    $('[data-holdbg]').each(function(index, el) {
      var bg = $(el).data('holdbg');
      $(el).css('background-image', 'url(' + bg + ')');
    });
  }

  //Tooltip Boostrap
  function initTooltip() {
    $('[data-toggle="tooltip"]').tooltip();
  }

  //Tigger Custom Btn FIle


})(jQuery);

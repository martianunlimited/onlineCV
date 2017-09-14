(function($) {
  "use strict";

  //Run function When Document Ready
  $(document).ready(function() {
     initTyped();
     initCheckNav();
     initClickedEvents();
     initNavbarScroll();
     initGetHWindow();
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
 
  //Typed Animation
  function initTyped() {
    $("#typed").typed({
		stringsElement: document.getElementById('typed-strings'),
      // typing speed
      typeSpeed: 50,
      // time before typing starts
      startDelay: 100,
      // backspacing speed
      backSpeed: 40,
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
    if (wHeight > 600 && !$('.main-header').hasClass('no-window')) {
      $('.main-header, .header-content-fixed').height(wHeight);
    }
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

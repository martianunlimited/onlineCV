(function($){"use strict";$(document).ready(function(){initTyped();initCheckNav();initClickedEvents();initNavbarScroll();initGetHWindow();initFitText();});Pace.on('start',function(){$('.wrapper').css('visibility','hide');$('.wrapper').css('opacity','0.0');});Pace.on('hide',function(){$('.wrapper').css('visibility','visible').animate({opacity:1.0},2000,function(){initCheckNav();});if(window.location.hash){$('.link-inpage[href="'+window.location.hash+'"]').first().trigger('click');}});function initFitText(){var width=Math.min($(window).width(),1020);var height=($(window).height()-width/6-100);height=Math.max(1,height);var ratio=(Math.pow(400000/(height*width),1/2));ratio=Math.max(ratio,1);ratio=Math.min(ratio,2.5);var ratio2=Math.min(ratio,1.5);setTimeout(function(){$('body').css('font-size',16/ratio2);if(width>1000){$('h1.name').html("Hi, I'm Nick Lim Jin Sean");}else if(height>width){$('.typed-container').css("top","30%");$('h1.name').html("Nick Lim");}else if(width<768){$('.typed-container').css("top","40%");$('h1.name').html("Hi, I'm Nick Lim");}if(width>881){var pictWidth=$(".my-pict").width();var detailHeight=$("#my-detail").height();if($(".my-desc").height()<pictWidth){$("#my-blurb").height(pictWidth-detailHeight);}}else{$(".my-pict").height($(".my-pict").width());}},100);}function initTyped(){$("#typed").typed({stringsElement:document.getElementById('typed-strings'),typeSpeed:50,startDelay:100,backSpeed:10,backDelay:5000,loop:true,loopCount:false,showCursor:true,cursorChar:"|",attr:null,contentType:'html',callback:function(){},preStringTyped:function(){},onStringTyped:function(){},resetCallback:function(){}});}function initClickedEvents(){$('.back-to-top').click(function(){$('html, body').stop().animate({'scrollTop':0},1000,'swing',function(){});return false;});$('.link-inpage').click(function(e){var target=this.hash,$target=$(target);$('html, body').stop().animate({'scrollTop':$target.offset().top-($('.menu-area').outerHeight()-1)},1000,'swing',function(){});return false;});}function initNavbarScroll(){if($('.main-header').length>0){var mainbottom=$('.main-header').offset().top+$('.main-header').height();$(window).on('scroll',function(){var stopWindow=Math.round($(window).scrollTop())+$('.menu-area').outerHeight();conditionNavbar(stopWindow,mainbottom);});}}function initCheckNav(){if($('.main-header').length>0){var mainbottom=$('.main-header').offset().top+$('.main-header').height();var stopWindow=Math.round($(window).scrollTop())+$('.menu-area').outerHeight();conditionNavbar(stopWindow,mainbottom);}}function conditionNavbar(stopWindow,mainbottom){if(stopWindow>mainbottom){$('.menu-area').addClass('nav-fixed');}else{$('.menu-area').removeClass('nav-fixed nav-black-bg');}if((stopWindow)>$('.menu-area').outerHeight()){$('.menu-area').addClass('nav-black-bg');}}function initGetHWindow(){var wHeight=$(window).height();$('.main-header, .header-content-fixed').height(wHeight);}function initHold(){$('[data-holdwidth]').each(function(index,el){var width=$(el).data('holdwidth');$(el).css('width',width);});$('[data-holdbg]').each(function(index,el){var bg=$(el).data('holdbg');$(el).css('background-image','url('+bg+')');});}function initTooltip(){$('[data-toggle="tooltip"]').tooltip();}})(jQuery);
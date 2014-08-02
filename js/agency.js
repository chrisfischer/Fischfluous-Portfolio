/*!
 * Start Bootstrap - Agnecy Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top'
})

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});

//Silder
$(document).ready(function(){
  
  $('#portfolio a, #catbot a, #slider a').on('click', function(e) {
    e.preventDefault();
  });

  $(window).on('scroll',function() {
    var scrolltop = $(this).scrollTop();
    
    var $toppp = $("#portfolio");
    var $bottommm = $("#catbot");
    if (scrolltop>=$toppp.offset().top && scrolltop<=$bottommm.offset().top){
        $('#slider').stop().animate({"margin-left": '0'});
    }
    else {
        $('#slider').stop().animate({"margin-left": '-200'}); 
    }
});

});
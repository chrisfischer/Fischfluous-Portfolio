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
  
  $('#portfolio a, #technology a').on('click', function(e) {
    e.preventDefault();
  });

  $(window).on('scroll',function() {
    var scrolltop = $(this).scrollTop();
    
    var $toppp = $("#portfolio");
    var $bottommm = $("#technology");
    if (scrolltop>=$toppp.offset().top && scrolltop<$bottommm.offset().top){
        $('#slider').stop().animate({"margin-left": '-5'});
    }
    else {
        $('#slider').stop().animate({"margin-left": '-205'}); 
    }
});

});

//links
$("#to3heart").click(function() {
    $("#portfolioModal11").modal('hide');
    $("#portfolioModal1").modal('show');
});

$("#to2heart").click(function() {
    $("#portfolioModal1").modal('hide');
    $("#portfolioModal11").modal('show');
});

$("#example-one").on("click", function() {
  var el = $(this);
  el.text() == el.data("text-swap") 
    ? el.text(el.data("text-original")) 
    : el.text(el.data("text-swap"));
});
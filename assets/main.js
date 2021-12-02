$(document).ready(function() {
    $(".show-more a").on("click", function() {
        var $this = $(this); 
        var $content = $('.content');
        var linkText = $this.text().toUpperCase();    
        if(linkText === "SHOW MORE"){
            console.log('here');
            linkText = "Show less";
            $content.switchClass("hideContent", "showContent", 400);
        } else {
            linkText = "Show more";
            $content.switchClass("showContent", "hideContent", 400);
        };
    
        $this.text(linkText);
    });
    
    
    var elem = document.getElementsByTagName('rotateSvg');
    window.addEventListener('scroll', function() {
        // console.log('here 1123' )
        var value = window.scrollY * 0.25;
        elem.style.transform = `translatex(-50%) translatey(-50%) rotate(${value}deg)`; 
    });
    
    
});

$('.main-carousel').flickity({
    // options
    cellAlign: 'left',
    contain: true
  });
  $('.slideForSharri').flickity({
    // options
    cellAlign: 'center',
    contain: true,
    pageDots: false,
  });
$("[data-trigger]").on("click", function(){
    var trigger_id =  $(this).attr('data-trigger');
    $(trigger_id).toggleClass("show");
    $('body').toggleClass("offcanvas-active");
    // $('body').toggleClass("stop-scroll");

});

// close button 
$(".btn-close").click(function(e){
    $(".navbari-collapse").removeClass("show");
    $("body").removeClass("offcanvas-active");
}); 

var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('.smart-scroll').outerHeight();
$(window).scroll(function(event){
    didScroll = true;
});

setInterval(function() {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 250);

function hasScrolled() {
    var st = $(this).scrollTop();
    var navbar = $(".smart-scroll").first();
    var navbarPosition = navbar.position();
    // Make sure they scroll more than delta
    if(Math.abs(lastScrollTop - st) <= delta)
        
    return;

    // If they scrolled down and are past the navbar, add class .nav-up.
    // This is necessary so you never see what is "behind" the navbar.
    if (navbarPosition.top > 20){
        // Scroll Down
        $('.smart-scroll').css({
          'opacity':'0','transition': 'all 0.5s ease-in-out','z-index': '-1'
          
          });
    } else {
        // Scroll Up
        if(navbarPosition.top < 20) {
            $('.smart-scroll').css({
            'opacity':'1', 'transition': 'all 0.5s ease-in-out','z-index': '123'

            });
        }
    }
    
    lastScrollTop = st;
}




// data-filter
$(window).on('load', function () {
	'use strict';
	var $container = $('.portfoliodiv');
	$container.isotope({
		filter: '*',
		layoutMode: 'masonry',
		animationOptions: {
			duration: 750,
			easing: 'linear',
			queue: true,
			layoutMode: 'fitRows'
		}
	});
	$('.filter ul li a').on('click' , function () {
		$('.filter .active').removeClass('active');
		$(this).addClass('active');
		var selector = $(this).attr('data-filter');


		$container.isotope({
			filter: selector,
			animationOptions: {
				duration: 750,
				queue: true
			}
		});

		return false;
	});

});


$(".navbar-toggler").on('click', function(){
    $('body').addClass('stop-scroll');
 });  
$(".burgerMenuX").on('click', function(){
   $('body').removeClass('stop-scroll');
});  

window.onscroll = function () {
    scrollRotate();
};

function scrollRotate() {
    let image = document.getElementById("reload");
    image.style.transform = "rotate(" + window.pageYOffset/6 + "deg)";
}
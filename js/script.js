$(document).ready(function(){
  // showing nav modal while clicking on bars icon
  $('.nav-toggler').click(function(){
    $('.navbar-collapse').addClass('show-nav');
  });

  // removing nav modal while clicking on cancel button
  $('#cancel-btn').click(function(){
    $('.navbar-collapse').removeClass('show-nav');
  });

  // slick slider 
  $('.testimonials-content').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    dots: true
  });

  // AOS - animation during scroll
  AOS.init();

  // stopping animation during window resizing
  let resizeTimer;
  $(window).on('resize', function(){
    $(document.body).addClass("resize-animation-stopper");
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
    $(document.body).removeClass("resize-animation-stopper");
    }, 400);
  });
});
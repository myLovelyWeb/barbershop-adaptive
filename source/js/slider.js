"use strict";

$(document).ready(function(){
  $('.advantages__slider').slick({
    arrows: false,
    dots: true,
    autoplay: false,
    autoplaySpeed: 2000,
    mobileFirst: true,
    responsive: [{
      breakpoint: 767,
      settings: 'unslick'
    }]
  });
});

$(document).ready(function(){
  $('.reviews__slider').slick({
    arrows: false,
    dots: true,
    autoplay: false,
    autoplaySpeed: 2000,
    mobileFirst: true,
    responsive: [{
      breakpoint: 767,
      settings:{
        arrows: true
      }
    }]
  });
});

$(window).on('resize orientationchange', function() {
  var mySlider = $('.advantages__slider');

  if(!mySlider.hasClass('slick-initialized')){
    mySlider.slick('resize');
  }
});

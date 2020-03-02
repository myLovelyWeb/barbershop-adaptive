$(document).ready(function(){
  $('.advantages__list').slick({
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
  $('.reviews__list').slick({
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

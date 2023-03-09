$(document).ready(function () {
  $("main .slider .slider-link .slider-image").css("opacity", "1");
  $("main .support .logo-slider .logo-wrapper .logo-perusahaan").css(
    "opacity",
    "1"
  );

  $(".slider").slick({
    dots: true,
    infinite: true,
    speed: 800,
    fade: true,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 576,
        settings: {
          arrows: false,
          swipe: true,
        },
      },
    ],
  });

  $(".logo-slider").slick({
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    swipe: true,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
});

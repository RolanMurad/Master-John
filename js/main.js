$(function () {
  // !Reviews Carousel
  $('.reviews__slider').slick({
    slidesToShow: 2,
    slidesToScroll: 2,
    arrows: false,
    dots: true,
    infinity: true,
    autoplay: false,
    // !Responsive
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
    ]
  });
});

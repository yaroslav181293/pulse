$(document).ready(function () {
    $('.carousel__inner').slick({
           
        prevArrow:'<button type="button" class="slick-prev"><img src="img/left.svg"></button>',
        nextArrow:'<button type="button" class="slick-next"><img src="img/right.svg"></button>',
        responsive: [
            {
              breakpoint: 992,
              settings: {
                slidesToShow: 1,
                slidesToScroll:1 ,
                arrows:false,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1,
                slidesToScroll:1,
                dots:true,
                arrows:false
              }
            }
           
        ]
    });
  });
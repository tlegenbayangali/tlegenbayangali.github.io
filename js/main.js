// document.addEventListener('DOMContentLoaded', function() {
//     const oralMarker = document.querySelector('#marker-oral');
//     oralMarker.addEventListener('click', function() {
//         alert('clicked')
//     });
// });

$(document).ready(function(){
    $('.partners-slider').slick({
    infinite: true,
    arrows: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    nextArrow: $('.partners .arrow-right'),
    prevArrow: $('.partners .arrow-left'),
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
    });    
  });
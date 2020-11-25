// Write your JavaScript here...
const body = document.body;
const btn = document.querySelector(".btn-menu");

btn.addEventListener("click", function () {
  body.classList.toggle("show");
});

function showVideo(){
  var popup = document.getElementById("vid-popup");
  popup.classList.toggle("show")
  if (popup.paused){ 
      popup.play(); 
  }
  else { 
    popup.pause();
  }
 
}

$(document).ready(() => {
		$('.home-banner .banner-slide-show').slick({
      dots:true,
      infinite: true,
      speed: 2000,
      fade: true,
      arrows: true,
      prevArrow: '<div class="slick-prev"></div>',
      nextArrow: '<div class="slick-next"></div>'
    })

    /*$('.shop-device .room-device').slick({
      responsive: [{
        breakpoint: 500,
        settings: {
          speed: 2000,
          infinite:true,
          slidesToShow: 3,
          slidesToScroll: 1
        }

      }]
    }) */
    
});



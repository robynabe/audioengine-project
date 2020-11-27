// Write your JavaScript here...
const body = document.body;
const btn = document.querySelector(".btn-menu");
let menuOpen = false

btn.addEventListener("click", function () {
    body.classList.toggle("show");
});

btn.addEventListener("click", function () {
  if(!menuOpen){
    btn.classList.add('open')
    menuOpen = true
  } else {
    btn.classList.remove('open')
    menuOpen = false
  }
});

function showVideo(){
  var popup = document.querySelector("video");
  popup.classList.toggle("show")
  /*if (popup.paused){ 
      popup.play(); 
  }
  else { 
    popup.pause();
  }*/
 
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

    $('.shop-device .room-device').slick({

      unslick: true,
      
      responsive: [
        { 
          breakpoint: 450,
          settings: {
            unslick: false,
            speed: 2000,
            infinite:true

          }
        } 
      ]
    
    });

    $('.in-the-news .magazines').slick({
      infinite: true,
      speed: 2000,
      arrows: true,
      prevArrow: '<div class="slick-prev"></div>',
      nextArrow: '<div class="slick-next"></div>'
    })

});

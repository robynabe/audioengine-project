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

let myVideo = document.getElementById("the-video"); 
function showVideo() { 
  body.classList.toggle("show-video")
  if (myVideo.paused) 
    myVideo.play(); 
  else 
    myVideo.pause(); 
} 

function closeVideo(){
  $body.removeClass('show-video');
};


$(document).ready(() => {
		$('.home-banner .banner-slide-show').slick({
      dots:true,
      infinite: true,
      speed: 2000,
      fade: true,
      arrows: true
    })

    $('.shop-device .room-device').slick({

      unslick: true,
      
      responsive: [
        { 
          breakpoint: 450,
          settings: {
            unslick: false,
            speed: 2000,
            infinite:true,
          }
        } 
      ]
    
    });

    $('.in-the-news .magazines').slick({
      infinite: true,
      speed: 2000,
      arrows: true
    })

});

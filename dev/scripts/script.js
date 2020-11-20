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
      speed: 2000,
      fade: true,
    })
});

/*$(document).ready(() => {
		$('.shop-device .room-device').slick({
      mobileFirst:true,
      breakpoint: 500 
      settings: {
      speed: 2000
      }
    })
});*/



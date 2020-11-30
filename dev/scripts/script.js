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

const theVid = document.querySelector(".video-container");
const closeBtn = document.querySelector("#close-video");

function showVideo(){
  theVid.style.display = "block";
};

/*
closeBtn.addEventListener("click", function (){
  theVid.style.display = "none";
})
*/



$(document).ready(() => {
		$('.home-banner .banner-slide-show').slick({
      dots:true,
      infinite: true,
      speed: 2000,
      fade: true,
      nextArrow: '#right-arrow-banner',
      prevArrow: '#left-arrow-banner'
    });

    $('.shop-device .room-device').slick({

      speed: 2000,
      infinite:true,
      slidesToShow: 3,
      nextArrow: '#right-arrow-device',
      prevArrow: '#left-arrow-device',
    });

    $('.in-the-news .magazines').slick({
      infinite: true,
      speed: 2000,
      arrows: true
    });

});

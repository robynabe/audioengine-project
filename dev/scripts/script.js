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
const closeBtn = document.querySelector("#btn-close");

function showVideo(){
  theVid.style.display = "block";
};

closeBtn.addEventListener("click", function (){
  theVid.style.display = "none";
});


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
    appendDots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 5,
    slidesToScroll: 2,
    nextArrow: '#right-arrow-device',
    prevArrow: '#left-arrow-device',
    responsive: [
        {
            breakpoint: 1200,
            settings: {
            slidesToShow: 4
            }
        },
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 3,
          }
        },
        {
            breakpoint: 450,
            settings: "unslick"
        }
    ]
 });

    $('.in-the-news .magazines').slick({
      appendDots: true,
      infinite: true,
      speed: 1000,
      slidesToShow: 5,
      nextArrow: '#right-arrow-news',
      prevArrow: '#left-arrow-news',
    responsive: [
      {
            breakpoint: 1000,
            settings: {
            slidesToShow: 4
            }
        },
        {
            breakpoint: 800,
            settings: {
            slidesToShow: 3
            }
        },
        {
          breakpoint: 700,
          settings: {
            slidesToShow: 2
          }
        },
        {
            breakpoint: 500,
            settings: "unslick"
        }
    ]
 });
    
});




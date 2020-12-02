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

const theVid = document.querySelector(".video-pop-up");
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

});

const mqListener = window.matchMedia('(min-width: 450px)');

// Add the listener to the MQL variable
mqListener.addListener(function(e){ 
    initSlick(true, e.matches, 600, $('.room-device'), slideSettings);     })


const slideSettings = {
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
};

const windowWidth = $(window).width();

initSlick(true, false, 450, $('.room-device'), slideSettings);


function initSlick(onPageLoad = true, match = false, width, slideElement, slideSettings){
    if(onPageLoad && windowWidth > width){
        slideElement.slick(slideSettings);
    }else if(match){
        slideElement.slick(slideSettings);
    }
} 

/*

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
 */
    





// Write your JavaScript here...
const body = document.body;
const btn = document.querySelector(".btn-menu");

btn.addEventListener("click", function () {
  body.classList.toggle("show");
});

/*$(document).ready(function () {
		$('.home-banner').slick({
			setting-name:setting-value
        });
    });*/
// swiper
const progressCircle = document.querySelector(".autoplay-progress svg");
const progressContent = document.querySelector(".autoplay-progress span");


var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
 
  on: {
    slideChange: function () {
      console.log("Slide changed!");
    },
  },
});


// nav menu
var MenuItem=document.getElementById("MenuItem");

MenuItem.style.maxHeight= "0px";

function menutoggle(){
    if(MenuItem.style.maxHeight == "0px")
    {
        MenuItem.style.maxHeight = "200px";
    }
    else
    {
        MenuItem.style.maxHeight = "0px";
    }
}

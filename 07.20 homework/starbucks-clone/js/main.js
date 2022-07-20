// SUBMENU > SEARCH
const searchEl = document.querySelector(".search");
const serachInputEl = searchEl.querySelector("input");

searchEl.addEventListener("click", function(){
  serachInputEl.focus();
})
serachInputEl.addEventListener("focus", function(){
  serachInputEl.setAttribute("placeholder", "통합 검색");
})
//focus의 반대 blur
serachInputEl.addEventListener("blur", function(){
  serachInputEl.setAttribute("placeholder", "");
} )

// swiper
// notice >> swiper
const swiperNotice = new Swiper(".notice .notice-line .swiper", {
  direction: "vertical",
  loop: true,
  autoplay: true,
})

//PROMOTION >> SWIPER
// SWIPER PROMOTION
const swiperPromotion = new Swiper(".promotion .swiper", {
  direction: "horizontal",
  slidesPerView: 3,
  spaceBetween: 10,
  centeredSlides: true,
  loop: true,
  autoplay: {
    delay: 1000,
    disableOnInteraction: false,
  },


 pagination: {
  el: ".promotion .swiper-pagination",
  clickable: true,
 },
 navigation: {
  prevEl: ".promotion .swiper-button-prev",
  nextEl: ".promotion .swiper-button-next",
 },
})

//SWIPER PROMOTION AUTOPLAY CONTROL
function controlAutoplay() {
  if(swiperPromotion.autoplay.running){
    swiperPromotion.autoplay.stop();
  }else{
    swiperPromotion.autoplay.start();
  }
}

// Togle Promotion
const promotionEl = document.querySelector(".promotion");
const promotionToggleBtn = document.querySelector(".promotion-toggle");

promotionToggleBtn.addEventListener("click", function(){
  if(promotionEl.classList.contains("hide")) {
    promotionEl.classList.remove("hide");
  }else {
    promotionEl.classList.add("hide");
  }
  if(promotionToggleBtn.style.transform === "rotate(180deg)"){
    promotionToggleBtn.style.transform = "rotate(0deg)";
  }else{
  promotionToggleBtn.style.transform = "rotate(180deg)";
  }
})
// SCROLL ANIMATION
let scrollYPos;
window.addEventListener("scroll", function(){
  scrollYPos=window.scrollY;
  console.log(scrollYPos);
})
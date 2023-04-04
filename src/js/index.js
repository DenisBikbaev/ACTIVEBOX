var swiper = new Swiper(".mySwiper", {
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  grabCursor: true,
  keyboard: {
    enable: true,
    onlyInViewport: true,
    pageUpDown: true,
  },
});

document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("burger").addEventListener("click", function(){
    document.querySelector("header").classList.toggle("open")
  })
});
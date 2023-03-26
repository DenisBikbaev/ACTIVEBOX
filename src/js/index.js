var swiper = new Swiper(".mySwiper", {
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  grabCursor: true,
  keyboard:{
    enable: true,
    onlyInViewport: true,
    pageUpDown:true,
  },
});
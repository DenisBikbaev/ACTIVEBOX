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

$(document).ready(function(){
  $('.header-burger').click(function(event){
    $('.header-burger,.header__link').toggleClass('active');
  });
});
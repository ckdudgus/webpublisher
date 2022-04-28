window.onload = function(){
  
  AOS.init({
    once:false,
    duration : 800
  });
  
  const swiper = new Swiper('.mySwiper', {
      slidesPerView: 3,
      spaceBetween: 30,

      // autoplay
      autoplay: {
        delay: 2000,
      },

      loop: true,
      loopFillGroupWithBlank: true,
    
      // If we need pagination
      pagination: {
        el: '.swiper-pagination',
      },
      observer: true,	// 추가
      observeParents: true,	// 추가
    
      // Navigation arrows
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
}
var swiper = new Swiper(".mySwiper", {
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
    clickable: true,
  },
});

$(".tab-menu a").hover(function (e) {
  e.preventDefault();
  $(this).tab("show");
});

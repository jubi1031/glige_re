let swiper1 = new Swiper(".mainSlide", {
  spaceBetween: 30,
  effect: "fade",
  navigation: {
    nextEl: ".next1",
    prevEl: ".prev1",
  },
  pagination: {
    el: ".pg1,",
    clickable: true,
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  },
});

var swiper2 = new Swiper(".eduSwiper", {
  pagination: {
    el: ".pg2",
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  },
});

const menuToggle = document.querySelector("#toggle-btn");
const navigation = document.querySelector(".navigation");
menuToggle.onclick = function () {
  menuToggle.classList.toggle("active");
  navigation.classList.toggle("active");

  if (menuToggle.innerHTML === `<i class="fa-solid fa-xmark"></i>`) {
    menuToggle.innerHTML = `<i class="fa-solid fa-bars"></i>`;
  } else {
    menuToggle.innerHTML = `<i class="fa-solid fa-xmark"></i>`;
  }
};

$("ul li").on("click", function () {
  $(this).toggleClass("show");
  $(this).siblings().removeClass("show");
});

window.addEventListener("scroll", function () {
  let header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 100);
});

//Preloader

$("#preloader")
  .delay(1500)
  .fadeOut("slow", function () {
    $(this).remove();
  });

var mySwiper = new Swiper(".mySwiper", {
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
});

var mySwiperDoctor = new Swiper(".mySwiperDoctor", {
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  initialSlide: 2,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  breakpoints: {
    640: {
      slidesPerView: 1,
      spaceBetween: 50,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 70,
    },
    1300: {
      slidesPerView: 3,
      spaceBetween: 70,
    },
  },
});

var mySwiperGallery = new Swiper(".mySwiperGallery", {
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  initialSlide: 2,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  breakpoints: {
    640: {
      slidesPerView: 1,
      spaceBetween: 50,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 70,
    },
    1300: {
      slidesPerView: 3,
      spaceBetween: 70,
    },
  },
});

var swiper = new Swiper(".mySwiperLastPosts", {
  direction: "vertical",
  autoplay: {
    delay: 1500,
  },
  breakpoints: {
    640: {
      slidesPerView: 1,
      spaceBetween: 45,
    },
    768: {
      slidesPerView: 1,
      spaceBetween: 15,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 5,
    },
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
var swiper = new Swiper(".mySwiperLastBlog", {
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  breakpoints: {
    640: {
      slidesPerView: 1,
      spaceBetween: 45,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 15,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 25,
    },
    1300: {
      slidesPerView: 3,
      spaceBetween: 55,
    },
  },
});

$(".tab-menu a").hover(function (e) {
  e.preventDefault();
  $(this).tab("show");
  /*  $(this).addClass("active"); */
});

$(".tab-menu li")
  .mouseover(function () {
    $(this).addClass("active");
  })
  .mouseout(function () {
    $(this).removeClass("active");
  });

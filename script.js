$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 10,
  nav: false,
  dots: true,
  responsive: {
    0: {
      items: 1,
    },
    1000: {
      items: 2,
    },
  },
});

var header = document.getElementById("Myheader");

var typed = new Typed(".typed", {
  strings: [
    "I’m Simone Olivia.",
    "I’m a Freelancer.",
    "I’m a Photographer.",
    "I’m a Designer.",
  ],
  typeSpeed: 100,
  backSpeed: 100,
  // startDelay: 500,
  loop: true,
  loopCount: Infinity,

  cursorChar: "|",
});

var btn = document.getElementsByClassName("navbar-toggler")[0];
var btnIcon = document.getElementsByClassName("navbar-toggler-icon")[0];
var btnIcon2 = document.getElementsByClassName("fa-x")[0];
var img = document.getElementsByClassName("img1")[0];
var aa = document.getElementsByClassName("hamada")[0];

// img.addEventListener("mouseover", function () {
//   console.log(img);
//   aa.style.display = "block";
// });

// aa.addEventListener("mouseout", function () {
//   console.log(img);
//   aa.style.display = "none";
// });

// btn.addEventListener("click", function () {
//   // btn.innerHTML = '<i class="fa-solid fa-x"></i>';
//   btnIcon.classList.toggle("navbar-toggler-icon");
//   btnIcon2.style.display = "block";
//   console.log(btnIcon2);
//   console.log(btn);
// });

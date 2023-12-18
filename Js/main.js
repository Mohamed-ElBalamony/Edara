// navbar scroll editing
const nav = document.getElementById("mynav");
const anchorIcon = document.querySelector(".nav-link");
const mainList = document.querySelector("#mynav .mainNav");
const SecList = document.querySelector("#mynav .scrolledNav");
const mainLogo = document.querySelector("#mynav .mainLogo");
const hiddenLogo = document.querySelector("#mynav .hiddenLogo");

const navHeight = nav.getBoundingClientRect().height;
console.log(navHeight);
window.onscroll = function () {
  if (
    document.body.scrollTop >= 300 ||
    document.documentElement.scrollTop >= 300
  ) {
    nav.classList.add("nav-colored");
    nav.classList.add("fixed-top");
    nav.classList.remove("bg-transparent");
    mainList.style.display = "none";
    SecList.style.display = "block";
    mainLogo.style.display = "none";
    hiddenLogo.style.display = "block";
    anchorIcon.classList.remove("main-text-color");
    anchorIcon.classList.add("white-color");
  } else {
    nav.classList.add("nbg-transparent");
    nav.classList.remove("nav-colored");
    nav.classList.remove("fixed-top");
    anchorIcon.classList.add("main-text-color");
    anchorIcon.classList.remove("white-color");
    mainList.style.display = "";
    SecList.style.display = "none";
    mainLogo.style.display = "";
    hiddenLogo.style.display = "none";
  }
};

// carsoual
$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 25,
  responsive: {
    0: {
      items: 1,
    },
    500: {
      items: 2,
    },
    600: {
      items: 2,
    },
    700: {
      items: 3,
    },
    1000: {
      items: 4,
    },
  },
});

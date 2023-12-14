// Show the button when scrolling down
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  var scrollToTopBtn = document.getElementById("scrollToTopBtn");

  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollToTopBtn.style.display = "block";
  } else {
    scrollToTopBtn.style.display = "none";
  }
}

// Scroll to the top when the button is clicked
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
}

const menu = document.querySelector(".burger-nav");
const burger = document.querySelector(".burger-menu");
const close = document.querySelector(".kryds");

burger.addEventListener("click", toggleMenu);
close.addEventListener("click", toggleMenu);
function toggleMenu() {
  menu.classList.toggle("active");
  burger.classList.toggle("cross");
}
<<<<<<< HEAD
customElements.define("iform-login", Login);
window.addEventListener("load", () => {
  if (!localStorage.getItem("iform-totally-logged-in")) {
    const div = document.createElement("div");
    div.id = "totally-delete-me";
    div.style.width = "100vw";
    div.style.height = "100vh";
    div.style.position = "fixed";
    div.style.zIndex = "9999";

    div.innerHTML = "<iform-login />";
    document.body.prepend(div);
  }
});

//galleri
function scrollToSection(sectionId) {
  var section = document.querySelector("." + sectionId);
  section.scrollIntoView({ behavior: "smooth" });
}

function scrollImages(direction) {
  var imageContainer = document.querySelector(".wienerbrod");
  var scrollAmount =
    direction === "next" ? window.innerWidth : -window.innerWidth;
  imageContainer.scrollBy({ left: scrollAmount, behavior: "smooth" });
}

function toggleButtons() {
  var scrollBtns = document.getElementById("scroll-btns");
  var screenWidth = window.innerWidth;

  if (screenWidth <= 800) {
    scrollBtns.style.display = "block";
  } else {
    scrollBtns.style.display = "none";
  }
}

window.onload = toggleButtons;
window.onresize = toggleButtons;

//burgermenu
document.addEventListener("DOMContentLoaded", function () {
  var burgerIcon = document.getElementById("burger-icon");
  var menu = document.querySelector(".menu");

  burgerIcon.addEventListener("click", function () {
    menu.classList.toggle("active");
  });
});
=======
>>>>>>> d0117818b9f0315677cd2eea4b0df70f3e589d24

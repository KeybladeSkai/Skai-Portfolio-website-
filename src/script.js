"use strict";

// The Navs
const openNav = document.getElementById("open");
const closeNav = document.getElementById("close");

// The navbar
const NavBar = document.getElementById("NavBar");

openNav.addEventListener("click", () => {
  NavBar.style.display = "block";
});
closeNav.addEventListener("click", () => {
  NavBar.style.display = "none";
});

window.addEventListener("resize", () => {
  if (window.innerWidth >= 768) {
    NavBar.style.display = "none";
  }
});

NavBar.addEventListener("click", () => {
  NavBar.style.display = "none";
});






const menuDropdown = document.querySelector(".menu-dropdown");
const spanDropdown = document.querySelector(".menu-span");

spanDropdown.addEventListener("click", function () {
  if (menuDropdown.classList.contains("closed")) {
    menuDropdown.classList.remove("closed");
    menuDropdown.classList.add("open");
  } else {
    menuDropdown.classList.remove("open");
    menuDropdown.classList.add("closed");
  }
});

// mobile nav hamburger switch
let hamburger = document.getElementById('hamburger');
hamburger.addEventListener('click', function() {
  hamburger.classList.toggle('open');
  document.getElementById('navMob').classList.toggle('open');
  document.getElementById('navMobcContent').classList.toggle('open');
})
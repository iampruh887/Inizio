document.addEventListener("DOMContentLoaded", function () {
   let gear = document.querySelector(".mob-gear");
   let dimmer = document.querySelector(".black-overlay");
   let navPanel = document.querySelector(".nav-hid");
   let cross = document.querySelector(".cross");
   let rot = document.querySelector(".rot");

   gear.addEventListener("click", function () {
      dimmer.classList.toggle("dim-show");
      rot.classList.add("gear-rot");
      rot.classList.remove("anti-rot");
      navPanel.classList.add("nav-show");
      navPanel.classList.remove("nav-hide");
   });
   
   dimmer.addEventListener("click", function () {
      dimmer.classList.toggle("dim-show");
      rot.classList.add("anti-rot");
      rot.classList.remove("gear-rot");
      navPanel.classList.add("nav-hide");
      navPanel.classList.remove("nav-show");
   });
   
   cross.addEventListener("click", function () {
      dimmer.classList.toggle("dim-show");
      rot.classList.add("anti-rot");
      rot.classList.remove("gear-rot");
      navPanel.classList.add("nav-hide");
      navPanel.classList.remove("nav-show");
   });
});

var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
   var currentScrollPos = window.pageYOffset;
   if (prevScrollpos > currentScrollPos) {
      document.getElementById("nav").style.top = "0";
   } else {
      document.getElementById("nav").style.top = "-100px";
   }
   prevScrollpos = currentScrollPos;
}

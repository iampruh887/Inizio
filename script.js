document.addEventListener("DOMContentLoaded", function () {
   let gear = document.querySelector(".mob-gear");
   let dimmer = document.querySelector(".black-overlay");
   let navPanel = document.querySelector(".nav-hid");
   let cross = document.querySelector(".cross");

   gear.addEventListener("click", function () {
      dimmer.classList.toggle("dim-show");
      navPanel.classList.toggle("nav-show");
   });
   
   dimmer.addEventListener("click", function () {
      dimmer.classList.toggle("dim-show");
      navPanel.classList.toggle("nav-show");
   });

   navPanel.addEventListener("click", function () {
      dimmer.classList.toggle("dim-show");
      navPanel.classList.toggle("nav-show");
   });

   // cross.addEventListener("click", function () {
   //    dimmer.classList.toggle("dim-show");
   //    navPanel.classList.toggle("nav-show");
   // });
});


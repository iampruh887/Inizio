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



document.addEventListener("DOMContentLoaded", function () {
   var lazyloadImages;

   if ("IntersectionObserver" in window) {
      lazyloadImages = document.querySelectorAll("img.lazy");
      var imageObserver = new IntersectionObserver(function (entries, observer) {
         entries.forEach(function (entry) {
            if (entry.isIntersecting) {
               var image = entry.target;
               image.src = image.dataset.src;
               image.classList.remove("lazy");
               imageObserver.unobserve(image);
            }
         });
      });

      lazyloadImages.forEach(function (image) {
         imageObserver.observe(image);
      });
   } else {
      var lazyloadThrottleTimeout;
      lazyloadImages = document.querySelectorAll(".lazy");

      function lazyload() {
         if (lazyloadThrottleTimeout) {
            clearTimeout(lazyloadThrottleTimeout);
         }

         lazyloadThrottleTimeout = setTimeout(function () {
            var scrollTop = window.pageYOffset;
            lazyloadImages.forEach(function (img) {
            if (img.offsetTop < (window.innerHeight + scrollTop)) {
               img.src = img.dataset.src;
               img.classList.remove('lazy');
            }
         });
         if (lazyloadImages.length == 0) {
            document.removeEventListener("scroll", lazyload);
            window.removeEventListener("resize", lazyload);
            window.removeEventListener("orientationChange", lazyload);
         }
      }, 20);
   }

   document.addEventListener("scroll", lazyload);
   window.addEventListener("resize", lazyload);
   window.addEventListener("orientationChange", lazyload);
   }
})

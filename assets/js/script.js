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



let hash = document.querySelector(".event-num");
let p = document.querySelector(".ev-bio");
let events = document.querySelector(".event-name");
function delay(ms) {
   return new Promise(resolve => setTimeout(resolve, ms));
}
async function run() {
   hash.innerHTML = `#001`;
   p.innerHTML = 'Gear up for an electrifying event at IIIT\'s fest! Teams of 4 will battle in two rounds: a quiz to secure a franchise spot, followed by a high-stakes player auction. With 100 crores, build your dream team of 12 players while balancing Indian and overseas stars. Master the bidding war, strategize your picks, and aim for the highest team rating to win. Will you outsmart the competition? Join the thrill and showcase your cricketing genius!';
   events.innerHTML = '@IPL Auction 2.O';
   await delay(4000);

   hash.innerHTML = `#002`;
   p.innerHTML = "Unleash your creativity in this week-long Instagram marketing showdown! Teams of 4-5 will craft and run a dynamic campaign for a given product, posting daily content, reels, and stories to maximize engagement. After 6 days of strategizing and engaging, teams will pitch their campaign results to a panel of judges. Showcase your skills in analytics, content creation, and storytelling to win exciting rewards!Join the challenge and prove your marketing prowess!";
   events.innerHTML = '@Digital Challenge';
   await delay(4000);
}

async function run_anim() {
   while (1) {
      run();
      await delay(8000);
   }
}

run_anim();



// CONTACT FORM

// Form handling script
document.addEventListener('DOMContentLoaded', function () {
   const contactForm = document.getElementById('contact-form');
   const thankYouMessage = document.getElementById('thank-you-message');

   // Google Form URL and entry IDs
   const GOOGLE_FORM_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSflGN9sE_2bnEMfadxxnhPtqOoCqNvkM3bvzeEbEetpbhQFqA/formResponse';
   const INPUT_NAMES = {
      name: "entry.1548877943",
      email: "entry.98171686",
      phone: "entry.506744197",
      company: "entry.733658251",
      message: "entry.1033800333"
   };

   contactForm.addEventListener('submit', function (e) {
      e.preventDefault();

      // Create a hidden form to submit to Google Forms
      const form = document.createElement('form');
      form.method = 'POST';
      form.action = GOOGLE_FORM_URL;
      form.target = 'hidden_iframe'; // Prevents page reload

      // Get all form input values
      const formData = {
         name: document.getElementById('name').value,
         email: document.getElementById('email').value,
         phone: document.getElementById('phone').value,
         company: document.getElementById('company').value,
         message: document.getElementById('message').value
      };

      // Append hidden input fields with Google Form entry IDs
      Object.keys(INPUT_NAMES).forEach(key => {
         const input = document.createElement('input');
         input.type = 'hidden';
         input.name = INPUT_NAMES[key];
         input.value = formData[key];
         form.appendChild(input);
      });

      // Append the form to the body, submit it, and then remove it
      document.body.appendChild(form);
      form.submit();
      document.body.removeChild(form);

      // Show thank you message and hide the form
      contactForm.style.display = 'none';
      thankYouMessage.style.display = 'block';
   });
});
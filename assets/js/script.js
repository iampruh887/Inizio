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

// NAV BAR VISIBLE ON SCROOL UP
var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("nav").style.top = "0";
  } else {
    document.getElementById("nav").style.top = "-100px";
  }
  prevScrollpos = currentScrollPos;
};

// LAZY IMAGE LODER

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
          if (img.offsetTop < window.innerHeight + scrollTop) {
            img.src = img.dataset.src;
            img.classList.remove("lazy");
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
});

// CONTACT FORM

// Form handling script
document.addEventListener("DOMContentLoaded", function () {
  const contactForm = document.getElementById("contact-form");
  const thankYouMessage = document.getElementById("thank-you-message");

  // Google Form URL and entry IDs
  const GOOGLE_FORM_URL =
    "https://docs.google.com/forms/d/e/1FAIpQLSflGN9sE_2bnEMfadxxnhPtqOoCqNvkM3bvzeEbEetpbhQFqA/formResponse";
  const INPUT_NAMES = {
    name: "entry.1548877943",
    email: "entry.98171686",
    phone: "entry.506744197",
    company: "entry.733658251",
    message: "entry.1033800333",
  };

  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    // Create a hidden form to submit to Google Forms
    const form = document.createElement("form");
    form.method = "POST";
    form.action = GOOGLE_FORM_URL;
    form.target = "hidden_iframe"; // Prevents page reload

    // Get all form input values
    const formData = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      phone: document.getElementById("phone").value,
      company: document.getElementById("company").value,
      message: document.getElementById("message").value,
    };

    // Append hidden input fields with Google Form entry IDs
    Object.keys(INPUT_NAMES).forEach((key) => {
      const input = document.createElement("input");
      input.type = "hidden";
      input.name = INPUT_NAMES[key];
      input.value = formData[key];
      form.appendChild(input);
    });

    // Append the form to the body, submit it, and then remove it
    document.body.appendChild(form);
    form.submit();
    document.body.removeChild(form);

    // Show thank you message and hide the form
    contactForm.style.display = "none";
    thankYouMessage.style.display = "block";
  });
});

//EVENTS SLIDER

document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelector(".slides");
  const dotsContainer = document.querySelector(".dots");
  const buttonsContainer = document.querySelector(".buttons");
  const eventText = document.getElementById("eventText");
  const eventNum = document.getElementById("eventNum");
  const eventName = document.getElementById("eventName");

  const totalSlides = 5;
  let currentIndex = 1;
  let autoSlideInterval;

  // Event Names & Descriptions
  const slideData = [
    {
      name: "clash-of-campaigns",
      text: "Nationwide Digital Marketing Showdown\n\nThis high-stakes, national-level competition challenges teams to create, execute, and optimize a week-long Instagram campaign, maximizing engagement, reach, and impact. As trends shift, teams must adapt in real time, refining their strategy for the best results. The top contenders will advance to the live pitching finale, where they will present their insights and performance metrics to a panel of industry experts. Whether you're a social media strategist or marketing innovator, this is your chance to compete on a national stage and prove your expertise.",
    },
    {
      name: "inspirathon",
      text: "Inspirathon: Where Innovation Meets Impact\n\nPowered by STPI, Inspirathon is a high-energy, national-level hackathon uniting brilliant developers, designers, and problem-solvers to tackle real-world challenges through technology. Participants will collaborate under intense time constraints, crafting cutting-edge solutions in fields like emerging tech, business innovation, and social impact. With expert mentorship and premium resources, this is a chance to showcase talent, build groundbreaking projects, and compete for top rewards. Whether you're a student, developer, or entrepreneur, Inspirathon is the ultimate platform to transform bold ideas into reality.",
    },

    {
      name: "ipl-auction",
      text: "IPL Auction: The Ultimate Team-Building Challenge\n\nStep into the high-stakes world of cricket management, where participants become team owners, bidding to build their dream squad in a thrilling live auction. With a limited budget, teams must strategize wisely, balancing batters, bowlers, and all-rounders while competing for top players based on real-world performances. Success demands sharp decision-making, financial planning, and deep cricket knowledge. Whether you're a die-hard cricket fan or a strategy mastermind, this is your chance to outbid rivals, assemble a powerhouse team, and prove you have what it takes to build a championship-winning squad.",
    },

    {
      name: "panel-discussion",
      text: "Panel Discussion: Insights from Industry Leaders\n\nJoin a dynamic conversation where industry experts, entrepreneurs, and thought leaders dive into trending topics, challenges, and opportunities shaping the business world. This session is a platform to exchange ideas, share experiences, and uncover key insights on innovation, entrepreneurship, market trends, and success strategies. Participants can engage with experts, ask questions, and gain fresh perspectives on navigating today’s competitive landscape. Whether you're an aspiring entrepreneur or a business enthusiast, this discussion promises valuable takeaways and real-world wisdom.",
    },

    {
      name: "speaker-session",
      text: "Speaker Session: A Visionary’s Journey\n\nExperience an inspiring session with Padma Shri awardee and renowned inventor Uddhav Barali, celebrated for his groundbreaking innovations. He will share his remarkable journey, challenges, and the transformative impact of his inventions on society, offering deep insights into creativity, engineering, and problem-solving. Participants will have the rare opportunity to interact, ask questions, and learn firsthand from a visionary who has revolutionized innovation. Whether you're passionate about technology, startups, or social impact, this session promises to be enlightening, thought-provoking, and truly motivational.",
    },
  ];

  function startAutoSlide() {
    clearInterval(autoSlideInterval);
    autoSlideInterval = setInterval(nextSlide, 5000);
  }
  function stopAutoSlide() {
    clearInterval(autoSlideInterval);
  }
  function updateSlider(instant = false) {
    slides.style.transition = instant ? "none" : "transform 0.5s ease-in-out";
    slides.style.transform = `translateX(-${currentIndex * 100}%)`;

    // Update dots
    document.querySelectorAll(".dot").forEach((dot, index) => {
      dot.classList.toggle(
        "active",
        index === (currentIndex - 1) % totalSlides,
      );
    });

    // Update buttons
    document.querySelectorAll(".slide-button").forEach((button, index) => {
      button.classList.toggle(
        "active",
        index === (currentIndex - 1) % totalSlides,
      );
    });

    // Update Event Description
    const dataIndex =
      currentIndex === 0 ? totalSlides - 1 : (currentIndex - 1) % totalSlides;
    eventText.textContent = slideData[dataIndex].text;
    eventName.textContent = slideData[dataIndex].name;
    eventNum.textContent = `# ${currentIndex} / ${totalSlides}`;
  }

  function createControls() {
    for (let i = 0; i < totalSlides; i++) {
      const dot = document.createElement("div");
      dot.classList.add("dot");
      dot.addEventListener("click", () => {
        currentIndex = i + 1;
        updateSlider();
        startAutoSlide();
      });
      dotsContainer.appendChild(dot);

      const button = document.createElement("button");
      button.classList.add("slide-button");
      button.textContent = `Event ${i + 1}`;
      button.addEventListener("click", () => {
        currentIndex = i + 1;
        updateSlider();
        stopAutoSlide();
      });
      buttonsContainer.appendChild(button);
    }
  }

  function nextSlide() {
    if (currentIndex >= totalSlides) {
      slides.style.transition = "transform 0.5s ease-in-out";
      currentIndex++;
      updateSlider();

      // Smooth transition fix for looping back to first slide
      setTimeout(() => {
        slides.style.transition = "none";
        currentIndex = 1;
        updateSlider(true);
      }, 500);
    } else {
      currentIndex++;
      updateSlider();
    }
  }

  // Cloning slides for seamless transition
  function setupInfiniteLoop() {
    const firstClone = slides.children[0].cloneNode(true);
    const lastClone = slides.children[totalSlides - 1].cloneNode(true);
    slides.appendChild(firstClone);
    slides.insertBefore(lastClone, slides.firstChild);
  }

  setupInfiniteLoop();
  createControls();
  updateSlider(true);
  startAutoSlide();
});

document.addEventListener("DOMContentLoaded", function () {
  const sliders = document.querySelectorAll(".slider");

  sliders.forEach((slider) => {
    let slides = Array.from(slider.children);
    let totalSlides = slides.length;

    // Clone slides to create the infinite loop effect
    slides.forEach((slide) => {
      let clone = slide.cloneNode(true);
      slider.appendChild(clone);
    });

    let scrollAmount = 0;
    const speed = 2; // Adjust speed for smoother movement

    function moveSlider() {
      scrollAmount += speed;
      if (scrollAmount >= slider.scrollWidth / totalSlides) {
        scrollAmount = 0; // Reset to maintain seamless effect
      }
      slider.style.transform = `translateX(-${scrollAmount}px)`;
    }

    setInterval(moveSlider, 30); // Controls animation speed
  });
});

// MERCH FLIPPING

document.addEventListener("DOMContentLoaded", function () {
  // Get all merch image containers
  const merchImages = document.querySelectorAll(".merch-img");

  // For each merch image container
  merchImages.forEach((merchImg) => {
    // Get existing front and back images if they exist
    const frontImage = merchImg.querySelector(".merch-front");
    const backImage = merchImg.querySelector(".merch-back");

    // Create flip button if it doesn't exist
    let flipButton = merchImg.querySelector(".flip-btn");
    if (!flipButton) {
      flipButton = document.createElement("button");
      flipButton.className = "flip-btn";
      flipButton.innerHTML = '<i class="fas fa-sync-alt"></i> Flip';
      merchImg.appendChild(flipButton);
    }

    // Create magnify button if it doesn't exist
    let magnifyButton = merchImg.querySelector(".magnify-btn");
    if (!magnifyButton) {
      magnifyButton = document.createElement("button");
      magnifyButton.className = "magnify-btn";
      magnifyButton.innerHTML = '<i class="fas fa-search-plus"></i>';
      merchImg.appendChild(magnifyButton);
    }

    // Create a wrapper for the images with perspective if it doesn't exist
    let cardWrapper = merchImg.querySelector(".merch-card");
    if (!cardWrapper) {
      cardWrapper = document.createElement("div");
      cardWrapper.className = "merch-card";

      // If the front and back images already exist, move them into the wrapper
      if (frontImage && backImage) {
        // Remove them from their current parent
        if (frontImage.parentNode) {
          frontImage.parentNode.removeChild(frontImage);
        }
        if (backImage.parentNode) {
          backImage.parentNode.removeChild(backImage);
        }

        // Add them to the wrapper
        cardWrapper.appendChild(frontImage);
        cardWrapper.appendChild(backImage);
      } else {
        // Create front and back image containers if they don't exist
        const newFrontImage = document.createElement("div");
        newFrontImage.className = "merch-front";
        newFrontImage.style.backgroundImage =
          merchImg.style.backgroundImage || "";

        const newBackImage = document.createElement("div");
        newBackImage.className = "merch-back";
        newBackImage.style.backgroundImage =
          merchImg.style.backgroundImage || "";

        cardWrapper.appendChild(newFrontImage);
        cardWrapper.appendChild(newBackImage);
      }

      // Insert the wrapper at the beginning of merchImg
      merchImg.insertBefore(cardWrapper, merchImg.firstChild);
    }

    // Flag to track if card is flipped
    let isFlipped = false;

    // Function to toggle flip
    const toggleFlip = () => {
      isFlipped = !isFlipped;
      if (isFlipped) {
        cardWrapper.classList.add("flipped");
      } else {
        cardWrapper.classList.remove("flipped");
      }
    };

    // Remove existing event listeners to prevent duplicates
    const newFlipButton = flipButton.cloneNode(true);
    flipButton.parentNode.replaceChild(newFlipButton, flipButton);
    flipButton = newFlipButton;

    const newMagnifyButton = magnifyButton.cloneNode(true);
    magnifyButton.parentNode.replaceChild(newMagnifyButton, magnifyButton);
    magnifyButton = newMagnifyButton;

    // Add event listener to flip button
    flipButton.addEventListener("click", function (e) {
      e.stopPropagation(); // Prevent event bubbling
      toggleFlip();
    });

    // Add event listener to merch image (excluding buttons)
    merchImg.addEventListener("click", function (e) {
      // Check if the click was on a button or within a button
      if (
        e.target === flipButton ||
        flipButton.contains(e.target) ||
        e.target === magnifyButton ||
        magnifyButton.contains(e.target)
      ) {
        return; // Don't flip if clicking on buttons
      }
      toggleFlip();
    });

    // Add event listener to open image in new tab when clicking on the magnify button
    magnifyButton.addEventListener("click", function (e) {
      e.stopPropagation(); // Prevent the flip from happening

      const currentFront = merchImg.querySelector(".merch-front");
      const currentBack = merchImg.querySelector(".merch-back");

      // Determine which image to show based on current state
      const imageUrl =
        isFlipped && currentBack
          ? currentBack.src
          : currentFront
            ? currentFront.src
            : "";

      if (imageUrl) {
        window.open(imageUrl, "_blank");
      }
    });
  });
});

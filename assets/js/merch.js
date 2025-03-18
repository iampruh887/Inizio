// Add this code to your existing script.js file

document.addEventListener('DOMContentLoaded', function() {
    // Get all merch image containers
    const merchImages = document.querySelectorAll('.merch-img');
    
    // For each merch image
    merchImages.forEach((merchImg, index) => {
      // Create front and back image containers
      const frontImage = document.createElement('div');
      frontImage.className = 'merch-front';
      frontImage.style.backgroundImage = merchImg.style.backgroundImage || 'url("/assets/images/merch-placeholder.jpg")';
      
      const backImage = document.createElement('div');
      backImage.className = 'merch-back';
      backImage.style.backgroundImage = 'url("/assets/images/merch-back-placeholder.jpg")';
      
      // Create flip button
      const flipButton = document.createElement('button');
      flipButton.className = 'flip-btn';
      flipButton.innerHTML = '<i class="fas fa-sync-alt"></i> Flip';
      
      // Create magnify button
      const magnifyButton = document.createElement('button');
      magnifyButton.className = 'magnify-btn';
      magnifyButton.innerHTML = '<i class="fas fa-search-plus"></i>';
      
      // Create a wrapper for the images with perspective
      const cardWrapper = document.createElement('div');
      cardWrapper.className = 'merch-card';
      
      // Add the images to the wrapper
      cardWrapper.appendChild(frontImage);
      cardWrapper.appendChild(backImage);
      
      // Add the buttons and wrapper to the merchandise image container
      merchImg.appendChild(cardWrapper);
      merchImg.appendChild(flipButton);
      merchImg.appendChild(magnifyButton);
      
      // Flag to track if card is flipped
      let isFlipped = false;
      
      // Function to toggle flip
      const toggleFlip = () => {
        isFlipped = !isFlipped;
        if (isFlipped) {
          cardWrapper.classList.add('flipped');
        } else {
          cardWrapper.classList.remove('flipped');
        }
      };
      
      // Add event listener to flip when clicking on the merch image or flip button
      merchImg.addEventListener('click', function(e) {
        // If the magnify button was clicked, don't flip
        if (e.target === magnifyButton || magnifyButton.contains(e.target)) {
          return;
        }
        toggleFlip();
      });
      
      // Add event listener to open image in new tab when clicking on the magnify button
      magnifyButton.addEventListener('click', function(e) {
        e.stopPropagation(); // Prevent the flip from happening
        
        // Determine which image to show based on current state
        const imageUrl = isFlipped ? 
          backImage.style.backgroundImage.replace('url("', '').replace('")', '') : 
          frontImage.style.backgroundImage.replace('url("', '').replace('")', '');
        
        window.open(imageUrl, '_blank');
      });
    });
  });
document.addEventListener('DOMContentLoaded', function() {
    // Get all merch image containers
    const merchImages = document.querySelectorAll('.merch-img');
    
    // For each merch image container
    merchImages.forEach((merchImg) => {
      // Get existing front and back images if they exist
      const frontImage = merchImg.querySelector('.merch-front');
      const backImage = merchImg.querySelector('.merch-back');
      
      // Create flip button if it doesn't exist
      let flipButton = merchImg.querySelector('.flip-btn');
      if (!flipButton) {
        flipButton = document.createElement('button');
        flipButton.className = 'flip-btn';
        flipButton.innerHTML = '<i class="fas fa-sync-alt"></i> Flip';
        merchImg.appendChild(flipButton);
      }
      
      // Create magnify button if it doesn't exist
      let magnifyButton = merchImg.querySelector('.magnify-btn');
      if (!magnifyButton) {
        magnifyButton = document.createElement('button');
        magnifyButton.className = 'magnify-btn';
        magnifyButton.innerHTML = '<i class="fas fa-search-plus"></i>';
        merchImg.appendChild(magnifyButton);
      }
      
      // Create a wrapper for the images with perspective if it doesn't exist
      let cardWrapper = merchImg.querySelector('.merch-card');
      if (!cardWrapper) {
        cardWrapper = document.createElement('div');
        cardWrapper.className = 'merch-card';
        
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
          const newFrontImage = document.createElement('div');
          newFrontImage.className = 'merch-front';
          newFrontImage.style.backgroundImage = merchImg.style.backgroundImage || '';
          
          const newBackImage = document.createElement('div');
          newBackImage.className = 'merch-back';
          newBackImage.style.backgroundImage = merchImg.style.backgroundImage || '';
          
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
          cardWrapper.classList.add('flipped');
        } else {
          cardWrapper.classList.remove('flipped');
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
      flipButton.addEventListener('click', function(e) {
        e.stopPropagation(); // Prevent event bubbling
        toggleFlip();
      });
      
      // Add event listener to merch image (excluding buttons)
      merchImg.addEventListener('click', function(e) {
        // Check if the click was on a button or within a button
        if (e.target === flipButton || flipButton.contains(e.target) ||
            e.target === magnifyButton || magnifyButton.contains(e.target)) {
          return; // Don't flip if clicking on buttons
        }
        toggleFlip();
      });
      
      // Add event listener to open image in new tab when clicking on the magnify button
      magnifyButton.addEventListener('click', function(e) {
        e.stopPropagation(); // Prevent the flip from happening
        
        const currentFront = merchImg.querySelector('.merch-front');
        const currentBack = merchImg.querySelector('.merch-back');
        
        // Determine which image to show based on current state
        const imageUrl = isFlipped && currentBack ? 
          currentBack.style.backgroundImage.replace('url("', '').replace('")', '') : 
          currentFront ? currentFront.style.backgroundImage.replace('url("', '').replace('")', '') : '';
        
        if (imageUrl) {
          window.open(imageUrl, '_blank');
        }
      });
    });
  });
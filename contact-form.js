// contact-form.js
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

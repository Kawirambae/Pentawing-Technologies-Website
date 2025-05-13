document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contact-form');
  
    if (form) {
      form.addEventListener('submit', (e) => {
        e.preventDefault(); // Prevent actual submission for now
  
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();
  
        if (!name || !email || !message) {
          alert('Please fill in all fields before submitting.');
          return;
        }
  
        if (!validateEmail(email)) {
          alert('Please enter a valid email address.');
          return;
        }
  
        alert('Thank you for your message! We will get back to you soon.');
        form.reset(); // Optional: Clear the form after success
      });
    }
  });
  
  function validateEmail(email) {
    // Simple regex for email validation
    const re = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
    return re.test(email);
  }
  
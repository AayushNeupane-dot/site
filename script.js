// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });
  
  // Back to Top Button Logic
  const backToTopBtn = document.createElement('button');
  backToTopBtn.textContent = "↑";
  backToTopBtn.className = "back-to-top";
  document.body.appendChild(backToTopBtn);
  
  window.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
      backToTopBtn.style.display = 'block';
    } else {
      backToTopBtn.style.display = 'none';
    }
  });
  
  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
  
  // Responsive Navbar Toggle
  const navbarToggler = document.querySelector('.navbar-toggler');
  const navbarMenu = document.querySelector('#navbarNav');
  
  navbarToggler.addEventListener('click', () => {
    navbarMenu.classList.toggle('show');
  });
  document.getElementById('review-form').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent the form from submitting
  
    // Get the values from the form fields
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const rating = document.getElementById('rating').value;
    const review = document.getElementById('review').value;
  
    // Validate the fields
    if (!name || !email || !rating || !review) {
      alert('Please fill out all fields.');
      return;
    }
  
    // If everything is valid, show a success message (you can later integrate with a back-end)
    alert('Thank you for your review! It has been submitted successfully.');
  
    // Clear the form after submission
    document.getElementById('review-form').reset();
  });
// Get the button element
const toggleBtn = document.getElementById('color-toggle-btn');

// Listen for click events on the button
toggleBtn.addEventListener('click', function() {
  // Toggle the 'dark-mode' class on the body element
  document.body.classList.toggle('dark-mode');
});
// Check if the user has a saved theme preference
if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-mode');
  }
  
  // Toggle the theme and save it
  toggleBtn.addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    // Save the current theme preference in localStorage
    if (document.body.classList.contains('dark-mode')) {
      localStorage.setItem('theme', 'dark');
    } else {
      localStorage.setItem('theme', 'light');
    }
  });
// Get the button element
const toggle = document.getElementById('color-toggle-btn');

// Listen for click events on the button
toggleBtn.addEventListener('click', function() {
  // Toggle the 'dark-mode' class on the body element
  document.body.classList.toggle('dark-mode');
});
document.addEventListener("DOMContentLoaded", function () {
  const openFormButton = document.getElementById("open-form-button");

  openFormButton.addEventListener("click", function () {
    // Open a new tab to show the form
    const formWindow = window.open("", "Trainee Enrollment", "width=600,height=600");

    // HTML content for the form
    const formHTML = `
      <html>
      <head>
        <title>Trainee Enrollment</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            background-color: #f4f4f4;
          }
          .form-container {
            background-color: white;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            width: 100%;
            max-width: 400px;
          }
          .form-container h2 {
            text-align: center;
            margin-bottom: 15px;
          }
          .form-container .mb-3 {
            margin-bottom: 15px;
          }
          .form-container .form-label {
            font-size: 1rem;
            font-weight: bold;
            margin-bottom: 5px;
          }
          .form-container input, .form-container select {
            width: 100%;
            padding: 8px;
            font-size: 1rem;
            margin-bottom: 10px;
            border: 1px solid #ccc;
            border-radius: 4px;
          }
          .form-container button {
            width: 100%;
            padding: 10px;
            font-size: 1rem;
            background-color: #28a745;
            color: white;
            border: none;
            border-radius: 4px;
            cursor: pointer;
          }
          .form-container button:hover {
            background-color: #218838;
          }
        </style>
      </head>
      <body>
        <div class="form-container">
          <h2>Enroll as a Trainee</h2>
          <form id="trainee-form">
            <div class="mb-3">
              <label for="trainee-name" class="form-label">Full Name</label>
              <input type="text" class="form-control" id="trainee-name" required>
            </div>

            <div class="mb-3">
              <label for="trainee-email" class="form-label">Email</label>
              <input type="email" class="form-control" id="trainee-email" required>
            </div>

            <div class="mb-3">
              <label for="trainee-phone" class="form-label">Phone Number</label>
              <input type="tel" class="form-control" id="trainee-phone" required>
            </div>

            <div class="mb-3">
              <label for="trainee-interest" class="form-label">Area of Interest</label>
              <select class="form-select" id="trainee-interest" required>
                <option value="">Select an option</option>
                <option value="Hair Stylist">Hair Stylist</option>
                <option value="Makeup Artist">Makeup Artist</option>
                <option value="Nail Technician">Nail Technician</option>
              </select>
            </div>

            <button type="submit" class="btn btn-primary">Submit</button>
          </form>
        </div>

        <script>
          const traineeForm = document.getElementById("trainee-form");

          traineeForm.addEventListener("submit", function (event) {
            event.preventDefault();

            const name = document.getElementById("trainee-name").value.trim();
            const email = document.getElementById("trainee-email").value.trim();
            const phone = document.getElementById("trainee-phone").value.trim();
            const interest = document.getElementById("trainee-interest").value;

            let errorMessage = "";

            if (!name) {
              errorMessage += "Please enter your full name.\n";
            }

            if (!email) {
              errorMessage += "Please enter a valid email address.\n";
            } else if (!/^\S+@\S+\.\S+$/.test(email)) {
              errorMessage += "Email format is invalid.\n";
            }

            if (!phone) {
              errorMessage += "Please enter your phone number.\n";
            } else if (!/^\d{7,15}$/.test(phone)) {
              errorMessage += "Phone number must be between 7 to 15 digits.\n";
            }

            if (!interest) {
              errorMessage += "Please select an area of interest.\n";
            }

            if (errorMessage) {
              alert(errorMessage);
            } else {
              alert("Form submitted successfully!");
              traineeForm.reset();
            }
          });
        </script>
      </body>
      </html>
    `;

    // Write the form HTML to the new tab
    formWindow.document.write(formHTML);
  });
});

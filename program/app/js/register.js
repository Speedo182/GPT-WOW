// Function to validate the registration form
function validateRegistrationForm() {
  // Get the form fields
  let firstName = document.getElementById("first-name").value;
  let lastName = document.getElementById("last-name").value;
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  let confirmPassword = document.getElementById("confirm-password").value;

  // Perform validation
  if (firstName === "" || lastName === "" || email === "" || password === "" || confirmPassword === "") {
    alert("Please fill in all fields.");
    return false;
  }

  if (password !== confirmPassword) {
    alert("Passwords do not match. Please try again.");
    return false;
  }

  // If all validation passes, return true
  return true;
}

// Function to handle the form submission
function handleRegistrationFormSubmission() {
  // Validate the form
  let isValid = validateRegistrationForm();
  if (!isValid) {
    return;
  }

  // Get the form data
  let firstName = document.getElementById("first-name").value;
  let lastName = document.getElementById("last-name").value;
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  // Send the form data to the server for processing
  // This code assumes the use of an AJAX library such as jQuery
  $.ajax({
    url: "/register",
    type: "POST",
    data: {
      "firstName": firstName,
      "lastName": lastName,
      "email": email,
      "password": password
    },
    success: function(response) {
      // Handle the server response
      if (response.status === "success") {
        // Redirect to the home page
        window.location.href = "/";
      } else {
        // Display an error message
        alert(response.message);
      }
    },
    error: function(jqXHR, textStatus, errorThrown) {
      // Display an error message
      alert("An error occurred. Please try again later.");
    }
  });
}

// Add an event listener for the form submission
let form = document.getElementById("registration-form");
form.addEventListener("submit", function(event) {
  event.preventDefault();
  handleRegistrationFormSubmission();
});

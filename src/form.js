const form = document.getElementById("contactForm");
const button = document.getElementById("submit");

form.addEventListener("submit", (e) => {
  e.preventDefault(); 
  button.textContent = "Loading..."; // S

  fetch("https://formspree.io/f/xpwavjvy", {
    method: "POST", 
    body: new FormData(form), // Send form data
  })
    .then((response) => {
      if (response.ok) {
        button.textContent = "Form submitted successfully";
        form.reset(); // Clear form inputs
      } else {
        button.textContent = "Error submitting form"; 
      }
    })
    .catch(() => {
      button.textContent = "An error occurred"; 
      console.log(response)
    })
    .finally(() => {
      setTimeout(() => {
        button.textContent = "Submit"; 
      }, 3000);
    });
});

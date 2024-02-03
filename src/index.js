// Get the current year
const currentYear = new Date().getFullYear();

// Set the copyright text in the footer
const copyrightText = document.getElementById("copyright-text");
copyrightText.textContent = `© ${currentYear} DiploDev`; // Replace "Your Company Name" with your actual company name

document.addEventListener("DOMContentLoaded", function () {
  // Get the menu items
  var aboutUsMenuItem = document.getElementById("aboutUsMenu");
  var serviceMenuItem = document.getElementById("serviceMenu");
  var contactMenuItem = document.getElementById("contactMenu");

  // Get the target sections
  var aboutUsSection = document.getElementById("about-us");
  var servicesSection = document.getElementById("services");
  var contactSection = document.getElementById("contact-us");

  // Function to scroll to a specific element
  function scrollToElement(element) {
    window.scrollTo({
      behavior: "smooth",
      top:
        element.offsetTop -
        document.querySelector(".container header").offsetHeight,
    });
  }

  // Add click event listeners to the menu items
  aboutUsMenuItem.addEventListener("click", function () {
    scrollToElement(aboutUsSection);
  });

  serviceMenuItem.addEventListener("click", function () {
    scrollToElement(servicesSection);
  });

  contactMenuItem.addEventListener("click", function () {
    scrollToElement(contactSection);
  });
});

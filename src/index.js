document.addEventListener("DOMContentLoaded", function () {
  // Get the hamburger menu, close button, and the menu items
  var hamburgerMenu = document.querySelector(".hamburger-menu");

  var headerMenu = document.querySelector(".menu");

  // Toggle the mobile menu when the hamburger icon is clicked
  hamburgerMenu.addEventListener("click", function () {
    headerMenu.classList.toggle("show-menu");
    toggleMenuItemsVisibility(); // Call a function to handle menu items visibility
  });

  // Toggle the mobile menu when the close button is clicked
  closeButton.addEventListener("click", function () {
    headerMenu.classList.toggle("show-menu");
    toggleMenuItemsVisibility(); // Call a function to handle menu items visibility
  });

  // Function to toggle menu items visibility
  function toggleMenuItemsVisibility() {
    var menuItems = document.querySelectorAll(".menu-items");
    menuItems.forEach(function (menuItem) {
      menuItem.classList.toggle("show-menu");
    });
  }

  // Get the background container
  var backgroundContainer = document.querySelector(".background-cover-lyt");

  // List of background images
  var backgroundImages = [
    "/assets/0_AGP_MDM_181021BRIGHTON_006JPG.webp",
    "/assets/pexels-cottonbro-studio-9222613.jpg",
    "assets/pexels-alex-fu-2967770.jpg",
    "assets/pexels-kelly-3794777.jpg",
  ];

  // Variable to keep track of the current image index
  var currentImageIndex = 0;

  // Function to update the background image
  function updateBackgroundImage() {
    backgroundContainer.style.backgroundImage =
      "url(" + backgroundImages[currentImageIndex] + ")";
    currentImageIndex = (currentImageIndex + 1) % backgroundImages.length;
  }

  // Set an interval to update the background every 5 seconds (5000 milliseconds)
  var sliderInterval = setInterval(updateBackgroundImage, 5000);

  // Stop the interval when the page is unloaded to prevent memory leaks
  window.addEventListener("beforeunload", function () {
    clearInterval(sliderInterval);
  });

  // Get the menu items
  var purgeWasteButton = document.querySelector(".my-btn");
  var inquiriesButton = document.querySelector(".atten");
  var homeMenuItem = document.getElementById("homeMenu");
  var aboutUsMenuItem = document.getElementById("aboutUsMenu");
  var servicesMenuItem = document.getElementById("servicesMenu");
  var contactMenuItem = document.getElementById("contactMenu");

  // Get the target sections
  var homeSection = document.getElementById("home");
  var aboutUsSection = document.getElementById("about-us");
  var servicesSection = document.getElementById("services");
  var contactSection = document.getElementById("contact-us");

  // Function to scroll to a specific element
  function scrollToElement(element) {
    element.scrollIntoView({ behavior: "smooth" });
  }

  inquiriesButton.addEventListener("click", function () {
    scrollToElement(contactSection);
  });

  // Add click event listener to the "PURGE WASTE" button
  purgeWasteButton.addEventListener("click", function () {
    scrollToElement(contactSection);
  });

  // Add click event listeners to the menu items
  homeMenuItem.addEventListener("click", function () {
    scrollToElement(homeSection);
  });

  aboutUsMenuItem.addEventListener("click", function () {
    scrollToElement(aboutUsSection);
  });

  servicesMenuItem.addEventListener("click", function () {
    scrollToElement(servicesSection);
  });

  contactMenuItem.addEventListener("click", function () {
    scrollToElement(contactSection);
  });

  // Get the current year
  var currentYear = new Date().getFullYear();

  // Set the copyright text
  var copyrightText = "© " + currentYear + " Rubbish Removal Cleaner";

  // Update the HTML element
  document.getElementById("copyright").innerText = copyrightText;

  // Get all images with the class 'img-preview'
  var previewImages = document.querySelectorAll(".img-preview");

  // Get the popup and popup image elements
  var popup = document.getElementById("imagePopup");
  var popupImage = document.getElementById("popupImage");

  // Function to open the popup with the clicked image
  function openPopup(imageSrc) {
    popupImage.src = imageSrc;
    popup.style.display = "block";
  }

  // Attach click event listeners to each preview image
  previewImages.forEach(function (image) {
    image.addEventListener("click", function () {
      openPopup(image.src);
    });
  });

  // Close the popup when clicked outside the image
  popup.addEventListener("click", function () {
    popup.style.display = "none";
  });
});

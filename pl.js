// JavaScript for handling navigation between pages

// Wait for the DOM to be fully loaded before running the script
document.addEventListener("DOMContentLoaded", function () {
  // Get all the <a> elements in the navigation menu
  var navLinks = document.querySelectorAll("nav ul li a");

  // Loop through each <a> element
  navLinks.forEach(function (link) {
    // Add a click event listener to each link
    link.addEventListener("click", function (event) {
      // Prevent the default behavior of the link (i.e., navigating to a new page)
      event.preventDefault();

      // Get the href attribute of the clicked link
      var pageURL = this.getAttribute("href");

      // Load the content of the page specified in the href attribute
      if (pageURL === "index.html") {
        // If the link is for the home page, simply refresh the current page
        location.reload();
      } else {
        // For other pages, load the content of the specified page
        loadPage(pageURL);
      }
    });
  });

  // Function to load the content of the specified page
  function loadPage(url) {
    // Create a new XMLHttpRequest object
    var xhr = new XMLHttpRequest();

    // Set up a callback function to handle the response
    xhr.onreadystatechange = function () {
      // Check if the request is complete and successful
      if (xhr.readyState == 4 && xhr.status == 200) {
        // Replace the content of the <main> element with the response
        document.querySelector("main").innerHTML = xhr.responseText;
      }
    };

    // Open a GET request to the specified URL
    xhr.open("GET", url, true);

    // Send the request
    xhr.send();
  }
});

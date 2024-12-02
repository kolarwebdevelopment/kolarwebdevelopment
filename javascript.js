function toggleMenu() {
    const dropdownMenu = document.querySelector('.dropdown-menu');
    // Toggle the display of the menu
    if (dropdownMenu.style.display === 'block') {
      dropdownMenu.style.display = 'none';
    } else {
      dropdownMenu.style.display = 'block';
    }
  }


  // Get the button
  var scrollToTopBtn = document.getElementById("scrollToTopBtn");

  // When the user scrolls down 100px from the top of the document, show the button
  window.onscroll = function() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
      scrollToTopBtn.style.display = "block";
    } else {
      scrollToTopBtn.style.display = "none";
    }
  };

  // When the user clicks on the button, scroll to the top of the document
  scrollToTopBtn.onclick = function() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };


$(document).ready(function() {
    // Function to adjust navbar height, move sidebar content, and hide sidebar
    function adjustNavbarAndSidebar() {
      // Check if on mobile (Android or smaller screens)
      if (window.innerWidth <= 768) {
        // Adjust navbar height to auto
        $('#navbar').css('height', 'auto');
        
        // Check if the sidebar contains a section element
        var sidebarContent = $('#sidebar section');
        
        if (sidebarContent.length) {
          // Append the content of the section inside sidebar to the navbar as a new list item
          $('.navbar-nav').append('<li class="nav-item">' + sidebarContent.html() + '</li>');
          
          // After appending the content, hide the sidebar
          $('#sidebar').addClass('d-none');
        }
      }
    }
  
    // Adjust navbar and move sidebar content on page load
    adjustNavbarAndSidebar();
  
    // Also adjust on window resize (to handle dynamic content changes or screen rotations)
    $(window).resize(function() {
      adjustNavbarAndSidebar();
    });
  });
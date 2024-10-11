// Define the 'on' function
function on(event, selector, handler) {
    document.addEventListener(event, function(e) {
      if (e.target.closest(selector)) {
        handler.call(e.target, e);
      }
    });
  }
  
  // Define the 'select' function
  function select(selector) {
    return document.querySelector(selector);
  }
  
  // Ensure the rest of your code is inside the IIFE
  (function() {
    // accordion
    const items = document.querySelectorAll(".accordion button");
  
    function toggleAccordion() {
      const itemToggle = this.getAttribute('aria-expanded');
      
      for (let i = 0; i < items.length; i++) {
        items[i].setAttribute('aria-expanded', 'false');
      }
      
      if (itemToggle == 'false') {
        this.setAttribute('aria-expanded', 'true');
      }
    }
  
    items.forEach(item => item.addEventListener('click', toggleAccordion));
  
    /**
    * Mobile nav toggle
    */
    on('click', '.mobile-nav-toggle', function(e) {
      select('#navbar').classList.toggle('navbar-mobile');
      this.classList.toggle('bi-list');
      this.classList.toggle('bi-x');
    });
  
  })();
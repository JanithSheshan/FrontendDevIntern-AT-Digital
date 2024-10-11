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

  /**
  * Nav link click
  */
  on('click', '#navbar .nav-link', function(e) {
    // Remove 'active' class from all nav links
    document.querySelectorAll('#navbar .nav-link').forEach(link => {
      link.classList.remove('active');
    });

    // Add 'active' class to the clicked nav link
    this.classList.add('active');

    // If the navbar is in mobile mode, toggle it off
    if (select('#navbar').classList.contains('navbar-mobile')) {
      select('#navbar').classList.remove('navbar-mobile');
      const mobileNavToggle = select('.mobile-nav-toggle');
      mobileNavToggle.classList.remove('bi-x');
      mobileNavToggle.classList.add('bi-list');
    }
  });

})();
// Site UI behavior - mobile menu, scroll reveal effects, and forms

document.addEventListener('DOMContentLoaded', function () {

  // Hamburger menu toggle
  var menuBtn = document.querySelector('.nav-toggle');
  var menu = document.querySelector('.nav-menu');

  if (menuBtn && menu) {
    menuBtn.onclick = function () {
      menu.classList.toggle('active');
    };

    // Close menu when clicking outside
    document.addEventListener('click', function (evt) {
      if (!menuBtn.contains(evt.target) && !menu.contains(evt.target)) {
        menu.classList.remove('active');
      }
    });
  }

  // Scroll animations for cards and sections
  var cards = document.querySelectorAll('.reveal-on-scroll');
  
  if (cards.length > 0 && 'IntersectionObserver' in window) {
    var observer = new IntersectionObserver(function (entries, obs) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          obs.unobserve(entry.target); // keep revealed
        }
      });
    }, { threshold: 0.1 });

    cards.forEach(function (c) {
      observer.observe(c);
    });
  } else {
    // Fallback if observer isn't supported or fails
    cards.forEach(function (c) {
      c.classList.add('active');
    });
  }

  // Handle generic form alerts
  var contact = document.getElementById('contactForm');
  if (contact) {
    contact.onsubmit = function (e) {
      e.preventDefault();
      alert('Message sent successfully! We will get back to you shortly.');
      contact.reset();
    };
  }

  var appt = document.getElementById('appointmentForm');
  if (appt) {
    appt.onsubmit = function (e) {
      e.preventDefault();
      alert('Your appointment request has been received.');
      appt.reset();
    };
  }

});
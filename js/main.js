// ===== NAVBAR SCROLL BEHAVIOR =====
const navbar = document.getElementById('navbar');

function handleNavbarScroll() {
  if (window.scrollY > 10) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
}

window.addEventListener('scroll', handleNavbarScroll, { passive: true });

// ===== MOBILE MENU =====
const burger = document.getElementById('navBurger');
const navLinks = document.querySelector('.nav-links');

if (burger) {
  burger.addEventListener('click', function () {
    burger.classList.toggle('open');
    navLinks.classList.toggle('open');
  });

  // Close menu on link click
  navLinks.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
      burger.classList.remove('open');
      navLinks.classList.remove('open');
    });
  });
}

// ===== ACTIVE NAV LINK ON SCROLL =====
function updateActiveNav() {
  var sections = document.querySelectorAll('section[id]');
  var scrollPos = window.scrollY + 100;
  var links = document.querySelectorAll('.nav-links a');

  sections.forEach(function (section) {
    var top = section.offsetTop;
    var height = section.offsetHeight;
    var id = section.getAttribute('id');

    if (scrollPos >= top && scrollPos < top + height) {
      links.forEach(function (link) {
        link.classList.remove('active');
        var href = link.getAttribute('href');
        if (href && href.substring(1) === id) {
          link.classList.add('active');
        }
      });
    }
  });
}

window.addEventListener('scroll', updateActiveNav, { passive: true });

// ===== REVEAL ON SCROLL =====
function initReveal() {
  var reveals = document.querySelectorAll('.reveal');
  if (!reveals.length) return;

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.15,
    rootMargin: '0px 0px -40px 0px'
  });

  reveals.forEach(function (el) {
    observer.observe(el);
  });
}

document.addEventListener('DOMContentLoaded', initReveal);

// ===== NAVBAR SCROLL + ACTIVE NAV =====
var navbar = document.getElementById('navbar');
var sections = document.querySelectorAll('section[id]');
var navLinksAll = document.querySelectorAll('.nav-links a');

function onScroll() {
  // Navbar background
  if (window.scrollY > 10) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
  // Active nav link
  var scrollPos = window.scrollY + 120;
  sections.forEach(function (section) {
    var top = section.offsetTop;
    var height = section.offsetHeight;
    var id = section.getAttribute('id');
    if (scrollPos >= top && scrollPos < top + height) {
      navLinksAll.forEach(function (link) {
        link.classList.remove('active');
        var href = link.getAttribute('href');
        if (href && href.substring(1) === id) {
          link.classList.add('active');
        }
      });
    }
  });
}

window.addEventListener('scroll', onScroll, { passive: true });

// ===== MOBILE MENU =====
var burger = document.getElementById('navBurger');
var navLinks = document.querySelector('.nav-links');

if (burger) {
  burger.addEventListener('click', function () {
    burger.classList.toggle('open');
    navLinks.classList.toggle('open');
  });
  navLinks.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
      burger.classList.remove('open');
      navLinks.classList.remove('open');
    });
  });
  // Close on resize to desktop
  window.addEventListener('resize', function () {
    if (window.innerWidth > 768) {
      burger.classList.remove('open');
      navLinks.classList.remove('open');
    }
  });
}

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
  }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });
  reveals.forEach(function (el) { observer.observe(el); });
}

// ===== PARALLAX COCKPIT =====
function initParallax() {
  var reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reducedMotion) return;

  var cockpitImg = document.getElementById('cockpit-img');
  var cockpitWrap = document.getElementById('cockpit-parallax');
  if (!cockpitImg || !cockpitWrap) return;

  var ticking = false;
  var isVisible = false;

  var parallaxObserver = new IntersectionObserver(function (entries) {
    isVisible = entries[0].isIntersecting;
  }, { threshold: 0 });
  parallaxObserver.observe(cockpitWrap);

  window.addEventListener('scroll', function () {
    if (!isVisible || ticking) return;
    ticking = true;
    requestAnimationFrame(function () {
      var rect = cockpitWrap.getBoundingClientRect();
      var viewH = window.innerHeight;
      var progress = (viewH - rect.top) / (viewH + rect.height);
      var offset = (progress - 0.5) * 0.3 * rect.height;
      cockpitImg.style.transform = 'translateY(' + offset.toFixed(1) + 'px) scale(1.08)';
      ticking = false;
    });
  }, { passive: true });
}

document.addEventListener('DOMContentLoaded', function () {
  initReveal();
  initParallax();
});

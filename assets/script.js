// Mobile menu toggle
const mobileToggle = document.getElementById("mobileToggle");
const navItems = document.getElementById("navItems");

mobileToggle.addEventListener("click", () => {
  navItems.classList.toggle("show");
  mobileToggle.classList.toggle("active");
});

// Close mobile menu when clicking on a nav link
const navLink = document.querySelectorAll(".navitems a");
navLink.forEach((link) => {
  link.addEventListener("click", () => {
    navItems.classList.remove("active");
  });
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const targetId = this.getAttribute("href");
    const targetElement = document.querySelector(targetId);

    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 70,
        behavior: "smooth",
      });
    }
  });
});

// Add active class to nav links based on scroll position
window.addEventListener("scroll", () => {
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".navitems a");

  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;

    if (window.scrollY >= sectionTop - 100) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});

// Animation on Scroll
document.addEventListener("DOMContentLoaded", () => {
  const aboutSection = document.querySelector(".about-section");
  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          aboutSection.classList.add("fade-in");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );

  observer.observe(aboutSection);
});

// Add CSS for fade-in effect
const style = document.createElement("style");
style.innerHTML = `
  .about-section {
    opacity: 0;
    transform: translateY(50px);
    transition: opacity 0.8s ease, transform 0.8s ease;
  }
  .about-section.fade-in {
    opacity: 1;
    transform: translateY(0);
  }
`;
document.head.appendChild(style);



// Form behaviour manipulation
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  // Get form values
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  // Simple validation
  if (!name || !email || !message) {
    alert("Please fill in all fields");
    return;
  }

  // For now, we'll just show a success message
  alert("Thank you for your message! We will get back to you soon.");

  // Reset the form
  this.reset();
});

// Optional JavaScript for additional interactivity
document.querySelectorAll(".service-card").forEach((card) => {
  card.addEventListener("mouseenter", function () {
    this.style.transition = "transform 0.3s ease, box-shadow 0.3s ease";
  });

  card.addEventListener("mouseleave", function () {
    this.style.transition = "transform 0.3s ease, box-shadow 0.3s ease";
  });
});

// Active nav links implementation
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".navitems a");

// Observer options
const observerOptions = {
  threshold: 0.5, // Trigger when 50% of the section is visible
  rootMargin: "-50px 0px", // Offset trigger point slightly to account for nav height
};

// Create intersection observer
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      // Get the id of the visible section
      const id = entry.target.getAttribute("id");
      // Remove active class from all links
      navLinks.forEach((link) => {
        link.classList.remove("active");
      });
      // Add active class to corresponding nav link
      const correspondingLink = document.querySelector(
        `.navitems a[href="#${id}"]`
      );
      if (correspondingLink) {
        correspondingLink.classList.add("active");
      }
    }
  });
}, observerOptions);

// Observe all sections
sections.forEach((section) => {
  observer.observe(section);
});

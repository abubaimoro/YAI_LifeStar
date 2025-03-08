// Mobile menu toggle
const mobileToggle = document.getElementById("mobileToggle");
const navItems = document.getElementById("navItems");

mobileToggle.addEventListener("click", () => {
  navItems.classList.toggle("show");
  mobileToggle.classList.toggle("active");
});

// Close mobile menu when clicking on a nav link
const navLinks = document.querySelectorAll(".navitems a");
navLinks.forEach((link) => {
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

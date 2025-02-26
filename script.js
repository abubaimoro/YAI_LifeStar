 // Mobile menu toggle
 const mobileToggle = document.getElementById('mobileToggle');
 const navItems = document.getElementById('navItems');

 mobileToggle.addEventListener('click', () => {
     navItems.classList.toggle('active');
 });

 // Close mobile menu when clicking on a nav link
 const navLinks = document.querySelectorAll('.navitems a');
 navLinks.forEach(link => {
     link.addEventListener('click', () => {
         navItems.classList.remove('active');
     });
 });

 // Smooth scrolling for anchor links
 document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 70,
                behavior: 'smooth'
            });
        }
    });
});

// Add active class to nav links based on scroll position
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.navitems a');
    
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (pageYOffset >= sectionTop - 100) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
                if (link.getAttribute('href') === `#${current}`) {
                    link.classList.add('active');
                }
            });
        });
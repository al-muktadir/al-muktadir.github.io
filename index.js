// ========== MOBILE MENU ========== 
const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');

menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Close menu when a link is clicked
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

// ========== SMOOTH SCROLLING & ACTIVE NAV ========== 
window.addEventListener('scroll', () => {
    updateActiveNav();
});

function updateActiveNav() {
    const sections = document.querySelectorAll('section[id]');
    const scrollPosition = window.scrollY + 100;

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);

        if (navLink) {
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                navLink.style.color = 'var(--primary-color)';
                navLink.style.fontWeight = '600';
            } else {
                navLink.style.color = 'var(--text-dark)';
                navLink.style.fontWeight = '500';
            }
        }
    });
}

// ========== TOGGLE PREVIOUS EXPERIENCE ========== 
function togglePreviousExperience() {
    const container = document.getElementById('previousExperienceContainer');
    const toggleIcon = document.getElementById('toggleIcon');
    const toggleBtn = document.querySelector('.toggle-btn');
    
    if (container.style.display === 'none') {
        container.style.display = 'block';
        toggleIcon.textContent = '▲';
        toggleBtn.innerHTML = '<span id="toggleIcon">▲</span> Hide Previous';
    } else {
        container.style.display = 'none';
        toggleIcon.textContent = '▼';
        toggleBtn.innerHTML = '<span id="toggleIcon">▼</span> Show All';
    }
}

// ========== CV DOWNLOAD ========== 
function downloadCV() {
    // Replace with your actual CV URL
    const cvUrl = 'cv.pdf'; // Place your CV file in the same folder
    
    // Create a temporary link element
    const link = document.createElement('a');
    link.href = cvUrl;
    link.download = 'CV_Al_Muktadir_Munam.pdf';
    
    // Trigger the download
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

// If CV file is hosted online, use:
// function downloadCV() {
//     window.location.href = 'https://your-cv-url.com/cv.pdf';
// }

// ========== PAGE LOAD ANIMATIONS ========== 
document.addEventListener('DOMContentLoaded', () => {
    // Add fade-in animation to cards
    const cards = document.querySelectorAll('.card, .research-card, .pub-item, .personal-card, .blog-card, .award-item');
    
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 100);
    });
});

// ========== INTERSECTION OBSERVER FOR ANIMATIONS ========== 
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all cards for animation on scroll
document.querySelectorAll('.card, .research-card, .pub-item, .personal-card, .blog-card, .award-item').forEach(card => {
    observer.observe(card);
});

// ========== UTILITY: SMOOTH SCROLL TO TOP ========== 
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// ========== CONSOLE MESSAGE ========== 
console.log('Welcome to Al Muktadir Munam\'s Portfolio!');
console.log('Feel free to contact me for research collaborations and opportunities.');

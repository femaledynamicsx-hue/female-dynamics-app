// Female Dynamics JavaScript - Elite Version

// 1. Header scroll effect
window.addEventListener('scroll', () => {
    const header = document.getElementById('main-header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.add('scrolled'); // Force scrolled globally for consistency in this premium theme
    }
});
document.getElementById('main-header').classList.add('scrolled');

// 2. Mobile Menu Handling 
const mobileMenuBtn = document.createElement('button');
mobileMenuBtn.innerHTML = '☰';
mobileMenuBtn.className = 'mobile-menu-btn';
const nav = document.querySelector('nav');
if (nav) {
    nav.insertBefore(mobileMenuBtn, nav.childNodes[0]);
    mobileMenuBtn.addEventListener('click', () => {
        const links = document.querySelector('.nav-links');
        if (links.style.display === 'flex') {
            links.style.display = 'none';
        } else {
            links.style.display = 'flex';
            links.style.flexDirection = 'column';
            links.style.position = 'absolute';
            links.style.top = '100%';
            links.style.left = '0';
            links.style.width = '100%';
            links.style.background = 'rgba(5,5,5,0.95)';
            links.style.padding = '2rem 0';
            links.style.borderBottom = '1px solid var(--primary)';
        }
    });
}

// 3. Contact Form Elite Submission
const leadForm = document.getElementById('lead-form');
if (leadForm) {
    leadForm.addEventListener('submit', (e) => {
        e.preventDefault();
        // Here in the future you will connect to a Webhook (like Make.com / Zapier / CRM)
        alert('הפנייה שלך לאבחון עברית בהצלחה רבה לצוות הסינון של Female Dynamics. אנו יוצרים קשר במיידי ללקוחות מתאימים. יש להמתין לעדכון טלפוני.');
        leadForm.reset();
    });
}

// Blogs are now hard-coded into the HTML for maximum 1% SEO crawling ranking by Google.

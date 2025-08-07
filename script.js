// 🌟 Typewriter Effect
const typewriter = document.querySelector('.typewriter');
const phrases = ['Web Developer', 'UI/UX Designer', 'Creative Thinker'];
let phraseIndex = 0;
let letterIndex = 0;
let currentPhrase = '';
let isDeleting = false;

function type() {
  currentPhrase = phrases[phraseIndex];
  const displayedText = isDeleting
    ? currentPhrase.substring(0, letterIndex--)
    : currentPhrase.substring(0, letterIndex++);

  typewriter.textContent = displayedText;

  if (!isDeleting && letterIndex === currentPhrase.length) {
    isDeleting = true;
    setTimeout(type, 1000);
  } else if (isDeleting && letterIndex === 0) {
    isDeleting = false;
    phraseIndex = (phraseIndex + 1) % phrases.length;
    setTimeout(type, 500);
  } else {
    setTimeout(type, isDeleting ? 50 : 100);
  }
}

document.addEventListener('DOMContentLoaded', type);

// 🎯 Smooth Scroll for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// 📬 Contact Form Validation
const contactForm = document.getElementById('contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const name = this.querySelector('input[name="name"]').value.trim();
    const email = this.querySelector('input[name="email"]').value.trim();
    const message = this.querySelector('textarea[name="message"]').value.trim();

    if (!name || !email || !message) {
      alert('Please fill in all fields.');
      return;
    }

    // Simulate form submission
    alert('Thank you for your message!');
    this.reset();
  });
}

// 📰 Newsletter Form Validation
const newsletterForm = document.getElementById('newsletter-form');
if (newsletterForm) {
  newsletterForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const email = this.querySelector('input[type="email"]').value.trim();

    if (!email || !email.includes('@')) {
      alert('Please enter a valid email address.');
      return;
    }

    alert('Subscribed successfully!');
    this.reset();
  });
}

// 💬 Testimonial Slider (Auto Scroll)
const testimonialSlider = document.querySelector('.testimonial-slider');
if (testimonialSlider) {
  let scrollAmount = 0;
  setInterval(() => {
    scrollAmount += 300;
    if (scrollAmount >= testimonialSlider.scrollWidth) {
      scrollAmount = 0;
    }
    testimonialSlider.scrollTo({
      left: scrollAmount,
      behavior: 'smooth'
    });
  }, 4000);
}

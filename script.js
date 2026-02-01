// Scroll Animation (IntersectionObserver)
const faders = document.querySelectorAll('.fade-in');
const appearOptions = { threshold: 0.2, rootMargin: "0px 0px -50px 0px" };
const appearOnScroll = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add('show');
      observer.unobserve(entry.target);
    }
  });
}, appearOptions);
faders.forEach(fader => appearOnScroll.observe(fader));

// Smooth scroll for hero "Die Vision entdecken"
const discover = document.getElementById('discover-vision');
if(discover){
  discover.addEventListener('click', () => {
    document.getElementById('mission').scrollIntoView({behavior:'smooth'});
  });
}

// Accessible Accordion
const accButtons = document.querySelectorAll('.accordion-title');
accButtons.forEach(btn => {
  const content = document.getElementById(btn.getAttribute('aria-controls'));
  btn.addEventListener('click', () => toggleAccordion(btn, content));
  btn.addEventListener('keydown', (e) => {
    if(e.key === 'Enter' || e.key === ' '){ e.preventDefault(); toggleAccordion(btn, content); }
  });
});
function toggleAccordion(btn, content){
  const expanded = btn.getAttribute('aria-expanded') === 'true';
  btn.setAttribute('aria-expanded', String(!expanded));
  if(!expanded){
    content.style.maxHeight = content.scrollHeight + 'px';
    content.setAttribute('aria-hidden', 'false');
  } else {
    content.style.maxHeight = null;
    content.setAttribute('aria-hidden', 'true');
  }
}

// Simple Form handler (shows status; requires Formspree ID to actually send)
const form = document.getElementById('contact-form');
const status = document.getElementById('form-status');
if(form){
  form.addEventListener('submit', (e) => {
    const action = form.getAttribute('action');
    if(action.includes('REPLACE_WITH_YOUR_ID')){
      e.preventDefault();
      status.textContent = 'Bitte Formspree ID in der Aktion des Formulars ersetzen (README.md).';
      status.classList.remove('sr-only');
      return;
    }
    // Let the browser handle submit to Formspree; optionally add client-side feedback
    status.textContent = 'Nachricht wird gesendet…';
    status.classList.remove('sr-only');
  });
}
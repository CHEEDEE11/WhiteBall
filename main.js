// 1) Mobile nav toggle
function toggleMenu() {
  document.getElementById('nav-menu').classList.toggle('active');
}

// 2) Back-to-top button
const backBtn = document.getElementById('back-to-top');
window.addEventListener('scroll', () => {
  if (window.scrollY > 400) backBtn.classList.add('show');
  else backBtn.classList.remove('show');
});
backBtn.addEventListener('click', () =>
  window.scrollTo({ top: 0, behavior: 'smooth' })
);

// 3) Reveal sections on scroll
const sections = document.querySelectorAll('section');
const io = new IntersectionObserver(
  (entries) => {
    entries.forEach((ent) => {
      if (ent.isIntersecting) {
        ent.target.classList.add('reveal');
        io.unobserve(ent.target);
      }
    });
  },
  { threshold: 0.1 }
);
sections.forEach((sec) => {
  sec.classList.add('hidden');  // start hidden
  io.observe(sec);
});

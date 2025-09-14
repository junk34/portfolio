// Typing animation
const taglineText = "Full-stack Developer | Horror Game Creator | F1 Simulation Enthusiast";
let i = 0;
function typeTagline() {
  if (i < taglineText.length) {
    document.getElementById("tagline").textContent += taglineText.charAt(i);
    i++;
    setTimeout(typeTagline, 50);
  }
}
window.onload = typeTagline;

// Theme toggle
document.getElementById('theme-toggle').addEventListener('click', () => {
  document.body.classList.toggle('light-mode');
});

// Project filter
document.querySelectorAll('.filter-buttons button').forEach(btn => {
  btn.addEventListener('click', () => {
    const filter = btn.dataset.filter;
    document.querySelectorAll('.project').forEach(project => {
      project.style.display = (filter === 'all' || project.classList.contains(filter)) ? 'list-item' : 'none';
    });
  });
});

// Scroll reveal
const reveals = document.querySelectorAll('.reveal');
window.addEventListener('scroll', () => {
  reveals.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      el.classList.add('visible');
    }
  });
});

// Skill search
document.getElementById('skill-search').addEventListener('input', e => {
  const query = e.target.value.toLowerCase();
  document.querySelectorAll('.skills-grid span').forEach(skill => {
    skill.style.display = skill.textContent.toLowerCase().includes(query) ? 'inline-block' : 'none';
  });
});


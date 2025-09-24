// Typing effect for tagline
const tagline = document.getElementById("tagline");
const texts = ["Software Engineer", "Game Developer", "Horror Enthusiast"];
let i = 0, j = 0;

function typeEffect() {
  if (j < texts[i].length) {
    const char = texts[i][j];
    const glitch = Math.random() < 0.1 ? String.fromCharCode(33 + Math.floor(Math.random() * 94)) : char;
    tagline.textContent += glitch;
    j++;
    setTimeout(typeEffect, 100);
  } else {
    setTimeout(eraseEffect, 1500);
  }
}

function eraseEffect() {
  if (j > 0) {
    tagline.textContent = texts[i].substring(0, j-1);
    j--;
    setTimeout(eraseEffect, 50);
  } else {
    i = (i+1) % texts.length;
    setTimeout(typeEffect, 200);
  }
}

document.addEventListener("DOMContentLoaded", typeEffect);

// Theme toggle
const toggle = document.getElementById("theme-toggle");
toggle.addEventListener("click", () => {
  document.body.classList.toggle("light");
});

// Skill search
document.getElementById("skill-search").addEventListener("input", e => {
  const query = e.target.value.toLowerCase();
  document.querySelectorAll(".skills-grid span").forEach(skill => {
    skill.style.display = skill.textContent.toLowerCase().includes(query) ? "block" : "none";
  });
});




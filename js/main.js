
const tagline = document.getElementById("tagline");
const texts = ["Software Engineer", "Game Developer", "Horror Enthusiast"];
let i = 0, j = 0;

function typeEffect() {
  if (j < texts[i].length) {
    const char = texts[i][j];
    const glitch = Math.random() < 0.1
      ? String.fromCharCode(33 + Math.floor(Math.random() * 94))
      : char;

    tagline.textContent += glitch;
    j++;
    setTimeout(typeEffect, 100);
  } else {
    setTimeout(eraseEffect, 1500);
  }
}

function eraseEffect() {
  if (j > 0) {
    tagline.textContent = texts[i].substring(0, j - 1);
    j--;
    setTimeout(eraseEffect, 50);
  } else {
    i = (i + 1) % texts.length;
    setTimeout(typeEffect, 200);
  }
}

document.addEventListener("DOMContentLoaded", typeEffect);



const toggle = document.getElementById("theme-toggle");
toggle.addEventListener("click", () => {
  document.body.classList.toggle("light");
});


document.getElementById("skill-search").addEventListener("input", e => {
  const query = e.target.value.toLowerCase();
  document.querySelectorAll(".skills-grid span").forEach(skill => {
    skill.style.display = skill.textContent.toLowerCase().includes(query)
      ? "block"
      : "none";
  });
});



const fogBack = document.querySelector(".fog-back");
const fogFront = document.querySelector(".fog-front");

let fogX1 = 0;
let fogX2 = 0;

function animateFog() {
  fogX1 += 0.03;
  fogX2 += 0.06;

  fogBack.style.transform = `translateX(${fogX1}px)`;
  fogFront.style.transform = `translateX(${fogX2}px)`;

  requestAnimationFrame(animateFog);
}

animateFog();



const noise = document.querySelector(".vhs-noise");

function animateNoise() {
  const x = Math.random() * 100;
  const y = Math.random() * 100;
  noise.style.backgroundPosition = `${x}px ${y}px`;
  requestAnimationFrame(animateNoise);
}

animateNoise();


const hero = document.getElementById("hero");

document.addEventListener("mousemove", e => {
  const x = (e.clientX / window.innerWidth - 0.5) * 10;
  const y = (e.clientY / window.innerHeight - 0.5) * 10;

  hero.style.transform = `translate(${x}px, ${y}px)`;
});


function addStaticBurst(element) {
  element.addEventListener("mouseenter", () => {
    element.classList.add("static-burst");
    setTimeout(() => element.classList.remove("static-burst"), 150);
  });
}

document.querySelectorAll(".nav-links a, .project").forEach(addStaticBurst);


const cursorTrail = document.querySelector(".cursor-trail");

document.addEventListener("mousemove", e => {
  cursorTrail.style.left = e.clientX + "px";
  cursorTrail.style.top = e.clientY + "px";

  cursorTrail.classList.add("active");
  clearTimeout(cursorTrail.timeout);
  cursorTrail.timeout = setTimeout(() => {
    cursorTrail.classList.remove("active");
  }, 80);
});



const revealElements = document.querySelectorAll(".reveal");

function revealOnScroll() {
  const trigger = window.innerHeight * 0.85;

  revealElements.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < trigger) {
      el.classList.add("visible");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();




const filterButtons = document.querySelectorAll(".filter-buttons button");
const projects = document.querySelectorAll("#project-list .project");

filterButtons.forEach(button => {
  button.addEventListener("click", () => {
    const filter = button.getAttribute("data-filter");

    projects.forEach(project => {
      if (filter === "all" || project.classList.contains(filter)) {
        project.style.display = "block";
        project.classList.add("glitch");
        setTimeout(() => project.classList.remove("glitch"), 300);
      } else {
        project.style.display = "none";
      }
    });

    filterButtons.forEach(btn => btn.classList.remove("active"));
    button.classList.add("active");
  });
});





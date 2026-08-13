document.getElementById('contact-form').addEventListener('submit', async function (e) {
  e.preventDefault();

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  const form = e.target;
  const data = new FormData(form);

  try {
    const response = await fetch('https://formspree.io/f/xxxxabcd', {
      method: 'POST',
      body: data,
      headers: { 'Accept': 'application/json' }
    });

    if (response.ok) {
      alert('Thanks ' + name + '! Your message has been sent.');
      form.reset();
    } else {
      alert('Something went wrong. Please try again or email me directly.');
    }
  } catch (error) {
    alert('Network error. Please try again or email me directly.');
  }
});
const cursorDot = document.querySelector(".cursor-dot");
const cursorGlow = document.querySelector(".cursor-glow");

let mouseX = 0;
let mouseY = 0;
let glowX = 0;
let glowY = 0;

document.addEventListener("mousemove", (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;

  cursorDot.style.left = `${mouseX}px`;
  cursorDot.style.top = `${mouseY}px`;
});

function animateCursor() {
  glowX += (mouseX - glowX) * 0.15;
  glowY += (mouseY - glowY) * 0.15;

  cursorGlow.style.left = `${glowX}px`;
  cursorGlow.style.top = `${glowY}px`;

  requestAnimationFrame(animateCursor);
}

animateCursor();

const hoverElements = document.querySelectorAll(
  "a, button, .skill-card, .project-card, .achievement-card, .timeline-item, .chip, .resume-btn"
);

hoverElements.forEach((element) => {
  element.addEventListener("mouseenter", () => {
    cursorDot.classList.add("hover");
    cursorGlow.classList.add("hover");
  });

  element.addEventListener("mouseleave", () => {
    cursorDot.classList.remove("hover");
    cursorGlow.classList.remove("hover");
  });
});
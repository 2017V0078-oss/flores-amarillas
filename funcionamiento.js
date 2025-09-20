// Fuegos artificiales
const canvas = document.getElementById("fuegos");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

function random(min, max) {
  return Math.random() * (max - min) + min;
}

let particles = [];

function createFirework() {
  let x = random(100, canvas.width - 100);
  let y = random(50, canvas.height / 2);
  let color = `hsl(${random(0,360)},100%,50%)`;

  for (let i = 0; i < 60; i++) {
    particles.push({
      x: x,
      y: y,
      angle: random(0, Math.PI * 2),
      speed: random(2, 6),
      life: 100,
      color: color
    });
  }
}

function draw() {
  ctx.fillStyle = "rgba(0,0,0,0.2)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  particles.forEach((p, i) => {
    p.x += Math.cos(p.angle) * p.speed;
    p.y += Math.sin(p.angle) * p.speed;
    p.life--;

    ctx.beginPath();
    ctx.arc(p.x, p.y, 2, 0, Math.PI * 2);
    ctx.fillStyle = p.color;
    ctx.fill();

    if (p.life <= 0) particles.splice(i, 1);
  });

  requestAnimationFrame(draw);
}

setInterval(createFirework, 1500);
draw();

// 🌻 Flores cayendo
const floresContainer = document.querySelector(".flores");

function crearFlor() {
  const flor = document.createElement("img");
  flor.src = "girasol.png"; // usa una flor PNG pequeña y amarilla
  flor.classList.add("flor");

  flor.style.left = `${Math.random() * 100}vw`;
  flor.style.animationDuration = `${random(5, 12)}s`;
  flor.style.width = `${random(20, 50)}px`;

  floresContainer.appendChild(flor);

  setTimeout(() => {
    flor.remove();
  }, 12000);
}

// Crear flores cada cierto tiempo
setInterval(crearFlor, 800);
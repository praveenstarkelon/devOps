document.addEventListener("DOMContentLoaded", () => {
  const canvas = document.getElementById("stars");
  const ctx = canvas.getContext("2d");

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  let tick = 0;
  const numStars = 500;
  const stars = [];

  for (let i = 0; i < numStars; i++) {
    stars.push({
      x: (Math.random() - 0.5) * canvas.width,
      y: (Math.random() - 0.5) * canvas.height,
      z: Math.random() * canvas.width,
    });
  }

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    let hue = tick % 360;

    for (let s of stars) {
      s.z -= 1.2;
      if (s.z <= 0) {
        s.x = (Math.random() - 0.5) * canvas.width;
        s.y = (Math.random() - 0.5) * canvas.height;
        s.z = canvas.width;
      }
      let scale = 300 / s.z;
      let x = s.x * scale + canvas.width / 2;
      let y = s.y * scale + canvas.height / 2;
      let radius = Math.max(0.5, 2 * (1 - s.z / canvas.width));

      let gradient = ctx.createRadialGradient(x, y, 0, x, y, radius * 4);
      gradient.addColorStop(0, `hsla(${hue}, 100%, 80%, 1)`);
      gradient.addColorStop(1, `hsla(${(hue + 60) % 360}, 100%, 20%, 0)`);

      ctx.beginPath();
      ctx.arc(x, y, radius, 0, Math.PI * 2);
      ctx.fillStyle = gradient;
      ctx.fill();
    }

    tick++;
    requestAnimationFrame(animate);
  }

  animate();

  window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  });
});

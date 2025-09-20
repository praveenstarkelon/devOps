// eks.js
document.getElementById('back-home').addEventListener('click', function () {
  window.location.href = "index.html";
});

// Animated effects, e.g. sidebar collapsible (if needed)
let sidebar = document.getElementById('sidebar');
sidebar.addEventListener('mouseenter', () => { sidebar.style.boxShadow = '0 6px 30px #0ff6'; });
sidebar.addEventListener('mouseleave', () => { sidebar.style.boxShadow = 'unset'; });

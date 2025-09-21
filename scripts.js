// Smooth scroll for anchor links in nav
document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelectorAll('nav a').forEach(a => a.classList.remove('active'));
    this.classList.add('active');

    const targetID = this.getAttribute('href').substr(1);
    const targetSection = document.getElementById(targetID);

    if(targetSection){
      window.scrollTo({
        top: targetSection.offsetTop - 20,
        behavior: 'smooth'
      });
    }
  });
});

// Highlight nav item on scroll
window.addEventListener('scroll', () => {
  let scrollPosition = window.scrollY + 30;

  document.querySelectorAll('nav a').forEach(link => {
    let section = document.querySelector(link.hash);
    if(section.offsetTop <= scrollPosition && section.offsetTop + section.offsetHeight > scrollPosition){
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
});

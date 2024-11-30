const scrollToTopBtn = document.getElementById('scrollToTopBtn');

window.onscroll = () => {
  scrollToTopBtn.style.display = window.scrollY > 200 ? 'block' : 'none';
};

scrollToTopBtn.onclick = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

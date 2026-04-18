function showPage(page) {
  document.querySelectorAll('.page-section').forEach(s => s.classList.remove('active'));
  document.getElementById('page-' + page).classList.add('active');

  setActiveLink(page); // denna ska in här

  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}
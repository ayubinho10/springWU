function showPage(page) {
 document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
document.getElementById('page-' + page).classList.add('active');

  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}
document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') {
    closeModal();
  }
});
function toggleMenu() {
  document.getElementById('navLinks').classList.toggle('open');
}
function openModal() {
  document.getElementById('modal').style.display = 'flex';
}

function closeModal() {
  document.getElementById('modal').style.display = 'none';
}
function toggleMenu() {
  document.getElementById('navLinks').classList.toggle('open');
}
 
document.addEventListener('click', function(e) {
  var nav = document.getElementById('navLinks');
  var btn = document.querySelector('.menu-btn');
  if (nav && btn && !nav.contains(e.target) && e.target !== btn) {
    nav.classList.remove('open');
  }
});
 
function openModal() {
  document.getElementById('modal').classList.add('open');
}
 
function closeModal() {
  var modal = document.getElementById('modal');
  if (modal) modal.classList.remove('open');
}
 
document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') closeModal();
});
 
var modal = document.getElementById('modal');
if (modal) {
  modal.addEventListener('click', function(e) {
    if (e.target === this) closeModal();
  });
}
 
function submitForm() {
  var namn = document.getElementById('inputNamn').value;
  var email = document.getElementById('inputEmail').value;
  if (namn === '' || email === '') {
    alert('Fyll i alla fält!');
    return;
  }
  closeModal();
  alert('Tack ' + namn + '! Vi hör av oss snart.');
}
 
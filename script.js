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
var classes = {
  man: [
    { time: '06:00', name: 'Morning HIIT',  duration: '45 min', spots: 8 },
    { time: '09:30', name: 'Yoga Flow',     duration: '60 min', spots: 4 },
    { time: '12:00', name: 'Lunchboxning',  duration: '45 min', spots: 2 },
    { time: '17:30', name: 'Spinning',      duration: '45 min', spots: 12 },
    { time: '19:00', name: 'Kvälls-HIIT',   duration: '45 min', spots: 6 }
  ],
  tis: [
    { time: '07:00', name: 'Power Yoga',    duration: '60 min', spots: 7 },
    { time: '12:00', name: 'Lunchlöpning',  duration: '30 min', spots: 10 },
    { time: '18:00', name: 'Boxercise',     duration: '60 min', spots: 3 },
    { time: '20:00', name: 'Nattpass',      duration: '60 min', spots: 9 }
  ],
  ons: [
    { time: '06:00', name: 'Sunrise Yoga',  duration: '45 min', spots: 5 },
    { time: '10:00', name: 'HIIT Cardio',   duration: '45 min', spots: 11 },
    { time: '17:00', name: 'Boxning',       duration: '60 min', spots: 6 },
    { time: '19:30', name: 'Styrkelyft',    duration: '60 min', spots: 8 }
  ],
  tor: [
    { time: '07:30', name: 'Flow Yoga',      duration: '60 min', spots: 4 },
    { time: '12:00', name: 'Lunchbox',       duration: '45 min', spots: 5 },
    { time: '18:30', name: 'HIIT Challenge', duration: '45 min', spots: 7 }
  ],
  fre: [
    { time: '06:00', name: 'Fredags-HIIT',  duration: '45 min', spots: 9 },
    { time: '10:00', name: 'Morning Yoga',  duration: '60 min', spots: 6 },
    { time: '17:00', name: 'Helgstart Box', duration: '60 min', spots: 4 }
  ],
  lor: [
    { time: '09:00', name: 'Helg-HIIT',         duration: '60 min', spots: 14 },
    { time: '11:00', name: 'Återhämtning Yoga', duration: '75 min', spots: 8 },
    { time: '14:00', name: 'Styrkepass',         duration: '60 min', spots: 6 }
  ],
  son: [
    { time: '10:00', name: 'Söndagsyoga',      duration: '75 min', spots: 10 },
    { time: '12:00', name: 'HIIT Avslappning', duration: '45 min', spots: 5 }
  ]
};
 
var currentDay = 'man';
 
function renderClasses() {
  var grid = document.getElementById('classGrid');
  if (!grid) return;
  var list = classes[currentDay];
  if (!list || list.length === 0) {
    grid.innerHTML = '<div style="padding:2rem;color:#888;">Inga pass denna dag.</div>';
    return;
  }
  grid.innerHTML = list.map(function(c) {
    return '<div class="class-card">'
      + '<div class="class-time">' + c.time + '</div>'
      + '<div class="class-name">' + c.name + '</div>'
      + '<div class="class-meta">' + c.duration + ' · ' + c.spots + ' platser kvar</div>'
      + '</div>';
  }).join('');
}
 
function setDay(btn, day) {
  document.querySelectorAll('.day-tab').forEach(function(b) {
    b.classList.remove('active');
  });
  btn.classList.add('active');
  currentDay = day;
  renderClasses();
}
 
renderClasses();
 
  
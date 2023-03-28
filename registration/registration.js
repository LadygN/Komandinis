const form = document.querySelector('form');

const passwordInput = document.querySelector('#slaptazodis');

const confirmPasswordInput = document.querySelector('#pakartotas_slaptazodis');


form.addEventListener('submit', (e) => {
  if (passwordInput.value !== confirmPasswordInput.value) {
    e.preventDefault();
    alert('Slaptažodžiai nesutampa');
  }
});
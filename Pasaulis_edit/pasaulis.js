const pasauliai = document.querySelectorAll('.pasaulis');
const pasirinktasPasaulis = document.querySelector('#pasirinktas-pasaulis');
const grizti = document.querySelector('#grizti');
const baigti = document.querySelector('#baigti');

// Funkcija, kuri paslepia pasirinkto pasaulio langą ir rodo pasaulių sąrašą
function pasleptiPasirinktaPasauli() {
  pasirinktasPasaulis.style.display = 'none';
  document.body.style.overflowY = 'scroll';
}

// Funkcija, kuri rodo pasirinkto pasaulio langą
function rodytiPasirinktaPasauli(pasaulis) {
  pasirinktasPasaulis.querySelector('img').src = pasaulis.querySelector('img').src;
  pasirinktasPasaulis.querySelector('h2').innerHTML = pasaulis.querySelector('h2').innerHTML;
  pasirinktasPasaulis.querySelector('p').innerHTML = pasaulis.querySelector('p').innerHTML;
  pasirinktasPasaulis.style.display = 'block';
  document.body.style.overflowY = 'hidden';
}

// Funkcija, kuri atnaujina pasirinktą pasaulį ir paslepia pasirinkto pasaulio langą
function atnaujintiPasirinktaPasauli() {
  pasauliai.forEach(function(pasaulis) {
    pasaulis.classList.remove('pasirinktas');
  });
  pasleptiPasirinktaPasauli();
}

// Funkcija, kuri leidžia pasirinkti pasaulį
function pasirinktiPasauli(pasaulis) {
    atnaujintiPasirinktaPasauli();
    pasaulis.classList.add('pasirinktas');
    rodytiPasirinktaPasauli(pasaulis);
  
    const patinkancioMygtukoEl = pasaulis.querySelector('.patinka');
    const skaitliukas = parseInt(patinkancioMygtukoEl.getAttribute('data-skaitliukas'));
    patinkancioMygtukoEl.setAttribute('data-skaitliukas', skaitliukas + 1);
    patinkancioMygtukoEl.textContent = `Patinka (${skaitliukas + 1})`;
  }

// Funkcija, kuri leidžia pašalinti pasaulį
function salintiPasauli(pasaulis) {
  pasaulis.parentNode.removeChild(pasaulis);
  atnaujintiPasirinktaPasauli();
}

// Užregistruojame pasirinkimo mygtukus
pasauliai.forEach(function(pasaulis) {
  pasaulis.querySelector('.pasirinkti').addEventListener('click', function() {
    pasirinktiPasauli(pasaulis);
  });
});

// Užregistruojame pasalinimo mygtukus
pasauliai.forEach(function(pasaulis) {
  pasaulis.querySelector('.salinti').addEventListener('click', function() {
    salintiPasauli(pasaulis);
  });
});

// Užregistruojame grįžimo mygtuką
grizti.addEventListener('click', function() {
  atnaujintiPasirinktaPasauli();
});

// Užregistruojame baigimo mygtuką
baigti.addEventListener('click', function() {
  window.location.href = '../pagrindinis_sablonas/index.html';
});

// select all buttons with the class "patinka"
const patinkaButtons = document.querySelectorAll('.patinka');

// add an event listener to each button
patinkaButtons.forEach(function(button) {
  let skaicius = 0;
  button.addEventListener('click', function() {
    if (skaicius === 0) {
      skaicius = 1;
      button.querySelector('.patinka-skaicius').textContent = skaicius;
    } else {
      skaicius = 0;
      button.querySelector('.patinka-skaicius').textContent = skaicius;
    }
  });
});
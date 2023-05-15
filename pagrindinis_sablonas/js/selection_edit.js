// Paimame reikiamus DOM elementus
const worldDescription = document.getElementById('world-description');
const heroDescription = document.getElementById('hero-description');
const spaceDescription = document.getElementById('space-description');
const saveButton = document.getElementById('save-button');

// Keičiame pasaulio, herojaus ir gyvenamosios vietos aprašymus, kai įvedamas tekstas į atitinkamus input laukus
worldInput.addEventListener('input', (event) => {
  worldDescription.innerText = `Pasaulis: ${event.target.value}`;
});

heroInput.addEventListener('input', (event) => {
  heroDescription.innerText = `Herojus: ${event.target.value}`;
});

spaceInput.addEventListener('input', (event) => {
  spaceDescription.innerText = `Gyvenamoji vieta: ${event.target.value}`;
});

// Patvirtiname planą, kai mygtukas paspaudžiamas
saveButton.addEventListener('click', () => {
  const confirmed = confirm('Ar tikrai norite patvirtinti savo planą?');
  if (confirmed) {
    alert('Planas patvirtintas!');
  }
});
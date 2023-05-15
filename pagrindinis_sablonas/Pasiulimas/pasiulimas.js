// gauti DOM elementus
const anketaForma = document.querySelector('#anketa');
const gyvenimoPlanasLangas = document.querySelector('#gyvenimo-planas-langas');
const uzdarytiLangas = document.querySelector('#uzdaryti-langas');
const gyvenimoPlanasTurinys = document.querySelector('#gyvenimo-planas-turinys');
const gautiGyvenimoPlana = document.querySelector('#gauti-gyvenimo-plana');

// pridėti įvykius
anketaForma.addEventListener('submit', submitHandler);
uzdarytiLangas.addEventListener('click', uzdarytiLangasHandler);
gautiGyvenimoPlana.addEventListener('click', atidarytiSelectionEditLangą);

// apdoroti formos pateikimą
function submitHandler(event) {
  event.preventDefault();
  window.location.href = '../Selection_Edit/selection_edit.html';
}

// atidaryti selection_edit langą
function atidarytiSelectionEditLangą() {
  window.location.href = '../Selection_Edit/selection_edit.html';
}

// uždaryti gyvenimo plano langą
function uzdarytiLangasHandler() {
  gyvenimoPlanasLangas.style.display = 'none';
}
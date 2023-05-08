// Paslėpti redagavimo langą pradžioje
$('.edit').hide();

// Atidaryti redagavimo langą paspaudus "Redaguoti" mygtuką
$('.view .edit').click(function() {
  $('.view').hide();
  $('.edit').show();
});

// Atidaryti peržiūros langą paspaudus "Atšaukti" mygtuką
$('.edit button[type="reset"]').click(function() {
  $('.edit').hide();
  $('.view').show();
});
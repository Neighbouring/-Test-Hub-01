$('#section-auto-play').hide();

$('#section-auto-play').hover(function () {
  $('#section-auto-play').toggleClass('parar');
});

$('#section-auto-play').blur(function () {
  $('#section-auto-play').toggleClass('rodar');
});

console.log("JQUERY ATIVO");
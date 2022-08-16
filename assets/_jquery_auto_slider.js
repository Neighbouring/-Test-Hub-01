// $('#section-auto-play').hide();

$('.anima-auto-play').hover(function () {
  $('.anima-auto-play').toggleClass('.parar');
});

$('.anima-auto-play').blur(function () {
  $('.anima-auto-play').toggleClass('.rodar');
});

console.log("JQUERY ATIVO");
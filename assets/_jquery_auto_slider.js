// $('#section-auto-play').hide();

$("article.anima-auto-play").hover(function () {
  $(".anima-auto-play").toggleClass(".parar");
  console.log("JQUERY PARAR");
});

$('article.anima-auto-play').blur(function () {
  $('.anima-auto-play').toggleClass('.rodar');
  console.log("JQUERY RODAR");
});

console.log("JQUERY ATIVO");
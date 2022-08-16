// $('#section-auto-play').hide();

$("article.anima-auto-play").hover(function () {
  $("article.anima-auto-play").toggleClass(".parar");
  console.log("JQUERY PARAR");
});

$('article.anima-auto-play').blur(function () {
  $('article.anima-auto-play').toggleClass('.rodar');
  console.log("JQUERY RODAR");
});

console.log("JQUERY ATIVO");
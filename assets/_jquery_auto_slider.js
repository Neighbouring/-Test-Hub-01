$("article.anima-auto-play").hover(function () {
  $(".anima-auto-play").toggleClass("parar");
});

$('article.anima-auto-play').blur(function () {
  $('.anima-auto-play').toggleClass('rodar');
});
// $('#section-auto-play').hide();

// $('.anima-auto-play').hover(function () {
//   $('.anima-auto-play').toggleClass('.parar');
//   console.log("JQUERY PARAR");
// });

$(".anima-auto-play").hover(function(){
  console.log("CAMADA 1");
  $(".anima-auto-play").hover(function(){
    console.log("CAMADA 2");
    $(".anima-auto-play").toggleClass('.parar');
  });
});

// $('.anima-auto-play').blur(function () {
//   $('.anima-auto-play').toggleClass('.rodar');
//   console.log("JQUERY RODAR");
// });

console.log("JQUERY ATIVO");
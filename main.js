$(document).ready(function(){
  $(".mere1").click(function(){
    $(".text1").toggle(1000);
  });
  $(".mere2").click(function(){
    $(".text2").toggle(1000);
  });

  $(".mere3").click(function(){
    $(".text3").toggle(1000);
  });
});



$(".slideshow > div:gt(0)").hide();

    setInterval(function() {
      $('.slideshow > div:first')
        .fadeOut(1000)
        .next()
        .fadeIn(1000)
        .end()
        .appendTo('.slideshow');
    }, 4000);

    
$(".slideshow2 > div:gt(0)").hide();

setInterval(function() {
  $('.slideshow2 > div:first')
    .fadeOut(1000)
    .next()
    .fadeIn(1000)
    .end()
    .appendTo('.slideshow2');
}, 4000);


$(".slideshow3 > div:gt(0)").hide();

    setInterval(function() {
      $('.slideshow3 > div:first')
        .fadeOut(1000)
        .next()
        .fadeIn(1000)
        .end()
        .appendTo('.slideshow3');
    }, 4000);


  

$("div").html(`<img src="${carouselImages[0].image_url}"/>`)
$("div").after(`<img class="left low-opacity" src="images/left_arrow.png"/>`)
$("div").after(`<img class="right low-opacity" src="images/left_arrow.png"/>`)

var index = 0;

$(".left").click(moveSlideLeft);
$(".right").click(moveSlideRight);

function moveSlideLeft(){
  if(index === 0){
    index = 4;
  }else{
  index--;
  }
  $("div").html(`<img src="${carouselImages[index].image_url}"/>`)
}

/*
$(".left").on("mouseover", lDarkenArrow);

function lDarkenArrow(){
  console.log("darken")
  $(".left").removeClass("low-opacity").addClass("high-opacity");
}
*/



$(".left").hover(function() {
  console.log("entered");
  $(".left").removeClass("low-opacity");
}, function() {
  $(".left").addClass("low-opacity");
});

$(".right").hover(function() {
  console.log("entered");
  $(".right").removeClass("low-opacity");
}, function() {
  $(".right").addClass("low-opacity");
});



function moveSlideRight(){
  if(index === 4){
    index = 0;
  }else{
  index++;
  }
  $("div").html(`<img src="${carouselImages[index].image_url}"/>`)
}

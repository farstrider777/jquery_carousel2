
$("div").html(`<img src="${carouselImages[0].image_url}"/>
<footer>"${carouselImages[0].title}" by <u>${carouselImages[0].photographer_id}</u>.</footer>`)
$("div").after(`<img class="left low-opacity" src="images/left_arrow.png"/>`)
$("div").after(`<img class="right low-opacity" src="images/left_arrow.png"/>`)

var index = 0;

$(".left").click(moveSlideLeft);
$(".right").click(moveSlideRight);

function moveSlideLeft(){
  //$("div").html(`<img src="${carouselImages[0].image_url}"/>
  //<footer>"${carouselImages[0].title}" by <u>${carouselImages[0].photographer_id}</u>.</footer>`)
  if(index === 0){
    index = 4;
  }else{
  index--;
  }
  $("div").html(`<img src="${carouselImages[index].image_url}"/>
  <footer>"${carouselImages[index].title}" by <u>${carouselImages[index].photographer_id}</u>.</footer>`)
}

function moveSlideRight(){
  if(index === 4){
    index = 0;
  }else{
  index++;
  }
  $("div").html(`<img src="${carouselImages[index].image_url}"/>
  <footer>"${carouselImages[index].title}" by <u>${carouselImages[index].photographer_id}</u>.</footer>`)
}


$(".left").hover(function() {
  $(".left").removeClass("low-opacity");
}, function() {
  $(".left").addClass("low-opacity");
});

$(".right").hover(function() {
  $(".right").removeClass("low-opacity");
}, function() {
  $(".right").addClass("low-opacity");
});

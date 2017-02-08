
$("div").html(`<img src="${carouselImages[0].image_url}"/>`)
$("div").after(`<img class=left src="images/left_arrow.png"/>`)
$("div").after(`<img class=right src="images/left_arrow.png"/>`)

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



function moveSlideRight(){
  if(index === 4){
    index = 0;
  }else{
  index++;
  }
  $("div").html(`<img src="${carouselImages[index].image_url}"/>`)
}

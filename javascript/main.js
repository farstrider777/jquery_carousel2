

$("div").html(`<img src="${carouselImages[0].image_url}"/>
<footer>"${carouselImages[0].title}" by <u>${carouselImages[0].photographer_id}</u>.</footer>`)
$("div").after(`<img class="left low-opacity" src="images/left_arrow.png"/>`)
$("div").after(`<img class="right low-opacity" src="images/left_arrow.png"/>`)

var index = 0;

$(".left").click(moveSlideLeft);
$(".right").click(moveSlideRight);

/*
function act() {
  var element = document.createElement("img");
  element.src = "http://placekitten.com.s3.amazonaws.com/homepage-samples/408/287.jpg";
  var op = 0.1; // initial opacity
  element.style.opacity = op;
  document.body.appendChild(element);
  element.style.display = 'block';
  var timer = setInterval(function() {
    if (op >= 1) {
      clearInterval(timer);
    }
    element.style.opacity = op;
    element.style.filter = 'alpha(opacity=' + op * 100 + ")"; // IE 5+ Support
    op += op * 0.1;
  }, 50);
}
*/




function moveSlideLeft(){
  $("section").html(`<img class="fade" src="${carouselImages[index].image_url}"/>
  <footer>"${carouselImages[index].title}" by <u>${carouselImages[index].photographer_id}</u>.</footer>`);
  //$(".fade").removeClass("full-opacity").addClass("zero-opacity");
  var opTest = 1;
  var timer = setInterval(function(){ $(".fade").css({ opacity: opTest }); opTest -= .1;
    console.log(opTest)
    if (opTest <= 0) {
      console.log("timer cleared")
      clearInterval(timer);
    }
  }, 100);

  if(index === 0){
    index = 4;
  }else{
  index--;
  }
  $("div").html(`<img src="${carouselImages[index].image_url}"/>
  <footer>"${carouselImages[index].title}" by <u>${carouselImages[index].photographer_id}</u>.</footer>`)
}

function moveSlideRight(){
  $("section").html(`<img class="fade" src="${carouselImages[index].image_url}"/>
  <footer>"${carouselImages[index].title}" by <u>${carouselImages[index].photographer_id}</u>.</footer>`);
  //$(".fade").removeClass("full-opacity").addClass("zero-opacity");
  var opTest = 1;
  var timer = setInterval(function(){ $(".fade").css({ opacity: opTest }); opTest -= .1;
    console.log(opTest)
    if (opTest <= 0) {
      console.log("timer cleared")
      clearInterval(timer);
    }
  }, 100);

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

$(document).ready(function() {

  // $('.carousel').carousel()
  var nextSlide = $('#slides img:first-child');
  var nextSlideSource;

  // image fades out completely to transparent/white background first
  // setInterval(
  //   function () {
  //     $("#slide").fadeOut(600,
  //       function () {
  //         if (nextSlide.next().length === 0) {
  //           nextSlide = $('#slides img:first-child');
  //         } else {
  //           nextSlide = nextSlide.next();
  //         }
  //         nextSlideSource = nextSlide.attr("src");
  //         $("#slide").attr("src", nextSlideSource).fadeIn(400);
  //       }
  //     )
  //   },
  // 3000);

  // no fade out; image just jumps to next slide
  setInterval(
    function () {
          if (nextSlide.next().length === 0) {
            nextSlide = $('#slides img:first-child');
          } else {
            nextSlide = nextSlide.next();
          }
          nextSlideSource = nextSlide.attr("src");
          $("#slide").attr("src", nextSlideSource).fadeIn(1000);
        },
  3000);



})




// jQuery length property contains the number of elements in the jQuery object

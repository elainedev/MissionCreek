$(document).ready(function() {

  // $('.carousel').carousel()
  var nextSlide = $('#slides img:first-child');
  var nextSlideSource;

  //start slideshow, with no overlap
  // setInterval(
  //   function () {
  //     $("#slide").fadeOut(700,
  //       function () {
  //         if (nextSlide.next().length === 0) {
  //           nextSlide = $('#slides img:first-child');
  //         } else {
  //           nextSlide = nextSlide.next();
  //         }
  //         nextSlideSource = nextSlide.attr("src");
  //         $("#slide").attr("src", nextSlideSource).fadeIn(700);
  //       }
  //     )
  //   },
  // 3000);


  setInterval(
    function () {
      $("#slide").fadeOut(600,
        function () {
          if (nextSlide.next().length === 0) {
            nextSlide = $('#slides img:first-child');
          } else {
            nextSlide = nextSlide.next();
          }
          nextSlideSource = nextSlide.attr("src");
          $("#slide").attr("src", nextSlideSource).fadeIn(400);
        }
      )
    },
  3000);


})




// jQuery length property contains the number of elements in the jQuery object

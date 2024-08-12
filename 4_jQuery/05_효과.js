// 1. show, hide, toggle
$("#show").click(() => {
  $("#img").show(3000);
});
$("#hide").click(() => {
  $("#img").hide(3000);
});
// toggle : 있으면 없애고, 없으면 있게
$("#toggle").click(() => {
  $("#img").toggle(2000);
});

// 2. fadeIn, fadeOut, fadeToggle, faetTo
$("#fadeIn").click(() => {
  $("#img").fadeIn(3000);
});
$("#fadeOut").click(() => {
  $("#img").fadeOut(3000);
});
$("#fadeToggle").click(() => {
  $("#img").fadeToggle(2000);
});
$("#img").hover(
  function () {
    $(this).fadeTo(500, 0.5);
  }, // mouseenter 자동 인지
  function () {
    $(this).fadeTo(500, 1);
  } // mouseleave 자동 인지
);

// 3. slideDown, slideUp, slideToggle
$(".menu").click((e) => {
  let content = $(e.target).next();
  // e.target = 본인, next() : 바로 다음

  /*
  if (content.css("display") === "none") {
    content.slideDown(500);
  } else {
    content.slideUp(500);
  }
  */

  //   content.slideToggle(500); - 한번에

  // 하나의 컨텐츠만 slideDown 하려면
  $(".contents").slideUp();
  if (content.css("display") === "none") {
    content.slideDown(500);
  }
});

//scroll event

const bar = document.querySelector(".progress-bar");

window.addEventListener("scroll", function () {
  /*console.log(window.scrollY); //스크롤 위치 찍어줌
  console.log(window.innerHeight); // 현재 보여지는 창의 위치
  console.log(document.body.offsetHeight); // body 전체 높이*/

  //전체 스크롤 할 수 있는 범위 = 바디 전체 높이 - 윈도우 높이(현재 창)
  let maxScrollValue = document.body.offsetHeight - this.window.innerHeight;

  /*console.log(parseInt((window.scrollY / maxScrollValue) * 100)); // 스크롤 : 0~100 까지*/

  bar.style.width = parseInt((window.scrollY / maxScrollValue) * 100) + "%";
});

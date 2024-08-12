// 1. 이벤트 연결
// one (이벤트명, 콜백함수) : 한번만 실행
$("#area1").one("click", () => {
  alert("처음이자 마지막으로 이벤트 핸들러 실행");
});

/*
// on (이벤트명, 콜백함수) : 계속 실행 (함수괄호 안에는 event가 생략돼있음)
$("#area2").on("mouseenter", (event) => {
  $(event.target).css("background-color", "darkgreen").text("마우스가 올라감");
});
// 마우스가 내려갈 때
// 배경색상 : beige, text : 마우스가 내려감
$("#area2").on("mouseleave", (event) => {
  $(event.target).css("background-color", "beige").text("마우스가 내려감");
});
*/

/*
// 합치기 -> 띄어쓰기로 가능 / event.type으로 구분
$("#area2").on("mouseenter mouseleave", (event) => {
  if (event.type === "mouseenter") {
    $(event.target)
      .css("background-color", "darkgreen")
      .text("마우스가 올라감");
  } else if (event.type === "mouseleave") {
    $(event.target).css("background-color", "beige").text("마우스가 내려감");
  }
});

$("#area2").on("click", (event) => {
  $(event.target)
    .css("background-color", "white")
    .text("")
    .off("mouseenter mouseleave"); // 클릭 후 mouseenter, mouseleave 이벤트 제거
});
*/

// 더 합치기
$("#area2").on({
  mouseenter: (event) => {
    $(event.target)
      .css("background-color", "darkgreen")
      .text("마우스가 올라감");
  },
  mouseleave: (event) => {
    $(event.target).css("background-color", "beige").text("마우스가 내려감");
  },
  click: (event) => {
    $(event.target)
      .css("background-color", "white")
      .text("")
      .off("mouseenter mouseleave"); // 클릭 후 mouseenter, mouseleave 이벤트 제거
  },
});

// 2. 키보드 이벤트
// keydown, keypress, keyup
$("#textarea1").on({
  keydown: (e) => {
    // 키보드가 눌려질 때
    console.log(`keydown - e.key : ${e.key}, e.keyCode : ${e.keyCode}`);
  },
  keypress: (e) => {
    // 글자가 입력될 때
    console.log(`keypress - e.key : ${e.key}, e.keyCode : ${e.keyCode}`);
  },
  keyup: (e) => {
    // 키보드가 떼어질 때
    console.log(`keyup - e.key : ${e.key}, e.keyCode : ${e.keyCode}`);
  },
});

//글자수세기 -> 글자수 길이로 확인
// val().length - 글자수 길이
$("#textarea2").keyup((e) => {
  let target = $(e.target);
  let length = target.val().length;
  let maxLength = parseInt($("#maxLength").text()); // 문자열임 -> 숫자로 변경
  //   console.log(length);
  if (length > maxLength) {
    target.val(target.val().substr(0, maxLength));
    // 100 이상이되면, substr로 100까지 자른것 넣기
  } else {
    $("#counter").text(length);
    // 100 이하일때는 counter가 증가해야함
  }
});

$("#userId").keyup((e) => {
  let id = $(e.target).val(); // 제이쿼리방식
  //  id = e.target.value; // 자바스크립트 방식

  const regExp = /^[a-z][a-z0-9]{3,11}$/;
  if (regExp.test(id)) {
    $("#idCheck").text("사용 가능한 아이디입니다.").css("color", "green");
  } else if (id === "") {
    $("#idCheck").text("");
  } else {
    $("#idCheck").text("사용 불가능한 아이디입니다.").css("color", "indianred");
  }
});

// 3. trigger() 메서드
// trigger : .area나 #btn을 눌렀을 때 모두 #counter2가 올라가도록 (두개의 작업)
/*
let count = 0;
$("#area3").click(() => {
  count = ++count;
  $("#counter2").text(count);
});
*/
$("#area3").click(() => {
  let counter = $("#counter2");
  let current = parseInt(counter.text());
  counter.text(++current);
});
$("#btn").click(() => {
  $("#area3").trigger("click");
  // #area3의 click 이벤트 동일하게 사용
});

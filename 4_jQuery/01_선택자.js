// window.addEventListener("DOMContentLoaded", function () {});
// $(document).ready(function () {

$(function () {
  // 1. 태그 선택자
  // 자바스크립트 방식
  const pList = document.querySelectorAll("p");
  for (p of pList) {
    p.style.color = "white";
    p.style.backgroundColor = "tomato";
  }

  // 제이쿼리 방식
  $("h5").css("color", "teal").css("background-color", "lightgrey");

  // 2. 아이디 선택자
  // 자바스크립트 방식 ->  id가 id1인 글씨 색깔(color) 변경
  document.querySelector("#id1").style.color = "orange";

  // 제이쿼리 방식 -> id가 id2인 글씨 색깔 변경
  $("#id2").css("color", "crimson");

  // 3. 클래스 선택자
  // 제이쿼리 방식
  $(".item").css({ color: "white", "background-color": "slategrey" });

  // 4. 자식, 자손 선택자
  // 제이쿼리 방식
  $("ul>li").css("color", "green");
  $("ul>.ch").css("background", "lime");
  $("ul h3").css("color", "indianred");
  $("h3.ch").css("color", "violet");
  $("div h3").css("background", "khaki");

  // 5. 속성 선택자

  // 태그[속성] : 해당 태그의 속성을 가지는 요소
  $("#div1 input[class]").css("background", "turquoise"); // input 중 class를 가진 요소 선택

  // 태그[속성=값] : 특정 속성과 값이 '일치'하는 요소
  $("#div1 input[type=text]").val("change value"); // type이 text인 요소 선택 -> val(내용입력)

  // 태그[속성*=값] : 해당 속성의 값을 '포함'하는 요소
  $("#div1 input[class*=st3]").css({ width: "100px", height: "100px" }); // 클래스 중 st3가 포함된 요소 선택

  // 태그[속성~=값] : '공백을 포함한' 속성값이 일치하는 요소
  $("#div1 input[class~=test1]").val("123456789");

  // 태그[속성^=값] : 지정한 속성값으로 '시작'하는 요소
  $("#div1 input[type^=ra]").prop("checked", true); // prop - 속성 지정

  // 태그[속성$=값] : 지정한 속성값으로 '끝'나는 요소
  $("#div1 input[type$=box]").prop("checked", true); // 미리 체크되어있게 지정

  // 태그 [속성!=값] : 해당 속성값을 갖지 않는 요소
  $("#div1 input[type != text]").css("color", "yellow");

  // 6. 입력 양식 선택자
  $("#div2 :text").css("background", "pink");
  // button -> val "버튼"
  $("#div2 :button").val("버튼");
  // checkbox -> 속성 checked
  $("#div2 :checkbox").prop("checked", true);
  // file -> 배경색 skyblue
  $("#div2 :file").css("background", "skyblue");

  // 7. 입력 양식 상태에 대한 선택자
  // input 태그 중 활성화된 요소 선택
  $("#div3 input:enabled").css("background", "lavender");
  // input 태그 중 비활성화된 요소 선택
  $("#div3 input:disabled").css("background", "lightcyan");
  // input 태그 중 체크된 요소 선택
  $("#div3 input:checked").css({ width: "30px", height: "30px" });

  // checkbox에 check될때 사이즈가 커지기 -> change 이벤트 핸들러 등록
  $("#div3 :checkbox").change(function () {
    // 핸들러라서 콜백 함수 넣어줘야함
    console.log(this); // 태그 자체 선택
    // console.log($(this)); // 이벤트 역할..?
    let checkbox = $(this);
    console.log(checkbox.prop("checked")); // 체크 여부 true/false
    console.log(checkbox.attr("checked")); // attr = attribute 속성 자체 여부 가져오는 기능 : 게임은 <input type="checkbox" checked />으로 이미 checked가 있어서 checked가 뜸 / 음악은 없어서 undefined
  });

  // select에 change 이벤트 핸들러 등록
  $("#national").change(function () {
    // select태그의 option 태그 중, 선택된 요소 선택 (기본 선택지로 되돌아가지 x)
    let value = $("select > option:selected").val();
    // id가 result인 input값으로 추가
    $("#result").val(value);
  });
});

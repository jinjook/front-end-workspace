// 1. Content 설정
console.log($("#content1").html()); // <a>네이버</a>
console.log($("#content3").text()); // 네이버

// content1의 내용(태그 + 텍스트)을 content2에 추가
$("#content2").html($("#content1").html()); // <h4 id="content2"><a>네이버</a></h4>

// content3의 내용(텍스트)을 content4에 추가
$("#content4").text($("#content3").text()); // <h4 id="content4">네이버</h4>

// 2. 요소 추가
// 자바스크립트
const p = document.createElement("p");
p.innerHTML = "자바스크립트로 추가";

document.querySelector("#area1").appendChild(p);

// 제이쿼리
const p2 = $("<p>").html("제이쿼리로 추가");

// $(A).append(B) : A 요소의 '자식 요소'로 B 요소를 '뒷부분'에 추가
$("#area1").append(p2);

// $(A).prepend(B) : A 요소의 '자식 요소'로 B 요소를 '앞부분'에 추가
$("#area1").prepend("<span>prepend</span>");

// $(A).after(B) : A 요소의 '형제 요소'로 B 요소를 '뒷부분'에 추가
$("#area1").after("<span>after</span>");

// $(A).before(B) : A 요소의 '형제 요소'로 B 요소를 '앞부분'에 추가
$("#area1").before("<span>before</span>");

// $(B).appendTo(A) : B 요소를 A 요소의 '자식 요소'로 '뒷부분'에 추가
$("<span>appendTo</span>").appendTo("#area2");

// $(B).prependTo(A) : B 요소를 A 요소의 '자식 요소'로 '앞부분'에 추가
$("<span>prependTo</span>").prependTo("#area2");

// $(B).insertAfter(A) : B 요소를 A 요소의 '형제 요소'로 '뒷부분'에 추가
$("<span>insertAfter</span>").insertAfter("#area2");

// $(B).insertBefore(B) : B 요소를 A 요소의 '형제 요소'로 '앞부분'에 추가
$("<span>insertBefore</span>").insertBefore("#area2");

// 3. 요소 복제
$(".item").hover(
  /*(event) => {
    console.log("event1 : " + event.type); // event1 : mouseenter
    console.log(event.target); // <div id="item1" class="item"></div>
    $(event.target).addClass("bg-indianred");
  },
  (event) => {
    console.log("event2 : " + event.type); // event2 : mouseleave
    $(event.target).removeClass("bg-indianred");
  }*/
  (event) => {
    console.log("event3 :" + event.type);
    $(event.target).toggleClass("bg-indianred");
  }
);

$("#btn1").click(() => {
  //   $("#clone-result").html($("#item1")); 복제가 아니라 이동함

  // 이벤트까지 복제하려면 매개값 true를 전달해야함 (기본값 : false)
  let item = $("#item1").clone(true);
  $("#clone-result").html(item);
});

// 4. 요소 제거
// remove ->  이벤트까지 삭제
$("#remove").click(() => {
  let item = $("#item2").remove();
  $("#remove-result").append(item);
});

// detach
$("#detach").click(() => {
  let item = $("#item2").detach();
  $("#remove-result").append(item);
});

// empty -> 상위 부모를 비워버린다
$("#empty").click(() => {
  $("#remove-test").empty();
});

// 5. 배열 관리
let array = [
  { name: "구글", link: "http://google.com" },
  { name: "네이버", link: "http://naver.com" },
  { name: "다음", link: "http://daum.net" },
];

// 자바스크립트
array.forEach((element, index, origin) => {
  console.log(element);
  console.log(index);
  console.log(origin);
  console.log("javascript -----");
});

// 제이쿼리
$(array).each((index, element) => {
  console.log(element);
  console.log(element.name);
  console.log(element.link);
  console.log(index);
  console.log("jQuery -----");
});

let output = "";
$(array).each((index, element) => {
  const a = `<h4><a href="${element.link}">${element.name}</a></h4>`;

  // append 방식
  //   $("#each-test").append(a);

  // html 방식
  output += a;
});
$("#each-test").html(output);

/*
let output = "";
$(array).each((index, element) => {
  const list = $("<h4>").html(
    "<a href=" + element.link + ">" + element.name + "</a>"
  );
  $("#each-test").append(list);
});*/

//바뀌는 부분을 선택해서 가져와야함 -> 이미지들, span태그
const images = document.querySelectorAll(".images img");
const span = document.querySelector("#click span");
let count = 0;

function clickHandler() {
  //1-1 랜덤 만들기 : 랜덤 3개가 필요 -> 배열로 바뀌면서 이미지는 안나오게 됨. - > random도 배열로 표기해줘야함
  const random = [
    Math.floor(Math.random() * 3) + 1,
    Math.floor(Math.random() * 3) + 1,
    Math.floor(Math.random() * 3) + 1,
  ];
  //1. 이미지 랜덤 . 1-2. {random}에 i 를 추가
  for (let i = 0; i < images.length; i++) {
    images[i].setAttribute("src", `../resources/family${random[i]}.jpg`); //(바꾸고자 하는 속성, 바꾸려는 속성 값)
  }

  //2. 클릭 숫자 증가
  span.innerHTML = ++count;

  //3. 조건 : 이미지 3개가 모두 일치할때 => 결과 텍스트 나오면서 버튼 클릭 안되게 구현
  if (random[0] === random[1] && random[1] === random[2]) {
    result.innerHTML = "Congratulation!! Press restart to play again~!!";
    click.setAttribute("disabled", "disabled");
  }
}

function restartHandler() {
  // 이미지 처음에 셋팅했던 이미지로 변경
  for (let i = 0; i < 3; i++)
    images[i].setAttribute("src", `../resources/family${i + 1}.jpg`);
  // 숫자는 다시 0으로 셋팅하고 span 태그 값 비우기
  count = 0;
  span.innerHTML = "";
  // 아래 텍스트도 값 비우기
  result.innerHTML = "";
  // 버튼의 disabled 삭제 -> 속성 삭제는 removeAttribute
  click.removeAttribute("disabled");
  //location.reload();
}

click.addEventListener("click", clickHandler);
restart.addEventListener("click", restartHandler);

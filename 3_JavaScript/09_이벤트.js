// DOMContentLoaded : DOM 구조가 로드되고 실행!
// window.addEventListener("DOMContentLoaded", function () {});
const h1 = document.querySelector("h1");
h1.onmouseenter = function () {
  h1.style.backgroundColor = "purple";
};
h1.onmouseleave = function () {
  h1.style.backgroundColor = "pink";
};

//h1.addEventListener("이벤트명", 이벤트가 발생했을 때 일어날 함수 = 이벤트 객체); - 이벤트를 추가하고 싶을때 이것만 기억해도 됨
h1.addEventListener("click", function () {
  h1.style.backgroundColor = "skyblue";
});

const img = document.querySelectorAll(".container img");

//이미지마다 이벤트 걸려면 반복문 필요!
/*img[0].addEventListener("click", function () {
  img[0].style.display = "none";
});*/
/*
for (let i = 0; i < 6; i++) {
  img[i].addEventListener("click", function () {
    img[i].style.display = "none";
  });
}*/
/*
for (const i in img) {
  img[i].addEventListener("click", function (e) {
    e.currentTarget.style.display = "none";
  });
}*/
/*
for (const item of img) {
  item.addEventListener("click", function (e) {
    e.currentTarget.style.display = "none";
  });
}*/

const container = document.querySelector(".container");

/*
container.addEventListener("click", function (e) {
  console.log(e.target); // currentTarget : .container, target = img
  if (e.target !== e.currentTarget) {
    e.target.style.display = "none";
  }
});*/

function removeHandler(e) {
  if (e.target !== e.currentTarget) {
    e.target.style.display = "none";
  }
}
container.addEventListener("click", removeHandler);

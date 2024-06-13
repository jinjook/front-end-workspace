/*const click = document.querySelector("#click");
const img = document.querySelectorAll(".container img");
const span = document.querySelector("span");

click.addEventListener("click", fuction() {
  const i = Math.floor(Math.random() * 3 + 1);
  console.log(`img${i}`);}
  img[0].style.display = img[i]    
);

span.innerHTML = `${index}`
if (i===j===k) {
    result.style.display="Congratulation!! Press restart to play again~!!"
} else { result.style.display="none"}*/

const img = document.querySelectorAll(".container img");
const span = document.querySelector("#click span");

let count = 0;

function clickHandler() {
  const random = [
    Math.floor(Math.random() * 3) + 1,
    Math.floor(Math.random() * 3) + 1,
    Math.floor(Math.random() * 3) + 1,
  ];
  for (let i = 0; i < img.length; i++) {
    img[i].setAttribute("src", `../resources/family${random[i]}.jpg`);
  }
  span.innerHTML = ++count;

  if (random[0] === random[1] && random[1] === random[2]) {
    click.setAttribute("disabled", "disabled");
    result.innerHTML = "Congratz!";
  }
}

function restartHandler() {
  for (let i = 0; i < img.length; i++) {
    img[i].setAttribute("src", `../resources/family${i + 1}.jpg`);
    span.innerHTML = "";
    count = 0;
    result.innerHTML = "";
    click.removeAttribute("disabled");
  }
}

click.addEventListener("click", clickHandler);
restart.addEventListener("click", restartHandler);

const regExp1 = /^[a-zA-Z][a-zA-Z0-9]{3,11}$/;

//id는 그냥 쓸 수 있음. 그 외는 document.querySelector로 가져와야함
//idrules = #id +span으로도 가능

id.addEventListener("input", function () {
  if (regExp1.test(id.value)) {
    idrules.innerHTML = "OK";
    idrules.style.color = "green";
    //e.target.nextElementSibling.style.color="green"
    //e.target.nextElementSibling.innerHTML = "ok" 로도 가능
  } else {
    idrules.innerHTML =
      "첫글자는 반드시 영문자로, 그리고 영문자, 숫자 포함하여 총 4~12자로             입력하시오.";
    idrules.style.color = "red";
  }
});

const regExp2 = /^[!-~]{8,15}$/;
///^\S{8,15}$/;
// [!-~]{8,15} : 아스키 코드 사용
pw.addEventListener("input", function () {
  if (regExp2.test(pw.value)) {
    pwrules.innerHTML = "OK";
    pwrules.style.color = "green";
  } else {
    pwrules.innerHTML =
      "영문자, 숫자, 특수문자 포함하여 총 8~15자로 입력하시오.";
    pwrules.style.color = "red";
  }
});

pw2.addEventListener("input", function () {
  if (pw2.value === pw.value) {
    pw2rules.innerHTML = "OK";
    pw2rules.style.color = "green";
  } else {
    pw2rules.innerHTML = "위의 비밀번호와 일치하게 입력하시오.";
    pw2rules.style.color = "red";
  }
});

const regExp3 = /^[가-힣]{2,}$/; // 한글기재!

name1.addEventListener("input", function () {
  if (regExp3.test(name1.value)) {
    name1rules.innerHTML = "OK";
    name1rules.style.color = "green";
  } else {
    name1rules.innerHTML = "한글로만 이루어져야되며 2글자 이상으로 입력하시오.";
    name1rules.style.color = "red";
  }
});

const regExp4 = /^[!-~]+@[!-~]+$/; // abc123!@gmail.com
//(영어나숫자여러문자, 길이 상관없이= + 사용)@(앞과 동일+)
email.addEventListener("input", function () {
  if (regExp4.test(email.value)) {
    emailrules.innerHTML = "OK";
    emailrules.style.color = "green";
  } else {
    emailrules.innerHTML = "이메일 형식에 맞춰서 입력하시오.";
    emailrules.style.color = "red";
  }
});

reset.addEventListener("click", function () {
  location.reload();
});

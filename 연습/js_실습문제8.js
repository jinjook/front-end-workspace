id.addEventListner("input", function () {
  const regExp = /^[a-zA-Z][a-zA-Z0-9]{3,11}$/;

  if (regExp.test(id.value)) {
    idrules.innerHTML = "OK";
    idrules.style.color = "green";
  } else {
    idrules.innerHTML =
      "첫글자는 반드시 영문자로, 그리고 영문자, 숫자 포함하여 총 4~12자로 입력하시오.";
    idrules.style.color = "red";
  }
});

pw.addEventListner("input", function () {
  const regExp = /^[!-~]{8,15}$/;

  if (regExp.test(pw.value)) {
    pwrules.innerHTML = "OK";
    pwrules.style.color = "green";
  } else {
    pwrules.innerHTML =
      "영문자, 숫자, 특수문자 포함하여 총 8~15자로 입력하시오.";
    pwrule.style.color = "red";
  }
});

pw2.addEventListner("input", function () {
  if (pw2.value === pw.value) {
    pw2rules.innerHTML = "Ok";
    pw2rules.style.color = "green";
  } else {
    pw2rules.innerHTML = "위의 비밀번호와 일치하게 입력하시오.";
    pw2rules.style.color = "red";
  }
});

name1.addEventListner("input", function () {
  const regExp = /^[가-힣]{2,}$/;

  if (regExp.test(name1.value)) {
    name1rules.innerHTML = "OK";
    name1rules.style.color = "green";
  } else {
    name1rules.innerHTML = "한글로만 이루어져야되며 2글자 이상으로 입력하시오.";
    name1rules.style.color = "red";
  }
});

email.addEventListner("input", function () {
  const regExp = /^[!-~]+@[!-~]+$/;

  if (regExp.test(email.value)) {
    emailrules.innerHTML = "OK";
    emailrules.style.color = "green";
  } else {
    emailrules.innerHTML = "이메일 형식에 맞춰서 입력하시오.";
    emailrules.style.color = "red";
  }
});

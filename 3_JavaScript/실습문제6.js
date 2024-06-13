const a = new Date("2025-01-01 00:00:00");
const now = new Date();
console.log(a - now); // 밀리세컨드
// 1초 = 밀리세컨드 / 1000
// 60초 = 1분, 60분 = 1시간, 24시간 = 1일

const day = (a - now) / 1000 / 60 / 60 / 24;
const day1 = parseInt(day);
const hr = (day - day1) * 24;
const hr1 = parseInt(hr);
const min = (hr - hr1) * 60;
const min1 = parseInt(min);
const seconds = (min - min1) * 60;
const seconds1 = parseInt(seconds);

timer.innerHTML = `${day1}d ${hr1}h ${min1}m ${seconds1}s`;
//1. setInterval로 설정하면 새로고침 +1초 후 나타나기때문에 밖에다가 한번 더 작성
setInterval(() => {
  const a = new Date("2025-01-01 00:00:00");
  const now = new Date();

  const day = (a - now) / 1000 / 60 / 60 / 24;
  const day1 = parseInt(day);
  const hr = (day - day1) * 24;
  const hr1 = parseInt(hr);
  const min = (hr - hr1) * 60;
  const min1 = parseInt(min);
  const seconds = (min - min1) * 60;
  const seconds1 = parseInt(seconds);

  timer.innerHTML = `${day1}d ${hr1}h ${min1}m ${seconds1}s`;
}, 1000);

//2. 두번 반복할 필요 없이 함수로 사용하기
function count() {
  const a = new Date("2025-01-01 00:00:00");
  const now = new Date();
  const second = Math.floor(((a - now) / 1000) % 60);
  const minute = Math.floor(((a - now) / 1000 / 60) % 60);
  const hour = Math.floor(((a - now) / 1000 / 60 / 60) % 24);
  const dayy = Math.floor((a - now) / 1000 / 60 / 60 / 24);

  clock.innerHTML = `${dayy}일 ${hour}시 ${minute}분 ${String(second).padStart(
    2,
    "0"
  )}초`;
  // 09초로 설정 : String으로 숫자-> 문자열로 변경 후
  // padStart : 공간설정 (공간 2개, 빈 공간은 0으로 설정)
}

count();

setInterval(count, 1000);

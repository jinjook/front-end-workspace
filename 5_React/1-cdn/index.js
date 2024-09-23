// import { a, b, plus, minus } from "./calculator.js"; // 가져오기
// import * as calculator from "./calculator.js";
import calculator from "./calculator.js"; // default 사용 시, * 필요 없음
import lodash from "lodash";

console.log(calculator.a, calculator.b, calculator.plus(), calculator.minus());

const arr = [1, 1, 1, 1, 4, 4, 3, 3, 6, 7, 1, 3];
const unique = lodash.uniqBy(arr); // 중복 제거

console.log(unique);

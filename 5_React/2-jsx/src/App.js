import { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0); // [변수명, 변화되는 함수] = useState(시작할때 보이는 변수 값)
  const plus = () => {
    setCount(count + 10);
  };

  const minus = () => {
    setCount(count - 10);
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div>
      <h1>Total Clicks : {count}</h1>
      <button onClick={plus}>+10</button>
      <button onClick={minus}>-10</button>
      <button onClick={reset}>reset</button>
    </div>
  );
};

export default App;

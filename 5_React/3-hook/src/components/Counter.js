import { useState, useEffect, useRef } from "react";
import Btn from "./Btn";

const Counter = () => {
  const [count, setCount] = useState(0); // [변수명, 변화되는 함수] = useState(시작할때 보이는 변수 값)
  const updateCheckRef = useRef(false);
  
  const plus = () => {
    setCount(count + 10);
  };

  const minus = () => {
    setCount(count - 10);
  };

  const reset = () => {
    setCount(0);
  };

  // 마운트 
  useEffect(() => {
    console.log("mount");
  }, []);

  // 업데이트
  useEffect(() => {
    console.log(updateCheckRef); // false -> 업데이트 시점 잡기 위해 사용
    if(!updateCheckRef.current){
        updateCheckRef.current = true;
        return;
    } else {
        console.log("count update");
    }
  }, [count]);

  // 언마운트
  useEffect(() => {
    // 들어오자마자 바로 리턴
    return () => {
        console.log("unmount");
    }
  }, []);

  return (
    // click, text => just 명시
    <>
      <h1>Total Clicks : {count}</h1>
      <Btn click={plus} text="+10" /> 
      <Btn click={minus} text="-10" /> 
      <Btn click={reset} text="reset" /> 
    </>
  );
};

export default Counter;

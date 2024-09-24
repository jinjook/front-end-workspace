import { useState, useRef } from "react";
import Btn from "./Btn";

const InputText = () => {
   const [text, setText] = useState("");
   const textRef = useRef(); // input에 참조 
   
   const write = (e) => {
    setText(e.target.value);
   };
   
   const complete = () => {
    alert(textRef.current.value); // 참조하는 것의 현재 값(=text)
    textRef.current.value = "" ; // setText("")와 동일
    textRef.current.focus();
   };
   
    return (
    <>
        <input ref={textRef} onChange={write} value={text}/>
        <Btn click={complete} text="작성 완료" />
    </>
    );
};

export default InputText;

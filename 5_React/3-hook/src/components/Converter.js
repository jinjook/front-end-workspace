import { useState, useEffect, } from "react";
import Btn from "./Btn";


const Converter = () => {
    const [time, setTime] = useState("");
    const [boolean, setBoolean] = useState(false);
    const [text, setText] = useState("Minutes=>Hours");

    const change = (e) => {
        setTime(e.target.value);
    };

    const reset = () => {
        setTime("");
    };

    const invert = () => {
        setBoolean(!boolean);
        reset();
    };

    useEffect(() => {
        if(boolean){
            setText("Hours=>Minutes");
        } else {
            setText("Minutes=>Hours"); 
        }
    },[boolean]); // boolean값 바뀔 때

    return (
        <>
            <h1>Time Converter</h1>
            <p>Minutes : <input type="number" placeholder="Minutes" disabled={boolean} onChange={change} value={boolean ? time*60 : time} /></p>
            <p>Hours : <input type="number" placeholder="Hours" disabled={!boolean} onChange={change} value={boolean ? time : Math.floor(time / 60)} /></p>
            <Btn click={reset} text="Reset" />
            <Btn click={invert} text={text} />
        </>
    );
};

export default Converter;
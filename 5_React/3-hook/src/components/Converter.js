import { useState, useEffect, } from "react";
import Btn from "./Btn";


const Converter = () => {
    const [time, setTime] = useState();
    const [boolean, setBoolean] = useState(true);
    const [change, setChange] = useState("Hours=>Minutes");

    const minutes = () => {
       
    };

    const hours = () => {
        
    };

    const reset = () => {
        setTime("");
    };

    const changeBtn = () => {
        console.log(boolean);
        if(boolean === true){
            setBoolean(false);
        } else {
            setBoolean(true);
        }
    };

    useEffect(() => {
        if(boolean === false){
            setChange("Minutes=>Hours"); 
            
        } else {
            setChange("Hours=>Minutes");
        }
    },[boolean]);

    return (
        <>
            <h1>Time Converter</h1>
            <p>Minutes : <input onChange={minutes} value={time} /></p>
            <p>Hours : <input onChange={hours} value={time} /></p>
            <Btn click={reset} text="Reset" />
            <Btn click={changeBtn} text={change} />
        </>
    );
};

export default Converter;
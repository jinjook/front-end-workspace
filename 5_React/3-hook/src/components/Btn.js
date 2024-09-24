/* 
props : properties의 약자 -> 부모에서 자식으로만 보낼 수 있음
const Btn = (props) => {
    return <button onClick={props.click}>{props.text}</button>;
}
*/

const Btn = ({click, text}) => {
    return <button onClick={click}>{text}</button>;
}

export default Btn;
import { Link } from "react-router-dom";
// Link : 페이지 교체. 새로고침이 아님

const Header = () => {
    return (
    <>
        <ul>
            <li>
                <Link to={"/"}>Home</Link>
            </li>
            <li>
                <Link to={"/create"}>Create</Link>
            </li>
            <li>
                <Link to={"/detail"}>Detail</Link>
            </li>
        </ul>
    </>
    );
}
export default Header;
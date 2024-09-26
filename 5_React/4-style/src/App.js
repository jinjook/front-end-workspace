import "./assets/App.css";
import module from "./assets/App.module.css";
import "./assets/App.scss";
import styled from "styled-components";

// Styled Components
const StyledDiv = styled.div`
  background-color: darkgreen;
  color: wheat;
  text-align: center;

  &:hover {
    background-color: wheat;
    color: darkgreen
  }

  h1 {
    font-size: 25px;
    padding: 20px;
  }
`;

const App = () => {
  return (
    <>
      {/* 인라인 스타일 */}
      <div style={{
        backgroundColor: "teal",
        color: "white",
        textAlign: "center"
      }}>
        <h1>Inline Style</h1>
      </div>

      {/* CSS 파일 */}
      <div className="css-style">
        <h1>CSS File Style</h1>
      </div>

      {/* CSS 모듈 */}
      <div className={module.moduleStyle}>
        <h1>CSS Module Style</h1>
      </div>

      {/* SCSS */}
      <div className="scss-style">
        <h1>SCSS Style</h1>
      </div>

      {/* Styled Components */}
      <StyledDiv>
        <h1>Styled Components</h1>
      </StyledDiv>
    </>
  )
};
export default App;
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
body {
    margin: 0;
}
`;

export const HeaderContainer = styled.header`
  @import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap");
  font-family: "Inter", sans-serif;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  padding: 10px 20px;
  background: ${(props) => (props.blue ? "#123571" : "rgba(0, 0, 0, 0.4)")};
  ${(props) => (props.blue ? null : "backdrop-filter: blur(20px);")}
  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    a {
      text-decoration: none;
      color: white;
      font-size: 30px;
      font-weight: 700;
    }
    img {
      height: 48px;
      width: 48px;
      border-radius: 100%;
    }
    button {
      padding: 0;
      border: 0;
      border-radius: 100%;
      display: flex;
      align-items: center;
    }
  }
  @media (min-width: 768px) {
    padding: 10px 128px;
  }
`;

import styled from "styled-components";

export const Header = styled.div`
  display: flex;
  margin: 0 auto;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  background: rgba(0, 0, 0, 0.4);
  border-radius: 8px;
  padding: 1vh 20px;
  color: white;
  height: 7vh;
  width: 80vw;
  margin: 2vh 10vw 0 10vw;
  position: sticky;
  top: 0;
  @media screen and (max-width: 700px) {
    position: fixed;
    justify-content: center;
    margin: 0;
    border-radius: 0;
    width: 100%;
  }
`;

export const Logo = styled.img`
  height: 80%;
`;

export const Nav = styled.nav`
  width: 60%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const Smooth = styled.a`
  cursor: pointer;
  color: white;
  text-decoration: none;
  :visited {
    color: white;
  }
  :hover {
    color: black;
  }
`;

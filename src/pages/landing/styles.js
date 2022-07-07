import styled from "styled-components";
import homeImg from "../../assets/imgs/HomeImg.png";

export const First = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: #246097;
  padding: 9vh 10vw 0 10vw;
  margin: -11vh 0 0 0;
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

export const Container = styled.div`
  height: 70vh;
  display: flex;
  margin: 0 auto;
  margin-top: 30px;
  width: 82vw;
  justify-content: space-between;
`;

export const ImgBox = styled.section`
  width: 50%;
  height: 70vh;
  background: url(${homeImg}) no-repeat center;
  background-size: 70%;
`;

export const FormBox = styled.section`
  display: flex;
  align-items: center;
  width: 50%;
  padding: 0 10%;
`;

export const StyledForm = styled.form`
  width: 100%;
  color: white;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  gap: 20px;
  background-color: rgba(255, 255, 255, 0.3);
  padding-top: 15px;
  padding-bottom: 30px;
  border-radius: 12px;
  padding: 2vh 10%;
  p {
    font-size: 8px;
  }
`;

export const GoDowntSection = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 20%;
  margin: 0 40%;
  color: white;
  text-decoration: none;
  :visited {
    color: white;
  }
  :hover {
    color: black;
  }
`;

export const P = styled.p`
  margin: 0 0 1vh 0;
`;
export const Second = styled.div`
  height: 40vh;
  background: #eef5ff;
  padding: 5vh 10vw 0 10vw;
  color: #123571;
`;

export const SecondTitle = styled.p`
  font-weight: 600;
  font-size: 2rem;
  margin: 0 0 1vh 0;
`;

export const SecondText = styled.p`
  font-weight: 400;
  font-size: 1.5rem;
  margin: 0 0 1vh 0;
`;

export const Third = styled.div``;

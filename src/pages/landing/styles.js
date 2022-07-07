import styled from "styled-components";
import homeImg from "../../assets/imgs/HomeImg.png";

export const First = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: #246097;
  padding: 9vh 10vw 0 10vw;
  margin: -11vh 0 0 0;
`;
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
    position:: fixed;
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

export const Container = styled.div`
  height: 70vh;
  display: flex;
  margin: 0 auto;
  margin-top: 30px;
  width: 82vw;
  justify-content: space-between;
  @media screen and (max-width: 700px) {
  }
`;

export const ImgBox = styled.section`
  width: 50%;
  height: 70vh;
  background: url(${homeImg}) no-repeat center;
  background-size: 70%;
  @media screen and (max-width: 700px) {
    position: absolute;
    width: 120vw;
  }
`;

export const FormBox = styled.section`
  display: flex;
  align-items: center;
  width: 50%;
  padding: 0 10%;
  @media screen and (max-width: 700px) {
    position: absolute;
    left: 0;
    right: 0;
    width: 100vw;
    z-index: 1;
  }
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
  @media screen and (max-width: 700px) {
    background-color: rgba(0, 0, 0, 0.3);
    backdrop-filter: blur(20px);
    margin-top: 48px;
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
  @media screen and (max-width: 700px) {
    width: auto;
    margin: 0;
  }
`;

export const P = styled.p`
  margin: 0 0 1vh 0;
`;
export const Second = styled.div`
  height: 40h;
  background: #eef5ff;
  padding: 5vh 10vw 0 10vw;
  color: #123571;
  @media screen and (max-width: 700px) {
    height: auto;
  }
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

export const PopularCampaigns = styled.div`
  width: 310px;
  ul {
    display: flex;
  }
  img {
    height: 200px;
    width: auto;
  }
`;

export const Third = styled.div``;

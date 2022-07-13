import styled from "styled-components";
import device from "../../style/devices";

export const DivMain = styled.div`
  background: ${({theme}) => theme.primary[950]};
`;

export const First = styled.div`
  height: 100vh;
  width: 100vw;
  background: ${({theme}) => theme.primary.gradient};
  padding: 9vh 10vw 0 10vw;
  @media (${device.laptop}) {
    margin: -11vh 0 0 0;
  }
`;
export const Header = styled.div`
  display: flex;
  margin: 0 auto;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  background: ${({theme}) => theme.gray[700]}95;
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
    width: 100vw;
    margin: 0;
    padding: 0;
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
  background: url(${(props) => props.background}) no-repeat center;
  background-size: 70%;
  @media screen and (max-width: 700px) {
    position: absolute;
    width: 120vw;
    display: none;
  }
  @media (${device.laptop}) {
    display: flex;
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
  background-color: ${({theme}) => theme.primary[950]}30;
  padding-top: 15px;
  padding-bottom: 30px;
  border-radius: 12px;
  padding: 2vh 10%;
  p {
    font-size: 8px;
  }
  @media screen and (max-width: 700px) {
    background-color: ${({theme}) => theme.gray[700]}30;
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
  background: ${({theme}) => theme.primary[950]};
  padding: 5vh 10vw 0 10vw;
  color: ${({theme}) => theme.primary[100]};
  display: grid;
  grid-template-columns: 60% 40%;
  align-items: center;
  justify-content: center;
  height: auto;
  @media screen and (max-width: 700px) {
    display: flex;
    flex-direction: column-reverse;
  }
`;

export const Third = styled.div`
  background: ${({theme}) => theme.primary[950]};
  padding: 0 10vw 0 10vw;
  color: ${({theme}) => theme.primary[100]};
  display: grid;
  grid-template-columns: 30% 70%;
  align-items: center;
  justify-content: center;
  height: auto;
  @media screen and (max-width: 700px) {
    display: flex;
    flex-direction: column;
  }
`;

export const Fourth = styled.div`
  background: ${({theme}) => theme.primary[950]};
  padding: 0 10vw 0 10vw;
  color: ${({theme}) => theme.primary[100]};
  margin: 3vh 0 0 0;
`;

export const ImgBoxChilds = styled.div`
  width: 100%;
  height: 40vh;
  background: url(${(props) => props.background}) no-repeat center;
  background-size: contain;
  background-position: center;
  @media screen and (max-width: 700px) {
  }
`;

export const Text = styled.div``;

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

export const Card = styled.div`
  background: url(${(props) => props.background});
  box-shadow: inset 0 0 200px ${(props) => props.boxS};
  margin: 0 1vw 0 0;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: center;
  text-align: center;
  border-radius: 12px;
  padding: 0 2vw 2vh 2vw;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  color: ${(props) => props.textC};
  font-size: 0.6rem;
  font-weight: 900;
  height: 30vh;
  min-width: 40vw;
  cursor: pointer;
  @media (${device.laptop}) {
    height: 50vh;
    max-width: 20vw;
    min-width: 20vw;
    margin: 0 5vh;
    font-size: 1.5rem;
  }
`;

export const Title = styled.p`
  font-size: 0.8rem;
  @media (${device.laptop}) {
    font-size: ${(props) => (props.fontS !== undefined ? props.fontS : "2rem")};
  }
`;

export const ScrollBox = styled.div`
  display: flex;
  flex-direction: row;
  overflow-x: scroll;
  background-color: ${({ theme }) => theme.primary[800]};
  border-radius: 12px;
  padding: 1vh 2vh;
  width: 100%;
  @media (${device.laptop}) {
    padding: 2vh 5vh;
  }
`;

export const TeamCard = styled.div`
height: 20vh;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  border-radius: 12px;
  padding: 2vw 2vw 2vh 2vw;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  color: ${({ theme }) => theme.primary[950]};
  font-size: 1.5rem;
  font-weight: 900;
  background-color: ${({ theme }) => theme.primary[250]};
  margin: 0 2vh 0 0;
  @media (${device.laptop}) {
    height: 27vh;
    width: 20vw;

    font-size: 1.5rem;
  }
`;

export const TeamAvatar = styled.div`
  background: url(${(props) => props.background});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 10vh;
  width: 10vh;
  border-radius: 50%;
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 1;
  grid-row-end: 4;
  margin: 0 0 2vh 0;
  @media (${device.laptop}) {
    margin: 0;
  }
`;

export const Alin = styled.a`
  grid-column-start: 2;
  grid-column-end: 3;
  grid-row-start: 2;
  grid-row-end: 3;
  color: ${({ theme }) => theme.primary[950]};
`;

export const Agit = styled.a`
  grid-column-start: 3;
  grid-column-end: 4;
  grid-row-start: 2;
  grid-row-end: 3;
  color: ${({ theme }) => theme.primary[950]};
  :visited {
    color: ${({ theme }) => theme.primary[850]};
  }
`;

export const DivLink = styled.div`
  height: 10vh;
  width: 20vh;
  text-align: center;
  justify-content: center;
  display: grid;
  grid-template-columns: 60% 20% 20%;
  grid-template-rows: 30% 40% 30%;
  align-items: center;
`;

import styled from "styled-components";
import homeImg from "../../assets/imgs/HomeImg.png";

export const Fundo = styled.div`
  height: 100vh;
  background-color: #246097;
  padding: 20px;
`;
export const Header = styled.div`
  display: flex;
  margin: 0 auto;
  justify-content: space-between;
  align-items: center;
  width: 80vw;
  background-color: rgba(0, 0, 0, 0.4);
  border-radius: 8px;
  padding: 10px 20px;
  color: white;
  margin-top: 20px;

  ul {
    display: flex;
    list-style: none;
    gap: 25px;
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
  width: 60%;
  height: 70vh;
  background: url(${homeImg}) no-repeat center;
  background-size: 70%;
`;

export const FormBox = styled.section`
  display: flex;
  align-items: center;
  width: 40%; ;
`;

export const StyledForm = styled.form`
  width: 80%;
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

  input {
    width: 80%;
    padding: 15px;
  }

  p {
    font-size: 8px;
  }
`;

//DivMain, DivHeader, DivForm, FormHeader, BtnBack, P, Form, FormTitle
import styled from "styled-components";

export const DivMain = styled.div`
  background: linear-gradient(114.83deg, #246097 0%, #0a2260 99.64%);
  height: 100vh;
  width: 100vw;
`;

export const DivHeader = styled.div`
  background: rgba(0, 0, 0, 0.4);
  height: 7vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const DivForm = styled.div`
  width: 35%;
  margin: 8% 32.5% 0 32.5%;
  display: flex;
  flex-direction: column;
  color: #d9d9d9;
  font-size: 1.5rem;
`;

export const FormHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 0 0 2vh 0; ;
`;

export const BtnBack = styled.button`
  background: #cae9ff;
  color: #123571;
  border-radius: 3px;
  border: 1px solid rgba(255, 255, 255, 0.5);
  padding: 10% 25%;
  font-size: 1.5rem;
  font-weight: bolder;
  cursor: pointer;
  :hover {
    background: #82c3ff;
  }
`;

export const P = styled.p``;

export const Form = styled.form`
  background: rgba(255, 255, 255, 0.3);
  border: 1px solid rgba(255, 255, 255, 0.31);
  padding: 2vh 2vw 1vh 2vw;
  border-radius: 12px;
  * {
    margin: 0 0 2vh 0;
  }
  :last-child {
    margin: 0;
  }
`;

export const FormTitle = styled.p`
  text-align: center;
  margin: 0 0 1vh 0;
`;

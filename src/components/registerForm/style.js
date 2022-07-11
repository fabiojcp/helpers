//DivMain, DivHeader, DivForm, FormHeader, BtnBack, P, Form, FormTitle
import styled from "styled-components";
import device from "../../style/devices";

export const FormTitle = styled.p`
  text-align: center;
  margin: 0 0 1vh 0;
`;

export const DivPassword = styled.div`
  display: flex;
  flex-direction: column;
  @media (${device.tablet}) {
    flex-direction: row;
    div:nth-child(1) {
      margin: 0 1vw 0 0;
    }
  }
`;

export const Select = styled.select`
  font-weight: bold;
  color: white;
  text-align: left;
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: ${({ theme }) => theme.primary[950]}40;
  padding: 15px 10%;
  border-radius: 8px;
  border: 2px solid white;
  cursor: pointer;
  font-weight: 400;
  font-size: 1.5rem;
`;

export const Option = styled.option`
  color: black;
  background-color: ${({ theme }) => theme.primary[950]}40;
  backdrop-filter: blur(0.6);
  backdrop-filter: calc(60%);
`;

export const Bio = styled.div`
  font-weight: bold;
  color: white;
  text-align: left;
  display: flex;
  flex-direction: column;
  width: 100%;

  textarea {
    border-radius: 8px;
    border: 2px solid white;
    background-color: ${({ theme }) => theme.primary[950]}40;
    padding: 15px 10%;
    resize: none;
  }
  label {
    margin: 0 0 10px 0;
  }
`;

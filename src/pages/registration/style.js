import styled, { keyframes } from "styled-components";
import device from "../../style/devices";

const animation = keyframes`
    from{
        opacity: 0;
        transform: scale(0.6)
    }
    to{
        opacity: 1;
        transform: scale(1)
    }
`;
export const DivMain = styled.div`
  background: ${({ theme }) => theme.primary.gradient};
  min-height: 100vh;
  width: 100vw;
  padding: 0 0 8vh 0;
`;

export const DivHeader = styled.div`
  background: ${({ theme }) => theme.primary[950]}40;
  height: 7vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const DivForm = styled.div`
  animation: ${animation} 1s;
  width: 80%;
  margin: 8% 10% 0 10%;
  font-size: 1rem;

  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.gray[400]};

  @media (${device.desktop}) {
    width: 40%;
    margin: 8% 30% 0 30%;
    font-size: 1.5rem;
  }
`;

export const FormHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 0 0 2vh 0; ;
`;

export const BtnBack = styled.button`
  background: ${({ theme }) => theme.primary[900]};
  color: ${({ theme }) => theme.primary[100]};
  border-radius: 3px;
  border: 1px solid ${({ theme }) => theme.primary[900]};
  padding: 10% 25%;
  font-size: 1.5rem;
  font-weight: bolder;
  cursor: pointer;
  :hover {
    background: ${({ theme }) => theme.primary[800]};
  }
`;

export const P = styled.p`
  @media (max-width: 2559px) {
    font-size: 1.4rem;
  }
  @media (max-width: 1024px) {
    width: 50%;
    font-size: 1rem;
  }

  @media (${device.desktopXL}) {
    font-size: inherit;
  }
`;

export const Form = styled.form`
  background: ${({ theme }) => theme.primary[950]}50;
  border: 1px solid ${({ theme }) => theme.primary[950]}30;
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

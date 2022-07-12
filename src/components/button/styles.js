import styled from "styled-components";

export const Container = styled.button`
  background: ${({ theme }) => theme.primary[900]};
  color: ${({ theme }) => theme.primary[100]};
  border-radius: 3px;
  border: 1px solid ${({ theme }) => theme.primary[950]}50;
  padding: 15px;
  font-size: 16px;
  font-weight: bolder;
  width: 100%;
  cursor: pointer;
  :hover {
    background: ${({ theme }) => theme.primary[800]};
  }
  :disabled {
    background: ${({ theme }) => theme.gray[400]};
  }
`;

import styled from "styled-components";

export const Container = styled.div`
  font-weight: bold;
  color: white;
  text-align: left;
  display: flex;
  flex-direction: column;
  width: 100%;

  input {
    border-radius: 8px;
    border: 2px solid white;
    background-color: ${({ theme }) => theme.primary[950]}30;
    padding: 15px 10%;
  }
  label {
    margin: 0 0 10px 0;
  }
  input[type="number"]::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
`;

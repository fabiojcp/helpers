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
    background-color: rgba(255, 255, 255, 0.3);
    padding: 15px 10%; 
  }
  label {
    margin: 0 0 10px 0;
  }
`;

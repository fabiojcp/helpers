import styled from "styled-components";

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  input {
    font-size: 16px;
    padding: 3px;
    border: 2px solid #123571;
    border-radius: 6px;
  }
  textarea {
    font-size: 16px;
    padding: 3px;
    border: 2px solid #123571;
    border-radius: 6px;
    resize: none;
    font-family: Arial;
    width: 100%;
  }
  section {
    display: flex;
    justify-content: space-between;

    select {
      font-size: 16px;
      padding: 3px;
      border: 2px solid #123571;
      border-radius: 6px;
      width: 100%;
    }
  }
  div {
    display: flex;
    flex-direction: column;
    margin: 4px;
  }
`;

export const HeaderModal = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const UserBox = styled.div`
  display: flex;
  align-items: center;
  width: 45px;
  height: 45px;
  border-radius: 50%;
  background-color: white;
  overflow: hidden;
  cursor: pointer;
  img {
    height: 100%;
    width: 100%;
  }
`;

export const Type = styled.div`
  width: 50%;
`;

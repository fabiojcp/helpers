import styled, { keyframes } from "styled-components";

const animation = keyframes`
  from {
    height: 0;
    font-size: 0;
    background: transparent;
    color: transparent;
  }
  to {
    height: auto;
  }
`;

export const ModalUser = styled.div`
  animation: ${animation} 1s;
  position: absolute;
  display: flex;
  flex-direction: column;
  gap: 6px;
  right: 20px;
  background-color: #49628f;
  padding: 6px;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  z-index: 1;

  p {
    animation: ${animation} 1s;
    margin: 6px;
    color: #d9d9d9;
    font-size: 12px;
  }
  button {
    animation: ${animation} 1s;
    background-color: #ffffff30;
    border: none;
    font-family: "Inter";
    color: #d9d9d9;
    border-radius: 4px;
    text-align: initial;
    padding: 3px;
    width: 160px;
  }
  button:hover {
    background-color: #1054ba;
  }
  form {
    display: flex;
    flex-direction: column;
    gap: 6px;
  }
`;

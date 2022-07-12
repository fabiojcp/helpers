import styled, { keyframes } from "styled-components";

const animation = keyframes`
  0% {
    transform: translateY(-100%);
    transform: scale(0)

  }
  80% {
    transform: translateY(1.1);
    transform: scale(1.1)
  }
  100% {
    transform: translateY(1);
    transform: scale(1)
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

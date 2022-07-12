import styled from "styled-components";

export const ModalUser = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  gap: 6px;
  ${({ gap }) => gap && `bottom: ${gap}px;`}
  right: 20px;
  background-color: #49628f;
  padding: 6px;
  border-radius: 10px;
  z-index: 1;
  p {
    margin: 6px;
    color: #d9d9d9;
    font-size: 12px;
  }
  button {
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

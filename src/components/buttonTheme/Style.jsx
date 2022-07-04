//<Button onClick={() => setCurrentTheme(getOpositeTheme())}>
import styled from "styled-components";

export const Button = styled.button`
  outline: none;
  border: 1px solid;
  border-color: ${(props) => props.theme.button.borderColor};
  border-radius: 2px;
  background-color: ${(props) => props.theme.button.backgroundColor};
  color: ${(props) => props.theme.button.textColor};
  padding: 0.5em 1em;
  box-shadow: 5px 2px 20px 5px rgba(21, 26, 105, 1);

  font-size: 1rem;
  letter-spacing: 0.7px;
  cursor: pointer;
  transition: opacity 0.4s linear, color 0.4s linear,
    background-color 0.4s linear;

  &:hover {
    opacity: 0.65;
  }
`;
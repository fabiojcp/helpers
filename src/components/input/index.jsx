import { Container } from "./styles";

function Input({ children, dark }) {
  return <Container $dark={dark}>{children}</Container>;
}

export default Input;

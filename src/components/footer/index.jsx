import { Container, Line } from "./styles";

const Footer = ({ isLined = false }) => {
  return (
    <Container>
      <Line isLined={isLined}></Line>
      <p>2022 (c) Todos os direitos reservados</p>
    </Container>
  );
};

export default Footer;

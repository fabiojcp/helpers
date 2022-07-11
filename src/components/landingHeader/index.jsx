import { Header, Logo, Nav, Smooth } from "./styles";

export default function LandingHeader({ windowWidth, logo }) {
  return (
    <Header>
      <Logo src={logo} alt="logo" />
      {windowWidth > 700 ? (
        <Nav>
          <Smooth href="#second">Sobre o projeto</Smooth>
          <Smooth href="#third">Deduzindo impostos</Smooth>
          <Smooth href="#fourth">Campanhas populares</Smooth>
          <Smooth href="#fifth">Sobre a equipe</Smooth>
        </Nav>
      ) : null}
    </Header>
  );
}

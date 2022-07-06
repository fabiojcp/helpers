import Button from "../../components/button";
import Input from "../../components/input";
import logo from "../../assets/imgs/LogotipoBranca.svg";
import {
  Container,
  FormBox,
  First,
  Header,
  Logo,
  Nav,
  Smooth,
  ImgBox,
  StyledForm,
  GoDowntSection,
  P,
  Second,
  SecondTitle,
  SecondText,
} from "./styles";
import { Link } from "react-router-dom";
import { FiArrowDownCircle } from "react-icons/fi";
import { useCampaigns } from "../../providers/campaigns";

export default function Landing() {
  const campaings = useCampaigns();

  return (
    <>
      <Header>
        <Logo src={logo} alt="logo" />
        <Nav>
          <Smooth href="#second">Sobre o projeto</Smooth>
          <Smooth href="#third">Deduzindo impostos</Smooth>
          <Smooth href="#fourth">Campanhas populares</Smooth>
          <Smooth href="#fifth">Sobre a equipe</Smooth>
        </Nav>
      </Header>
      <First id="first">
        <Container>
          <ImgBox />
          <FormBox>
            <StyledForm>
              <h2>Entre ou crie sua conta</h2>

              <Input>
                <label>Nome</label>
                <input type="text"></input>
              </Input>
              <Input>
                <label>Senha</label>
                <input tupe="password"></input>
              </Input>
              <Button>Entrar</Button>
              <span>
                Não tem uma conta? <Link to={"/register"}>Cadastrar-se</Link>
              </span>
            </StyledForm>
          </FormBox>
        </Container>
        <GoDowntSection href="#second">
          <P>DESÇA PARA SABER MAIS</P>
          <FiArrowDownCircle style={{ height: "2em", width: "2em" }} />
        </GoDowntSection>
      </First>
      <Second>
        <SecondTitle id="second">Sobre o projeto</SecondTitle>
        <SecondText>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
          dolor neque, fermentum quis tellus sit amet, porta convallis dolor.
          Proin in fringilla enim. Pellentesque habitant morbi tristique
          senectus et netus et malesuada fames ac turpis egestas. Quisque id
          ipsum bibendum, egestas diam eget, auctor erat. Cras condimentum diam
          sed bibendum bibendum. Phasellus non varius sapien. Quisque vitae
          scelerisque est. Integer lacinia mi lorem, at ultrices ipsum porta
          quis. Integer ac condimentum nulla. Suspendisse sagittis magna eu
          euismod pulvinar. Nam blandit viverra tempor. Praesent cursus leo vel
          sapien dignissim, id tempor magna malesuada. Vestibulum efficitur
          fermentum viverra. Nulla venenatis mi nibh, sed pretium tortor rhoncus
          mollis.
        </SecondText>
      </Second>
      <Second>
        <SecondTitle id="third">Deduzindo impostos</SecondTitle>
        <SecondText>
          Além de ser um Helper de projetos sociais e fazer a vida de várias
          pessoas melhor, doar quantias em dinheiro ainda pode ser um jeito de
          pagar menos impostos.
        </SecondText>
        <SecondText>
          Pessoas físicas podem abater até 6% do imposto devido com doações, e
          empresas podem chegar a até 2% de imposto abatido. Os estudantes
          também podem conseguir certificados de trabalho voluntário em
          campanhas que envolvam atividades presencias! Ser um Helper é muito
          mais do que simplesmente doar dinheiro ou tempo, é ajudar mudar a vida
          de quem precisa!
        </SecondText>
        <SecondText>Seja um Helper você também!</SecondText>
      </Second>
      <Second>
        <SecondTitle id="fourth">Campanhas populares</SecondTitle>
        <SecondText></SecondText>
      </Second>
      <Second>
        <SecondTitle id="fifth">Sobre a equipe</SecondTitle>
        <SecondText></SecondText>
      </Second>
    </>
  );
}

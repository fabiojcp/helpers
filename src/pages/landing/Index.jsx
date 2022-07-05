import Button from "../../components/button";
import Input from "../../components/input";
import {
  Container,
  FormBox,
  Fundo,
  Header,
  ImgBox,
  StyledForm,
} from "./styles";

export default function Landing() {
  return (
    <Fundo>
      <Header>
        <img src="" alt="logo" />
        <nav>
          <ul>
            <li>Sobre o projeto</li>
            <li>Deduzindo impostos</li>
            <li>Campanha populares</li>
            <li>Sobre a equipe</li>
          </ul>
        </nav>
      </Header>
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
              Não tem uma conta? <a>Cadastrar-se</a>
            </span>
          </StyledForm>
        </FormBox>
      </Container>
      <div>
        <p>DESÇA PARA SABER MAIS</p>
        <img src="" alt="set para baixo" />
      </div>
    </Fundo>
  );
}

import Button from "../../components/button";
import Input from "../../components/input";
import logo from "../../assets/imgs/LogotipoBranca.svg";
import {
  Container,
  FormBox,
  First,
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
  PopularCampaign,
} from "./styles";
import { Link, useNavigate } from "react-router-dom";
import { FiArrowDownCircle } from "react-icons/fi";
import { useCampaigns } from "../../providers/campaigns";
import Footer from "../../components/footer";
import { Header } from "../../components/header";
import { FormLogin } from "../../components/formLogin";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { User, UserContext } from "../../providers/user";
import { useContext, useEffect, useState } from "react";
import { Carousel } from "rsuite";

/* Quanto ao codigo comentado na seção de campanhas populares, o campaign não
   estava me retornando nada por alguma razão e quebrava todo o código
*/


export default function Landing() {
  const { loginUser } = useContext(UserContext);

  const navigate = useNavigate();

  const [windowWidth, setwindowWidth] = useState(window.innerWidth);
  const handleResize = () => {
    setwindowWidth(window.innerWidth);
  }; /* Aqui eu seto um state pro width da tela e um event listener pro evento
  de resize, quando disparar o evento ele seta novamente o state pro novo valor
  do width da tela*/
  window.addEventListener("resize", handleResize);

  const { campaigns, getCampaigns } = useCampaigns();

  const formSchema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().min(4).required(),
  });

  const { register, handleSubmit } = useForm({
    resolver: yupResolver(formSchema),
  });

  const onSubmit = (data) => {
    loginUser(data); // eu não tenho certeza se a função de login esta funcionando
    navigate("/campaings");
  };

  useEffect(() => {
    getCampaigns();
  }, []);

  return (
    <>
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
      <First id="first">
        <Container>
          <ImgBox />
          <FormBox>
            <StyledForm onSubmit={handleSubmit(onSubmit)}>
              <h2>Entre ou crie sua conta</h2>
              <Input>
                <label>Email</label>
                <input type="email" {...register("email")}></input>
              </Input>
              <Input>
                <label>Senha</label>
                <input type="password" {...register("password")}></input>
              </Input>
              <Button type="submit">Entrar</Button>
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
        <Carousel className="custom-slider">
          <img
            src="https://epipoca.com.br/wp-content/uploads/2021/02/a222ba9abf0c42fabe55298c2a764460.jpg"
            alt="h"
          />
          <img
            src="https://epipoca.com.br/wp-content/uploads/2021/02/a222ba9abf0c42fabe55298c2a764460.jpg"
            alt="h"
          />
          {/*                   
          {campaigns.map((campaign, index) => {
            <PopularCampaign>
              <img src={campaign.img[0]} alt={campaign.description} />
              <p>{campaign.description}</p>
            </PopularCampaign>;
          })} */}
        </Carousel>
      </Second>
      <Second>
        <SecondTitle id="fifth">Sobre a equipe</SecondTitle>
        <SecondText></SecondText>
      </Second>
    </>
  );
}

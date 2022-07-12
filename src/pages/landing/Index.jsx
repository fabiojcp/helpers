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
  Header,
  Text,
  ImgBoxChilds,
  Third,
  Fourth,
  Card,
  Title,
  ScrollBox,
  TeamCard,
  TeamAvatar,
  Alin,
  Agit,
  DivLink,
  DivMain,
} from "./styles";
import { Link, useNavigate } from "react-router-dom";
import { FiArrowDownCircle } from "react-icons/fi";
import { CampaignsContext } from "../../providers/campaigns";
import Footer from "../../components/footer";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { UserContext } from "../../providers/user";
import { useContext, useEffect, useState } from "react";
import homeImg from "../../assets/imgs/HomeImg.png";
import HelpersAbout from "../../assets/imgs/helpersAbout.png";
import HelpersTax from "../../assets/imgs/helpersTax.png";
import { TeamContext } from "../../providers/team";
import { AiOutlineLinkedin, AiOutlineGithub } from "react-icons/ai";

export default function Landing() {
  const { loginUser, isLogged } = useContext(UserContext);
  const { team } = useContext(TeamContext);

  const navigate = useNavigate();

  const [windowWidth, setwindowWidth] = useState(window.innerWidth);
  const handleResize = () => {
    setwindowWidth(window.innerWidth);
  }; /* Aqui eu seto um state pro width da tela e um event listener pro evento
  de resize, quando disparar o evento ele seta novamente o state pro novo valor
  do width da tela*/
  window.addEventListener("resize", handleResize);

  const { campaigns, getCampaigns } = useContext(CampaignsContext);

  const formSchema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().min(4).required(),
  });

  const { register, handleSubmit } = useForm({
    resolver: yupResolver(formSchema),
  });

  const onSubmit = (data) => {
    loginUser(data);
  };

  useEffect(() => {
    getCampaigns();
  }, []);
  if (isLogged) {navigate("/dashboard")}
  return (
    <DivMain>
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
          <ImgBox background={homeImg} />
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
      <Second id="second">
        <Text>
          <SecondTitle>Sobre o projeto</SecondTitle>
          <SecondText>Somos a helpers!</SecondText>
          <SecondText>
            Uma plataforma que uni quem deseja ajudar entidades, formando assim
            nossos Helpers!
          </SecondText>
          <SecondText>
            Facilitando o acesso e distribuindo a informação para que o terceiro
            setor seja mais assistido e mais eficiente.
          </SecondText>
          <SecondText>
            Caso queira ter acesso a todos os Helpers e campanhas de ajuda,
            basta clicar em <a href="#first">cadastro!</a>
          </SecondText>
        </Text>
        <ImgBoxChilds background={HelpersAbout} />
      </Second>
      <Third id="third">
        <ImgBoxChilds background={HelpersTax} />
        <Text>
          <SecondTitle>Deduzindo impostos</SecondTitle>
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
            mais do que simplesmente doar dinheiro ou tempo, é ajudar mudar a
            vida de quem precisa!
          </SecondText>
          <SecondText>Seja um Helper você também!</SecondText>
        </Text>
      </Third>
      <Fourth id="fourth" style={{ display: "flex", flexDirection: "column" }}>
        <SecondTitle>Campanhas populares</SecondTitle>
        <ScrollBox>
          {campaigns.map((campaign, index) => {
            return (
              <Card
                key={`campaing-${index}`}
                background={campaign.img[0]}
                alt={campaign.name}
                textC={({ theme }) => theme.primary[100]}
                boxS={({ theme }) => theme.primary[950]}
                onClick={() => navigate(`/campaign/${campaign.id}`)}
              >
                <Title>{campaign.name}</Title>
              </Card>
            );
          })}
        </ScrollBox>
      </Fourth>
      <Fourth id="fifth">
        <SecondTitle>Sobre a equipe</SecondTitle>
        <ScrollBox>
          {team.map((user, index) => {
            return (
              <TeamCard key={index}>
                <DivLink>
                  <TeamAvatar
                    background={user.img}
                    alt={user.name}
                  ></TeamAvatar>
                  <Alin href={user.LinkedIn} target="_blank">
                    {AiOutlineLinkedin()}
                  </Alin>
                  <Agit href={user.GitHub} target="_blank">
                    {AiOutlineGithub()}
                  </Agit>
                </DivLink>
                <Title fontS={"1.8rem"}>{user.name}</Title>
                <Title fontS={"1.4rem"}>{user.title}</Title>
              </TeamCard>
            );
          })}
        </ScrollBox>
      </Fourth>
      <Footer isLined />
    </DivMain>
  );
}

import logo from "../../assets/imgs/LogotipoBranca.svg";
import Footer from "../../components/footer";
import {
  CardLi,
  CardLiAll,
  CardUl,
  Container,
  Header,
  HeaderModal,
  ListBox,
  ListContainer,
  ListUser,
  Logo,
  ScrollBox,
  StyledForm,
  Tilte,
  TilteAll,
  UserBox,
} from "./styles";
import { useContext } from "react";
import { UserContext } from "../../providers/user";
import { CampaignsContext } from "../../providers/campaigns";
import Modal from "../../components/modal";
import CampaignCard from "../campaignCard";
import ProfileIcon from "../profileIcon";
import Button from "../button";
import { useState } from "react";
import { UserMenu } from "../userMenu";

export default function DashboardPJ() {
  const { campaigns, getCampaigns } = useContext(CampaignsContext);
  const { user, modal, editUser } = useContext(UserContext);

  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [phone, setPhone] = useState(user.contacts.phone);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const onSubmit = () => {
    console.log(name);
    const newData = {
      email: email,
      name: name,
      contacts: {
        phone: phone,
      },
    };
    editUser(newData);
  };

  const helpedCampaigns = campaigns.filter(
    (campaign) =>
      campaign.helpers.filter((helper) => helper.id === user.id).length > 0
  );

  return (
    <Container>
      <Header>
        <Logo src={logo} alt="logo" />
        <div
          onClick={() => {
            setIsMenuOpen(true);
          }}
        >
          <ProfileIcon name={user.name} image={user.img} />
        </div>
      </Header>
      <UserMenu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <ListContainer>
        <ListUser>
          <Tilte>Minhas Campanhas</Tilte>
          <ScrollBox>
            <CardUl>
              {helpedCampaigns.map((campaign, index) => {
                return (
                  <CardLi key={campaign.id}>
                    <CampaignCard
                      image={campaign.img[0]}
                      title={campaign.description}
                    />
                  </CardLi>
                );
              })}

              <CardLi>
                <CampaignCard
                  image="https://epipoca.com.br/wp-content/uploads/2021/02/a222ba9abf0c42fabe55298c2a764460.jpg"
                  title="teste"
                />
              </CardLi>
              <CardLi>
                <CampaignCard
                  image="https://epipoca.com.br/wp-content/uploads/2021/02/a222ba9abf0c42fabe55298c2a764460.jpg"
                  title="teste"
                />
              </CardLi>
              <CardLi>
                <CampaignCard
                  image="https://epipoca.com.br/wp-content/uploads/2021/02/a222ba9abf0c42fabe55298c2a764460.jpg"
                  title="teste"
                />
              </CardLi>
              <CardLi>
                <CampaignCard
                  image="https://epipoca.com.br/wp-content/uploads/2021/02/a222ba9abf0c42fabe55298c2a764460.jpg"
                  title="teste"
                />
              </CardLi>
              <CardLi>
                <CampaignCard
                  image="https://epipoca.com.br/wp-content/uploads/2021/02/a222ba9abf0c42fabe55298c2a764460.jpg"
                  title="teste"
                />
              </CardLi>
              <CardLi>
                <CampaignCard
                  image="https://epipoca.com.br/wp-content/uploads/2021/02/a222ba9abf0c42fabe55298c2a764460.jpg"
                  title="teste"
                />
              </CardLi>
            </CardUl>
          </ScrollBox>
        </ListUser>

        <ListBox>
          <TilteAll>Campanhas criadas recentemente</TilteAll>
          <ScrollBox>
            <CardUl>
              {campaigns.map((campaign, index) => {
                return (
                  <CardLiAll key={campaign.id}>
                    <CampaignCard
                      image={campaign.img[0]}
                      title={campaign.description}
                      isVolunteer={campaign.type.material}
                      isDonation={campaign.type.financial}
                      description={campaign.description}
                      requirements={[
                        "requirements1",
                        "requirements2",
                        "requirements3",
                      ]}
                    />
                  </CardLiAll>
                );
              })}
              <CardLi>
                <CampaignCard
                  image="https://epipoca.com.br/wp-content/uploads/2021/02/a222ba9abf0c42fabe55298c2a764460.jpg"
                  title="teste"
                  isVolunteer
                  description="Testando um texto muito grandetestando um texto muito grande testando um texto muito grande testando um texto muito grande"
                  requirements={[
                    "requirements1",
                    "requirements2",
                    "requirements3",
                  ]}
                />
              </CardLi>
              <CardLi>
                <CampaignCard
                  image="https://epipoca.com.br/wp-content/uploads/2021/02/a222ba9abf0c42fabe55298c2a764460.jpg"
                  title="teste"
                  isVolunteer
                  description="campanha muito da hora"
                />
              </CardLi>
              <CardLi>
                <CampaignCard
                  image="https://epipoca.com.br/wp-content/uploads/2021/02/a222ba9abf0c42fabe55298c2a764460.jpg"
                  title="teste"
                  isVolunteer
                  description="campanha muito da hora"
                />
              </CardLi>
              <CardLi>
                <CampaignCard
                  image="https://epipoca.com.br/wp-content/uploads/2021/02/a222ba9abf0c42fabe55298c2a764460.jpg"
                  title="teste"
                  isVolunteer
                  description="campanha muito da hora"
                />
              </CardLi>
            </CardUl>
          </ScrollBox>
        </ListBox>
      </ListContainer>

      <Footer />
      <Modal
        closeable={true}
        header={
          <HeaderModal>
            <UserBox>
              <img src={user.img} alt="user" />
            </UserBox>
            <h2>Editar perfil</h2>
          </HeaderModal>
        }
        children={
          <StyledForm onSubmit={(event) => event.preventDefault()}>
            <div>
              <label htmlFor="name">Nome completo</label>
              <input
                name="name"
                placeholder={user.name}
                type="text"
                onChange={(event) => setName(event.target.value)}
              />
            </div>
            <div>
              <label htmlFor="email">E-mail</label>
              <input
                name="email"
                placeholder={user.email}
                type="text"
                onChange={(event) => setEmail(event.target.value)}
              />
            </div>
            <div>
              <label htmlFor="phone">Telefone de contato</label>
              <input
                name="phone"
                placeholder={user.contacts.phone}
                type="text"
                onChange={(event) => setPhone(event.target.value)}
              />
            </div>
            <Button onClick={onSubmit} type="submit">
              Salvar Alterações
            </Button>
          </StyledForm>
        }
      />
    </Container>
  );
}

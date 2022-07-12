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
  Title,
  TitleAll,
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
import { useNavigate } from "react-router-dom";

export default function DashboardPJ() {
  const { campaigns, getCampaigns } = useContext(CampaignsContext);
  const { user, modal, editUser } = useContext(UserContext);

  const navigate = useNavigate();

  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [phone, setPhone] = useState(user.contacts.phone);
  const [description, setDescription] = useState(user.description);
  const [avatar, setAvatar] = useState(user.description);
  const [contact, setContact] = useState(user.contacts.contactPerson);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const onSubmit = () => {
    console.log(name);
    const newData = {
      email: email,
      name: name,
      description: description,
      img: avatar,
      contacts: {
        phone: phone,
        contactPerson: contact,
      },
    };
    editUser(newData);
  };

  const helpedCampaigns = campaigns.filter(
    (campaign) =>
      campaign.raised.filter((helper) => helper.id === user.id).length > 0
  );

  return (
    <>
      <Header>
        <Logo src={logo} alt="logo" />
        <div
          onClick={() => {
            isMenuOpen ? setIsMenuOpen(false) : setIsMenuOpen(true)
          }}
        >
          <ProfileIcon name={user.name} image={user.img} />
        </div>
      </Header>
      <UserMenu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <ListContainer>
        <ListUser>
          <Title>Minhas Campanhas</Title>
          <ScrollBox>
            <CardUl>
              {helpedCampaigns.map((campaign, index) => {
                return (
                  <CardLi
                    onClick={() => navigate(`/campaign/${campaign.id}`)}
                    key={campaign.id}
                  >
                    <CampaignCard
                      image={campaign.img[0]}
                      title={campaign.name}
                    />
                  </CardLi>
                );
              })}
            </CardUl>
          </ScrollBox>
        </ListUser>

        <ListBox>
          <TitleAll>Campanhas criadas recentemente</TitleAll>
          <ScrollBox>
            <CardUl>
              {campaigns.map((campaign, index) => {
                return (
                  <CardLiAll
                    key={campaign.id}
                    onClick={() => navigate(`/campaign/${campaign.id}`)}
                  >
                    <CampaignCard
                      image={campaign.img[0]}
                      title={campaign.name}
                      isVolunteer={campaign.type.material}
                      isDonation={campaign.type.financial}
                      description={campaign.description}
                    />
                  </CardLiAll>
                );
              })}
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
          <StyledForm
            onSubmit={(event) => {
              event.preventDefault();
              modal.close();
            }}
          >
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
              <label htmlFor="avatar">Avatar</label>
              <input
                name="avatar"
                placeholder={user.img}
                type="text"
                onChange={(event) => setAvatar(event.target.value)}
              />
            </div>
            <div>
              <label htmlFor="description">Bio</label>
              <input
                placeholder={user.description}
                type="text"
                onChange={(event) => setDescription(event.target.value)}
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
            <div>
              <label htmlFor="contac">Responsável</label>
              <input
                name="contac"
                placeholder={user.contacts.contactPerson}
                type="text"
                onChange={(event) => setContact(event.target.value)}
              />
            </div>
            <Button onClick={onSubmit} type="submit">
              Salvar Alterações
            </Button>
          </StyledForm>
        }
      />
    </>
  );
}

import logo from "../../assets/imgs/LogotipoBranca.svg";
import menu from "../../assets/imgs/MenuIcon.svg";
import Footer from "../../components/footer";
import { FiPlus } from "react-icons/fi";
import {
  Container,
  Header,
  HeaderModal,
  ListBox,
  ListUser,
  Logo,
  Menu,
  ScrollBox,
  StyledForm,
  UserBox,
} from "./styles";
import { useContext } from "react";
import { UserContext } from "../../providers/user";
import { CampaignsContext } from "../../providers/campaigns";
import Modal from "../../components/modal";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import  DashboardGraphics  from "../../components/dashboardGraphics";

export default function Dashboard() {
  const formSchema = yup.object().shape({
    name: yup.string().min(6).required(),
    email: yup.string().email().required(),
    phone: yup.string().min(9).required(),
    gender: yup.string().min(4).required(),
    description: yup.string().min(6).required(),
  });

  const { register, handleSubmit } = useForm({
    resolver: yupResolver(formSchema),
  });

  const { user, modal, editUser } = useContext(UserContext);
  const { campaigns } = useContext(CampaignsContext);

  const helpedCampaigns = campaigns.filter(
    (campaign) =>
      campaign.helpers.filter((helper) => helper.id === user.id).length > 0
  );

  const onSubmit = (data) => {
    const { phone } = data;
    const newData = { ...data, contacts: { phone: phone } };
    console.log(newData);
    editUser(newData);
  };

  console.log(user);

  if (user.type === "entity"){
    return(
      <>
        <Header>
          <Menu src={menu} alt="" />
          <Logo src={logo} alt="logo" />
          <UserBox
          onClick={() => {
            modal.open();
          }}
        > 
          <img src={user.img} alt="user" />
        </UserBox>
        </Header>
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
          <StyledForm onSubmit={handleSubmit(onSubmit)}>
            <div>
              <label for="name">Nome completo</label>
              <input
                {...register("name")}
                name="name"
                placeholder={user.name}
                type="text"
              />
            </div>
            <div>
              <label for="email">E-mail</label>
              <input
                {...register("email")}
                name="email"
                placeholder={user.email}
                type="text"
              />
            </div>
            <div>
              <label for="phone">Telefone de contato</label>
              <input
                {...register("phone")}
                name="phone"
                placeholder={user.contacts.phone}
                type="text"
              />
            </div>
            <div>
              <label for="gender">Gênero</label>
              <input
                {...register("gender")}
                name="gender"
                placeholder={user.gender}
                type="text"
              />
            </div>
            <div>
              <label for="description">Bio</label>
              <input
                {...register("description")}
                placeholder={user.description}
                type="text"
              />
            </div>
            <button type="submit">Salvar Alterações</button>
          </StyledForm>
        }
      />
        <Container>
          <ListUser>
            <h2>Minhas Campanhas</h2>
            <ScrollBox>
              <ul>
                <li>
                  <FiPlus style={{ height: "2em", width: "2em" }} />
                  <p>Nova Campanha</p>
                </li>
               {campaigns.map(campaign => {
                if (campaign.ownerID === user.id){
                  return (
                    <li>
                      <img src={campaign.img[0]} alt={campaign.name}/>
                      <h4>{campaign.name}</h4>
                    </li>
                  )
                }
               })}
              </ul>
            </ScrollBox>
          </ListUser>
          <DashboardGraphics/>
        </Container>
  
        <Footer light />
      </>
    )
   }
  return (
    <>
      <Header>
        <Menu src={menu} alt="" />
        <Logo src={logo} alt="logo" />
        <UserBox
          onClick={() => {
            modal.open();
          }}
        >
          <img src={user.img} alt="user" />
        </UserBox>
      </Header>
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
          <StyledForm onSubmit={handleSubmit(onSubmit)}>
            <div>
              <label for="name">Nome completo</label>
              <input
                {...register("name")}
                name="name"
                placeholder={user.name}
                type="text"
              />
            </div>
            <div>
              <label for="email">E-mail</label>
              <input
                {...register("email")}
                name="email"
                placeholder={user.email}
                type="text"
              />
            </div>
            <div>
              <label for="phone">Telefone de contato</label>
              <input
                {...register("phone")}
                name="phone"
                placeholder={user.contacts.phone}
                type="text"
              />
            </div>
            <div>
              <label for="gender">Gênero</label>
              <input
                {...register("gender")}
                name="gender"
                placeholder={user.gender}
                type="text"
              />
            </div>
            <div>
              <label for="description">Bio</label>
              <input
                {...register("description")}
                placeholder={user.description}
                type="text"
              />
            </div>
            <button type="submit">Salvar Alterações</button>
          </StyledForm>
        }
      />
      <Container>
        {user.type !== "entity" ? null : (
          <ListUser>
            <h2>Minhas Campanhas</h2>
            <ScrollBox>
              <ul>
                <li>
                  <FiPlus style={{ height: "2em", width: "2em" }} />
                  <p>Nova Campanha</p>
                </li>
                <li></li>
                <li></li>
                <li></li>
              </ul>
            </ScrollBox>
          </ListUser>
        )}

        <ListBox>
          {user.type !== "entity" ? (
            <h2>Campanhas ajudadas</h2>
          ) : (
            <h2>Campanhas criadas recentemente</h2>
          )}
          <ScrollBox>
            <ul>
              {helpedCampaigns.map((campaign, index) => {
                return (
                  <li>
                    <img
                      key={index}
                      src={campaign.img[0]}
                      alt="imagem da campanha"
                    />
                    <div>
                      <p>{campaign.description}</p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </ScrollBox>
        </ListBox>
      </Container>

      <Footer light />
    </>
  );
}

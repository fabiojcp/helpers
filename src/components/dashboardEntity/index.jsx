import logo from "../../assets/imgs/LogotipoBranca.svg";
import Footer from "../../components/footer";
import { useContext, useState } from "react";
import { UserContext } from "../../providers/user";
import { CampaignsContext } from "../../providers/campaigns";
import DashboardGraphics from "../../components/dashboardGraphics";
import { useNavigate } from "react-router-dom";
import ModalEntity from "../modalEntity";
import CampaignCard from "../campaignCard";
import {
  Header,
  ListUser,
  Title,
  ScrollBox,
  CardUl,
  CardLi,
  ListContainer,
  UserBox,
  Logo,
} from "../dashboardModel/styles";
import Plus from "../../assets/imgs/plus.png";
import { UserMenu } from "../userMenu";
import ProfileIcon from "../../components/profileIcon";
import Modal from "../modal/index";
import { StyledForm, HeaderModal, Type, Bio } from "./style.js";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Button from "../button";


export default function DashboardEntity() {
  const navigate = useNavigate();
  const { campaigns } = useContext(CampaignsContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, modal } = useContext(UserContext);
  const [isModalOpen, setIsModalOpen] = useState(true);

  const formSchema = yup.object().shape({
    name: yup.string().min(6).required(),
    description: yup.string().min(6).required(),
    avatar: yup.string().required(),
    donation: yup.string().required(),
    volunteer: yup.string().required(),
  });

  const { register, handleSubmit } = useForm({
    resolver: yupResolver(formSchema),
  });


  const { addCampaign } = useContext(CampaignsContext);

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <>
      

      <Header>
        <Logo src={logo} alt="logo" />
        <div
          onClick={() => {
            modal ? setIsMenuOpen(false) : setIsMenuOpen(true);
          }}
        >
          <ProfileIcon name={user.name} image={user.img} />
        </div>
      </Header>
      <UserMenu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      
      <ModalEntity />
      
      <ListContainer>
        <ListUser>
          <Title>Minhas Campanhas</Title>
          <ScrollBox>
            <CardUl>
              <CardLi onClick={() => modal.open()}>
                <CampaignCard image={Plus} title="Nova Campanha" />
              </CardLi>
              {campaigns.map((campaign, index) => {
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
        <ListUser style={{ width: "60%" }}>
          <DashboardGraphics />
        </ListUser>
      </ListContainer>
      <Footer light />

      <Modal
      closeable={true}
      header={
        <HeaderModal>
          <UserBox>
            <img src={user.img} alt="user" />
          </UserBox>
          <h2>Criar Campanha</h2>
        </HeaderModal>
      }
      children={
        <StyledForm onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label for="name">Nome do Projeto</label>
            <input
              {...register("name")}
              name="name"
              placeholder="Insira o nome do projeto"
              type="text"
            />
          </div>
          <label htmlFor="avatar">Avatar (url)</label>
          <div>
            <input
              {...register("avatar")}
              type="text"
              id="avatar"
              placeholder="Link da foto da campanha"
            ></input>
          </div>
          <div>
            <label for="description">Bio</label>
            <textarea
              rows={3}
              {...register("description")}
              placeholder="Descrição da campanha"
              type="textArea"
            />
          </div>
          <section>
            <Type>
              <label htmlFor="isDonation">Doações</label>
              <select id="isDonation" {...register("donation")}>
                <option>Sim</option>
                <option>Não</option>
              </select>
            </Type>
            <Type className="type">
              <label htmlFor="isVolunteer">Voluntaria</label>
              <select id="isVolunteer" {...register("volunteer")}>
                <option>Sim</option>
                <option>Não</option>
              </select>
            </Type>
          </section>
          <Button type="submit">Salvar Alterações</Button>
        </StyledForm>
      }
    />
    </>
  );
}

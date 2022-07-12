import logo from "../../assets/imgs/LogotipoBranca.svg";
import Footer from "../../components/footer";
import { FiPlus } from "react-icons/fi";
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

import  DashboardGraphics  from "../../components/dashboardGraphics";

import { Link, useNavigate } from "react-router-dom";
import ModalEntity from "../modalEntity";
import { useNavigate } from "react-router-dom"
import CampaignCard from "../campaignCard"
import { UserMenu } from "../userMenu";

export default function DashboardEntity() {
  const navigate = useNavigate()
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


  const { campaigns } = useContext(CampaignsContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const {user, modal} = useContext( UserContext )

  if (user.type === "entity") {
    return (
      <>
        <Header>
          <Logo src={logo} alt="logo" />
          <UserBox
            onClick={() => {
              setIsMenuOpen(true);
            }}
          >
            <img src={user.img} alt="user" />
          </UserBox>
          <UserMenu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        </Header>

        <ModalEntity/>

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
        <ListContainer>
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
            <Title>Minhas Campanhas</Title>
            <ScrollBox>
              <CardUl>
                <CardLi>
                  <FiPlus style={{ height: "2em", width: "2em" }} />
                  <p>Nova Campanha</p>
                </CardLi>
               {campaigns.map(campaign => {
                if (campaign.ownerID === user.id){
                  return (
                    <CardLi key={campaign.id} onClick ={() => {navigate(`/campaign/${campaign.id}`)}}>
                    <CampaignCard
                      image={campaign.img[0]}
                      title={campaign.name}
                    />
                  </CardLi>
                  )
                }
               })}
              
              </CardUl>
            </ScrollBox>
          </ListUser>
          </ListContainer>
        <DashboardGraphics/>
  
               </li>
                {campaigns.map((campaign) => {
                  if (campaign.ownerID === user.id) {
                    return (
                      <li>
                        <img src={campaign.img[0]} alt={campaign.name} />
                        <h4>{campaign.name}</h4>
                      </li>
                    );
                  }
                })}
              </ul>
            </ScrollBox>
          </ListUser>
          <DashboardGraphics />
        </Container>


        <Footer light />
      </>
    );
  }
}

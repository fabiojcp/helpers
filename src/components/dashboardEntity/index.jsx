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
import { StyledForm, HeaderModal, Type} from "./style.js";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Button from "../button";
import ModalCampaign from "../modalCampaign";

export default function DashboardEntity() {
  const navigate = useNavigate();
  const { campaigns } = useContext(CampaignsContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, modal, editUser, modalNewCampaign } = useContext(UserContext);

  const formSchema = yup.object().shape({
    name: yup.string().required("Nome obrigatório!"),
    avatar: yup.string().required("Foto obrigatório!"),
    address: yup.string(),
    city: yup.string(),
    state: yup.string(),
    date: yup.date().typeError("Data obrigatória!").required("Data obrigatória!"),
    description: yup.string().required("Descrição obrigatória!"),
    donation: yup.string(),
    financialGoal: yup.number(),
    volunteer: yup.string(),
    materialGoal: yup.number(),
  });

  const { register, handleSubmit, formState: { errors }, } = useForm({
    resolver: yupResolver(formSchema),
  });

  const { addCampaign } = useContext(CampaignsContext);

  const onSubmit = (data) => {
    const newCampaign = {
      ownerID: user.id,
      name: data.name,
      type: {
        financial: data.donation === "Sim" ? true : false,
        material: data.volunteer === "Sim" ? true : false,
      },
      description: data.description,
      address: data.address,
      city: data.city,
      state: data.state,
      date: `${data.date.getFullYear()}-${data.date.getMonth() + 1}-${data.date.getDate()}`,
      img: [data.avatar],
      bankDetails: {
        bankName: user.contacts.bankDetails.bankName,
        agency: user.contacts.bankDetails.agency,
        account: user.contacts.bankDetails.account,
        accountType: user.contacts.bankDetails.accountType,
        pix: user.contacts.bankDetails.pix,
      },
      financialGoal: data.financialGoal,
      materialGoal: data.materialGoal,
      raised: [],
      helpers: [],
    }
    addCampaign(newCampaign);
    modalNewCampaign.close();
  };

  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [phone, setPhone] = useState(user.contacts.phone);
  const [description, setDescription] = useState(user.description);
  const [avatar, setAvatar] = useState(user.img);
  const [contact, setContact] = useState(user.contacts.contactPerson);
  const [bank, setBank] = useState(user.contacts.bankDetails.bankName);
  const [agency, setAgency] = useState(user.contacts.bankDetails.agency);
  const [account, setAccount] = useState(user.contacts.bankDetails.account);
  const [accountType, setAccountType] = useState(
    user.contacts.bankDetails.accountType
  );
  const [pix, setPix] = useState(user.contacts.bankDetails.pix);

  const onSubmitUser = (data) => {
    const newData = {
      email: email,
      name: name,
      description: description,
      img: avatar,
      contacts: {
        phone: phone,
        contactPerson: contact,
        bankDetails: {
          bankName: bank,
          agency: agency,
          account: account,
          accountType: accountType,
          pix: pix,
        },
      },
    };
    editUser(newData);
  };

  return (
    <>
      <Header>
        <Logo src={logo} alt="logo" />
        <div
          onClick={() => {
            isMenuOpen ? setIsMenuOpen(false) : setIsMenuOpen(true);
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
              <CardLi onClick={() => modalNewCampaign.open()}>
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

      <ModalCampaign
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
              <label for="name">Nome da campanha</label>
              <input
                {...register("name")}
                name="name"
                placeholder="Insira o nome do projeto"
                type="text"
              />
              {errors.name && <span>{errors.name.message}</span>}
            </div>

            <label htmlFor="avatar">Avatar (url)</label>
            <div>
              <input
                {...register("avatar")}
                type="text"
                id="avatar"
                placeholder="URL da foto da campanha"
              ></input>
              {errors.avatar && <span>{errors.avatar.message}</span>}
            </div>

            <div>
            <label htmlFor="address">Endereço</label>
              <input
                {...register("address")}
                type="text"
                id="address"
                placeholder="Endereço (rua, av, etc)"
              ></input>
            </div>
            
            <div>
            <label htmlFor="city">Cidade</label>
              <input
                {...register("city")}
                type="text"
                id="city"
                placeholder="Nome cidade"
              ></input>
            </div>

            <div>
            <label htmlFor="state">Estado</label>
              <select
                {...register("state")}
                id="state"
              >
                <option value="AC">AC</option>
                <option value="AL">AL</option>
                <option value="AP">AP</option>
                <option value="AM">AM</option>
                <option value="BA">BA</option>
                <option value="CE">CE</option>
                <option value="DF">DF</option>
                <option value="ES">ES</option>
                <option value="GO">GO</option>
                <option value="MA">MA</option>
                <option value="MT">MT</option>
                <option value="MS">MS</option>
                <option value="MG">MG</option>
                <option value="PA">PA</option>
                <option value="PB">PB</option>
                <option value="PR">PR</option>
                <option value="PE">PE</option>
                <option value="PI">PI</option>
                <option value="RJ">RJ</option>
                <option value="RN">RN</option>
                <option value="RS">RS</option>
                <option value="RO">RO</option>
                <option value="RR">RR</option>
                <option value="SC">SC</option>
                <option value="SP">SP</option>
                <option value="SE">SE</option>
                <option value="TO">TO</option>
              </select>
            </div>

            <div>
            <label htmlFor="date">Data</label>
              <input
                {...register("date")}
                type="date"
                id="date"
                placeholder="Nome cidade"
              ></input>
              {errors.date && <span>{errors.date.message}</span>}
            </div>

            <div>
              <label for="description">Bio</label>
              <textarea
                rows={3}
                {...register("description")}
                placeholder="Descrição da campanha"
                type="textArea"
              />
              {errors.description && <span>{errors.description.message}</span>}
            </div>
            <label htmlFor="isDonation">Tipo de doações:</label>
            <section>
            
              <Type>
                <label htmlFor="isDonation">Financeiras</label>
                <select id="isDonation" {...register("donation")}>
                  <option>Sim</option>
                  <option>Não</option>
                </select>
              </Type>
              <Type>
                <label for="description">Meta financeira</label>
                <input
                  rows={3}
                  {...register("financialGoal")}
                  placeholder="Apenas números"
                  type="number"
                />
              </Type>
            </section>
            <section>
              <Type className="type">
                <label htmlFor="isVolunteer">Voluntários</label>
                <select id="isVolunteer" {...register("volunteer")}>
                  <option>Sim</option>
                  <option>Não</option>
                </select>
              </Type>
              <Type>
                <label for="description">Meta voluntários</label>
                <input
                  rows={3}
                  {...register("materialGoal")}
                  placeholder="Apenas números"
                  type="number"
                />
              </Type>
            </section>
            
            <Button type="submit">Criar campanha</Button>
          </StyledForm>
        }
      />

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
              <label for="name">Nome da Entidade</label>
              <input
                onChange={(event) => {
                  setName(event.target.value);
                }}
                id="name"
                placeholder={user.name}
                type="text"
              />
            </div>
            <div>
              <label for="email">E-mail</label>
              <input
                onChange={(event) => {
                  setEmail(event.target.value);
                }}
                id="email"
                placeholder={user.email}
                type="text"
              />
            </div>
            <div>
              <label htmlFor="image">Avatar</label>
              <input
                onChange={(event) => setAvatar(event.target.value)}
                placeholder={user.img}
                type="text"
                id="image"
              />
            </div>
            <div>
              <label for="phone">Telefone de contato</label>
              <input
                id="phone"
                onChange={(event) => {
                  setPhone(event.target.value);
                }}
                name="phone"
                placeholder={user.contacts.phone}
                type="text"
              />
            </div>
            <div>
              <label htmlFor="contactPerson">Responsável</label>
              <input
                id="contactPerson"
                placeholder={user.contacts.contactPerson}
                type="text"
                onChange={(event) => setContact(event.target.value)}
              />
            </div>
            <div>
              <label for="description">Bio</label>
              <textarea
                id="description"
                rows="4"
                onChange={(event) => {
                  setDescription(event.target.value);
                }}
                placeholder={user.description}
                type="text"
              />
            </div>
            <div>
              <label for="bankName">Banco</label>
              <input
                id="bankName"
                onChange={(event) => {
                  setBank(event.target.value);
                }}
                placeholder={user.contacts.bankDetails.bankName}
                type="text"
              />
            </div>
            <div>
              <label for="agency">Agência</label>
              <input
                id="agency"
                onChange={(event) => {
                  setAgency(event.target.value);
                }}
                placeholder={user.contacts.bankDetails.agency}
                type="text"
              />
            </div>
            <div>
              <label for="account">Conta</label>
              <input
                id="account"
                onChange={(event) => {
                  setAccount(event.target.value);
                }}
                placeholder={user.contacts.bankDetails.account}
                type="text"
              />
            </div>
            <div>
              <label for="type">Tipo de conta</label>
              <select
                id="type"
                onChange={(event) => {
                  setAccountType(event.target.value);
                }}
              >
                <option>Corrente</option>
                <option>Poupança</option>
              </select>
            </div>
            <div>
              <label for="pix">Pix</label>
              <input
                id="pix"
                onChange={(event) => {
                  setPix(event.target.value);
                }}
                placeholder={user.contacts.bankDetails.pix}
                type="text"
              />
            </div>
            <Button type="submit" onClick={onSubmitUser}>
              Salvar Alterações
            </Button>
          </StyledForm>
        }
      />
    </>
  )
}

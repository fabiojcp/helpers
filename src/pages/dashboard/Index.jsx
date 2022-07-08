import logo from "../../assets/imgs/LogotipoBranca.svg";
import menu from "../../assets/imgs/MenuIcon.svg";
import Footer from "../../components/footer";
import { FiPlus } from "react-icons/fi";
import {
  Container,
  Header,
  ListBox,
  ListUser,
  Logo,
  Menu,
  ScrollBox,
  UserBox,
} from "./styles";
import { useContext } from "react";
import { UserContext } from "../../providers/user";
import { CampaignsContext } from "../../providers/campaigns";

export default function Dashboard() {
  const { user } = useContext(UserContext);
  const { campaigns } = useContext(CampaignsContext);

  const helpedCampaigns = campaigns.filter(
    (campaign) =>
      campaign.helpers.filter((helper) => helper.id === user.id).length > 0
  );

  console.log(user);
  return (
    <>
      <Header>
        <Menu src={menu} alt="" />
        <Logo src={logo} alt="logo" />
        <UserBox>
          <img src="" alt="user" />
        </UserBox>
      </Header>
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

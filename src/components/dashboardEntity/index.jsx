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

export default function DashboardEntity() {
  const navigate = useNavigate();
  const { campaigns } = useContext(CampaignsContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user } = useContext(UserContext);

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
              <CardLi>
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
    </>
  );
}

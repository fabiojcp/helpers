import logo from "../../assets/imgs/LogotipoBranca.svg";
import Footer from "../../components/footer";
import {
  CardLi,
  CardLiAll,
  CardUl,
  Container,
  Header,
  ListBox,
  ListContainer,
  ListUser,
  Logo,
  ScrollBox,
  Tilte,
  TilteAll,
} from "./styles";
import CampaignCard from "../../components/campaignCard";
import ProfileIcon from "../../components/profileIcon";
import { useContext, useEffect } from "react";
import { CampaignsContext } from "../../providers/campaigns";
import { UserContext } from "../../providers/user";

export default function Dashboard() {
  const { campaigns, getCampaigns } = useContext(CampaignsContext);
  const { user } = useContext(UserContext);

  useEffect(() => {
    getCampaigns();
  }, []);

  return (
    <C>
      <Header>
        <Logo src={logo} alt="logo" />
        <ProfileIcon name={user.name} image={user.img} />
      </Header>
      <ListContainer>
        <ListUser>
          <Tilte>Minhas Campanhas</Tilte>
          <ScrollBox>
            <CardUl>
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
    </C>
  );
}

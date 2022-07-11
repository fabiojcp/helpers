import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ButtonGroup } from "./styles";

import Button from "../../components/button";
import Header from "../../components/header";
import ProfileIcon from "../../components/profileIcon";
import Shimmer from "../../components/shimmer";
import { CampaignsContext } from "../../providers/campaigns";
import { UserContext } from "../../providers/user";
import {
  Article,
  CampaignArrecadation,
  CampaignCard,
  CampaignContainer,
  CampaignHeader,
  CardBody,
  CardHeader,
  CardSidePanel,
  ContentMargin,
  CurrentArrecadation,
  FigureImage,
  GoalArrecadation,
  MainContainer,
  PricesArea,
  ProfileName,
  ProfileWithName,
  ProgressBar,
  TabButton,
  TabsList,
  Title,
} from "./styles";

export default function Campaign() {
  const [selectedTab, setSelectedTab] = useState(0);
  const [thisCampaign, setThisCampaign] = useState({});
  const [campaignOwner, setCampaignOwner] = useState({});
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const { getCampaign } = useContext(CampaignsContext);
  const { getUserById } = useContext(UserContext);
  const navigate = useNavigate();
  const params = useParams();

  useEffect(() => {
    if (!params.id) return navigate("/dashboard");

    getCampaign(params.id).then((data) => {
      console.log("Dados da campanha:", data);
      setThisCampaign(data);
    });
  }, []);

  useEffect(() => {
    thisCampaign?.ownerID &&
      getUserById(thisCampaign.ownerID).then((data) => {
        console.log("Dados do dono da campanha:", data);
        setCampaignOwner(data);
      });
  }, [thisCampaign]);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setScreenWidth(window.innerWidth);
    });

    return () => {
      window.removeEventListener("resize", () => {});
    };
  }, []);

  function getRaisedAmount(raised = []) {
    return raised.reduce((prev, curr) => prev + curr.total, 0);
  }

  const tabs = [
    {
      name: "Sobre",
      element: (
        <>
          {thisCampaign ? (
            <p>{thisCampaign?.description}</p>
          ) : (
            <Shimmer height={14} lines={4} />
          )}
        </>
      ),
    },
    {
      name: "Helpers",
      element: (
        <>
          <p>Aba Helpers</p>
        </>
      ),
    },
    {
      name: "Contato",
      element: (
        <>
          <p>Aba Contato</p>
        </>
      ),
    },
  ];

  return (
    <CampaignContainer>
      <Header fixed={screenWidth >= 1024} />
      <MainContainer>
        <Article>
          <CampaignHeader>
            <FigureImage>
              <img
                src="https://midias.correiobraziliense.com.br/_midias/jpg/2021/07/09/675x450/1_teletubbies-6750787.jpg"
                alt="Campanha"
              />
            </FigureImage>
          </CampaignHeader>
          <ContentMargin>
            <CampaignCard>
              <CardHeader>
                {thisCampaign ? (
                  <Title>{thisCampaign.name}</Title>
                ) : (
                  <Shimmer height={30} lines={2} />
                )}

                <ProfileWithName>
                  <ProfileIcon size={36} name={campaignOwner?.name} />
                  <ProfileName>{campaignOwner?.name}</ProfileName>
                </ProfileWithName>

                {thisCampaign?.type?.financial && (
                  <CampaignArrecadation>
                    <PricesArea>
                      <CurrentArrecadation>
                        {getRaisedAmount(thisCampaign?.raised).toLocaleString(
                          "pt-BR",
                          {
                            style: "currency",
                            currency: "BRL",
                          }
                        )}
                      </CurrentArrecadation>
                      <GoalArrecadation>
                        de{" "}
                        {thisCampaign?.financialGoal?.toLocaleString("pt-BR", {
                          style: "currency",
                          currency: "BRL",
                        })}
                      </GoalArrecadation>
                    </PricesArea>
                    <ProgressBar
                      value={getRaisedAmount(thisCampaign?.raised)}
                      max={thisCampaign?.financialGoal}
                    />
                  </CampaignArrecadation>
                )}
                <TabsList>
                  <li>
                    <TabButton
                      $selected={selectedTab === 0}
                      onClick={() => setSelectedTab(0)}
                    >
                      {tabs[0].name}
                    </TabButton>
                  </li>
                  <li>
                    <TabButton
                      $selected={selectedTab === 1}
                      onClick={() => setSelectedTab(1)}
                    >
                      {tabs[1].name}
                    </TabButton>
                  </li>
                  <li>
                    <TabButton
                      $selected={selectedTab === 2}
                      onClick={() => setSelectedTab(2)}
                    >
                      {tabs[2].name}
                    </TabButton>
                  </li>
                </TabsList>
              </CardHeader>
              <CardBody>{tabs[selectedTab].element}</CardBody>
              {thisCampaign && (
                <CardSidePanel>
                  {thisCampaign?.type?.financial && (
                    <CampaignArrecadation sidePanel>
                      <PricesArea>
                        <CurrentArrecadation>
                          {getRaisedAmount(thisCampaign?.raised).toLocaleString(
                            "pt-BR",
                            {
                              style: "currency",
                              currency: "BRL",
                            }
                          )}
                        </CurrentArrecadation>
                      </PricesArea>
                      <ProgressBar
                        value={getRaisedAmount(thisCampaign?.raised)}
                        max={thisCampaign?.financialGoal}
                      />
                      <GoalArrecadation>
                        Objetivo:{" "}
                        {thisCampaign?.financialGoal?.toLocaleString("pt-BR", {
                          style: "currency",
                          currency: "BRL",
                        })}
                      </GoalArrecadation>
                    </CampaignArrecadation>
                  )}
                  <ButtonGroup>
                    {thisCampaign.type?.financial && <Button>Apoiar</Button>}
                    {thisCampaign.type?.material && (
                      <Button>Voluntariar-se</Button>
                    )}
                  </ButtonGroup>
                </CardSidePanel>
              )}
            </CampaignCard>
          </ContentMargin>
        </Article>
      </MainContainer>
    </CampaignContainer>
  );
}

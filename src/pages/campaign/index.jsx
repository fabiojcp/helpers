import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

import Button from "../../components/button";
import HeaderCampaign from "../../components/headerCampaign";
import ProfileIcon from "../../components/profileIcon";
import Shimmer from "../../components/shimmer";
import Modal from "../../components/modal";
import { CampaignsContext } from "../../providers/campaigns";
import { UserContext } from "../../providers/user";
import { toastStyle } from "../../providers/user";
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
  ButtonGroup,
  UnderlineLink,
  HelperCard,
  HelpersList,
  ImageStepButton,
  NoHelpers,
  ContactsList,
  ModalBody,
  ModalText,
} from "./styles";

import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { ReactComponent as BadgeVolunteer } from "../../assets/imgs/BadgeVolunteer.svg";
import { ReactComponent as BadgeDonation } from "../../assets/imgs/BadgeDonation.svg";
import Input from "../../components/input";

export default function Campaign() {
  const [selectedTab, setSelectedTab] = useState(0);
  const [thisCampaign, setThisCampaign] = useState({});
  const [campaignOwner, setCampaignOwner] = useState({});
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [imageStep, setImageStep] = useState(0);
  const [modalType, setModalType] = useState("donation");
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const [quantity, setQuantity] = useState(0);

  const { campaigns, getCampaign, editCampaign } = useContext(CampaignsContext);
  const { user, getUserById, modal, isLogged } = useContext(UserContext);
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
    setThisCampaign(campaigns.find((c) => c.id === thisCampaign.id));
  }, [campaigns]);

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

  function nextImg() {
    console.log(imageStep);
    if (imageStep === thisCampaign.img.length - 1) {
      setImageStep(0);
    } else {
      setImageStep(imageStep + 1);
    }
  }

  function prevImg() {
    console.log(imageStep);

    if (imageStep === 0) {
      setImageStep(thisCampaign.img.length - 1);
    } else {
      setImageStep(imageStep - 1);
    }
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
        <HelpersList>
          {thisCampaign?.helpers?.length > 0 ||
          thisCampaign?.raised?.length > 0 ? (
            [...thisCampaign?.helpers, ...thisCampaign?.raised].map(
              (helper) => (
                <HelperCard>
                  {helper.total ? <BadgeDonation /> : <BadgeVolunteer />}
                  <ProfileIcon
                    size={40}
                    name={helper.name}
                    image={helper.img}
                  />
                  <p>
                    <span>{helper.name}</span>{" "}
                    {helper.total
                      ? "doou para esta campanha"
                      : "apoiou esta campanha"}
                  </p>
                </HelperCard>
              )
            )
          ) : (
            <NoHelpers>Seja um dos primeiros a apoiar esta campanha</NoHelpers>
          )}
        </HelpersList>
      ),
    },
    {
      name: "Contato",
      element: (
        <ContactsList>
          <p>
            E-mail:{" "}
            <UnderlineLink src={`mailto:${campaignOwner?.email}`}>
              {campaignOwner?.email}
            </UnderlineLink>
          </p>
          <p>
            Telefone:{" "}
            <UnderlineLink src={`tel:${campaignOwner?.contacts?.phone}`}>
              {campaignOwner?.contacts?.phone}
            </UnderlineLink>
          </p>
        </ContactsList>
      ),
    },
  ];

  function volunteerCampaign(user) {
    const foundUser = thisCampaign.helpers.find(
      (helper) => helper.id === user.id
    );

    if (foundUser) {
      toast.error("Você já está apoiando esta campanha", toastStyle);
    } else {
      const helpers = [...thisCampaign.helpers, user];

      editCampaign(params.id, { helpers: [...helpers] });
    }
  }

  function supportCampaign(user, quantity) {
    console.log(user, quantity);

    const raised = [
      ...thisCampaign.raised,
      {
        ...user,
        total: quantity,
      },
    ];

    editCampaign(params.id, { raised: [...raised] });
  }

  const date = new Date(thisCampaign?.date);

  function renderModal() {
    if (modalType === "donation") {
      return (
        <Modal closeable header={<h1>Contribua financeiramente</h1>}>
          <ModalBody>
            <ModalText>
              Nome da instituição: <span>{campaignOwner?.name}</span>
            </ModalText>
            <ModalText>
              Banco: <span>{thisCampaign?.bankDetails?.bankName}</span>
            </ModalText>
            <ModalText>
              Agência: <span>{thisCampaign?.bankDetails?.agency}</span>
            </ModalText>
            <ModalText>
              Conta: <span>{thisCampaign?.bankDetails?.account}</span>
            </ModalText>
            <ModalText>
              Conta: <span>{thisCampaign?.bankDetails?.accountType}</span>
            </ModalText>
            <ModalText>
              Chave Pix: <span>{thisCampaign?.bankDetails?.pix}</span>
            </ModalText>
            <Input dark>
              <label htmlFor="quantity">Quantia:</label>
              <input
                value={quantity}
                onChange={(e) => setQuantity(+e.target.value)}
                type="number"
                name="value"
                id="quantity"
              />
            </Input>
            <Button onClick={() => supportCampaign(user, quantity)}>
              Apoiar
            </Button>
          </ModalBody>
        </Modal>
      );
    } else if (modalType === "volunteer") {
      return (
        <Modal closeable header={<h1>Contribua voluntáriamente</h1>}>
          <ModalBody>
            <ModalText>
              Data:{" "}
              <span>
                {date.getDay()}/{date.getMonth()}/{date.getFullYear()}
              </span>
            </ModalText>
            <ModalText>
              Endereço: <span>{thisCampaign?.address}</span>
            </ModalText>
            <ModalText>
              Em <span>{thisCampaign?.city}</span> -{" "}
              <span>{thisCampaign?.state}</span>
            </ModalText>
            <Button onClick={() => volunteerCampaign(user)}>
              Confirmar presença
            </Button>
          </ModalBody>
        </Modal>
      );
    }
  }
  return (
    <CampaignContainer>
      {renderModal()}
      <HeaderCampaign
        fixed={screenWidth >= 1024}
        menuOpen={userMenuOpen}
        setMenuOpen={setUserMenuOpen}
        setModalType={setModalType}
      >
        {!isLogged && <Button onClick={() => navigate("/dashboard")}>Voltar</Button>}
      </HeaderCampaign>
      <MainContainer>
        <Article>
          <CampaignHeader>
            <FigureImage>
              <ImageStepButton left onClick={prevImg}>
                <FiChevronLeft />
              </ImageStepButton>
              {thisCampaign?.img && (
                <img src={thisCampaign?.img[imageStep]} alt="Campanha" />
              )}
              <ImageStepButton right onClick={nextImg}>
                <FiChevronRight />
              </ImageStepButton>
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
                    {thisCampaign.type?.financial && (
                      <Button
                        disabled={!isLogged}
                        onClick={() => {
                          setModalType("donation");
                          modal.open();
                        }}
                      >
                        Apoiar
                      </Button>
                    )}
                    {thisCampaign.type?.material && (
                      <Button
                        disabled={
                          !isLogged ||
                          user.type === "entity" ||
                          user.type === "juridica"
                        }
                        onClick={() => {
                          setModalType("volunteer");
                          modal.open();
                        }}
                      >
                        Voluntariar-se
                      </Button>
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

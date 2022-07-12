import logo from "../../assets/imgs/LogotipoBranca.svg";
import Footer from "../../components/footer";
import { FiPlus } from "react-icons/fi";
import {
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

import  DashboardGraphics  from "../../components/dashboardGraphics";
import { Link, useNavigate } from "react-router-dom";
import ModalEntity from "../modalEntity";

export default function DashboardEntity() {
  

  const { campaigns } = useContext(CampaignsContext);

  const {user, modal} = useContext( UserContext )

  console.log(user);

  if (user.type === "entity"){
    return(
      <>
        <Header>
          <Logo src={logo} alt="logo" />
          <UserBox
          onClick={() => {
            modal.open();
          }}
        > 
          <img src={user.img} alt="user" />
        </UserBox>
        </Header>
        <ModalEntity/>
        
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

  
        <Footer light />
      </>
    )
   }
}
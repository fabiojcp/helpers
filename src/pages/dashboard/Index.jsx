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

export default function Dashboard() {
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

        <ListBox>
          <h2>Campanhas criadas recentemente</h2>
          <ScrollBox>
            <ul>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </ScrollBox>
        </ListBox>
      </Container>

      <Footer light />
    </>
  );
}

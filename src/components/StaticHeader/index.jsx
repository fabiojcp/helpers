import { Link } from "react-router-dom";
import { GlobalStyle, HeaderContainer } from "./style";
import { User } from "../../providers/user";
import { ModalProfile } from "../../providers/modalProfile";

export default function StaticHeader({ blue }) {
  const { openModalProfile } = ModalProfile();
  let user = () => false;
  if (window.localStorage.getItem("user") !== null) {
    user = () => {
      const { user } = User();
      return user;
    };
  }
  return (
    <>
      <GlobalStyle />
      <HeaderContainer blue={blue ? true : false}>
        <nav>
          <Link to="/">Helpers</Link>
          {user() ? ( //verifica se o user vindo da ContextAPI existe e se sim mostra a foto do usuario
            <button onClick={openModalProfile}>
              <img src={user().img} alt="Foto de perfil" />
            </button>
          ) : null}
        </nav>
      </HeaderContainer>
    </>
  );
}

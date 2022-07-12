import { useContext } from "react";

import ProfileIcon from "../profileIcon";
import { ReactComponent as AppLogo } from "../../assets/imgs/LogotipoBranca.svg";
import { UserContext } from "../../providers/user";
import { UserMenu } from "../userMenu";

import {
  HeaderNavbar,
  NavbarContent,
  SideNavActions,
  TransparentButton,
} from "./styles";
import { useNavigate } from "react-router-dom";

const Header = ({
  fixed = false,
  menuOpen,
  setMenuOpen,
  setModalType,
  children,
}) => {
  const navigate = useNavigate();
  const { isLogged, user } = useContext(UserContext);

  return (
    <HeaderNavbar $fixed={fixed}>
      <NavbarContent>
        <TransparentButton
          onClick={() => (isLogged ? navigate("/dashboard") : navigate("/"))}
        >
          <AppLogo className="logo" />
        </TransparentButton>
        <SideNavActions>
          {children}
          {isLogged && (
            <>
              <TransparentButton
                onClick={() => {
                  setMenuOpen(!menuOpen);
                  setModalType("edit");
                }}
              >
                <ProfileIcon image={user.img} name={user.name} />
              </TransparentButton>
            </>
          )}
        </SideNavActions>
      </NavbarContent>
    </HeaderNavbar>
  );
};

export default Header;

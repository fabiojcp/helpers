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
import { useNavigate, useLocation } from "react-router-dom";

const Header = ({
  fixed = false,
  menuOpen,
  setMenuOpen,
  setModalType,
  children,
}) => {
  const navigate = useNavigate();
  const { isLogged, user } = useContext(UserContext);
  const location = useLocation();

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
                <div
                  onClick={() => {
                    location.pathname.includes("campaign") && navigate("/dashboard");
                  }}
                >
                  <ProfileIcon image={user.img} name={user.name} />
                </div>
              </TransparentButton>
            </>
          )}
        </SideNavActions>
      </NavbarContent>
    </HeaderNavbar>
  );
};

export default Header;

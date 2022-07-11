import ProfileIcon from "../profileIcon";
import { ReactComponent as AppLogo } from "../../assets/imgs/LogotipoBranca.svg";

import { HeaderNavbar, NavbarContent, SideNavActions } from "./styles";

const Header = ({ fixed = false, children }) => {
  return (
    <HeaderNavbar $fixed={fixed}>
      <NavbarContent>
        <AppLogo className="logo" />
        <SideNavActions>
          {children}
          <ProfileIcon
            image="http://afernandes.adv.br/wp-content/uploads/Team-Member-3.jpg"
            name="Carlos Umberto"
          />
        </SideNavActions>
      </NavbarContent>
    </HeaderNavbar>
  );
};

export default Header;

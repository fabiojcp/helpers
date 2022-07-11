import styled from "styled-components";
import ContentContainer from "../contentContainer";

export const HeaderNavbar = styled.header`
  position: ${({ $fixed }) => ($fixed ? "fixed" : "relative")};
  width: 100%;

  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(20px);

  svg.logo {
    margin-left: 20px;

    width: fit-content;
    height: 35px;
  }

  z-index: 5000;
`;

export const NavbarContent = styled(ContentContainer)`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 10px 0;
`;

export const SideNavButton = styled.button`
  display: inline-flex;

  background-color: transparent;
  border: none;
  color: #fff;

  padding: 10px 20px;

  svg {
    font-size: 30px;
  }
`;

export const SideNavActions = styled.div`
  padding: 0 20px;

  display: flex;
  justify-content: flex-end;
`;

import styled from "styled-components";
import device from "../../style/devices";

export const Container = styled.div`
  width: 100%;
  margin: 0 auto;

  @media screen and (${device.laptop}) {
    max-width: 90%;
  }

  @media screen and (${device.desktop}) {
    max-width: 80%;
  }

  @media screen and (${device.desktopL}) {
    max-width: 70%;
  }
`;

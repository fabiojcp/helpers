import styled from "styled-components";
import device from "../../style/devices";

export const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  @media screen and (${device.mobile}) {
  }

  @media screen and (${device.laptop}) {
  }

  @media screen and (${device.desktop}) {
  }
`;

export const Header = styled.div`
  background: #123571;
  height: 9vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
`;

export const Logo = styled.img`
  height: 50%;
`;

export const UserBox = styled.div`
  display: flex;
  align-items: center;
  width: 45px;
  height: 45px;
  border-radius: 50%;
  background-color: white;
`;

export const ListContainer = styled.div`
  height: 75vh;
  width: 100vw;
  margin-top: 3vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #123571;
  gap: 20px;
`;

export const ListUser = styled.div`
  width: 90vw;
  border-radius: 16px;
  background: #bee0ff;
  padding: 10px 0;
  height: 40%;
  border: 2px solid #82c3ff;
`;

export const ScrollBox = styled.div`
  overflow-x: scroll;
  height: 100%;
`;

export const CardLi = styled.li`
  margin-top: 20px;
  height: 100%;
  min-width: 310px;
  width: 310px;

  :first-child {
    margin-left: 20px;
  }
`;

export const ListBox = styled.div`
  width: 100vw;
`;

export const CardUl = styled.li`
  list-style: none;
  min-width: 100vw;
  display: flex;
  height: 80%;
  gap: 20px;
`;

export const Tilte = styled.h2`
  padding-left: 20px;
  font-size: 30px;
  font-weight: bold;
`;

export const CardLiAll = styled.li`
  margin-top: 20px;
  height: 100%;
  min-width: 310px;
  width: 310px;

  :first-child {
    margin-left: 20px;

    @media (min-width: 780px) {
      margin-left: 100px;
    }
  }
`;

export const TilteAll = styled.h2`
  padding-left: 20px;
  font-size: 30px;
  font-weight: bold;

  @media screen and (${device.laptop}) {
  }

  @media screen and (${device.desktop}) {
    padding-left: 100px;
  }
`;

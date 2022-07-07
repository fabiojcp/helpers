import styled from "styled-components";

export const Header = styled.div`
  background: #123571;
  height: 9vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
`;

export const Menu = styled.img`
  height: 60%;
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

export const Container = styled.div`
  height: 75vh;
  width: 100vw;
  padding-left: 20px;
  margin-top: 3vh;
  display: flex;
  flex-direction: column;
  color: #123571;
  gap: 50px;
`;

export const ListUser = styled.div`
  width: 90vw;
  border-radius: 16px;
  background-color: #82c3ff;
  padding: 10px;
  height: 28vh;

  h2 {
    font-size: 30px;
    font-weight: bold;
  }

  ul {
    min-width: 100vw;
    display: flex;
    height: 80%;
    gap: 20px;
  }

  li {
    margin-top: 15px;
    height: 90%;
    border: 3px dotted #123571;
    min-width: 250px;
    border-radius: 16px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-weight: bold;
  }
`;

export const ScrollBox = styled.div`
  overflow: scroll;
  height: 100%;
`;

export const ListBox = styled.div`
  height: 28vh;

  h2 {
    font-size: 30px;
    font-weight: bold;
  }

  ul {
    min-width: 100vw;
    display: flex;
    height: 80%;
    gap: 20px;
  }

  li {
    margin-top: 15px;
    height: 90%;
    border: 3px solid #123571;
    min-width: 250px;
    border-radius: 16px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-weight: bold;
  }
`;

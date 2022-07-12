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
  overflow: hidden;
  cursor: pointer;
  img {
    height: 100%;
    width: 100%;
  }
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
    max-width: 250px;
    border-radius: 16px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    font-weight: bold;
    padding-bottom: 15px;
  }

  img {
    width: 100%;
    height: 50%;
    border-radius: 16px;
  }
`;

export const ScrollBox = styled.div`
  overflow: scroll;
  height: 100%;
`;

export const ListBox = styled.div`
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
    position: relative;
    div {
      position: absolute;
      padding: 12px;
      border-radius: 16px;
      width: 100%;
      background: linear-gradient(
        0deg,
        rgba(0, 0, 0, 1) 3%,
        rgba(0, 0, 0, 0.5) 50%,
        rgba(255, 255, 255, 0) 100%
      );
      bottom: 0px;
      color: white;
    }
  }
  li:hover {
    div {
      display: initial;
    }
  }
  img {
    height: 100%;
    width: 100%;
    border-radius: 16px;
  }
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  input {
    font-size: 16px;
    padding: 3px;
    border: 2px solid #123571;
    border-radius: 6px;
  }
  div {
    display: flex;
    flex-direction: column;
    margin: 4px;
  }
`;

export const HeaderModal = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

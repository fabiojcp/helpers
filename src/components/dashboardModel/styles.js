import styled from "styled-components";

export const Header = styled.div`
  background: #123571;
  height: 8vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 5vw;
`;

export const Logo = styled.img`
  height: 2.2rem;
`;

export const UserBox = styled.div`
  display: flex;
  align-items: center;
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  background-color: white;
  overflow: hidden;
  img {
    height: 100%;
    width: 100%;
  }
`;

export const ListContainer = styled.div`
  width: 100vw;
  margin-top: 1vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #123571;
  gap: 2rem;
`;

export const ListUser = styled.div`
  width: 90vw;
  border-radius: 16px;
  background: #bee0ff;
  padding: 0.5rem 0;
  border: 2px solid #82c3ff;
`;

export const ScrollBox = styled.div`
  overflow-x: scroll;
`;

export const CardLi = styled.li`
  margin-top: 1rem;
  height: 100%;
  min-width: 23rem;
  width: 23rem;
  cursor: pointer;

  :first-child {
    margin-left: 2vw;
  }
`;

export const ListBox = styled.div`
  width: 100%;
`;

export const CardUl = styled.li`
  list-style: none;
  display: flex;
  gap: 20px;
`;

export const Title = styled.h2`
  padding-left: 2vw;
  font-size: 2rem;
  font-weight: bold;
`;

export const CardLiAll = styled.li`
  margin-top: 1rem;
  min-width: 23rem;
  width: 23rem;
  cursor: pointer;

  :first-child {
    margin-left: 2vw;

    @media (min-width: 780px) {
      margin-left: 5vw;
    }
  }
`;

export const TitleAll = styled.h2`
  text-align: center;
  font-size: 2rem;
  font-weight: bold;
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

  select {
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

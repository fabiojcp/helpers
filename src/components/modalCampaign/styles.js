import styled from "styled-components";

export const ModalContainer = styled.div`
  position: fixed;

  left: 0;
  top: 0;
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: ${({ theme }) => theme.primary[950]}20;
  backdrop-filter: blur(20px);

  z-index: 6000;
`;

export const ModalArea = styled.aside`
  background-color: ${({ theme }) => theme.primary[950]};
  color: ${({ theme }) => theme.primary[100]};
  border-radius: 15px;
  overflow: hidden;

  width: 100%;
  height: fit-content;
  max-width: 60vmin;
  min-width: 350px;

  font-family: Inter, sans-serif;
  font-size: 1.2rem;
  font-weight: 500;
`;

export const ModalHeader = styled.header`
  padding: 20px 24px;

  background-color: ${({ theme }) => theme.primary[100]};
  color: ${({ theme }) => theme.primary[900]};

  font-weight: 700px;
  font-size: 30px;

  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  .modal__headerContent {
    width: 100%;
  }

  .modal__closeBtn {
    background-color: transparent;
    border: none;
    color: ${({ theme }) => theme.primary[950]};

    svg {
      color: ${({ theme }) => theme.primary[950]};
      font-size: 40px;
    }
  }
`;

export const ModalBody = styled.section`
  padding: 24px;
  overflow-y: scroll;
  max-height: 80vh;
  select {
    font-weight: bold;
    text-align: left;
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 5px 2%;
    border-radius: 6px;
    border: 2px solid ${({ theme }) => theme.primary[100]};
    cursor: pointer;
    font-weight: 400;
  }
`;

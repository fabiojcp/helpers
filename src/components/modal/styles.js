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

  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(20px);

  z-index: 6000;
`;

export const ModalArea = styled.aside`
  background-color: #fff;
  color: #000;
  border-radius: 15px;
  overflow: hidden;

  width: 100%;
  height: fit-content;
  max-width: 90vmin;
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
    color: #fff;

    svg {
      color: #fff;
      font-size: 40px;
    }
  }
`;

export const ModalBody = styled.section`
  padding: 24px;
`;

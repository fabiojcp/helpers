import styled, { css } from "styled-components";
import ContentContainer from "../../components/contentContainer";
import device from "../../style/devices";

export const CampaignContainer = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
`;

export const MainContainer = styled.main`
  width: 100%;
  height: 100%;
`;

export const Article = styled.article`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;

  position: relative;
`;

export const CampaignHeader = styled.header`
  width: 100%;
`;

export const FigureImage = styled.figure`
  width: 100%;
  height: fit-content;
  max-height: 300px;

  display: flex;
  align-items: center;

  overflow: hidden;

  img {
    width: 100%;
  }

  @media (${device.desktop}) {
    max-height: 75vh;

    z-index: 1;
    position: relative;

    &::after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;

      width: 100%;
      height: 200px;

      background: linear-gradient(
        180deg,
        rgba(135, 135, 135, 0) 0%,
        ${({ theme }) => theme.primary[950]} 100%
      );
    }
  }
`;

export const ContentMargin = styled(ContentContainer)`
  width: 100%;
  flex: 1;

  @media (${device.desktop}) {
    margin-top: -250px;

    display: flex;
    flex-direction: column;
    align-items: center;

    z-index: 10;
  }
`;

export const CampaignCard = styled.section`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;

  background-color: ${({ theme }) => theme.primary[950]};
  border-radius: 10px;
  overflow: hidden;

  position: relative;

  @media (${device.desktop}) {
    background-color: #fff;

    margin-bottom: 100px;

    box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.25);
  }
`;

export const CardHeader = styled.div`
  padding: 12px 20px;

  display: flex;
  flex-direction: column;
  gap: 15px;

  padding-bottom: 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.25);

  @media (${device.desktop}) {
    background-color: ${({ theme }) => theme.primary[100]};

    padding: 50px 40px;
    padding-bottom: 0;

    gap: 25px;
    border: none;

    padding-right: 30%;
  }
`;

export const Title = styled.h2`
  color: ${({ theme }) => theme.primary[100]};

  font-size: 36px;
  font-weight: 700;
  line-height: 40px;

  @media (${device.desktop}) {
    color: ${({ theme }) => theme.primary[900]};

    font-size: 48px;
  }
`;

export const ProfileWithName = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const ProfileName = styled.p`
  font-size: 18px;
  font-weight: 500;

  color: ${({ theme }) => theme.primary[250]};

  @media (${device.desktop}) {
    color: ${({ theme }) => theme.primary[800]};
  }
`;

export const CurrentArrecadation = styled.h3`
  font-size: 32px;
  font-weight: 700;

  color: ${({ theme }) => theme.primary[400]};
`;

export const GoalArrecadation = styled.h4`
  font-size: 16px;
  font-weight: 700;
  text-transform: uppercase;

  color: ${({ theme }) => theme.primary[250]};
`;

export const CampaignArrecadation = styled.div`
  display: flex;
  flex-direction: column;

  @media (${device.desktop}) {
    display: none;
    text-align: right;

    ${GoalArrecadation} {
      margin-top: 10px;
    }
  }

  ${({ sidePanel }) =>
    sidePanel &&
    css`
      @media (${device.desktop}) {
        display: flex;
        gap: 10px;
      }
    `}
`;

export const PricesArea = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

export const ProgressBar = styled.progress`
  width: 100%;
  height: 22px;

  margin-top: 6px;

  appearance: none;

  &::-webkit-progress-bar {
    background-color: ${({ theme }) => theme.gray[500]};
    border-radius: 4px;
    border: 1px solid ${({ theme }) => theme.gray[400]};
  }

  &::-webkit-progress-value {
    background-color: ${({ theme }) => theme.secondary[500]};
    border-radius: 4px 0 0 4px;
  }
`;

export const TabsList = styled.ul`
  display: flex;
  gap: 10px;
`;

export const TabButton = styled.button`
  font-size: 20px;
  font-weight: ${({ $selected }) => ($selected ? 700 : 500)};

  padding: 4px 8px;
  padding-bottom: 10px;

  background-color: transparent;
  border: none;
  color: ${({ $selected, theme }) =>
    $selected ? theme.primary[400] : theme.primary[250]};

  position: relative;

  ${({ $selected }) =>
    $selected &&
    css`
      &::before {
        content: "";
        position: absolute;
        left: 0;
        bottom: 0;

        width: 100%;
        height: 5px;

        border-radius: 10px 10px 0 0;
        background-color: ${({ theme }) => theme.primary[400]};
      }
    `};

  @media (${device.desktop}) {
    color: ${({ $selected, theme }) =>
      $selected ? theme.primary[900] : theme.primary[800]};

    ${({ $selected }) =>
      $selected &&
      css`
        &::before {
          background-color: ${({ theme }) => theme.primary[900]};
        }
      `};
  }
`;

export const CardBody = styled.div`
  padding: 12px 20px;
  flex: 1;

  font-size: 18px;
  font-weight: 400;

  color: ${({ theme }) => theme.primary[100]};

  @media (${device.desktop}) {
    padding: 25px 40px;
    padding-right: 30%;

    font-size: 22px;
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 10px;
`;

export const CardSidePanel = styled.aside`
  background-color: ${({ theme }) => theme.primary[950]};

  width: 100%;
  padding: 12px 20px;
  margin-top: auto;

  position: sticky;
  bottom: 0;

  @media (${device.desktop}) {
    width: 27.5%;
    height: fit-content;

    position: absolute;
    top: 25px;
    right: 2.5%;

    padding: 25px 20px;
    margin-top: 5%;
    margin-bottom: 50px;

    border-radius: 8px;
    background-color: ${({ theme }) => theme.primary[950]};

    display: flex;
    flex-direction: column;
    gap: 20px;

    ${ButtonGroup} {
      flex-direction: column;
    }
  }
`;

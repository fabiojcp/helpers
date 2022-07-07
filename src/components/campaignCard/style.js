import styled, { css } from "styled-components";

export const CampaignCardContainer = styled.article`
  width: 100%;
  max-height: 400px;

  overflow: hidden;
  border-radius: 15px;
  background-color: #cae9ff;

  position: relative;
`;

export const FigureHolder = styled.figure`
  width: 100%;
  height: 50%;
  max-height: 200px;

  display: flex;
  align-items: center;
  overflow: hidden;

  position: relative;

  img {
    width: 100%;
  }

  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;

    width: 100%;
    height: 100%;
    background: linear-gradient(180deg, rgba(0, 0, 0, 0) 51.04%, #000000 100%);
  }
`;

export const FigureContent = styled.header`
  height: 100%;
  max-height: 200px;

  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  position: absolute;
  top: 0;
  left: 0;

  padding: 15px 20px;
`;

export const Title = styled.h3`
  font-family: Inter, sans-serif;
  font-weight: 700;
  font-size: 28px;
  text-transform: uppercase;

  color: #fff;
`;

export const Subtitle = styled.h4`
  font-family: Inter, sans-serif;
  font-weight: 700;
  font-size: 14px;
  text-transform: uppercase;

  color: #49628f;
`;

export const Body = styled.section`
  padding: 15px 20px;

  display: flex;
  flex-direction: column;
  gap: 10px;

  position: relative;
`;

export const Description = styled.p`
  font-family: Inter, sans-serif;
  font-weight: 500;
  font-size: 16px;

  color: #123571;
`;

export const RequirementsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 5px;

  padding-left: 15px;
`;

export const Requirement = styled.li`
  font-family: Inter, sans-serif;
  font-weight: 500;
  font-size: 16px;

  color: #123571;

  position: relative;

  ${({ withBullet }) =>
    withBullet &&
    css`
      &::before {
        content: "";
        position: absolute;

        width: 4px;
        height: 4px;
        top: 25%;
        left: -10px;

        background-color: #123571;
        border-radius: 50%;
      }
    `}

  ${({ others }) =>
    others &&
    css`
      color: #49628f;
    `}
`;

export const BadgesList = styled.ul`
  position: absolute;
  bottom: 0;
  right: 0;

  padding: 15px 20px;

  display: flex;
  gap: 5px;
`;

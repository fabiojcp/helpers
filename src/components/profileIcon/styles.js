import styled from "styled-components";

export const ProfileIconContainer = styled.figure`
  width: ${({ size }) => size || 54}px;
  height: ${({ size }) => size || 54}px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: ${({ theme }) => theme.primary[400]};
  border-radius: 50%;
  overflow: hidden;
`;

export const Image = styled.img`
  width: 100%;
`;

export const Initials = styled.span`
  font-size: ${({ size }) => size - 20 || 24}px;
  font-weight: 700;

  color: #fff;

  user-select: none;
`;

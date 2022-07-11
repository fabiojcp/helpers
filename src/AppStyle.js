import styled from "styled-components";

const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.theme.primary[950]};
  color: ${(props) => props.theme.color};
`;

export default AppContainer;

import styled from "styled-components";
import { ThemeType } from "../../store/ducks/theme/types";

export const ContainerStyle = styled.div<{ theme: ThemeType }>`
  background-color: ${props => props.theme.secondaryColor};
  width: 100%;
  height: calc(100% - 80px);
  -webkit-transition: background-color 0.2s linear;
  -ms-transition: background-color 0.2s linear;
  transition: background-color 0.2s linear;
  display: flex;
  flex-flow: column;
`;

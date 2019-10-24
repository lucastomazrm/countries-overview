import styled from "styled-components";
import { ThemeType } from "../../store/ducks/theme/types";

export const ContainerStyle = styled.div<{ theme: ThemeType }>`
  background-color: ${props => props.theme.secondaryColor};
  width: 100%;
  height: 100%;
  -webkit-transition: background-color 0.2s linear;
  -ms-transition: background-color 0.2s linear;
  transition: background-color 0.2s linear;
`;

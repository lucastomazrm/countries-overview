import styled from "styled-components";
import { ThemeType } from "../../store/ducks/theme/types";

export const HeaderStyle = styled.div<{ theme: ThemeType }>`
  background-color: ${props => props.theme.primaryColor};
  height: 80px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 5rem;
  -webkit-transition: background-color 0.2s linear;
  -ms-transition: background-color 0.2s linear;
  transition: background-color 0.2s linear;
`;

export const TitleStyle = styled.h2<{ theme: ThemeType }>`
  font-size: 1.5rem;
  color: ${props => props.theme.text};
  font-weight: 800;
`;

export const ThemeSelectorStyle = styled.button<{ theme: ThemeType }>`
  font-size: 16px;
  border: none;
  font-weight: 600;
  color: ${props => props.theme.text};
  background: transparent;
  cursor: pointer;
  svg {
    margin-right: 10px;
  }
`;
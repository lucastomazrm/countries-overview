import styled from "styled-components";
import { ThemeType } from "../../store/ducks/theme/types";

export const HeaderStyle = styled.div<{ theme: ThemeType }>`
  background-color: ${props => props.theme.primaryColor};
  height: 80px;
  width: 100%;
  position: absolute;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  transition: background-color 0.2s linear;
  box-shadow: 0 0 10px #00000026;
`;

export const TitleStyle = styled.h2<{ theme: ThemeType }>`
  font-size: 1.5rem;
  color: ${props => props.theme.text};
  font-weight: 800;
  padding: 0 5rem;
  @media(max-width: 812px) {
    padding: 0 1rem;
  }
`;

export const ThemeSelectorStyle = styled.button<{ theme: ThemeType }>`
  font-size: 16px;
  border: none;
  font-weight: 600;
  color: ${props => props.theme.text};
  background: transparent;
  cursor: pointer;
  padding: 0 5rem;
  @media(max-width: 812px) {
    padding: 0 1rem;
  }
  svg {
    margin-right: 10px;
  }
`;
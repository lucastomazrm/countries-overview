import styled from "styled-components";
import { ThemeType } from "../../store/ducks/theme/types";

export const SelectDiv = styled.div<{ theme: ThemeType }>`
  display: flex;
  align-items: center;
  background-color: ${props => props.theme.primaryColor};
  border-radius: 5px;
  box-shadow: 0 0 10px #00000026;
  padding-right: 20px;
  @media (max-width: 812px) {
    margin-top: 20px;
    padding: 15px 20px 15px 20px;
  }
`;

export const SelectStyle = styled.select<{ theme: ThemeType }>`
  background: transparent;
  border: none;
  padding: 0 20px;
  font-size: 14px;
  flex: 1;
  height: 100%;
  color: ${props => props.theme.text};
  transition: background-color 0.2s linear;
  appearance: none;
`;

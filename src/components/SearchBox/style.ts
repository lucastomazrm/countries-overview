import styled from "styled-components";
import { ThemeType } from "../../store/ducks/theme/types";

export const SearchBoxStyle = styled.input<{ theme: ThemeType }>`
    background-color: ${props => props.theme.primaryColor};
    border: none;
    padding: 15px 20px 15px 80px;
    font-size: 16px;
    border-radius: 5px;
    flex: 1;
    color: ${props => props.theme.text};
    transition: background-color 0.2s linear;
    box-shadow: 0 0 10px #00000026;

    ::placeholder {
        color: ${props => props.theme.text};
        opacity: 0.4;
      }
`;
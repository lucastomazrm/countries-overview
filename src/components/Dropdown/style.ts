import styled from "styled-components";
import { ThemeType } from "../../store/ducks/theme/types";

export const SelectStyle = styled.select<{ theme: ThemeType }>`
    background-color: ${props => props.theme.primaryColor};
    border: none;
    padding: 0 60px 0 20px;
    font-size: 14px;
    border-radius: 5px;
    flex: 1;
    color: ${props => props.theme.text};
    transition: background-color 0.2s linear;
    box-shadow: 0 0 10px #00000026;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
`;
import styled from "styled-components";
import { ThemeType } from "../../store/ducks/theme/types";

export const BackButtonStyle = styled.button<{ theme: ThemeType }>`
  font-size: 16px;
  border: none;
  font-weight: 600;
  color: ${props => props.theme.text};
  background: ${props => props.theme.primaryColor};
  cursor: pointer;
  padding: 11px 3rem 8px 3rem;
  border-radius: 5px;
  box-shadow: 0 0 10px #00000026;
  @media (max-width: 812px) {
    padding: 0 1rem;
  }
  svg {
    margin-right: 10px;
  }
`;

export const FlagDivStyle = styled.div`
  flex: 1;
  padding: 0 5em;

  img {
    max-width: 100%;
    height: auto;
    box-shadow: 0 0 10px #00000026;
  }

  @media (max-width: 812px) {
    padding: 2em;
    img {
      min-width: 300px;
    }
  }
`;

export const DetailsStyle = styled.div`
  flex: 1;
  margin: 5rem 10rem 2rem 2rem;
  display: flex;
  flex-flow: column;
  background: transparent;
  @media (max-width: 812px) {
    margin-left: 5rem;
  }
`;

export const CountryTitle = styled.span<{ color: string }>`
  font-weight: 800;
  color: ${props => props.color};
  margin-bottom: 20px;
  font-size: 32px;
`;

export const OtherInfo = styled.span<{ color: string }>`
  font-weight: 600;
  color: ${props => props.color};
  font-size: 14px;
  padding: 10px 0;

  span {
    font-weight: 300;
  }
`;

export const OtherCountries = styled.div<{ theme: ThemeType }>`
  margin-top: 3rem;
  color: ${props => props.theme.text};
  display: flex;
  flex-flow: wrap;
  align-items: center;

  > span {
    background: ${props => props.theme.primaryColor};
    color: ${props => props.theme.text};
    padding: 5px 15px;
    margin: 0 5px;
    cursor: pointer;
    font-weight: 300;
    @media (max-width: 812px) {
      margin: 5px;
    }
  }
`;

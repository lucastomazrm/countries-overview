import styled from "styled-components";
import { ThemeType } from "../../store/ducks/theme/types";

export const CardStyle = styled.div<{ color: string }>`
  background-color: ${props => props.color};
  width: 18%;
  min-width: 200px;
  margin: 0 40px 80px 40px;
  box-shadow: 0 0 10px #00000026;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s;

  :hover {
    box-shadow: 0px 15px 25px -5px #0000001a;
    transform: scale(1.03);
  }
`;

export const FlagStyle = styled.img`
  width: 100%;
  height: 150px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
`;

export const CountryDetails = styled.div`
  padding: 25px;
  display: flex;
  flex-direction: column;
  background: transparent;
`;

export const CountryTitle = styled.span<{ color: string }>`
  font-weight: 800;
  color: ${props => props.color};
  margin-bottom: 20px;
  font-size: 16px;
`;

export const OtherInfo = styled.span<{ color: string }>`
  font-weight: 600;
  color: ${props => props.color};
  font-size: 14px;
  padding: 5px 0;

  span {
    font-weight: 300;
  }
`;

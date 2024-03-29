import styled from "styled-components";
import { ThemeType } from "../../store/ducks/theme/types";

export const RowStyle = styled.div<{ theme: ThemeType }>`
  display: flex;
  padding: 3rem 5rem;
  flex-flow: row wrap;

  @media (max-width: 812px) {
    padding: 3rem 2rem;
  }
`;

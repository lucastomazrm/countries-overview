import styled from "styled-components";
import { ThemeType } from "../../store/ducks/theme/types";

export const DropdownDiv = styled.div`
  flex: 2;
  display: flex;
  justify-content: flex-end;
  @media (max-width: 812px) {
    justify-content: flex-start;
  }
`;

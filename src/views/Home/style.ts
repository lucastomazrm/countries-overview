import styled from "styled-components";
import { ThemeType } from "../../store/ducks/theme/types";

const Container = styled.div<{ theme: ThemeType }>`
  background-color: ${props => props.theme.primaryColor};
  width: 100%;
  height: 100%;
`;

export { Container };

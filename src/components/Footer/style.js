import styled from "styled-components";
import { colors } from "../../styles/colors";

export const FooterContainer = styled.footer`
  width: 100%;
  padding: 4rem 0;
  background-color: ${colors.secondaryColor};
 
  p {
    color: ${colors.detailsColor100};
    font-size: 1.6rem;
    font-weight: 400;
    line-height: 2.4rem;
    text-align: center;
  }
`
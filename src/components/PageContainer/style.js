import styled from "styled-components";
import { colors } from "../../styles/colors";

import topDecoration from '../../assets/images/topDecoration.svg';
import rightDecoration from '../../assets/images/rightDecoration.svg'

export const PageWrapper = styled.div`
  width: 100%;

  background-image: url(${topDecoration});
  background-position: top left;
  background-repeat: no-repeat;
  background-size: 35.2rem;
  background-color: ${props => props.color};
 
  position: relative;
  
  @media screen and (min-width: 700px) {
    background-size: 56rem;
  }
`;

export const PageContentWrapper = styled.div `
  width: 100%;

  background-image: url(${rightDecoration});
  background-repeat: no-repeat;
  background-size: 8rem;
  background-position: 105% 15%;

  @media screen and (min-width: 700px) {
    background-position: 100% 48%;
    background-size: 13rem;
  }
`
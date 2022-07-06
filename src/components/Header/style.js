import styled from "styled-components";
import { colors } from '../../styles/colors';

import logoSmall from '../../assets/images/logoSmallWhite.png';
import logoBig from '../../assets/images/logoBigWhite.png';

export const HeaderContainer = styled.header`
  padding: 4.8rem 4.85rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const IconsWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 6rem;
`;

export const Logo = styled.div `
  width: 2rem;
  height: 2rem;

  background-image: url(${logoSmall});
  background-size: contain;
  background-repeat: no-repeat;
  
  @media screen and (min-width: 700px) {
    width: 12.8rem;
    height: 3rem;
  
    background-image: url(${logoBig});
  }
`

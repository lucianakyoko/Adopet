import styled from "styled-components";
import { colors } from "../../styles/colors";
import { ParagraphWrapper } from '../../styles/mixins';

export const AnimalsPageContainer = styled.div`
  margin-top: 4rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3.2em;

  @media screen and (min-width: 700px) {
    margin-left: 4.8rem;
    margin-bottom: 3.2rem;
  }

  @media screen and (min-width: 1000px) {
    margin-bottom: 6rem;
  }
`;

export const IntroParagraphWrapper = styled.div`
 ${ParagraphWrapper};
`;

export const AnimalsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 1.6rem;
`

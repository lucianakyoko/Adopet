import styled from "styled-components";
import { colors } from "../../styles/colors";
import illustration from '../../assets/images/paws.svg';
import { Container, ParagraphWrapper, FormWrapper } from "../../styles/mixins";

export const RegistrationContainer = styled.div`
  ${Container};
`;

export const RegistrationParagraphWrapper = styled.div `
  ${ParagraphWrapper}
`;

export const Form = styled.form `
  ${FormWrapper}
  /* display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;

  padding: 3.2rem 0 4rem 0;
  margin-bottom: 10rem; */
`;


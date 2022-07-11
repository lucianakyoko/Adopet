import styled from "styled-components";
import { colors } from "../../styles/colors";
import { Container, FormWrapper, ParagraphWrapper } from '../../styles/mixins';

export const MessageContainer = styled.div`
  ${Container};

`;

export const Form = styled.form`
  ${FormWrapper};
`;

export const IntroWrapper = styled.div`
  ${ParagraphWrapper}
`
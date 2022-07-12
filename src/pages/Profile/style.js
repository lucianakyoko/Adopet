import styled from "styled-components";
import { colors } from "../../styles/colors";
import { Container, ParagraphWrapper, FormWrapper,  } from "../../styles/mixins";

export const ProfileContainer = styled.div`
  ${Container};
`;

export const ProfileParagraphWrapper = styled.div`
  ${ParagraphWrapper};
`;

export const Form = styled.form `
  ${FormWrapper};
`
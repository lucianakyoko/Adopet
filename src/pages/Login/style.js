import styled from "styled-components";
import { colors } from "../../styles/colors";
import { Container, ParagraphWrapper, FormWrapper } from '../../styles/mixins';

export const LoginContainer = styled.div `
  ${Container};
`;

export const LoginParagraphWrapper = styled.div`
  ${ParagraphWrapper};
`;

export const Form = styled.form `
  ${FormWrapper};
`;

export const BtnWrapper = styled.div`
  margin-bottom: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.4rem;

  a {
    color: ${colors.tertiaryColor};
    font-size: 1.2rem;
    text-decoration: underline;
  
    transition: all .4s ease;
    :hover {
      color: ${colors.tertiaryColorHover};
    }
  }

  @media screen and (min-width: 700px) {
    margin-bottom: 8rem;
    a {
      font-size: 1.4rem;
    }
  }

  @media screen and (min-width: 1100px) {
    a {
      font-size: 1.6rem;
    }
  }
`
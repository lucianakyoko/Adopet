import styled from "styled-components";
import { colors } from "../../styles/colors";

export const TextareaFieldContainer = styled.div `
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.8rem;

  label {
    color: ${colors.primaryColor};
    font-size: 1.6rem;
    font-weight: 600;
  }

  textarea {
    width: 100%;
    padding: 1.2rem 1.6rem;
    border-radius: .8rem;
    border: none;
    background-color: ${colors.detailsColor100};
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.15);

    color: ${colors.detailsColor500};
    text-align: left;

    &::placeholder {
      font-size: 1.4rem;
      text-align: left;
    }
  }

  @media screen and (min-width: 700px) {
    textarea {
      &::placeholder {
        font-size: 1.4rem;
      }
    }
  }

  @media screen and (min-width: 700px) {
    textarea {
      &::placeholder {
        font-size: 1.4rem;
      }
    }
  }
`
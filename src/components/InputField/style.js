import styled from "styled-components";
import { colors } from "../../styles/colors";

export const InputFieldContainer = styled.div `
  width: 31.2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.2rem;

  label {
    color: ${colors.detailsColor500};
    font-size: 1.6rem;
    text-align: center;
  }

  input {
    width: 100%;
    padding: .8rem 0;

    border: none;
    border-radius: .6rem;
    background-color: ${colors.detailsColor100};
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.15);

    color: ${colors.detailsColor500};
    text-align: center;

    &::placeholder {
      color: ${colors.detailsColor500};
      font-size: 1.2rem;
      font-weight: 400;
      line-height: 1.6rem;
      text-align: center;
    }

    @media screen and (min-width: 700px) {
      width: 34.4rem;
      gap: 8rem;

      input {
        &::placeholder {
          font-size: 1.4rem;
        }
      }
    }

    @media screen and (min-width: 1100px) {
      width: 55.2rem;
      font-size: 1.6rem;

      input {
        &::placeholder {
          font-size: 1.6rem;
        }
      }
    }
  }
`
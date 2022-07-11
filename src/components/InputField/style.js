import styled from "styled-components";
import { colors } from "../../styles/colors";

export const InputFieldContainer = styled.div `
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.2rem;

  &.message-profile {
    align-items: flex-start;
    gap:  .8rem;

    label {
      color: ${colors.primaryColor};
      font-weight: 600;
    }
    input {
      padding: 1.2rem 1.6rem;
      border-radius: .8rem;
      text-align: left;

      &::placeholder {
        font-size: 1.4rem;
        text-align: left;
      }
    }
  }

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
      gap: 8rem;

      input {
        &::placeholder {
          font-size: 1.4rem;
        }
      }
    }

    @media screen and (min-width: 1100px) {
      font-size: 1.6rem;

      input {
        &::placeholder {
          font-size: 1.6rem;
        }
      }
    }
  }
`
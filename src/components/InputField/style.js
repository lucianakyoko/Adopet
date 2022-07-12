import styled from "styled-components";
import { colors } from "../../styles/colors";
import profileIcon from '../../assets/icons/icon-user.svg';

export const InputFieldContainer = styled.div `
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.2rem;

  p {
    display: none;
  }

  &.message-profile {
    align-items: flex-start;
    gap:  .8rem;

    label {
      color: ${colors.primaryColor};
      font-weight: 600;
      
      div {
        display: none;
      }
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

    &.profile-image {
      display: flex;
      flex-direction: column;

      p {
        width: 100%;
        display: block;
      
        color: ${colors.tertiaryColor};
        font-size: 1.2rem;
        text-align: center;
      }

      label {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;

        div {
          display: block;
          width: 8rem;
          height: 8rem;
          position: relative;
          left: 50%;
          transform: translateX(-50%);
          border-radius: 50%;

          background-image: url(${profileIcon});
          background-position: center;
          background-size: cover;
          background-repeat: no-repeat;

          &:hover {
            cursor: pointer;
          }
        }
      }

      input{
        display: none;
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
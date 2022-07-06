import styled from "styled-components";
import { colors } from "../../styles/colors";

export const HomeContainer = styled.div `
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.4rem;
  
  margin-top: 5.2rem;

  img {
    width: 18.6rem;
  }

  @media screen and (min-width: 700px) {
    gap: 4rem;
    margin-top: 20rem;

    img {
      width: 25rem;
    }
  }

  @media screen and (min-width: 1100px) {
    margin-top: 0;

    img {
      width: 26rem;
    }
  }
`;

export const HomeParagraphWrapper = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.6rem;

  p:first-child {
    color: ${colors.detailsColor100};
    font-size: 2.6rem;
  }

  p {
    width: 24.8rem;
    color: ${colors.detailsColor100};
    font-size: 1.6rem;
    line-height: 2.4rem;
    font-weight: 400;
    text-align: center;
  }

  @media screen and (min-width: 700px) {
    p:first-child {
      font-size: 2.8rem;
    }

    p {
      width: 34.4rem;
      font-size: 1.8rem;
      line-height: 2.6rem;
    }
  }

  @media screen and (min-width: 1100px) {
    p {
      width: 48.8rem;
    }
  }
`;

export const ButtonsWrapper = styled.div `
  width: 18rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.6rem;

  span {
    width:  100%;
    padding:  .8rem 0;

    background-color: ${colors.tertiaryColor};
    border-radius: .6rem;
    
    color: ${colors.detailsColor100};
    font-size: 1.6rem;
    font-weight: 600;
    text-align: center;

    transition: all .4s ease;
    &:hover {
      background-color: ${colors.tertiaryColorHover};
      cursor: pointer;
    }
  }

  @media screen and (min-width: 700px) {
    width: 34.4rem;
    padding: 1.2rem;

    font-size: 1.8rem;
  }

  @media screen and (min-width: 1100px) {
    width: 36.2rem
  }
`;

export const IllustrationWrapper = styled.div `
  width: 24.7rem;
  height: 31.2rem;
  overflow: hidden;

  img {
    width: 100%;
    position: relative;
    bottom: -2rem;
  }

  @media screen and (min-width: 700px) {
    width: 34rem;
    height: 42.2rem;
  }

  @media screen and (min-width: 1100px) {
    width: 34.6rem;
    height: 43.1rem;
  }
`

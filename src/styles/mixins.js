import { colors } from "./colors";
import illustration from '../assets/images/paws.svg';

export const Container = () => {
  return`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.4rem;

  overflow: hidden;
  margin-top: 2.4rem;

  img {
    width: 14.2rem;
    height: 3.4rem;
  }

  span {
    width: 18.9rem;
    height: 24.3rem;

    display: block;
    background-image: url(${illustration});
    background-repeat: no-repeat;
    background-size: contain;
    background-position: top right;
    position: absolute;
    top: 0;
    right: 0;
  }

  @media screen and (min-width: 700px) {
    gap: 4rem;
    margin-top: 16rem;

    img {
      width: 25.1rem;
      height: 6.2rem;
    }

    span {
      width: 29.2rem;
      height: 37.4rem;
    }
  }

  @media screen and (min-width: 1100px) {
    img {
      width: 26rem;
      height: 6.4rem;
    }
  }
  `
};

export const ParagraphWrapper = () => {
  return`
    width: 32.1rem;

    display: flex;
    flex-direction: column;
    gap: 1.6rem;

    p {
      color: ${colors.primaryColor};
      font-size: 1.6rem;
      line-height: 2rem;
      text-align: center;
    }

    @media screen and (min-width: 700px) {
      width: 55.2rem;

      p {
        font-size: 1.8rem;
        line-height: 2.6rem;
      }
    }
  `
};

export const FormWrapper = () => {
  return `
    width: 31.2rem;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;

    padding: 3.2rem 0 4rem 0;
    margin-bottom: 10rem;
    
    @media screen and (min-width: 700px) {
      width: 34.4rem;
    }
    @media screen and (min-width: 1100px) {
      width: 55.2rem;
    }
  `
}

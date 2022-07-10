import styled from "styled-components";
import { colors } from "../../../styles/colors";

export const AnimalContainer = styled.li`
  padding: 1.6rem 2.4rem;
  display: flex;
  gap: 1.6rem;
`;

export const AnimalInfosWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const NameAndDetailsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: .8rem;

  h2 {
    color: ${colors.primaryColor};
    font-size: 1.6rem;
    font-weight: 600;
    line-height: 2rem;
  }

  div {
    display: flex;
    flex-direction: column;

    span {
      color: ${colors.detailsColor500};
      font-size: 1.4rem;
      line-height: 2rem;
    }
  }
`;

export const LocationAndChatWrapper =styled.div`
  display: flex;
  flex-direction: column;
  gap: .8rem;

  span {
    color: ${colors.detailsColor500};
    font-size: 1.2rem;
  }

  div{
    display: flex;
    align-items: center;
    gap: .8rem;

    span {
      font-size: 1rem;
    }
  }
`


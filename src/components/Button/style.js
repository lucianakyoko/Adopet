import styled from "styled-components";
import { colors } from "../../styles/colors";

export const ButtonContainer = styled.button`
  width: 14.8rem;
  padding: 1.6rem 0;
  background-color: ${colors.tertiaryColor};
  border: none;
  border-radius: .6rem;

  color: ${colors.detailsColor100};
  font-size: 1.6rem;
  font-weight: 600;
  line-height: 2.4rem;

  transition: all .4s ease;
  &:hover {
    cursor: pointer;
    background-color: ${colors.tertiaryColorHover};
  }
`
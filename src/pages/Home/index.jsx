import { Link } from 'react-router-dom';
import { PageContainer } from "../../components/PageContainer";
import logo from '../../assets/images/logoBigWhite.png';
import illustration from '../../assets/images/illustration.svg';

import { colors } from '../../styles/colors';
import {
  HomeContainer,
  HomeParagraphWrapper,
  ButtonsWrapper,
  IllustrationWrapper
} from './style';

export function Home() {
  return(
    <PageContainer bgColor={colors.primaryColor} className="right">
      <HomeContainer>
        <img src={logo} alt="Logo Adopet" />
        <HomeParagraphWrapper>
          <p>Boas-vindas!</p>
          <p>Que tal mudar sua vida adotando seu novo melhor amigo? Vem com a gente!</p>
        </HomeParagraphWrapper>
        <ButtonsWrapper>
          <Link to="/login">
            Já tenho conta
          </Link>
          <Link to="/cadastro">
            Quero me cadastrar
          </Link>
        </ButtonsWrapper>

        <IllustrationWrapper>
          <img src={illustration} alt="ilustração" />
        </IllustrationWrapper>
      </HomeContainer>
    </PageContainer>
  )
}
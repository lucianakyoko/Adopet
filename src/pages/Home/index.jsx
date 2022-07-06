import { PageContainer } from "../../components/PageContainer";
import logo from '../../assets/images/logoBigWhite.png';
import illustration from '../../assets/images/illustration.svg';

import {
  HomeContainer,
  HomeParagraphWrapper,
  ButtonsWrapper,
  IllustrationWrapper
} from './style';

export function Home() {
  return(
    <PageContainer>
      <HomeContainer>
        <img src={logo} alt="Logo Adopet" />
        <HomeParagraphWrapper>
          <p>Boas-vindas!</p>
          <p>Que tal mudar sua vida adotando seu novo melhor amigo? Vem com a gente!</p>
        </HomeParagraphWrapper>
        <ButtonsWrapper>
          <span>Já tenho conta</span>
          <span>Quero me cadastrar</span>
        </ButtonsWrapper>

        <IllustrationWrapper>
          <img src={illustration} alt="ilustração" />
        </IllustrationWrapper>
      </HomeContainer>
    </PageContainer>
  )
}
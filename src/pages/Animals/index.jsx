import { PageContainer } from '../../components/PageContainer';
import { Animal } from './Animal';

import {
  AnimalsPageContainer,
  IntroParagraphWrapper,
  AnimalsList
} from './style';

export function Animals() {
  return(
    <PageContainer user={true}>
      <AnimalsPageContainer>
        <IntroParagraphWrapper>
          <p>Olá! Veja os amigos disponíveis para adoção!</p>
        </IntroParagraphWrapper>

        <AnimalsList>
          <Animal />
          <Animal />
          <Animal />
        </AnimalsList >
      </AnimalsPageContainer>
    </PageContainer>
  )
}
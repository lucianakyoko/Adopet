import chatIcon from '../../../assets/icons/icon-chat.svg';
import dog from '../../../assets/dunga.png';

import {
  AnimalContainer,
  AnimalInfosWrapper,
  NameAndDetailsWrapper,
  LocationAndChatWrapper
} from './style';
import { Link } from 'react-router-dom';

export function Animal() {
  return(
    <AnimalContainer>
      <img src={dog} alt="Foto do Dunga" />
      
      <AnimalInfosWrapper>
        <NameAndDetailsWrapper>
          <h2>Dunga</h2>

          <div>
            <span>2 anos</span>
            <span>Porte pequeno</span>
            <span>Calmo e educado</span>
          </div>
        </NameAndDetailsWrapper>

        <LocationAndChatWrapper>
          <span>Rio de Janeiro - RJ</span>
          <Link to='/mensagem'>
            <div>
              <img src={chatIcon} alt="Ícone chat" />
              <span>Falar com responsável</span>
            </div>
          </Link>
        </LocationAndChatWrapper>
      </AnimalInfosWrapper>
    </AnimalContainer>
  )
}
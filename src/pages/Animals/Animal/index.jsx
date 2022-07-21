import chatIcon from '../../../assets/icons/icon-chat.svg';
// import dog from '../../../assets/dunga.png';

import {
  AnimalContainer,
  AnimalInfosWrapper,
  NameAndDetailsWrapper,
  LocationAndChatWrapper
} from './style';
import { Link } from 'react-router-dom';

export function Animal({image, name, age, size, characteristics, city, state}) {
  return(
    <AnimalContainer>
      <img src={image} alt="Foto do Dunga" />
      
      <AnimalInfosWrapper>
        <NameAndDetailsWrapper>
          <h2>{name}</h2>

          <div>
            <span>{age}</span>
            <span>{size} porte</span>
            <span>{characteristics}</span>
          </div>
        </NameAndDetailsWrapper>

        <LocationAndChatWrapper>
          <span>{city} - {state}</span>
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
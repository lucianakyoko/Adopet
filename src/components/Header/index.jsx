import { Link } from 'react-router-dom';

import homeIcon from '../../assets/icons/icon-home.svg';
import envelopIcon from '../../assets/icons/icon-message.svg';
import userIcon from '../../assets/icons/icon-user.svg';

import {
  HeaderContainer,
  IconsWrapper,
  Logo
} from './style';

export function Header({user}) {
  return (
    <HeaderContainer>
      <IconsWrapper>
        <Logo></Logo>
        <Link to="/">
          <img src={homeIcon} alt="ícone casa" />
        </Link>

        <Link to="#">
          <img src={envelopIcon} alt="Ícone envelope" />
        </Link>
      </IconsWrapper>

      {user && <img src={userIcon} alt='Ícone usuário' />}
    </HeaderContainer>
  )
}
import logo from '../../assets/images/logoBigBlue.png';
import { Button } from '../../components/Button';
import { InputField } from '../../components/InputField';
import { PageContainer } from '../../components/PageContainer';

import {
  LoginContainer,
  LoginParagraphWrapper,
  Form,
  BtnWrapper
} from './style';

export function Login() {
  return(
    <PageContainer>
      <LoginContainer>
        <span></span>
        <img src={logo} alt="Logo Adopet" />

        <LoginParagraphWrapper>
          <p>Já tem cadastro? Faça seu login:</p>
        </LoginParagraphWrapper>

        <Form>
          <InputField 
            id={"email"}
            type={"text"}
            placeholder={"Insira seu email"}
            label={"Email"}
          />

          <InputField 
            id={"password"}
            type={"password"}
            placeholder={"Insira sua senha"}
            label={"Senha"}
          />

          <BtnWrapper>
            <a href="#">Esqueci minha senha</a>
            <Button type="submit">Entrar</Button>
          </BtnWrapper>
        </Form>
      </LoginContainer>
    </PageContainer>
  )
}
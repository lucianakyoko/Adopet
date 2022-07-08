import { PageContainer } from "../../components/PageContainer";
import { InputField } from '../../components/InputField';
import { Button } from "../../components/Button";

import logo from '../../assets/images/logoBigBlue.png';

import {
  RegistrationContainer,
  RegistrationParagraphWrapper,
  FormWrapper
} from './style';

export function Registration() {
  return(
    <PageContainer>
      <RegistrationContainer>
        <span></span>
        <img src={logo} alt="Logo Adopet" />

        <RegistrationParagraphWrapper>
          <p>Ainda não tem cadastro?</p>
          <p>Então, antes de buscar seu melhor amigo, precisamos de alguns dados:</p>
        </RegistrationParagraphWrapper>

        <FormWrapper>
          <InputField 
            id={"email"}
            type={"text"}
            placeholder={"Escolha seu melhor email"}
            label={"Email"}
          />
          <InputField 
            id={"name"}
            type={"text"}
            placeholder={"Digite seu nome completo"}
            label={"Nome"}
          />
          <InputField 
            id={"password"}
            type={"password"}
            placeholder={"Crie uma senha"}
            label={"Senha"}
          />
          <InputField 
            id={"password-confirm"}
            type={"password"}
            placeholder={"Repita a senha criada acima"}
            label={"Confirma sua senha"}
          />
        
          <Button type="submit">Cadastrar</Button>
        </FormWrapper>

      </RegistrationContainer>
    </PageContainer>
  )
}
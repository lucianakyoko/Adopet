import { PageContainer } from '../../components/PageContainer';
import { InputField } from '../../components/InputField';
import { Textarea } from '../../components/Textarea';
import { Button } from '../../components/Button';


import {
  ProfileContainer,
  ProfileParagraphWrapper,
  Form
} from './style';

export function Profile() {
  return(
    <PageContainer user={true}>
      <ProfileContainer>
        <ProfileParagraphWrapper>
          <p>Esse é o perfil que aparece para responsáveis ou ONGs que recebem sua mensagem.</p>
        </ProfileParagraphWrapper>

        <Form>

          <InputField 
            className={"message-profile profile-image"}
            id={"photo"}
            type={"file"}

            label={"Foto"}
          />
          <InputField 
            className={"message-profile"}
            id={"name"}
            type={"text"}
            placeholder={"Insira seu nome completo"}
            label={"Nome"}
          />
          <InputField 
            className={"message-profile"}
            id={"telephone"}
            type={"tel"}
            placeholder={"Insira seu telefone ou whatsapp"}
            label={"Telefone"}
          />
          <InputField 
            className={"message-profile"}
            id={"animal"}
            type={"text"}
            placeholder={"Por qual animal você se interessou"}
            label={"animal"}
          />
  
          <Textarea 
            id={"message"}
            placeholder={"Escreva sua mensagem"}
            label={"Mensagem"}
          />

          <Button>Salvar</Button>
        </Form>
      </ProfileContainer>
    </PageContainer>
  )
}
import { PageContainer } from "../../components/PageContainer";
import { InputField } from '../../components/InputField';

import {
  MessageContainer,
  Form,
  IntroWrapper
} from './style';
import { Textarea } from "../../components/Textarea";

export function Message() {
  return(
    <PageContainer user={true}>
      <MessageContainer>
        <IntroWrapper>
          <p>Envie uma mensagem para a pessoa ou instituição que está cuidado do animal:</p>
        </IntroWrapper>

        <Form>
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
        </Form>
      </MessageContainer>
    </PageContainer>
  )
}
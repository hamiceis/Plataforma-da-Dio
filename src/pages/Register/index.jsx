import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import {
  Column,
  Container,
  Title,
  TitleRegister,
  Wrapper,
  SubTitle,
  Description,
  Account,
  SpanText,
} from "./styled";

import { MdEmail, MdLock, MdPerson } from "react-icons/md";
import { Button2 } from "../../components/Button";

export function Register() {
  return (
    <>
      <Header />
      <Container>
        <Column>
          <Title>
            A plataforma para você aprender com experts, dominar as principais
            tecnologias e entrar mais rápido nas empresas mais desejadas.
          </Title>
        </Column>

        <Column>
          <Wrapper>
            <TitleRegister>Comece agora grátis</TitleRegister>
            <SubTitle>Crie sua conta e make the change._</SubTitle>

            <form>
              <Input placeholder="Nome completo" leftIcon={<MdPerson />} />
              <Input placeholder="E-mail" leftIcon={<MdEmail />} />
              <Input placeholder="Password" leftIcon={<MdLock />} />
              <Button2 title="Criar minha conta" />
            </form>

            <Description>
              Ao clicar em "criar minha conta grátis", declaro que aceito as
              Políticas de Privacidade e os Termos de Uso da DIO.
            </Description>
            <Account>
              Já tenho conta.
              <SpanText>Fazer login</SpanText>
            </Account>
          </Wrapper>
        </Column>
      </Container>
    </>
  );
}

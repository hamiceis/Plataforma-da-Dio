import { Button2 } from "../../components/Button";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";

import { MdEmail, MdLock } from 'react-icons/md'

import { useNavigate } from "react-router-dom";

import {
  Container,
  Title,
  Column,
  Wrapper,
  TitleLogin,
  SubtitleLogin,
  Row,
  ForgotPass,
  CreateAccount,
} from "./styled";


export function Login() {

  const navigate = useNavigate()

  const handleClickSignin = (e) => {
    e.preventDefault()
    navigate('/feed')
  }
  return (
    <>
      <Header />
      <Container>
        <Column>
          <Title>
            A plataforma para você aprender com experts, dominar as principais
            ecnologias e entrar mais rápido nas empresas mais desejadas.
          </Title>
        </Column>

        <Column>
          <Wrapper>
            <TitleLogin>Faça o seu cadastro</TitleLogin>
            <SubtitleLogin>Faça o seu login e make the change._</SubtitleLogin>
            <form>
              <Input placeholder="email"  leftIcon={<MdEmail />}/>
              <Input placeholder="senha" type="password" leftIcon={<MdLock />}/>
              <Button2 title="Entrar" onClick={(e) => handleClickSignin(e)} />
            </form>
            <Row>
              <ForgotPass>Esqueci minha senha</ForgotPass>
              <CreateAccount>Criar Conta!</CreateAccount>
            </Row>
          </Wrapper>
        </Column>
      </Container>
    </>
  );
}

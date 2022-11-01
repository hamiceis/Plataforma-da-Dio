import { Link } from "react-router-dom";
import {
  BuscarInputContainer,
  Container,
  Input,
  Menu,
  MenuRight,
  Row,
  Wrapper,
  UserPicture
} from "./styled";
import { Button } from "../Button";
import Logo from "../../assets/logo-dio.png";

export function Header({ authentication }) {
  return (
    <Wrapper>
      <Container>
        <Row>
          <Link to="/">
          <img src={Logo} alt="Logo da Dio" />
          </Link>
          {authentication && (
            <>
              <BuscarInputContainer>
                <Input placeholder="Buscar..." />
              </BuscarInputContainer>

              <Menu>Live code</Menu>
              <Menu>Global</Menu>
            </>
          )}
        </Row>

        <Row>
          {authentication ? (
            <UserPicture src="https://avatars.githubusercontent.com/u/92181823?v=4" />
          ) : (
            <>
              <MenuRight href="#">Home</MenuRight>
              <Button title="Entrar" />
              <Button title="Cadastrar" />
            </>
          )}
        </Row>
      </Container>
    </Wrapper>
  );
}

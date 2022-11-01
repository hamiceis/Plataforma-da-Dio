import { ButtonContainer, ContainerButton } from "./styled";

export function Button({title, ...rest}) {
  return (
    <ButtonContainer  {...rest}>
      {title}
    </ButtonContainer>

  )
}

export function Button2({title, ...rest}) {
  return (
    <ContainerButton  {...rest}>
      {title}
    </ContainerButton>

  )
}
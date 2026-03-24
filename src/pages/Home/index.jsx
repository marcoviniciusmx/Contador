import { useState } from 'react'

import {
  Wrapper,
  Container,
  Header,
  AppSection,
  Title,
  Subtitle,
  Number,
  PrimaryButtons,
  ButtonDecrease,
  ButtonIncrease,
  SecoundaryButton,
  ButtonReset
} from './styles'


function Home() {

  const [contador, setContador] = useState(0)

  const decreaseButton = () => {
    if (contador > 0) {
      setContador(contador - 1)
    }
  }

  const increaseButton = () => {
    if (contador < 1000) {
      setContador(contador + 1)
    }
  }

  const resetButton = () => {
    setContador(0)
  }

  return (
    <>
      <Wrapper>
        <Container>
          <Header>
            <AppSection>
              <Subtitle>Session Active</Subtitle>
              <Title>Counter App</Title>
            </AppSection>
          </Header>

          <Number>{contador}</Number>

          <PrimaryButtons>
            <ButtonDecrease onClick={decreaseButton}>Decrease -</ButtonDecrease>
            <ButtonIncrease onClick={increaseButton}>Increase +</ButtonIncrease>
          </PrimaryButtons>

          <SecoundaryButton>
            <ButtonReset onClick={resetButton}>RESET COUNTER</ButtonReset>
          </SecoundaryButton>
        </Container>
      </Wrapper>
    </>
  )
}

export default Home

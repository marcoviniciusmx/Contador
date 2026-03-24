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
  SecoundaryButton,
} from './styles'
import Button from '../../components/ButtonDecrease'
import IncreaseButton from '../../components/ButtonIncrease'
import ResetButton from '../../components/ButtonReset'


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
            <Button onClick={decreaseButton}>Decrease -</Button>
            <IncreaseButton type='button' onClick={increaseButton}>Increase +</IncreaseButton>
          </PrimaryButtons>

          <SecoundaryButton>
            <ResetButton type='button' onClick={resetButton}>RESET COUNTER</ResetButton>
          </SecoundaryButton>
        </Container>
      </Wrapper>
    </>
  )
}

export default Home

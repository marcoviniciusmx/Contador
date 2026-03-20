import {
  Wrapper,
  Container,
  Header,
  AppSection,
  Goals,
  Title,
  Subtitle,
  DailyGoal,
  CountGoal,
  Number,
  PrimaryButtons,
  ButtonDecrease,
  ButtonIncrease,
  SecoundaryButton,
  ButtonReset
} from './styles'


function Home() {
  return (
    <>
      <Wrapper>
        <Container>
          <Header>
            <AppSection>
              <Subtitle>Session Active</Subtitle>
              <Title>Counter App</Title>
            </AppSection>

            <Goals>
              <DailyGoal>Daily Goal</DailyGoal>
              <CountGoal>0/1000</CountGoal>
            </Goals>
          </Header>

          <Number>0</Number>

          <PrimaryButtons>
            <ButtonDecrease>Decrease -</ButtonDecrease>
            <ButtonIncrease>Increase +</ButtonIncrease>
          </PrimaryButtons>

          <SecoundaryButton>
            <ButtonReset>RESET COUNTER</ButtonReset>
          </SecoundaryButton>
        </Container>
      </Wrapper>
    </>
  )
}

export default Home

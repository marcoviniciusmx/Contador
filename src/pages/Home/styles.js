import styled from 'styled-components'

export const Wrapper = styled.div`
  min-height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ededed;
`

export const Container = styled.div`

display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background-color: #c0c0c0d3;
padding: 20px;
width: 100%;
max-width: 400px;
min-height: 400px;
border-radius: 10px;

`

export const Header = styled.div`
display: flex;
gap: 100px;
justify-content: center;
align-items: center;
text-align: center;
`

export const AppSection = styled.div`
display: flex;
flex-direction: column;
gap: 2px;
`


export const Title = styled.h2`
font-size: 1.5rem;
`

export const Subtitle = styled.h3`
font-size: 0.7rem;
color: rgba(0, 0, 0, 0.52);
`

export const Number = styled.p`
font-size: 4rem;
margin: 80px 0;

`

export const PrimaryButtons = styled.div`
display: flex;
gap: 10px;
margin-bottom: 10px;
`

export const ButtonDecrease = styled.button`
padding: 10px 12px;
border-radius: 10px;
border: none;
outline: none;
background-color: #e5e5e5d3;
cursor: pointer;

&:hover {
  opacity: .8;
}

&:active {
  opacity: .6;
}

`

export const ButtonIncrease = styled.button`
padding: 10px;
border-radius: 10px;
border: none;
outline: none;
background-color: #252525;
color: #fff;
cursor: pointer;

&:hover {
  opacity: .8;
}

&:active {
  opacity: .6;
}

`


export const SecoundaryButton = styled.div`
padding: 20px;
`

export const ButtonReset = styled.button`
font-size: .5rem;
word-spacing: .2rem;
letter-spacing: .2rem;
cursor: pointer;
border: none;
outline: none;
background: transparent;
appearance: none;
-webkit-appearance: none;
padding: 0;
`
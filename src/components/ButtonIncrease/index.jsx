import { IncreaseButton } from './styles'

function ButtonIncrease({ children, ...props }) {

    return (
        <IncreaseButton {...props} > {children} </IncreaseButton>
    )
}

export default ButtonIncrease
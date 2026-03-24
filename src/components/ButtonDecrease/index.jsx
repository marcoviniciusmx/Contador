import { Button } from './styles'

function ButtonDecrease({ children, ...props }) {
    return (
        <Button {...props}> {children} </Button>
    )
}

export default ButtonDecrease
import { ResetButton } from './styles'

function Reset({ children, ...props }) {
    return (
        <ResetButton {...props}>{children}</ResetButton>
    )

}

export default Reset
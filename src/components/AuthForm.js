import { FormContainer } from "../assets/AuthForm-style"

export default function AuthForm(props) {
    return (
        <FormContainer>
            {props.children}
        </FormContainer>
    )
}
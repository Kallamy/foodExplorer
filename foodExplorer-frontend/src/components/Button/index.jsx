import { Container } from "./styles";

export function Button({ title, width, ...rest }) {
    return (
        <Container 
        type="button"
        {...rest}
        >
            {title}
        </Container>
    )
}
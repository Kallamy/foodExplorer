import styled from "styled-components";
import theme from "../../styles/theme";

export const Container = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;

    color: ${theme.COLORS.Light.Light_100};
    background: ${theme.COLORS.Tints.Tomato_100};

    margin-top: 2rem;
    margin-bottom: 2rem;
    padding: .75rem;
    width: 100%;
    height: 3rem;
`
import styled from 'styled-components'
import theme from '../../styles/theme';

export const Container = styled.div`
    display: flex;

    justify-content: space-between;
    align-items: center;
    gap: 2rem;
    padding: 2.3rem 7.68rem 2.3rem 7.68rem;
    background:  ${theme.COLORS.Dark_600};
    height: 6.5rem;
    
    .exitButton {
        height: 3.5rem;
        color: white;
        font-size: 2rem;
        line-height: 4rem;

    }
`;

export const Logo = styled.div`
    display: flex;
    
    justify-content: center;
    align-items: center;

    .logo {
        display: flex;
        align-items: center;
       // margin-left: 9.75rem;
    }

    h1 {
        display: inline;
        width: 146px;
        margin-left: .625rem;
        font-size: 1.5rem;
        font-family: 'Roboto';
        color: ${theme.COLORS.Light_100}
    }
`;

export const Search = styled.div`

    input {
        position: relative;
        background: ${theme.COLORS.Dark_900};
        width: 36.3rem;
        height: 3rem;

        padding: 1.6rem;

        border: 0;


        &::placeholder {
            color: ${theme.COLORS.Light_500};
            padding-left: 8.59rem;
        }
     }
    label {
        position: relative;
        display: flex;
        align-items: center;
        padding-left: 1.6rem;
    }

    svg {
        position: relative;
        color: ${theme.COLORS.Light_400};
        left: 9rem;
        z-index: 9;
    }
`;
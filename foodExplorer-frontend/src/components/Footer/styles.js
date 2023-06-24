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

    .copyright {
        color: ${theme.COLORS.Light_200};
        font-family: 'Roboto', sans-serif;
        font-size: .87rem;
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
        color: ${theme.COLORS.Light_600}
    }
`;


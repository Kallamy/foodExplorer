import styled from 'styled-components'
import theme from '../../styles/theme';

 export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    background: #1e1e1e; 
    height: 100vh;
    color: ${theme.Light_100};
  
`;


 export const Form = styled.form`
    background: ${ theme.COLORS.Dark_700 };
    margin-top: 4.06rem;    display: flex;
    margin-right: 6rem;
    flex-direction: column;
    gap: .125rem;

    width: 29.75rem;
    height: 38.31rem;

    padding: 4rem;
    
    text-align: center;

    h2 {
        font-family: "Poppins", sans-serif;
        font-size: 2rem.
    }

    input {
        background: ${ theme.COLORS.Dark_900 };
        color: ${ theme.Light_300};
        
        font-family: "Roboto", sans-serif;

        border: none;
        width: 100%;
        height: 3rem;
        padding: .75rem;
    }

    p {
        text-align: left;
        font-family: "Roboto", sans-serif;

        color: ${ theme.COLORS.Light_400};
        margin-bottom: .75rem;
    }

    a {
        color: ${ theme.COLORS.Light_100};
        font-family: "Poppins", sans-serif;
        font-size: .875rem;
        text-decoration: none;
    }


`;

 export const Logo = styled.div`
    display: flex;

    justify-content: center;
    align-items: center;

    .logo {
        display: flex;
        align-items: center;
        margin-left: 9.75rem;
    }
    h1 {
        display: inline;
        margin-left: 1.187rem;
        font-size: 2.635rem;
        font-family: 'Roboto';
    }
`;
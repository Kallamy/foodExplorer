import styled from 'styled-components'
import theme from '../../styles/theme';


export const Container = styled.div`
    .content{
        background: #1e1e1e;
        height: 3000px;
        padding: 3.37rem;
    }
`;

export const Banner = styled.div`
    display: flex;;
    height: 260px;
    margin-top: 164px;

    background: linear-gradient(180deg, ${theme.COLORS.BLUE_400} 0%, ${theme.COLORS.BLUE_500} 100%);
    
    .banner-image img {
        margin-top: -21%;
    }
    .banner-text {
        display: flex;
        flex-direction: column;
        justify-content: center;
        color:  ${theme.COLORS.Light_300};
    }
    .banner-text h2 {
        font-family: 'Poppins', sans-serif;
        font-weight: 500;
        font-size: 2.5rem;
    }
    .banner-text p {
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        font-size: 1rem;
    }

`;

export const Card = styled.div`
    
`;
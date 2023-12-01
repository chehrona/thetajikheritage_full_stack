import styled from "styled-components";

export const MainContainer = styled.div`
    border-radius: 1rem;
    background: #fff;
    color: black;
    margin-top: 2rem;
    padding: 1rem 2rem 2rem 2rem;
    box-shadow: 0rem 0rem 0.4rem 0.01rem #92793f;
        
    @media (max-width: 480px) {
        padding: 0.5rem 1rem 1rem 1rem;
        margin: 0rem 1.5rem 1rem 1.5rem;
    }
`;

export const SubTitle =  styled.div`
    font-size: 2rem;
    font-family: 'EB Garamond', serif;
    font-style: italic;
    font-weight: 500;
    margin-bottom: 2rem;

    @media (max-width: 480px) {
        font-size: 2.2rem;
        margin-bottom: 1rem;
    }
`;

export const Direction = styled.div`
    font-size: 1.2rem;
    margin-top: 0.5rem;
    color: #0F0A00;
    min-height: 2rem;

    @media (max-width: 480px) {
        font-size: 1.3rem;
    }
`;
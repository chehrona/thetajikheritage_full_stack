import styled from "styled-components";

export const MainContainer = styled.div`
    max-width: 35%;
    width: 100%;
    border-radius: 1rem;
    background: #fff;
    margin-top: 2rem;
    color: black;
    padding: 1rem 2rem 2rem 2rem;
    box-shadow: 0rem 0rem 0.4rem 0.01rem #92793f;

    @media (max-width: 480px) {
        max-width: calc(100% - 3rem);
        padding: 0.5rem 1rem 1rem 1rem;
        margin: 0rem 1.5rem 1rem 1.5rem;
    }
    
    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        max-width: 100%;
    }
`;

export const SubTitle = styled.div`
    font-size: 2rem;
    font-style: italic;
    font-weight: 500;
    margin-bottom: 2rem;
    font-family: 'EB Garamond', serif;
    text-shadow: 0.0625rem 0.0625rem 0.1875rem #ffffffb0;

    @media (max-width: 480px) {
        font-size: 2.2rem;
        margin-bottom: 1rem;
    }
`;

export const Ingredient = styled.div`
    font-size: 1.2rem;
    margin-top: 0.5rem;
    color: #0F0A00;
    min-height: 2rem;
    display: flex;

    @media (max-width: 480px) {
        font-size: 1.3rem;
    }
`;

export const Amount = styled.div`
    margin-right: 0.3rem;
`;
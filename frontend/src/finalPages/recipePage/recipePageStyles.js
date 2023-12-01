import styled from "styled-components";

export const PageContainer = styled.div`
    box-sizing: border-box;
    min-height: 100svh;
    background-color: white;
    padding: 2rem 3.7rem 2.8rem 3.2rem;
    
    @media (max-width: 480px) {
        padding: 0rem;
    }

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        padding: 1.5rem 1.8rem 2rem 1.2rem;
    }
`;

export const RecipeContainer = styled.div`
    color: #0F0A00;
    padding: 3rem;
    border-radius: 4rem;
    background-color: #fcf6e9;
    background-image: url(${'/noise.png'});
    box-shadow: 0.8rem 0.5rem 0rem 0.08rem #504221d1;

    @media (max-width: 480px) {
        padding: 0rem;
        border-radius: 0rem;
        display: flex;
        flex-direction: column;
        box-shadow: 0rem 0rem 0rem 0rem;
    }

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        padding: 2rem 2rem 1rem 2rem;
        display: flex;
        border-radius: 2.5rem;
        flex-direction: column;
    }
`;

export const IntroSection = styled.div`
    display: flex;
    width: 100%;
    margin-top: 2rem;
`;

export const InfoContainer = styled.div`
    width: 45rem;
`;

export const InstructionContainer = styled.div`
    width: 100%;
    display: flex;
    gap: 2rem;

    @media (max-width: 1024px) {
        flex-direction: column;
        gap: 0rem;
    }
`;

export const IngredientContainer = styled.div`
    width: 100%;
    display: flex;
    gap: 2rem;

    @media (max-width: 480px) {
        flex-direction: column;
        gap: 1rem;
    }

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        flex-direction: column;
    }
`;

export const SubContainer = styled.div`
    margin-top: 3rem;
    background-color: yellow;

    @media (max-width: 1024px) {
        margin-top: 0rem;
    }
`;

export const CookingInfoContainer = styled.div`
    display: flex;
    width: 100%;
    max-width: 60%;
    justify-content: space-between;

    @media (max-width: 480px) {
        max-width: 100%;
    }

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        max-width: 100%;
    }
`;
import styled from "styled-components";

export const BoxWrapper = styled.div`
    width: 100%;
    display: flex;
    border-bottom: 0.0625rem solid #bd9d52;
    max-height: 35rem;
    flex-direction: ${({ reverse }) =>  reverse && "row-reverse"};
`;

export const RightContainer = styled.div`
    width: 29rem;
    height: 35rem;
    max-height: 35rem;
    position: relative;
    overflow: hidden;

    @media (max-width: 480px) {
        width: 100%;
        margin-top: ${({ first }) => first && '-2rem'};
        height: ${({ first }) => first ? '17rem': '23rem'};
    }

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        width: 100%;
        height: ${({ first }) => first ? '30rem': '40rem'};
        margin-top: ${({ first }) => first && '-2.5rem'};
    }
`;

export const TextContainer = styled.div`
    padding: 0rem 3rem;
    width: calc(100% - 29rem);
`;

export const Title = styled.div`
    width: 100%;
    color: #000;
    font-size: 4rem;
    font-weight: 500;
    font-style: italic;
    margin-bottom: 0.5rem;
    font-family: 'EB Garamond', serif;
    text-shadow: 0.0625rem 0.0625rem 0.0875rem #0F0A00;

    @media (max-width: 480px) {
        font-size: 4.5rem;
    }
`;

export const Subtitle = styled.div`
    font-weight: 500;
    font-size: 1.15rem;
    width: fit-content;
    margin: 0.75rem 0rem;
    text-transform: uppercase;
    border-right: 2px solid #ad0f0e;
    border-bottom: 2px solid #ad0f0e;
    padding: 0rem 0.35rem 0.15rem 0rem;
`;

export const FirstBox = styled.div`
    width: 100%;
    color: #0F0A00;
    font-size: 1.1rem;
    position: relative;
    line-height: 1.7rem;
    max-height: 30rem;
    overflow-y: auto;

    ::-webkit-scrollbar {
        width: 0rem;
    }

    @media (max-width: 1024px) {
        font-size: 1.3rem;
    }
`;

export const SecondBox = styled.div`
    width: 100%;
    color: #0F0A00;
    font-size: 1.1rem;
    position: relative;
    line-height: 1.7rem;
    max-height: 30rem;
    overflow-y: auto;

    ::-webkit-scrollbar {
        width: 0rem;
    }

    @media (max-width: 1024px) {
        font-size: 1.3rem;
    }
`;
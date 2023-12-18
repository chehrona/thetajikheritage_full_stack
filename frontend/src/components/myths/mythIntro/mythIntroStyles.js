import styled from "styled-components";

export const BoxWrapper = styled.div`
    width: 100%;
    min-height: 30rem;
    display: flex;
    flex-direction: ${({ reverse }) =>  reverse && "row-reverse"};
`;

export const ImageWrapper = styled.div`
    position: relative;
`;

export const Image = styled.img`
    width: auto;
    height: 40rem;
    padding: 1rem;
`;

export const ImgInfo = styled.div`
    position: absolute;
    z-index: 10;
    font-style: italic;
    width: 100%;
    text-align: left;
    color: #fcf6e9;
    bottom: 0.5rem;
    height: 1.65rem;
    background-color: #26262680;
    padding: 0.25rem 0.5rem 0.25rem 0.5rem;


    @media (max-width: 480px) {
        font-size: 1.25rem;
        line-height: 1.3rem;
        bottom: 0.5rem;
    }
`;

export const TextContainer = styled.div`
    padding: 0rem 3rem 0rem 1rem;
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
    width: fit-content;
    text-transform: uppercase;
    border-right: 2px solid #ad0f0e;
    border-bottom: 2px solid #ad0f0e;
    padding: 0rem 0.35rem 0.15rem 0rem;
    font-weight: 500;
    font-size: 1.15rem;
    margin-bottom: 0.75rem;
`;

export const FirstBox = styled.div`
    width: 100%;
    color: #0F0A00;
    font-size: 1.1rem;
    position: relative;
    line-height: 1.7rem;

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

    @media (max-width: 1024px) {
        font-size: 1.3rem;
    }
`;

export const ThirdBox = styled.div`
    width: 100%;
    color: #0F0A00;
    font-size: 1.1rem;
    position: relative;
    line-height: 1.7rem;

    @media (max-width: 1024px) {
        font-size: 1.3rem;
    }
`;
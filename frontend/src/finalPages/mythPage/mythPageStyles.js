import styled from "styled-components";

export const PageContainer = styled.div`
    position: relative;
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

export const MythContainer = styled.div`
    border-radius: 4rem;
    background: #fcf6e9;
    background-image: url(${'/noise.png'});
    box-shadow: 0.8rem 0.5rem 0rem 0.08rem #504221d1;
    padding-top: 0.75rem;

    @media (max-width: 480px) {
        margin: 0rem;
        border-radius: 0rem;
        box-shadow: 0rem 0rem 0rem 0rem;
    }

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        border-radius: 2.5rem;
    }
`;

export const BoxWrapper = styled.div`
    display: flex;
    min-height: 30rem;
    width: 100%;
`;

export const Image = styled.img`
    width: 50%;
`;

export const TextContainer = styled.div`
    padding: 0rem 3rem;
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

export const TextWrapper = styled.div`
    width: 100%;
    color: #0F0A00;
    font-size: 1.1rem;
    position: relative;
    line-height: 1.7rem;

    @media (max-width: 1024px) {
        font-size: 1.3rem;
    }
`;
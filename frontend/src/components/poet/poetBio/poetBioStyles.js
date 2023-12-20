import styled from "styled-components/macro";
import { IconButton } from '@mui/material';

export const MainContainer = styled.div`
    background-image: url(${'/noise.png'});
    min-height: fit-content;
    padding-bottom: 3rem;
    background-color: #fcf6e9;
    font-size: 1.1rem;

    @media (max-width: 480px) {
        position: relative;
        padding-bottom: 0rem;
        font-size: 1.3rem;

        &:after {
            content: "";
            padding: 3rem;  
            width: 100%;
            background: #0F0A00;
            background-image: url(${'/noise.png'});
            -webkit-clip-path: polygon(100% 0, 0% 100%, 0% 100%, 100% 100%);
            clip-path: polygon(100% 0, 0% 100%, 0% 100%, 100% 100%);
            position: absolute;
            bottom: 1rem;
            box-sizing: border-box;
        }
    }

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        font-size: 1.3rem;
        padding-bottom: 0rem;
        position: relative;

        &:after {
            content: "";
            padding: 3rem;  
            width: 100%;
            background: #0F0A00;
            background-image: url(${'/noise.png'});
            -webkit-clip-path: polygon(100% 0, 0% 100%, 0% 100%, 100% 100%);
            clip-path: polygon(100% 0, 0% 100%, 0% 100%, 100% 100%);
            position: absolute;
            bottom: 1.01rem;
            box-sizing: border-box;
        }
    }
`;

// Box one ****************************
export const BoxOne = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0rem 3rem 1rem 3rem;
    color: #0F0A00;
    gap: 3rem;
    position: relative;

    @media (max-width: 1024px) {
        padding: 0rem 1.5rem 1rem 1.5rem;
        flex-wrap: wrap;
        margin-bottom: 3rem;
    }

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        padding: 0rem 2rem 1rem 2rem;
    }
`;

export const Year = styled.div`
    font-size: 3.5rem;
    font-family: "EB Garamond", serif;
    margin-bottom: 0.5rem;
    text-align: ${({ align }) => align && 'center'};
    color: ${({ color }) => color && color};

    @media (max-width: 480px) {
        margin-bottom: ${({ align }) => align && '0rem'};
    }

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        font-size: 4rem;
        margin-bottom: ${({ align }) => align && '0rem'};
    }
`;

export const Desc = styled.div`
    color: #333333;
`;

// Box two ****************************
export const BoxTwo = styled.div`
    margin-top: 1rem;
    margin-bottom: 9rem;
    color: #fcf6e9;
    display: flex;
    align-items: center;
    position: relative;
    justify-content: space-between;
    text-shadow: 0.0625rem 0.0625rem 0.1875rem #0F0A00;

    @media (max-width: 480px) {
        margin-bottom: 0.5rem;
        color: #fcf6e9;
    }
`;

export const InnerOverlay = styled.div`
    background: #333333;
    margin-top: 8rem;
    width: 100%;
    overflow: hidden;
    filter: grayscale(1);
    height: 40rem;

    @media (max-width: 480px) {
        height: 45rem;
    }
`;

export const Backdrop = styled.div`
    height: 100%;
    width: 100%;
    opacity: 0.2;
    filter: grayscale(1);
    background-size: cover;
    background-image: ${({ backdrop }) => `url(${ backdrop })`};

    @media (max-width: 480px) {
        opacity: 0.15;
    }
`;

export const Slides = styled.div`
    left: 10%;
    top: 0rem;
    z-index: 1;
    position: absolute;
    pointer-events: none;

    @media (max-width: 480px) {
        left: auto;
        height: 100%;
    }

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        left: 2rem;
    }
`;

export const SlideImg = styled.img`
    width: 18rem;
    display: block;
    filter: grayscale(1) ${({ show }) => show ? 'brightness(100%)': 'brightness(60%)'};
    box-shadow: ${({ show }) => 
        show ? '0rem 0rem 0.5rem 0.1rem #dedbdb' : '0rem 0rem 1rem 0.2rem #504221e6'};

    @media (max-width: 480px) {
        display: ${({ show }) => !show && 'none'};
    }
`;

export const NavBox = styled.div`
    width: 100%;
    height: 10rem;
    position: absolute;
    right: 0rem;
    display: flex;
    ${({ bottom }) => bottom ? 'bottom: 0rem' : 'top: 8rem'};

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        height: 5rem;
        ${({ bottom }) => bottom ? 'bottom: 3rem' : 'top: 8rem'};
    }
`;

export const NavWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;

    @media (max-width: 480px) {
        display: none;
    }

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        height: 8rem;
    }
`;

export const Line = styled.div`
    width: 0.0625rem;
    height: 7rem;
    background: #bd9d52;
`;

export const StyledIconButton = styled(IconButton)`
    width: 3.5rem;
    height: 3.5rem;

    &.MuiIconButton-root {
        transform: ${({ bottom }) => bottom ? 'rotate(90deg)' : 'rotate(-90deg)'};
        margin-bottom: ${({ bottom }) => bottom && '-0.5rem'};
        margin-top: ${({ bottom }) => !bottom && '-0.5rem'};
    }

    @media (max-width: 480px) {
        width: 5.5rem;
        height: 5.5rem;

        &.MuiIconButton-root {
            position: absolute;
            bottom: 0.5rem;
            margin: 0rem;
            transform: ${({ bottom }) => bottom ? 'rotate(0deg)' : 'rotate(-180deg)'};
            ${({ bottom }) => bottom ? 'right: 0.8rem' : 'left: 0.8rem'};
        }

        &:disabled {
            display: none;
        }
    }

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        width: 4.5rem;
        height: 4.5rem;

        &.MuiIconButton-root {
            transform: ${({ bottom }) => bottom ? 'rotate(90deg)' : 'rotate(-90deg)'};
            margin-bottom: ${({ bottom }) => bottom && '-0.6rem'};
            margin-top: ${({ bottom }) => !bottom && '-0.6rem'};
        }
    }
`;

export const Arrow = styled.div`
    color: #bd9d52;
    height: 100%;
    width: 100%;
    border: 0.0625rem solid #bd9d52;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
        box-shadow: 0rem 0rem 0.3rem 0rem #dedbdb;
    }

    @media (max-device-width: 1024px) {
        &:hover {
            box-shadow: 0rem 0rem 0rem 0rem #dedbdb;
        }
    }
`;

export const LineWrapper = styled.div`
    color: #dedbdb;
    display: flex;
    height: 20rem;
    width: 100%;
    transition: ease 1000ms;
    align-items: center;

    @media (max-width: 480px) {
        flex-direction: column;
    }
`;

export const Info = styled.div`
    padding: 0rem 10%;
    text-align: center;
    display: flex;
    flex-direction: column;
    margin-bottom: 3rem;

    @media (max-width: 480px) {
        padding: 0.5rem 1.5rem 1.5rem 1.5rem;
    }

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        padding: 0rem 2rem;
    }
`;

export const Text = styled.div`
    text-align: justify;
    word-wrap: break-word;
    word-break: break-word;
    line-height: 1.8rem;

    @media (max-width: 480px) {
        font-size: 1.35rem;
        overflow-y: scroll;
        margin-bottom: 2rem;
    }
`;

export const FillerOne = styled.div`
    min-width: 10%;

    @media (max-width: 480px) {
        display: none;
    }

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        min-width: 2rem;
    }
`;

export const FillerTwo = styled.div`
    min-width: 18rem;

    @media (max-width: 480px) {
        display: none;
    }
`;

// Box three ****************************
export const BoxThree = styled.div`
    width: 100%;
    position: relative;
    padding: 0rem 3rem 3rem 3rem;

    @media (max-width: 480px) {
        padding: 2rem 1.5rem;
    }

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        padding: 0rem 2rem 2rem 2rem;
    }
`;

export const QuoteWrapper = styled.div`
    display: flex;
    justify-content: center;
`;

export const QuoteOutline = styled.div`
    border: 0.125rem solid #bd9d52;
    border-radius: 50%;
    width: 5rem;
    height: 5rem;
`;

export const QuoteSymbol = styled.div`
    height: 100%;
    width: 100%;
    color: #bd9d52;
    transform: rotateZ(180deg);
    background-image: url('/quote.svg');
    background-repeat: no-repeat;
    background-position: center center;
    background-size: 60%;
`;

export const Quote = styled.div`
    font-size: 2.2rem;
    font-family: "EB Garamond", serif;
    font-style: bold;
    text-align: center;
    padding: 1rem 0rem;

    @media (max-width: 1024px) {
        line-height: 2.4rem;
    }
`;

export const TextWrapper = styled.div`
    column-count: 2;
    column-gap: 3rem;
    overflow: hidden;
    color: #333333;
    font-family: 'IBM Plex Serif', serif;

    @media (max-width: 480px) {
        column-count: 1;
    }
    
    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        column-gap: 2rem;
    }
`;

// Box five ********************************
export const FamilyDesc = styled.div`
    width: 100%;
    height: 30rem;
    color: #333333;
    padding: 0rem 2.8rem 3rem 3rem;
    border-bottom: 0.0625rem solid #bd9d52;
    border-top: 0.0625rem solid #bd9d52;
    overflow-y: scroll;

    &::-webkit-scrollbar {
        display: none;
        scrollbar-width: none;
    }

    @media (max-width: 480px) {
        padding: 0rem 1.5rem 1.5rem 1.5rem;
        height: auto;
    }

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        padding: 0rem 2rem 2rem 2rem;
        height: auto;
    }
`;

export const ImageContainer = styled.div`
    position: absolute;
    display: flex;
`;

export const ImageWrapper = styled.div`
    background-repeat: no-repeat;
    background-position: center center;
    transition: all 0.5s;
    position: relative;
    height: 30rem;
    transition: all 0.5s;
    min-width: ${({ width }) => width && `${width}px`};
    max-width: ${({ width }) => width && `${width}px`};;
    background: ${({ src }) => src && `url(${ src })`};
    transform: translateX(${({ translate }) => `${translate}px`});
    background-size: ${({ src }) => src && 'cover'};

    @media (max-width: 480px) {
        height: 23rem;
    }

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        height: 40rem;
    }
`;

export const ButtonWrapper = styled.div`
    position: absolute;
    top: 50%;
    width: 100%;
    transform: translateY(-50%);
`;

// Box six ********************************
export const BoxSix = styled.div`
    width: 100%;
    text-align: center;
    color: #0F0A00;
    padding: 1.5rem 3rem 3rem 3rem;

    @media (max-width: 480px) {
        padding: 1.5rem 1.5rem 2.1rem 1.5rem;
    }

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        padding: 2rem 2rem 2.5rem 2rem;
    }
`;

// Box seven ********************************
export const BoxSeven = styled.div`
    width: 100%;
    display: flex;
    min-height: 20rem;

    @media (max-width: 1024px) {
        flex-direction: column-reverse;
    }
`;

export const LeftContainer = styled.div`
    width: 50%;
    position: relative;
    height: 100%;

    @media (max-width: 480px) {
        width: 100%;
        height: ${({ seven }) => seven ? '30rem': 'auto'};
    }

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        width: 100%;
        height: ${({ seven }) => seven ? '40rem': 'auto'};
    }
`;

export const RightContainer = styled.div`
    width: 50%;
    height: 30rem;
    background: #333333;
    background: ${({ src }) => src && `url(${ src })`};
    background-size: ${({ src }) => src ? 'cover' : 'contain'};
    background-repeat: no-repeat;
    background-position: center center;
    transition: all 0.5s;
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

export const Overlay = styled.div`
    background: #333333;
    height: 30rem;
    width: 100%;
    overflow: hidden;
    filter: grayscale(1);

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        height: 40rem;
    }
`;

export const BackImg = styled.div`
    height: 100%;
    width: 100%;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    opacity: 0.2;
    filter: grayscale(1);
    background-image: ${({ src }) => `url(${ src })`};

    @media (max-width: 480px) {
        margin-top: -3rem;
    }
`;

export const FinalQuote = styled.div`
    position: absolute;
    text-align: center;
    width: 100%;
    left: 50%;
    top: 50%;
    color: #bd9d52;
    font-size: 2.2rem;
    font-style: italic;
    padding-right: 10%;
    padding-left: 10%;
    font-family: "EB Garamond", serif;
    transform: translate(-50%, -50%);
    text-shadow: 0.0625rem 0.0625rem 0.1875rem #0F0A00;

    @media (max-width: 1024px) {
        line-height: 2.4rem;
    }
`;

export const Author = styled.div`
    color: #fcf6e9;
    font-size: 1.1rem;
    font-style: normal;
    text-align: end;
    font-family: 'IBM Plex Serif', serif;

    @media (max-width: 1024px) {
        font-size: 1.3rem;
    }
`;

export const StyledButton = styled(IconButton)`
    width: 3.5rem;
    height: 3.5rem;
    color: #bd9d52;
    display: flex;
    justify-content: center;
    align-items: center;

    &.MuiButtonBase-root {
        position: absolute;
        top: 50%;
        z-index: 10;
        ${({ left }) => left ? 'left: 0.5rem' : 'right: 0.5rem'};
        transform: translateY(-50%) ${({ left }) => left && 'rotate(-180deg)'};
    }

    &:disabled {
        display: none;
    }

    @media (max-width: 480px) {
        width: 5rem;
        height: 5rem;
    }

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        width: 4.5rem;
        height: 4.5rem;
    }
`;

export const ImgInfo = styled.div`
    position: absolute;
    z-index: 10;
    font-style: italic;
    width: 100%;
    text-align: left;
    color: #fcf6e9;
    bottom: 0.5rem;
    background-color: #26262680;
    padding: 0.25rem 0.5rem 0.25rem 0.5rem;

    ${({ up }) => up && `
        color: #0F0A00;
        left: calc(50% + 1rem);
        background-color: transparent;
        width: auto;
        bottom: 3.5rem;
    `}

    @media (max-width: 480px) {
        font-size: 1.25rem;
        line-height: 1.3rem;
        bottom: 0.5rem;

        ${({ up }) => up && `
            bottom: -1rem;
            left: 1.5rem;
        `}
    }

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        font-size: 1.25rem;
        line-height: 1.3rem;
        bottom: 0.5rem;

        ${({ up }) => up && `
            bottom: 0rem;
            left: 3rem;
        `}
    }
`;
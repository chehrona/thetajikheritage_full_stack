import styled, { keyframes } from "styled-components";
import { PlayArrow, ArrowForwardIos } from "@mui/icons-material";
import { IconButton, DialogContent } from "@mui/material";

const bounce = keyframes`
    0%, 20%, 50%, 80%, 100% {
        transform: translateX(0);
    }
    40% {
        transform: translateX(0.5rem);
    }
    60% {
        transform: translateX(0.7rem);
    }
`;

export const Desc = styled.div`
    width: 100%;
    line-height: 1.5rem;
    text-align: justify;

    @media (max-width: 480px) {
        line-height: 1.8rem;
        position: relative;

        ${({ expand }) => !expand && `
            &:after {
                content: "";
                height: 20rem;
                width: 100%;
                left: 0;
                position: absolute;
                bottom: 0;
                background: linear-gradient(to bottom, rgba(252, 246, 233, 0), rgba(252, 246, 233, 1));
            }
        `}
    }
`;

export const StyledIconButton = styled(IconButton)`
    width: 5.5rem;
    height: 5.5rem;

    &.MuiIconButton-root {
        background: #504221d1;

        &:hover {
            background: #504221;
        }
    }

    @media (max-width: 480px) {
        width: 7.5rem;
        height: 7.5rem;
    }

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        width: 12rem;
        height: 12rem;
    }
`;

export const StyledArrowButton = styled(IconButton)`
    &.MuiIconButton-root {
        display: none;
    }

    @media (max-width: 480px) {
        &.MuiIconButton-root {
            display: block;
            width: 2.5rem;
            height: 2.5rem;
            position: absolute;
            top: -1rem;
            left: calc(50% - 1.5rem);
            transform: rotate(-90deg) translateX(-50%);
        }
    }
`;

export const StyledContent = styled(DialogContent)`
    position: relative;
    height: 20rem;

    &.MuiDialogContent-root {
        padding: 0rem;
        overflow: hidden;
    }

    @media (max-width: 1024px) {
        font-size: 1.3rem;
    }
`;

export const InfoContainer = styled.div`
    height: 100%;
    width: 100%;

    @media (max-width: 480px) {
        flex-direction: column-reverse;
        overflow: hidden;
    }
`;

export const InnerBox = styled.div`
    width: 65%;
    height: 100%;
    background: #fcf6e9;
    position: relative;
    padding: 2rem;

    ${({ width }) => width && `
        background: #0F0A00;
        position: relative;
    `}

    @media (max-width: 480px) {
        width: 100%;
        z-index: 2;
        padding: 1.5rem;
        border-radius: 2rem;
        overflow-x: hidden;
        position: absolute;
        top: ${({ expand }) => expand ? '0rem' : '40%'};
        display: ${({ width }) => width && 'none'};
        transition: all 0.5s;
    }

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        height: 50%;
        top: 55%;
        width: 100%;
        z-index: 2;
        border-radius: 2rem;
        position: absolute;
    }
`;

export const StudioName = styled.img`
    height: 3rem;

    @media (max-width: 1024px) {
        position: absolute;
        left: 1.5rem;
        top: 0.5rem;
    }
`;

export const InfoWrapper = styled.div`
    width: 100%;
    padding-right: 27%;
    margin-top: 1rem;

    @media (max-width: 1024px) {
       margin-top: 2rem;
       padding-right: 0%;
    }
`;

export const InfoTitle = styled.div`
    overflow-wrap: break-word;
    font-style: bold;
    font-size: 3.5rem;
    line-height: 3.5rem;
    width: 100%;
    text-transform: uppercase;
    font-family: 'EB Garamond', serif;
    text-shadow: 0.0625rem 0.0625rem 0.1875rem #504221e6;

    @media (max-width: 480px) {
       font-size: 3rem;
       line-height: 3.3rem;
    }
`;

export const StyledPlayIcon = styled(PlayArrow)`
    color: #fcf6e9;

    &.MuiSvgIcon-root {
        width: 3rem;
        height: 3rem;
    }

    @media (max-width: 480px) {
        &.MuiSvgIcon-root {
            width: 5rem;
            height: 5rem;
        }
    }

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        &.MuiSvgIcon-root {
            width: 8rem;
            height: 8rem;
        }
    }
`;

export const MovieImg = styled.img`
    height: 85%;
    width: auto;
    top: 50%;
    left: 50%;
    position: absolute;
    transform: translate(0%, -50%);
    box-shadow: 0rem 0rem 1rem 0.2rem #504221d1;

    @media (max-width: 1024px) {
        top: 0rem;
        left: auto;
        transform: none;
        width: 100%;
        height: auto;
        border-radius: 2rem 0rem 0rem 2rem;
    }
`;

export const ReleaseInfo = styled.div`
    display: flex;
    align-items: center;
    height: 4rem;
    justify-content: start;
    color: #504221d1;
    width: 100%;
    gap: 1rem;

    @media (max-width: 480px) {
        height: 3rem;
        gap: 0rem;
    } 

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        height: 3rem;
    }
`;

export const InfoBox = styled.div`
    display: flex;
    justify-content: start;
    align-items: center;
    padding: 1rem;
    margin: 3rem 0rem;
    width: ${({ year }) => year ? '4rem' : '10rem'};

    @media (max-width: 480px) {
        margin: 1rem 0rem;
        width: fit-content;
    }
`;

export const Director = styled.div`
    width: 100%;
    text-transform: uppercase;
    font-size: 1.5rem;
    font-family: 'EB Garamond', serif;
    margin: 1.5rem 0rem 0.3rem 0rem;

    @media (max-width: 1024px) {
        font-size: 2rem;
    }
`;

export const DirBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: start;
    position: absolute;
    left: 75%;
    top: 15%;
    width: 25%;

    @media (max-width: 1024px) {
        left: 50%;
        right: auto;
        justify-content: center;
        transform: translateX(-50%);
    }
`;

export const Line = styled.div`
    width: 5rem;
    background: #fcf6e9;
    height: 0.05rem;
    margin-right: 1rem;

    @media (max-width: 1024px) {
        display: none;
    }
`;

export const Direction = styled.div`
    text-transform: uppercase;
    font-size: 1rem;
    color: #fcf6e9;
    font-family: 'EB Garamond', serif;

    @media (max-width: 1024px) {
        display: none;
    }
`;

export const StyledFrame = styled.iframe`
    width: 100%;
    height: 100%;
    border-radius: 2rem;
`;

export const SlideUp = styled(ArrowForwardIos)`
    transform: rotate(-90deg);
    animation: ${bounce} 2s infinite;
`;

export const SlideDown = styled(ArrowForwardIos)`
    transform: rotate(-180deg);
`;

export const Cover = styled.div`
    background-color: #000000;
    position: absolute;
    width: 5rem;
    height: 5rem;
    top: 0rem;
    right: 0rem;
    pointer-events: none;
    cursor: none;
`;
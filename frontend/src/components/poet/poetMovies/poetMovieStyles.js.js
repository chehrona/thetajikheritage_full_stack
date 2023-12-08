import styled, { keyframes } from "styled-components";
import { IconButton } from "@mui/material";
import { ChevronRight } from "@mui/icons-material";

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

const slideOut = keyframes`
    0% {
        transform: translateX(100%);
        opacity: 0;
    }
    50% {
        transform: translateX(0);
        opacity: 1;
    }
    100% {
        transform: translateX(0);
        opacity: 1;
    }
`;

export const MainContainer = styled.div`
    background: #fcf6e9;
    color: white;
    position: relative;
    padding: 3rem 0rem 3rem 0rem;
    background-image: url(${'/noise.png'});

    &:before {
        content: "";
        padding: 3rem;  
        width: 100%;
        background: #fcf6e9;
        background-image: url(${'/noise.png'});
        -webkit-clip-path: polygon(0 0, 100% 0%, 100% 100%, 0% 100%);
        clip-path: polygon(0 0, 100% 100%, 100% 100%, 0% 100%);
        position: absolute;
        top: -5.99rem;
        box-sizing: border-box;
    }
`;

export const MovieWrapper = styled.div`
    padding: 0rem 3rem 0rem 3rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 1rem;

    @media (max-width: 480px) {
        gap: 2rem;
        padding: 0rem 3rem 0rem 1.5rem;
    }

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        gap: 2rem;
        padding: 0rem 3.2rem 0rem 2rem;
    }
`;

export const MovieCard = styled.div`
    height: 21.15rem;
    width: 14.95rem;
    cursor: pointer;
    position: relative;
    border-radius: 0.5rem;
    box-shadow: 0rem 0rem 0.6rem #504221;
    opacity: 0;
    animation: ${slideOut} 2s ease-in-out forwards;
    animation-delay: ${({ delay }) => delay ? delay : '0s'};

    @media (max-width: 480px) {
        height: 17.15rem;
        width: 11.95rem;
        border-radius: 0.8rem;
    }

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        height: 23rem;
        width: 16.25rem;
        border-radius: 0.8rem;
    }
`;

export const Image = styled.img`
    max-width: 100%;
    height: 100%;
    border-radius: 0.5rem;
`;

export const StyledIconButton = styled(IconButton)`
    width: 3rem;
    height: 3rem;
    bottom: 1rem;
    right: -2.6rem;
    transform: translateX(-50%);
    box-shadow: 0rem 0rem 0.6rem #000;

    &.MuiIconButton-root {
        position: absolute;
        background: #0F0A00;

        &:hover {
            background: #0F0A00;
        }
    }

    @media (max-width: 480px) {
        right: -3rem;
    }

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        width: 4rem;
        height: 4rem;
        bottom: 1.5rem;
        right: -4rem;
    }
`;

export const StyledExpand = styled(ChevronRight)`
    color: #dedbdb;
    animation: ${bounce} 2s infinite;

    &.MuiSvgIcon-root {
        height: 2rem;
        width: 2rem;
    }
`;
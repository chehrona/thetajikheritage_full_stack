import styled, { keyframes } from "styled-components";
import { Info } from "@mui/icons-material";
import { IconButton } from "@mui/material";

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
    background-image: url(${'/noise.png'});
    color: white;
    position: relative;
    padding: 3rem 0rem 3rem 0rem;

    &:before {
        content: "";
        padding: 3rem;  
        width: 100%;
        background: #fcf6e9;
        background-image: url(${'/noise.png'});
        -webkit-clip-path: polygon(0 0, 100% 0%, 100% 100%, 0% 100%);
        clip-path: polygon(0 0, 100% 100%, 100% 100%, 0% 100%);
        position: absolute;
        top: -5.98rem;
        box-sizing: border-box;
    }
`;

export const AwardWrapper = styled.div`
    padding: 0rem 3rem 0rem 3rem;
    display: flex;
    gap: 2.57%;
    flex-wrap: wrap;
    justify-content: start;

    @media (max-width: 480px) {
        padding: 0rem 1.5rem;
        gap: 4.2%;
    }

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        padding: 0rem 2rem;
        gap: 3.1%;
    }
`;

export const AwardCard = styled.div`
    width: 10rem;
    height: 14.1rem;
    border-radius: 1rem;
    margin-bottom: 2.57%;
    display: flex;
    justify-content: center;
    align-items: start;
    background-color: transparent;
    perspective: 62.5rem;
    box-shadow: 0rem 0rem 0.5rem 0.1rem #504221;
    opacity: 0;
    animation: ${slideOut} 2s ease-in-out forwards;
    animation-delay: ${({ delay }) => delay ? delay : '0s'};

    @media (max-width: 480px) {
        width: 9rem;
        height: 12.69rem;
        margin-bottom: 4.2%;
    }
`;

export const InnerContainer = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 0.8s;
    transform-style: preserve-3d;

    ${AwardCard}:hover & {
        transform: rotateY(180deg);
    }
`;

export const Face = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    transform: ${({ back }) => back && "rotateY(180deg)"};
    background: ${({ back }) => back ? "#504221d1" : "#0F0A00"};
    background-image: ${({ back }) => back && "url(${'/noise.png'})"};
    border-radius: 1rem;
    padding: 0.8rem;

    @media (max-width: 480px) {
        padding: 0.4rem;
    }
`;

export const Title = styled.div`
    text-align: center;
    font-size: 1.2rem;
`;

export const Image = styled.img`
    width: 100%;
    height: 100%;
`;

export const Year = styled.div`
    font-size: 3rem;

    @media (max-width: 480px) {
       font-size: 2rem;        
    }
`;

export const StyledIconButton = styled(IconButton)`
    width: 3rem;
    height: 3rem;
    bottom: 0.5rem;
    left: 50%;
    transform: translateX(-50%);

    &.MuiIconButton-root {
        position: absolute;
    }

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        bottom: 0.3rem;
    }
`;

export const StyledInfoIcon = styled(Info)`
    color: #ffffff;

    &.MuiSvgIcon-root {
        height: 2.3rem;
        width: 2.3rem;
    }

    @media (max-width: 480px) {
        &.MuiSvgIcon-root {
            height: 3rem;
            width: 3rem;
        }
    }

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        &.MuiSvgIcon-root {
            height: 2.8rem;
            width: 2.8rem;
        }
    }
`;
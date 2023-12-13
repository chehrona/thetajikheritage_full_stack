import { Link } from "react-router-dom";
import styled, {keyframes} from "styled-components";

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

export const MythCardWrapper = styled.div`
    opacity: 0;
    height: 25rem;
    width: 25rem;
    color: #0F0A00;
    cursor: pointer;
    position: relative;
    border-radius: 0.7rem;
    animation: ${slideOut} 1s ease-in-out forwards;
    transition: border-radius 250ms, box-shadow 400ms;
    animation-delay: ${({ delay }) => delay ? delay : '0s'};

    &:hover {
        box-shadow: 0rem 0rem 0.6rem #504221d1;
    }

    @media (max-width: 480px) {
        height: 13rem;
        width: 13rem;
        box-shadow: 0rem 0rem 0.6rem #504221d1;
    }
`;

export const MythImage = styled.img`
    height: 100%;
    width: 100%;
    border-radius: 0.7rem;
`;

export const StyledLink = styled(Link)`
    text-decoration: none;
    color: inherit;
`;
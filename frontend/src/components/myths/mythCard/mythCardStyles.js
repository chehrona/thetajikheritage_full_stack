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
    color: #0F0A00;
    cursor: pointer;
    position: relative;
    animation: ${slideOut} 1s ease-in-out forwards;
    animation-delay: ${({ delay }) => delay ? delay : '0s'};
`;

export const MythImage = styled.img`
    height: 25rem;
    width: 25rem;
    border-radius: 0.7rem;
    transition: border-radius 250ms, box-shadow 400ms;

    &:hover {
        border-radius: 1.5rem;
        box-shadow: 0rem 0rem 0.6rem #504221d1;
        transition: border-radius 250ms, box-shadow 400ms;
    }

    @media (max-width: 480px) {
        height: 19.025rem;
        width: 12.5rem;
        box-shadow: 0rem 0rem 0.6rem #504221d1;

        &:hover {
            border-radius: 0.7rem;
        }
    }
`;

export const StyledLink = styled(Link)`
    text-decoration: none;
    color: inherit;
`;
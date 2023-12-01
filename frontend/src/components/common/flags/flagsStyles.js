import { IconButton, Tooltip, tooltipClasses } from "@mui/material";
import styled from "styled-components";
import khorLogo from "./images/khorasan.png";
import usLogo from "./images/united-states.png";
import ruLogo from "./images/russia.png";
import tjLogo from "./images/tajikistan.png";

export const FlagWrapper = styled.div`
    width: fit-content;
    cursor: pointer;
    pointer-events: auto;

    @media (max-width: 480px) {
        position: fixed;
        bottom: 0.25rem;
        left: 0.5rem;
    }

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        position: fixed;
        left: 0.75rem;
        bottom: 0.75rem;
    }
`;

export const StyledFlag = styled.div`
    width: 1.5rem;
    border-radius: 50%;
    height: 1.5rem;
    background-size: 100%;
    box-shadow: 0.05rem 0.05rem 0.8rem 0.05rem #0F0A00b2;
    background-image: ${({lang}) => 
        lang === "kh" ? `url(${khorLogo})` :
        lang === "us" ? `url(${usLogo})` :
        lang === "ru" ? `url(${ruLogo})` :
        `url(${tjLogo})`};

    @media (max-width: 480px) {
        height: 2rem;
        width: 2rem;
    }

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        height: 2.25rem;
        width: 2.25rem;
    }
`;

export const FlagDropdown = styled.div`
    display: flex;
    flex-direction: column;
    opacity: ${({ showLangMenu }) => showLangMenu ? 1 : 0};
    visibility: ${({ showLangMenu }) => showLangMenu ? 'visible' : 'hidden'};
`;

export const StyledIconButton = styled(IconButton)`
    &.MuiIconButton-root {
        height: 2.5rem;
        width: 2.5rem;
        margin-bottom: 0.2rem;
    }

    @media (max-width: 480px) {
        &.MuiIconButton-root {
            margin-bottom: 0.5rem;
        }
    }

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        &.MuiIconButton-root {
            margin-bottom: 1.25rem;
        }
    }
`;

export const StyledTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className }} />
    ))(() => ({
        [`& .${tooltipClasses.tooltip}`]: {
            fontSize: 'inherit',
            fontFamily: 'inherit',
            fontWeight: 'normal',
            padding: '0.5rem 1rem',
        },
        [`& .${tooltipClasses.tooltipArrow}`]: {
            backgroundColor: '#70654a',
        },
        [`& .${tooltipClasses.arrow}`]: {
            color: '#70654a'
        },
        '@media (max-width: 1024px)': {
            [`& .${tooltipClasses.tooltip}`]: {
                display: 'none',
            },
        },
}));
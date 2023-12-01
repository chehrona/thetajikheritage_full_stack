import styled from "styled-components";

import { Copyright } from "@mui/icons-material";
import { IconButton } from "@mui/material";

export const FooterContainer = styled.div`
    background: #0F0A00;
    width: 100%;
`;

export const FooterInnerContainer = styled.div`
    background: #0F0A00;
    max-width: 1920px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    box-sizing: border-box;
    color: #ffffff;
    max-height: 4.23rem;
    min-height: 4.23rem;
    position: relative;
    z-index: 10;
    justify-content: center;

    @media (max-width: 480px) {
        justify-content: start;
        padding-left: 15%;
    }
`;

export const StyledCopyrightIcon = styled(Copyright)`
    margin-right: 0.5rem;
`;

export const Text = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: 480px) {
        font-size: 1.3rem;
    }

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        font-size: 1.3rem;
    }
`;

export const SocialsWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    right: 1rem;
    flex-direction: row;
    gap: 0.5rem;

    @media (max-width: 480px) {
        gap: 0rem;
        right: 0rem;
    }
`;

export const StyledIcon = styled.img`
    width: 1.5rem;
    height: 1.5rem;
    filter: brightness(150%) grayscale(100%);
    border-radius: ${({rad}) => rad ? '100%': '0%'};

    &:hover {
        filter: grayscale(0%);
    }

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        width: 2rem;
        height: 2rem;
    }
`;

export const StyledIconButton = styled(IconButton)`
    &.MuiIconButton-root {
        padding: 0.6rem;  
    }

    @media (max-width: 480px) {
        &.MuiIconButton-root {
            margin-left: 0.5rem;  
        }
    }
`;

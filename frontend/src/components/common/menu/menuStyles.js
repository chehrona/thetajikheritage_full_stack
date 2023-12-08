import styled from "styled-components/macro";
import { Link } from "react-router-dom";
import { Menu } from "@mui/material";

export const StyledMenu = styled(Menu)`
    & .MuiPopper-root {
        z-index: 100;
    }

    & .MuiPaper-root {
        color: #bd9d52;
        height: 100svh;
        max-height: 100svh;
        padding-top: 6rem;
        background: rgb(51 51 51);
        position: static;
        box-shadow: none;
        border-radius: 0rem;
        overflow: hidden;
        max-width: 1440px;
        margin: 0 auto;
        display: flex;
        justify-content: center;
    }

    & .MuiList-root {
        display: flex;
        width: 100%;
        padding: 3rem;
        justify-content: center;
        gap: 6%;
        align-items: center;

        @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
            padding: 10rem 10rem 15rem 5rem;
            flex-direction: column-reverse;
            gap: 0%;
        }
    }
`;

export const LogoContainer = styled.div`
    opacity: 0.5;

    @media screen and (max-device-width: 480px) {
        display: none;
    }

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        opacity: 0.3;
        width: 100%;
        position: absolute;
        right: -52.3%;
        top: 50%;
        transform: translateY(-50%);
    }
`

export const Logo = styled.img`
    border-radius: 50%;
    height: 35rem;
    width: 35rem;

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        height: 60rem;
        width: 60rem;
        transform: rotate(-90deg);
    }
`;

export const LogoHalf = styled.img`
    border-radius: 50%;
    height: 43em;
    width: 44.5em;
    position: absolute;
    top: 11em;
    left: 5.25em;
`;

export const PageNamesContainer = styled.div`
    width: 40%;
    height: 100%;
    gap: 2rem;
    font-size: 2rem;
    display: flex;
    position: relative;
    z-index: 1;
    flex-direction: column;
    justify-content: center;

    @media (max-width: 480px) {
        justify-content: start;
        margin-top: 7rem;
        width: 100%;
    }

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        font-size: 2.5rem;
        width: 100%;
    }
`;

export const MenuItem = styled.div`
    width: 100%;
`;

export const PageName = styled.div`
    font-weight: bold;
    font-style: italic;
    cursor: pointer;
    font-family: 'EB Garamond', serif;
`;

export const PageDesc = styled.div`
    color: #dedbdb;
    font-size: 1.3rem;
    cursor: pointer;

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        font-size: 1.5rem;
    }
`;

export const StyledLink = styled(Link)`
    text-decoration: none;
    color: inherit;
`;
import styled from "styled-components";
import { Dialog, IconButton } from "@mui/material";
import { Link } from "react-router-dom";
import { Close } from "@mui/icons-material";

export const StyledDialog = styled(Dialog)`
    height: 100%;
    width: 100% !important;
`;

export const StyledFrame = styled.iframe`
    margin-top: 5rem;
    width: 100vw;
    height: 100vh;
    border: none;
    background: #202020
        url("/loader.svg") center
        no-repeat;
`;

export const Header = styled.div`
    background: #0F0A00;
    height: 5rem;
    width: 100%;
    position: absolute;
    top: 0rem;
    z-index: 10;
    color: #ffffff;
    display: flex;
    align-items: center;
`;

export const Title = styled.div`
    font-size: 2rem;
    font-family: 'EB Garamond', serif;
    font-style: italic;
    text-align: center;
`;

export const LogoWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 4rem;
    width: 4rem;
    margin-left: 1rem;
`;

export const Logo = styled.img`
    height: 100%;
    width: 100%;
`;

export const StyledLink = styled(Link)`
    text-decoration: none;
    color: inherit;
`;

export const TitleWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    font-size: 2rem;
    font-family: 'EB Garamond', serif;
`;

export const IconWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-end;
    margin-left: 1rem;
    height: 4rem;
    width: 6rem;
`;

export const StyledIconButton = styled(IconButton)`
    display: flex;
    justify-content: center;
    width: 100%;
`;

export const StyledCloseIcon = styled(Close)`
    color: #bd9d52;

    &.MuiSvgIcon-root {
        height: 3.5rem;
        width: 2.5rem;
    }
`;

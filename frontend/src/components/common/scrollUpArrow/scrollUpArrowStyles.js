import styled from "styled-components";
import { IconButton } from "@mui/material";

export const MainContainer = styled.div`
    cursor: pointer;
    height: 5rem;
    width: 5rem;
    pointer-events: auto;
    margin: 0rem -1.8rem -1rem 0rem;

    @media (max-width: 1024px) {
        display: none;
    }
`;

export const StyledIconButton = styled(IconButton)`
    width: 3.5rem;
    height: 3.5rem;

    @media (max-width: 480px) {
        width: 5.5rem;
        height: 5.5rem;
    }

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        width: 4.5rem;
        height: 4.5rem;
    }
`;

export const Arrow = styled.div`
    color: #bd9d52;
    background-color: #fff;
    height: 100%;
    width: 100%;
    border: 0.0625rem solid #bd9d52;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0.05rem 0.05rem 0.8rem 0.05rem #0F0A00b2;
`;
import styled from "styled-components";
import { DialogContent } from "@mui/material";

export const Desc = styled.div`
    width: 100%;
    height: 100%;
    color: #0F0A00;
    line-height: 1.5rem;
    text-align: center;

    @media (max-width: 480px) {
        font-size: 1.3rem;
        line-height: 2rem;
    }
`;

export const StyledContent = styled(DialogContent)`
    position: relative;

    &.MuiDialogContent-root {
        padding: 0.5rem;
    }
`;

export const InfoContainer = styled.div`
    height: 100%;
    width: 100%;
`;

export const InfoTitle = styled.div`
    color: #000000;
    display: flex;
    justify-content: center;
    font-style: italic;
    font-size: 2rem;
    font-family: 'EB Garamond', serif;

    @media (max-width: 480px) {
        font-size: 2.5rem;
    }
`;

export const BodyContainer = styled.div`
    display: flex;
    margin: 1rem 0rem;
`;
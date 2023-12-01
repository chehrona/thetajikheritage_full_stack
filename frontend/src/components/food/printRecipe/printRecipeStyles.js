import styled from "styled-components";
import { Button } from "@mui/material";

export const SubTitle = styled.div`
    padding-bottom: 0.8rem;
    font-weight: 600;
    font-size: 1.2rem;
    color: #000;

    @media (max-width: 480px) {
        padding-bottom: 0rem;
        font-size: 1.3rem;
    }

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        font-size: 1.5rem;
        padding-bottom: 0rem;
    }
`;

export const PrintContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    min-width: 4.7rem;
    padding-bottom: 0.25rem;

    @media (max-width: 480px) {
        width: 100%;
        padding: 0rem 1.5rem 2rem 1.5rem;
    }
`;

export const PrintBox = styled.img`
    width: 2rem;
    height: 2rem;

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        width: 2.5rem;
        height: 2.5rem;
    }
`;

export const StyledButton = styled(Button)`
    &.MuiButton-root {
        width: 4rem;
        height: 4rem;
        border-radius: 50%;
        color: #504221d1;

        &.MuiButton-root:hover {
            box-shadow: 0rem 0rem 0.4rem 0.01rem #504221;
        }
    }

    @media (max-width: 480px) {
        box-shadow: 0rem 0rem 0.4rem 0.01rem #504221;

        div {
            color: #fff;
        }

        &.MuiButton-root {
            background: #504221d1;
            border-radius: 0.75rem;
            text-transform: none;
            height: 3.2rem;
            padding: 0.5rem 1.5rem;
            font-family: 'IBM Plex Serif', serif;
        }

        &.MuiButton-root:hover {
            background: #504221d1;
        }
    }

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        box-shadow: 0rem 0rem 0.4rem 0.01rem #504221;
    }
`;
import styled from "styled-components";
import { DialogContent } from "@mui/material";

export const Desc = styled.div`
    width: 100%;
    height: 100%;
    color: #dedbdb;
    line-height: 1.5rem;
    overflow-wrap: break-word;

    @media (max-width: 480px) {
        line-height: 2rem;
        display: inline;
    }
`;

export const InfoContainer = styled.div`
    height: 100%;
    width: 100%;
`;

export const InfoTitle = styled.div`
    color: #ffffff;
    display: flex;
    justify-content: center;
    font-style: italic;
    font-size: 2.2rem;
    font-family: 'EB Garamond', serif;

    @media (max-width: 480px) {
        text-align: center;
        margin: 0rem 4rem 1rem 1rem;
        line-height: 2.4rem;
    }
`;

export const StyledContent = styled(DialogContent)`
    &.MuiDialogContent-root {
        position: relative;
        padding: 1rem 0.5rem;

        @media (max-width: 1024px) {
            overflow: hidden;
            font-size: 1.3rem;
        }
    }
`;

export const BodyContainer = styled.div`
    display: flex;
    margin: 2rem 1rem;

    @media (max-width: 480px) {
        display: block;
        min-height: 15.5rem;
    }
`;

export const Wrapper = styled.div`
    height: 100%;
    width: ${({ first }) => first ? "25%" : "75%"};

    @media (max-width: 480px) {
        width: 100%;
    }

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        width: ${({ first }) => first ? "24.5%" : "76.5%"};
    }
`;

export const AwardImg = styled.img`
    border-radius: 1rem;
    height: 15rem;
    width: 11rem;
    padding: 1rem;
    background: #0F0A00;
    background-image: url(${'/noise.png'});
    box-shadow: 0rem 0rem 0.4rem 0.01rem #bd9d52;

    @media (max-width: 480px) {
        display: inline;
        float: left;
        margin-right: 1.5rem;
    }

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        margin-left: 1rem;
    }
`;
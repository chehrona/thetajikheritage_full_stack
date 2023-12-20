import styled from "styled-components";
import { IconButton } from '@mui/material';

export const StyledIconButton = styled(IconButton)`
    width: 3.5rem;
    height: 3.5rem;

    &.MuiIconButton-root {
        transform: ${({ bottom }) => bottom ? 'rotate(90deg)' : 'rotate(-90deg)'};
        margin-bottom: ${({ bottom }) => bottom && '-0.5rem'};
        margin-top: ${({ bottom }) => !bottom && '-0.5rem'};
    }

    @media (max-width: 480px) {
        width: 5.5rem;
        height: 5.5rem;

        &.MuiIconButton-root {
            position: absolute;
            bottom: 0.5rem;
            margin: 0rem;
            transform: ${({ bottom }) => bottom ? 'rotate(0deg)' : 'rotate(-180deg)'};
            ${({ bottom }) => bottom ? 'right: 0.8rem' : 'left: 0.8rem'};
        }

        &:disabled {
            display: none;
        }
    }

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        width: 4.5rem;
        height: 4.5rem;

        &.MuiIconButton-root {
            transform: ${({ bottom }) => bottom ? 'rotate(90deg)' : 'rotate(-90deg)'};
            margin-bottom: ${({ bottom }) => bottom && '-0.6rem'};
            margin-top: ${({ bottom }) => !bottom && '-0.6rem'};
        }
    }
`;

export const Arrow = styled.div`
    color: #bd9d52;
    height: 100%;
    width: 100%;
    border: 0.0625rem solid #bd9d52;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
        box-shadow: 0rem 0rem 0.3rem 0rem #dedbdb;
    }

    @media (max-device-width: 1024px) {
        &:hover {
            box-shadow: 0rem 0rem 0rem 0rem #dedbdb;
        }
    }
`;

export const ImageContainer = styled.div`
    position: absolute;
    display: flex;
`;

export const ImageWrapper = styled.div`
    background-repeat: no-repeat;
    background-position: center center;
    transition: all 0.5s;
    position: relative;
    height: 35rem;
    transition: all 0.5s;
    min-width: ${({ width }) => width && `${width}px`};
    max-width: ${({ width }) => width && `${width}px`};
    background: ${({ src }) => src && `url(${ src })`};
    transform: translateX(${({ translate }) => `${translate}px`});
    background-size: ${({ src }) => src && 'cover'};

    @media (max-width: 480px) {
        height: 23rem;
    }

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        height: 40rem;
    }
`;

export const ButtonWrapper = styled.div`
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 100%;
`;

export const SlideContainer = styled.div`
    width: 100%;
    height: 100%;
    transition: all 0.5s;
    position: relative;
    overflow: hidden;
    background-repeat: no-repeat;
    background-position: center center;
    background: ${({ src }) => src && `url(${ src })`};
    background-size: ${({ src }) => src ? 'cover' : 'contain'};
`;

export const StyledButton = styled(IconButton)`
    width: 3.5rem;
    height: 3.5rem;
    color: #bd9d52;
    display: flex;
    justify-content: center;
    align-items: center;

    &.MuiButtonBase-root {
        position: absolute;
        top: 50%;
        z-index: 10;
        ${({ left }) => left ? 'left: 0.5rem' : 'right: 0.5rem'};
        transform: translateY(-50%) ${({ left }) => left && 'rotate(-180deg)'};
    }

    &:disabled {
        display: none;
    }

    @media (max-width: 480px) {
        width: 5rem;
        height: 5rem;
    }

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        width: 4.5rem;
        height: 4.5rem;
    }
`;

export const ImgInfo = styled.div`
    position: absolute;
    z-index: 10;
    font-style: italic;
    width: 100%;
    text-align: left;
    color: #fcf6e9;
    bottom: 0rem;
    background-color: #26262680;
    padding: 0.25rem 0.5rem 0.25rem 0.5rem;

    ${({ up }) => up && `
        color: #0F0A00;
        left: calc(50% + 1rem);
        background-color: transparent;
        width: auto;
        bottom: 3.5rem;
    `}

    @media (max-width: 480px) {
        font-size: 1.25rem;
        line-height: 1.3rem;
        bottom: 0.5rem;

        ${({ up }) => up && `
            bottom: -1rem;
            left: 1.5rem;
        `}
    }

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        font-size: 1.25rem;
        line-height: 1.3rem;
        bottom: 0.5rem;

        ${({ up }) => up && `
            bottom: 0rem;
            left: 3rem;
        `}
    }
`;
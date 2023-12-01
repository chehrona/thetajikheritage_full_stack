import styled from "styled-components";

export const MainContainer = styled.div`
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0rem;
    pointer-events: none;

    @media (max-width: 480px) {
        display: none;
    }
`;

export const SphereBox = styled.div`
    position: relative;
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0rem;
`;

export const Border = styled.div`
    border-radius: 50%;
    position: absolute;
    opacity: ${({ opacity }) => opacity && opacity};
    transform: scale(${({ opacity }) => opacity && opacity});
    width: ${({ size }) => size && `${size}rem`};
    height: ${({ size }) => size && `${size}rem`};
    bottom: ${({ bottom }) => bottom && bottom.d};
    top: ${({ top }) => top && top.d};
    right: ${({ right }) => right && right.d};
    border: 0.0625rem solid #bd9d52;
    will-change: transform;
    z-index: 1;

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        bottom: ${({ bottom }) => bottom && bottom.t};
        top: ${({ top }) => top && top.t};
        right: ${({ right }) => right && right.t};
    }
`;

export const HomeImage = styled.img`
    position: absolute;
    object-fit: contain;
    border-radius: 50%;
    transform: scale(${({ opacity }) => opacity && opacity});
    width: ${({ size }) => size && `${size}rem`};
    height: ${({ size }) => size && `${size}rem`};
    box-shadow: 0rem 0rem 0.5rem 0.25rem #504221;
    opacity: ${({ opacity }) => opacity && opacity};
    top: ${({ top }) => top && top.d};
    bottom: ${({ bottom }) => bottom && bottom.d};
    right: ${({ right }) => right && right.d};
    will-change: transform;
    z-index: 0;

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        bottom: ${({ bottom }) => bottom && bottom.t};
        top: ${({ top }) => top && top.t};
        right: ${({ right }) => right && right.t};
    }
`;
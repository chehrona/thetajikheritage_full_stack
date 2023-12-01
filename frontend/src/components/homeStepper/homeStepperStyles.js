import styled from "styled-components";

export const MainContainer = styled.div`
    width: 100%;
    height: calc(100svh - 10.23rem);
    overflow: hidden;
    position: relative;
    z-index: 1;

    @media (max-width: 480px) {
		min-height: calc(100svh - 9.23rem);
    }
`;

export const SemiCircle = styled.div`
    position: absolute;
    left: -1.5rem;
    top: 50%;
    transform: translateY(-50%);
    border-radius: 50%;
    width: 3rem;
    height: 3rem;
    background-color: #bd9d52;

    &::before {
        content: "";
        height: 3rem;
        width: 3rem;
        background: #0F0A00;
        position: absolute;
        left: -1.5rem;
        box-sizing: border-box;
    }

    @media (max-width: 480px) {
        display: none;
    }
`;

export const IndicatorStep = styled.div`
    font-size: 1.5rem;
    color: #ffffff;
    font-family: 'EB Garamond', serif;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 2rem;

    @media (max-width: 480px) {
        display: none;
    }

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        font-size: 2rem;
    }
`;

export const NumLine = styled.div`
    background: #bd9d52;
    width: 0.05rem;
    height: 4rem;
    margin-left: 0.5%;

    @media (max-width: 1024px) {
        height: 8rem;
    }
`;

export const StepperContainer = styled.div`
    height: 100%;
    width: 100%;
    overflow: scroll;
    padding-left: 6%;

    &::-webkit-scrollbar {
        display: none;
        scrollbar-width: none;
    }

    @media (max-width: 480px) {
        padding: 1rem 2rem;
        scroll-snap-type: mandatory;
        scroll-snap-type: y mandatory;
    }

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        padding-left: 10%;
        scroll-snap-type: mandatory;
        scroll-snap-type: y mandatory;
    }
`;

export const StepperBox = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    opacity: ${({ opacity }) => opacity && opacity};

    @media (max-width: 1024px) {
        scroll-snap-align: start;
    }
`;

export const Step = styled.div`
    font-size: 1.2rem;
    color: #dedbdbb2;
    font-family: 'EB Garamond', serif;
    transition: 500ms ease-in-out;

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        font-size: 1.5rem;
    }
`;

export const TitleWrapper = styled.div`
    height: 70%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    margin-top: 7rem;

    @media (max-width: 480px) {
        height: 30%;
        min-height: 20%;
    }
`;

export const LargeTitle = styled.div`
    font-weight: bold;
    color: #ffffffb2;
    width: 45rem;
    overflow-wrap: break-word;
    text-transform: uppercase;
    font-family: 'EB Garamond', serif;
    text-shadow: 1rem 0rem 0rem #504221;
    font-size: ${({ fontSize }) => fontSize && `${fontSize.d}rem`};
    opacity: ${({ fontSize }) => fontSize ? "1" : "0"};
    line-height: ${({ fontSize }) => fontSize && `${fontSize.d - 1}rem`};
    margin-top: ${({ margin }) => margin && `${margin.d}rem`};

    @media (max-width: 480px) {
        width: 100%;
        padding-top: 0rem;
        opacity: ${({ fontSize }) => fontSize.m ? "1" : "0"};
        font-size: ${({ fontSize }) => fontSize && `${fontSize.m}rem`};
        line-height: ${({ fontSize }) => fontSize && `${fontSize.m - 0.5}rem`};
        margin-top: ${({ margin }) => margin && `${margin.m}%`};
    }

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        opacity: ${({ fontSize }) => fontSize.t ? "1" : "0"};
        font-size: ${({ fontSize }) => fontSize && `${fontSize.t}rem`};
        line-height: ${({ fontSize }) => fontSize && `${fontSize.t - 0.5}rem`};
        margin-top: ${({ margin }) => margin && `${margin.t}%`};
    }
`;

export const Desc = styled.div`
    color: #dedbdb;
    font-size: 1.1rem;
    width: 40%;
    margin-left: 10%;
    position: relative;
    margin-top: 2rem;

    @media (max-width: 480px) {
        font-size: 1.3rem;
        width: calc(100% - 2.2rem);
        margin-left: 2.2rem;
    }

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        width: 50%;
        margin-left: 3rem;
        font-size: 1.3rem;
    }
`;

export const OtherSteps = styled.div`
    gap: 0.5rem;
    width: 3%;
    height: 20%;
    margin-left: 10%;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: absolute;
    ${({ bottom }) => bottom ? "bottom: 0rem" : "top: 0rem"};
    justify-content: ${({ bottom }) => bottom ? "end" : "start"};

    @media (max-width: 480px) {
        display: none;
    }

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        margin-left: 10%;
    }
`;

export const StyledButton = styled.div`
        color: #bd9d52;
        height: fit-content;
        font-weight: 500;
        padding: 0rem 0rem 0.25rem 0rem;
        width: ${({ lang }) => lang && 
            lang === 'ru' ? '30%' : 
            (lang === 'tj' ? '35%' : '17%')};

        &::before {
            content: '';
            position: absolute;
            height: 0.1rem;
            bottom: 0;
            left: 0;
            transform: scaleX(0);
            background-color: #ffffff;
            transform-origin: bottom right;
            transition: transform 0.3s ease-in-out;
            width: ${({ lang }) => lang && 
                lang === 'ru' ? '30%' : 
                (lang === 'tj' ? '35%' : '17%')};
        }

        &:hover::before {
            transform: scaleX(1);
            transform-origin: bottom left;
        }

        &:hover {
            border-right: 0.1rem solid #ffffff;
        }

        @media (max-width: 480px) {
            border-right: 0.1rem solid #ffffff;
            border-bottom: 0.1rem solid #ffffff;
            width: ${({ lang }) => lang && 
                lang === 'ru' ? '46%' : 
                (lang === 'tj' ? '54%' : '26%')
            };

            &::before {
                display: none;
            }

            &:hover {
                border-right: 0.1rem solid #ffffff;
            }
        }

        @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
            border-right: 0.1rem solid #ffffff;
            border-bottom: 0.1rem solid #ffffff;
            width: ${({ lang }) => lang && 
                lang === 'ru' ? '41%' : 
                (lang === 'tj' ? '47%' : '23.5%')
            };

            &::before {
                display: none;
            }

            &:hover {
                border-right: 0.1rem solid #ffffff;
            }
        }
`;

export const Link = styled.a`
    text-decoration: none;
`;

export const ImageSemiCircle = styled.img`
    position: absolute;
    bottom: -9.5rem;
    right: -4rem;
    border-radius: 50%;
    width: 35rem;
    height: 35rem;
    padding: 0.5rem;
    border: 0.0625rem solid #bd9d52;
    z-index: -1;
    opacity: 0.3;
`;
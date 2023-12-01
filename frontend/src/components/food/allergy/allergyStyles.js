import styled from "styled-components";

export const AllergyContainer = styled.div`
    gap: 2rem;
    width: 100%;
    display: flex;
    color: #ffffff;
    max-width: 35%;
    justify-content: space-between;

    @media (max-width: 480px) {
        max-width: 100%;
        padding: 0rem 1.5rem;
    }

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        max-width: 100%;
    }
`;

export const ContentBox = styled.div`
    flex-grow: 1;
    min-width: 7rem;
    border-radius: 1rem;
    background: #504221d1;
    padding: 0.5rem 0.8rem 0.8rem 0.8rem;
    box-shadow: 0rem 0rem 0.4rem 0.01rem #504221;
`;

export const LabelContainer = styled.div`
    margin-right: 1rem;
    text-align: center;

    &:last-child {
        margin-right: 0rem;
    }

    @media (max-width: 480px) {
        margin-right: 0.25rem;
    }
`;

export const BoxTitle = styled.div`
    margin-bottom: 0.8rem;
    font-weight: 600;
    font-size: 1.2rem;

    @media (max-width: 480px) {
        font-size: 1.3rem;
    }

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        font-size: 1.5rem;
    }
`;

export const LabelWrapper = styled.div`
    display: flex;
    justify-content: space-around;
`;

export const LabelImage = styled.img`
    width: 4.5rem;
    height: 4.5rem;
    border-radius: 50%;
    background: white;

    @media (max-width: 480px) {
        width: 5rem;
        height: 5rem;
    }

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        width: 6rem;
        height: 6rem;
    }
`;

export const AllergenName = styled.div`
    font-size: 0.9rem;
    color: #dedbdb;

    @media (max-width: 480px) {
        font-size: 1.2rem;
    }

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        font-size: 1.3rem;
    }
`;
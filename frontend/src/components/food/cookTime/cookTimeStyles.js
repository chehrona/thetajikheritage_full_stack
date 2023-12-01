import styled from "styled-components";

export const MainContainer = styled.div`
    display: flex;
`;

export const QuantityContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-width: 4.7rem;
`;

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

export const TimeBox = styled.div`
    font-size: 1.2rem;
    padding-bottom: 0.75rem;

    @media (max-width: 1024px) {
        font-size: 1.3rem;
        padding-bottom: 1rem;
    }
`;
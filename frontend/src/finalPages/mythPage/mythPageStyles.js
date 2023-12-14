import styled from "styled-components";

export const PageContainer = styled.div`
    position: relative;
    box-sizing: border-box;
    min-height: 100svh;
    background-color: white;
    padding: 2rem 3.7rem 2.8rem 3.2rem;
    
    @media (max-width: 480px) {
        padding: 0rem;
    }

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        padding: 1.5rem 1.8rem 2rem 1.2rem;
    }
`;

export const MythContainer = styled.div`
    border-radius: 4rem;
    background: #fcf6e9;
    box-shadow: 0.8rem 0.5rem 0rem 0.08rem #504221d1;

    @media (max-width: 480px) {
        margin: 0rem;
        border-radius: 0rem;
        box-shadow: 0rem 0rem 0rem 0rem;
    }

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        border-radius: 2.5rem;
    }
`;
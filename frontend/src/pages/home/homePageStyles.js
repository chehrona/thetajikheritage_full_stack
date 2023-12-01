import styled from "styled-components";

export const PageContainer = styled.div`
    box-sizing: border-box;
    background-color: #0F0A00;
    overflow: hidden;
    min-height: calc(100svh - 10.23rem);

    @media (max-width: 480px) {
		min-height: calc(100svh - 9.23rem);
    }
`;

export const InnerContainer = styled.div`
    height: 100%;
    display: flex;
    background: 
        linear-gradient(90deg, rgba(189, 157, 82, 0.05), rgba(189, 157, 82, 0.07), rgba(189, 157, 82, 0.09), rgba(189, 157, 82, 0.11));
    position: relative;
`;
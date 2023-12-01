import styled from "styled-components";

export const MainContainer = styled.div`
    background: #0F0A00;
    color: white;
    position: relative;
    background-image: url(${'/noise.png'});
    padding: 6rem 0rem 9rem 0rem;

    &:before {
        content: "";
        padding: 3rem;  
        width: 100%;
        background: #fcf6e9;
        background-image: url(${'/noise.png'});
        -webkit-clip-path: polygon(0 0, 100% 0%, 100% 0%, 0% 100%);
        clip-path: polygon(0 0, 100% 0%, 100% 0%, 0% 100%);
        position: absolute;
        top: -0.01rem;
        box-sizing: border-box;
    }

    @media (max-width: 1024px) {
        padding-top: 1rem;
        margin-top: -1rem;

        &:before {
            display: none;
        }
    }
`;
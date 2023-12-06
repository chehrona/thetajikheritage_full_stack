import styled from "styled-components";

export const StyledSpan = styled.span`
    .quoteContainer {
        margin: 1rem;
        display: flex;
        position: relative;
        justify-content: center;
    }

    .quoteContainer > div {
        width: 75%;
    };

    .quoteSymbol {
        background-image: url('/quotation.png');
        background-size: 100%;
        background-repeat: no-repeat;
        height: 7rem;
        width: 7rem;
        filter: opacity(0.35);
        position: absolute;
    };

    .quoteWrapper {
        margin-top: 1.3rem;
        margin-left: 3rem;
        font-style: italic;
        font-size: 1.2rem;
    }

    .termSpan {
        font-weight: bold;
        color: #bd9d52;
    };

    @media screen and (max-width: 480px) {
        .quoteContainer > div {
            width: 100%;
        }

        .quoteContainer {
            margin: 1rem 0rem;
        }

        .quoteWrapper {
            margin: 1.3rem 1rem 1rem 1.5rem;
            font-size: 1.45rem;
        }
    }

    @media screen and (min-device-width: 481px) and (max-device-width: 960px) {
        .quoteWrapper {
            font-size: 1.45rem;
        }
    }
`;
import { Add, Remove } from "@mui/icons-material";
import styled from "styled-components";
import { Link } from "react-router-dom";

export const QuantityContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    min-width: 4.7rem;
`;

export const StyledAddIcon = styled(Add)`
    color: #fff;
    background: #504221d1;
    border-radius: 0.5rem;
    box-shadow: 0rem 0rem 0.25rem 0.01rem #504221;

    &.MuiSvgIcon-root {
        font-size: 2rem;
    }

    @media (max-width: 1024px) {
        &.MuiSvgIcon-root {
            font-size: 2.5rem;
        }
    }
`;

export const ServeAmount = styled.input`
    width: 3rem;
    height: 2rem;
    outline: none;
    font-size: 1.1rem;
    padding: 0.2rem;
    text-align: center;
    font-family: 'IBM Plex Serif', serif;

    @media (max-width: 480px) {
        width: 3.5rem;
        height: 2.5rem;
        font-size: 1.3rem;
        padding: 0.5rem 1rem 0.5rem 1rem;
    }
`;

export const StyledMinusIcon = styled(Remove)`
    background: #504221d1;
    border-radius: 0.5rem;
    color: #fff;
    box-shadow: 0rem 0rem 0.25rem 0.01rem #504221;

    &.MuiSvgIcon-root {
        font-size: 2rem;
    }

    @media (max-width: 1024px) {
        &.MuiSvgIcon-root {
            font-size: 2.5rem;
        }
    }
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
`;

export const ServeContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 1.3rem;

    @media (max-width: 480px) {
        margin-top: 1rem;
    }
`;
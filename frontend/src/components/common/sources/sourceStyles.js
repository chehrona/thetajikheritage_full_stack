import styled from "styled-components";
import { ExpandLess, ExpandMore } from "@mui/icons-material";

export const DropDownContainer = styled.div`
    width: 100%;
    margin-bottom: 2rem;
    padding-top: 1rem;

    @media (max-width: 480px) {
        padding-top: 0rem;
        margin-bottom: 1rem;
    }
`;

export const IconContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 0.4;

    &:hover {
        opacity: 1;
    }
`;

export const Line = styled.div`
    height: 0.1rem;
    width: 15rem;
    background: ${({ line }) => line && line};;
    margin-right: ${({ right }) => right ? "0.3rem" : "0rem"};
    margin-left: ${({ right }) => right ? "0rem" : "0.3rem"};

    @media (max-width: 480px) {
        width: 10rem;
    }
`;

export const StyledDownIcon = styled(ExpandMore)`
    color: ${({ line }) => line && line};
`;

export const StyledUpIcon = styled(ExpandLess)`
    color: ${({ line }) => line && line};
`;

export const RefContainer = styled.div`
    max-width: 100%;
    margin-top: 0.8rem;
    border-radius: 1rem;
    display: block;
    position: relative;
    transition: all 0.5s linear 0s;
    color: ${({ color }) => color && color};
    height: ${({ open }) => open ? "15rem" : "0rem"};
    background: ${({ background }) => background && background};
    box-shadow: ${({ open, background }) => open && `0rem 0rem 0.4rem 0.01rem ${background}`};
    display: flex;

    @media (max-width: 480px) {
        height: ${({ open }) => open ? "30rem" : "0rem"};
    }
`;

export const RefWrapper = styled.div`
    padding: 1rem 2rem 1rem 2rem;
    overflow-y: scroll;
    margin: 0.5rem 0.25rem;
    display: ${({ open }) => open ? "block" : "none"};

    ::-webkit-scrollbar {
        width: 0.5rem;
    }

    ::-webkit-scrollbar-thumb {
        background-color: #bd9d52;
        border-radius: 0.25rem;
    }

    @media (max-width: 480px) {
        padding: 1rem;
    }
`;

export const SubTitle = styled.div`
    font-size: 2rem;
    font-family: 'EB Garamond', serif;
    font-style: italic;
    font-weight: 500;
    margin-bottom: 1rem;
    color: ${({ title }) => title && title};

    @media (max-width: 480px) {
        font-size: 2.5rem;
        margin-bottom: 0.5rem;
    }
`;

export const Reference = styled.span`
    font-size: 1.1rem;
    line-height: 1.7rem;

    @media (max-width: 480px) {
        font-size: 1.3rem;
    }
`;

export const RefBox = styled.div`
    display: flex;
    align-items: start;
    font-size: 1.1rem;
    line-height: 1.7rem;

    @media (max-width: 480px) {
        font-size: 1.3rem;
    }
`;

export const RefIndex = styled.div`
    display: flex;
    align-items: center;
    margin-right: 0.5rem;
`;

export const SourceLink = styled.a`
    color: #bd9d52;
    margin-left: 0.5rem;

    &:link &:active {
        color: #bd9d52;
    }
`;

export const SpaceHolder = styled.div`
    width: 0.5rem;
    min-width: 1rem;
    height: 100%;
    background-color: green;
`;
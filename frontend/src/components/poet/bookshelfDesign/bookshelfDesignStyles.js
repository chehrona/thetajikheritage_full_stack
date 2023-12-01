import styled from "styled-components/macro";
import { Tooltip, tooltipClasses } from "@mui/material";

export const MainContainer = styled.div`
    width: 100%;
    height: 17rem;
    perspective: 45rem;
    overflow: hidden;
    background-color: #0F0A00;
    position: absolute;
    background-image: url(${'/noise.png'});
`;

export const Cuboid = styled.div`
    position: relative;
    width: 100%;
    height: 17rem;
    transform-style: preserve-3d;
`;

export const CuboidFace = styled.div`
    width: 100%;
    height: 17rem;
    opacity: 0.6;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: Arial, sans-serif;
    font-size: 2rem;
    box-shadow: 0 1px 3px 0 #dedbdb, 0 1px 2px -1px #dedbdb;
    transform: translateZ(calc(17rem * -0.5)) translateY(calc(17rem * 0.5)) rotateX(-90deg);
    height: 17rem;
    background: rgb(213, 213, 213);
    box-shadow: 0rem 0rem 2rem 0.5rem inset black;
`;

export const BooksContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-end;
    gap: 4rem;
    position: relative;
    height: 17rem;
    padding-bottom: 1rem;
    box-sizing: border-box;
    cursor: pointer;
    position: relative;
`;

export const BookWrapper = styled.div`
    box-shadow: -1px -4px 0.3rem -0.3rem #dedbdb, 1px -2px 0.3rem -1px #dedbdb, 0px 0.3rem 0.3rem black;
    border-radius: 0.4rem;
    height: 13rem;
    width: 9rem;
    position: relative;
    overflow: hidden;
`;
  
export const Book = styled.img`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 0.4rem;
    object-fit: cover;
    background: #0F0A00
        url("/loader.svg") center
        no-repeat;
`;

export const Shelf = styled.div`
    height: 1rem;
    width: 100%;
    background: grey;
    position: relative;
    z-index: 10;
    border-radius: 0.3rem;
    box-shadow: 0rem 0rem 0.5rem 0.1rem inset black;
`;

export const StyledTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className }} />
    ))(() => ({
        [`& .${tooltipClasses.tooltip}`]: {
            fontSize: 'inherit',
            fontFamily: 'inherit',
            fontWeight: 'normal',
            padding: '0.5rem 1rem',
        },
        [`& .${tooltipClasses.tooltipArrow}`]: {
            backgroundColor: '#70654a',
        },
        [`& .${tooltipClasses.arrow}`]: {
            color: '#70654a'
        },
        '@media (max-width: 1024px)': {
            [`& .${tooltipClasses.tooltip}`]: {
                display: 'none',
            },
        },
}));
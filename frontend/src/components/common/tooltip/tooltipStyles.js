import styled from "styled-components/macro";
import { Tooltip, tooltipClasses } from '@mui/material';

export const StyledTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className }} />
    ))(() => ({
        [`& .${tooltipClasses.tooltip}`]: {
            fontSize: 'inherit',
            fontWeight: 'normal',
        },
        [`& .${tooltipClasses.tooltipArrow}`]: {
            backgroundColor: '#70654a',
        },
        [`& .${tooltipClasses.arrow}`]: {
            color: '#70654a'
        },
}));

export const StyledTypography = styled.div`
    font-family: 'IBM Plex Serif', serif;
    padding: 0.5rem;
    font-size: 1.1rem;

    @media (max-width: 480px) {
        font-size: 1.3rem;
        padding: 0.25rem;
        line-height: 1.65rem;
    }

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        padding: 0.25rem;
        line-height: 1.5rem;
    }
`;

export const ImageWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-top: 0.5rem;
`;

export const StyledImage = styled.img`
    height: 15rem;
    width: 10rem;
    margin: 0 auto;

    @media (max-width: 1024px) {
        padding-bottom: 0.5rem;
    }
`;

export const WordWrapper = styled.span`
    border-bottom: 1px dotted #70654a;
`;
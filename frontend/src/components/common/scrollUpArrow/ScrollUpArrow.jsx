import React from "react";

import { ArrowUpward } from "@mui/icons-material";

import { MainContainer, StyledIconButton, Arrow } from "./scrollUpArrowStyles";

export default function ScrollUpArrow({ parentRef }) {

    const handleScrollToTop = () => {
        parentRef.current.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }

    return (
        <MainContainer onClick={handleScrollToTop}>
            <StyledIconButton>
                <Arrow>
                    <ArrowUpward />
                </Arrow>
            </StyledIconButton>
        </MainContainer>
    )
}
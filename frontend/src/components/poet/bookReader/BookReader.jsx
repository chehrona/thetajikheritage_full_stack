import React from "react";

import {
    StyledDialog,
    StyledFrame,
    Header,
    Title,
    LogoWrapper,
    StyledLink,
    TitleWrapper,
    Logo,
    IconWrapper,
    StyledIconButton,
    StyledCloseIcon,
} from "./bookReaderStyles";

export default function BookReader({ book, setOpenBook }) {
    function closeReader() {
        setOpenBook(false);
    }

    return (
        <StyledDialog open={true} fullScreen>
            <Header>
                <LogoWrapper>
                    <StyledLink to={'/'}>
                        <Logo src={'/tajiks.png'}></Logo>
                    </StyledLink>
                </LogoWrapper>
                <TitleWrapper>
                    <Title>{book?.title}</Title>
                </TitleWrapper>
                <IconWrapper>
                    <StyledIconButton onClick={closeReader}>
                        <StyledCloseIcon />
                    </StyledIconButton>
                </IconWrapper>
            </Header>
            <StyledFrame src={`https://drive.google.com/file/d/${book?.link}/preview`}></StyledFrame>
        </StyledDialog>
    )
}
import React from "react";

import {
    HeaderContainer,
    HeaderInnerBox,
    LogoWrapper,
    MenuWrapper,
    TitleWrapper,
    Title,
    StyledIconButton,
    StyledMenuIcon,
    Logo,
    TitleSpan,
    StyledCloseIcon,
    StyledLink
} from "./headerStyles";

export default function Header({ setIsMenuShown, isMenuShown }) {

    function showMenu() {
        setIsMenuShown(prevState => !prevState);
    }

    return (
        <HeaderContainer>
            <HeaderInnerBox>
                <LogoWrapper>
                    <StyledLink to={'/'} onClick={() => setIsMenuShown(false)}>
                        <Logo src={'/tajiks.png'}></Logo>
                    </StyledLink>
                </LogoWrapper>
                <TitleWrapper>
                    <Title>
                        <TitleSpan>THE TAJIKS:</TitleSpan>
                        Iranians of the East
                    </Title>
                </TitleWrapper>
                <MenuWrapper>
                    <StyledIconButton onClick={showMenu}>
                        {isMenuShown ? <StyledCloseIcon /> : <StyledMenuIcon />}
                    </StyledIconButton>
                </MenuWrapper>
            </HeaderInnerBox>
        </HeaderContainer>
    )
} 
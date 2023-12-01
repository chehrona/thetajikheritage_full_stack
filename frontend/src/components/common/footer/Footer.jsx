import React from "react";
import pinIcon from "./icons/pin.png";
import instIcon from "./icons/inst.png";
import mailIcon from "./icons/mail.png";

import {
    FooterContainer,
    FooterInnerContainer,
    StyledCopyrightIcon,
    Text,
    StyledIconButton,
    StyledIcon,
    SocialsWrapper
} from "./footerStyles";

export default function Footer() {
    return (
        <FooterContainer>
            <FooterInnerContainer>
                <Text>
                    <StyledCopyrightIcon />
                    The Tajik Heritage 2023
                </Text>
                <SocialsWrapper>
                    <a href='https://www.pinterest.ca/tajik_heritage/' rel="noreferrer" target={'_blank'}>
                        <StyledIconButton>
                            <StyledIcon src={pinIcon} rad={true} />
                        </StyledIconButton>
                    </a>
                    <a href='https://www.instagram.com/tajik_heritage/' rel="noreferrer" target={'_blank'}>
                        <StyledIconButton>
                            <StyledIcon src={instIcon} rad={false} />
                        </StyledIconButton>
                    </a>
                    <a href='mailto:thetajikheritage@gmail.com' rel="noreferrer" target={'_blank'}>
                        <StyledIconButton>
                            <StyledIcon src={mailIcon} rad={false} />
                        </StyledIconButton>
                    </a>
                </SocialsWrapper>
            </FooterInnerContainer>
        </FooterContainer>
    );
}
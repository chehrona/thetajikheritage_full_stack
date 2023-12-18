import React, { useState, useEffect } from "react";

import { DescWrapper } from "../../common/descWrapper/DescWrapper";

import { 
    BoxWrapper,
    Image,
    SecondBox,
    Subtitle,
    TextContainer,
    ImageWrapper,
    ImgInfo
} from "./mythIntroStyles";

export default function BoxTwo({ myth }) {
    
    return (
        <BoxWrapper reverse={1}>
            <ImageWrapper>
                <Image src={myth.slides[1].src} />
                <ImgInfo dangerouslySetInnerHTML={{ __html: myth.slides[1].info}} />
            </ImageWrapper>
            <TextContainer>
                <Subtitle>{myth.sections[1].subtitle}</Subtitle>
                <DescWrapper desc={myth.sections[1].body} TextWrapper={SecondBox} />
            </TextContainer>
        </BoxWrapper>
    );
}
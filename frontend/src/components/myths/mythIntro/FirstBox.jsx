import React, { useState, useEffect } from "react";

import { DescWrapper } from "../../common/descWrapper/DescWrapper";

import { 
    BoxWrapper,
    Image,
    Title,
    FirstBox,
    Subtitle,
    TextContainer,
    ImgInfo,
    ImageWrapper
} from "./mythIntroStyles";

export default function BoxOne({ myth }) {

    return (
        <BoxWrapper resverse={0}>
            <ImageWrapper>
                <Image src={myth.slides[0].src} />
                <ImgInfo dangerouslySetInnerHTML={{ __html: myth.slides[0].info}} />
            </ImageWrapper>
            <TextContainer>
                <Title>{myth.title}</Title>
                <Subtitle>{myth.sections[0].subtitle}</Subtitle>
                <DescWrapper desc={myth.sections[0].body} TextWrapper={FirstBox} />
            </TextContainer>
        </BoxWrapper>
    );
}
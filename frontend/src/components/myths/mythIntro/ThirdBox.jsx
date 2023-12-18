import React, { useState, useEffect } from "react";

import { DescWrapper } from "../../common/descWrapper/DescWrapper";

import { 
    BoxWrapper,
    Image,
    ThirdBox,
    Subtitle,
    TextContainer
} from "./mythIntroStyles";

export default function BoxThree({ myth }) {
    
    return (
        <BoxWrapper reverse={0}>
            <Image src={myth.slides[2]} />
            <TextContainer>
                <Subtitle>{myth.sections[2].subtitle}</Subtitle>
                <DescWrapper desc={myth.sections[2].body} TextWrapper={ThirdBox} />
            </TextContainer>
        </BoxWrapper>
    );
}
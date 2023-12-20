import React, { useState, useEffect, useRef } from "react";

import Slideshow from "../../common/slideshow/Slideshow";
import { DescWrapper } from "../../common/descWrapper/DescWrapper";

import { 
    BoxWrapper,
    SecondBox,
    Subtitle,
    TextContainer,
    RightContainer
} from "./mythIntroStyles";

export default function BoxTwo({ myth }) {
    const parentRef = useRef(null);
    const [screenSize, setScreenSize] = useState(0);

    useEffect(() => {
        const parentWidth = parentRef?.current?.getBoundingClientRect().width;

        setScreenSize(parentWidth);
    }, []);
    
    return (
        <BoxWrapper reverse={1}>
            <RightContainer ref={parentRef}>
                <Slideshow
                    screenSize={screenSize}
                    slides={myth?.slides}
                />
            </RightContainer>
            <TextContainer>
                <Subtitle>{myth.subtitle}</Subtitle>
                <DescWrapper desc={myth.body} TextWrapper={SecondBox} />
            </TextContainer>
        </BoxWrapper>
    );
}
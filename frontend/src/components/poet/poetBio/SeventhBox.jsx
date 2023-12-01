import React, { useState, useEffect, useRef } from 'react';
import { useSetLang } from "../../../App";
import { ArrowForwardIos } from "@mui/icons-material";

import {
    BoxSeven,
    FinalQuote,
    LeftContainer,
    RightContainer,
    BackImg,
    Overlay,
    Author,
    StyledButton,
    Arrow,
    ImgInfo,
    ImageWrapper,
    ImageContainer,
    ButtonWrapper
} from './poetBioStyles';

export default function SeventhBox({ poet }) {
    const { lang } = useSetLang();
    const parentRef = useRef(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [screenSize, setScreenSize] = useState(0);
    const [translate, setTranslate] = useState(0);
    const [infoArr, setInfoArr] = useState([...poet?.seven[lang].slides]);

    useEffect(() => {
        const parentWidth = parentRef?.current?.getBoundingClientRect().width;

        setScreenSize(parentWidth);
    }, []);

    useEffect(() => {
        setInfoArr([...poet?.seven[lang].slides]);
    }, [lang]);

    const movePrev = () => {
        if (currentIndex > 0) {
            setCurrentIndex(prevState => prevState - 1);
            setTranslate(prevState => prevState + screenSize);
        }
    };
    
    const moveNext = () => {
        if (currentIndex < infoArr?.length - 1) {            
            setCurrentIndex(prevState => prevState + 1);
            setTranslate(prevState => prevState - screenSize);
        }
    };

    return (
        <BoxSeven>
            <LeftContainer>
                <Overlay>
                    <BackImg src={poet.backdrops[2]} />
                </Overlay>
                <FinalQuote>
                    {poet?.seven[lang].desc}
                    <Author dangerouslySetInnerHTML={{__html: poet?.seven[lang].author}} />
                </FinalQuote>
            </LeftContainer>
            <RightContainer ref={parentRef}>
                <ImageContainer>
                    {infoArr?.map((entry, i) => {
                        return (
                            <ImageWrapper key={i + 'a'} src={entry?.img} width={screenSize} translate={translate}>
                                <ImgInfo dangerouslySetInnerHTML={{__html: entry?.text}} />
                            </ImageWrapper>
                        )
                    })}
                </ImageContainer>
                <ButtonWrapper>
                    <StyledButton left={true} onClick={movePrev} disabled={currentIndex === 0}>
                        <Arrow>
                            <ArrowForwardIos style={{marginLeft: '1px'}}/>
                        </Arrow>
                    </StyledButton>
                    <StyledButton onClick={moveNext} disabled={currentIndex === infoArr?.length - 1}>
                        <Arrow>
                            <ArrowForwardIos />
                        </Arrow>
                    </StyledButton>
                </ButtonWrapper>
            </RightContainer>
        </BoxSeven>
    )
}
import React, { useEffect, useRef, useState } from "react";
import { ArrowForwardIos } from "@mui/icons-material";
import { useSetLang } from "../../../App";
import { useMediaQuery } from 'react-responsive';

import { 
    MainContainer,
    YearSlider,
    UnitWrapper,
    YearWrapper,
    Year,
    Line,
    InfoContainer,
    InfoWrapper,
    DescWrapper,
    Footer,
    Step, 
    StyledIconButton,
    Image,
    Desc,
    InfoInnerContainer,
    MobileFooter
} from "./poetCareerStyles";

export default function PoetCareer({ points }) {
    const { lang } = useSetLang();
    const parentRef = useRef(null);
    const childRef = useRef(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [translate, setTranslate] = useState(0);
    const [currentSize, setCurrentSize] = useState(0);
    const isMobile = useMediaQuery({ query: `(max-width: 480px)` });
    let gap = isMobile ? 30 : 50;

    useEffect(() => {
        const parentWidth = parentRef?.current?.getBoundingClientRect().width;
        const childWidth = childRef?.current?.getBoundingClientRect().width;

        const difference = parentWidth/2 - (childWidth/2 + gap);
        const translationValue = childWidth - difference;

        setTranslate(-translationValue);
        setCurrentSize(childWidth);
        setCurrentIndex(0);
    }, [lang]);

    const handleNext = () => {
        if (currentIndex < points?.years?.length - 1) {            
            setCurrentIndex(prevState => prevState + 1);
            setTranslate((prevState) => prevState - currentSize - gap);
        }
    }

    const handlePrev = () => {
        if (currentIndex > 0) {
            setCurrentIndex(prevState => prevState - 1);
            setTranslate((prevState) => prevState + currentSize + gap);
        }
    }

    return (
        <MainContainer id='Career'>
            <YearSlider>
                <UnitWrapper>
                    <Line />
                    {points?.years?.map((point, i) => {
                        return (
                            <YearWrapper key={i + 1} size={i === currentIndex}>
                                <Year show={i !== currentIndex}>{point}</Year>
                            </YearWrapper>   
                        );
                    })}
                </UnitWrapper>
                <InfoContainer ref={parentRef}>
                    <InfoInnerContainer translate={translate}>
                        {points?.images?.map((img, i) => {
                            return (
                                <InfoWrapper key={img + i} ref={childRef}>
                                    <Image src={img} />
                                    <DescWrapper>
                                        <Desc dangerouslySetInnerHTML={{__html: points?.text[lang][i]}} />
                                        <Footer>
                                            <StyledIconButton left={1} onClick={handlePrev} disabled={i === 1}>
                                                <ArrowForwardIos />
                                            </StyledIconButton>
                                            <Step>{`${currentIndex + 1}/${points?.years.length}`}</Step>
                                            <StyledIconButton onClick={handleNext} disabled={i === points?.years?.length}>
                                                <ArrowForwardIos />
                                            </StyledIconButton>
                                        </Footer>
                                    </DescWrapper>
                                </InfoWrapper>
                            );
                        })}
                    </InfoInnerContainer>
                    <MobileFooter>
                        <StyledIconButton left={1} onClick={handlePrev} disabled={currentIndex === 0}>
                            <ArrowForwardIos />
                        </StyledIconButton>
                        <Step>{`${currentIndex + 1}/${points?.years.length}`}</Step>
                        <StyledIconButton onClick={handleNext} disabled={currentIndex === points?.years?.length - 1}>
                            <ArrowForwardIos />
                        </StyledIconButton>
                    </MobileFooter>
                </InfoContainer>
            </YearSlider>
        </MainContainer>
    );
}
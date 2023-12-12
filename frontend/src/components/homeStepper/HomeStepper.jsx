import React, { useEffect, useState } from "react";
import { useSetLang } from "../../App";
import { useMediaQuery } from 'react-responsive';

import { stepInfo } from "../../landingPages/home/helper"; 

import {
    MainContainer,
    SemiCircle,
    NumLine,
    StepperBox,
    Step,
    Desc,
    IndicatorStep,
    TitleWrapper,
    LargeTitle,
    OtherSteps,
    StepperContainer,
    StyledButton,
    Link,
    ImageSemiCircle
} from "./homeStepperStyles";

export default function HomeStepper({ containerRef, divRefs, opacities }) {
    const { lang } = useSetLang();
    const isMobile = useMediaQuery({ query: `(max-width: 480px)` });
    const [visibleStepIndex, setVisibleStepIndex] = useState(0);

    useEffect(() => {
        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 0.7,
        };
      
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry, index) => {
                    if (entry.isIntersecting) {
                        setVisibleStepIndex(index);
                    }
                });
            },
            options
        );
      
        const stepElements = Array.from(containerRef.current.children);
        stepElements.forEach((element) => {
            observer.observe(element);
        });
      
        return () => {
            observer.disconnect();
        };
    }, [divRefs]);      

    return (
        <MainContainer>
                <SemiCircle />
            <OtherSteps>
                <NumLine />
                <Step>{stepInfo[visibleStepIndex - 1]?.num || stepInfo[stepInfo.length - 1]?.num}</Step>
            </OtherSteps>
            <StepperContainer ref={containerRef}>
                {stepInfo.map((step, i) => {
                    return (
                        <StepperBox
                            key={i}
                            ref={divRefs[i]}
                            opacity={opacities[i]}
                        >
                            <IndicatorStep>{step?.num}</IndicatorStep>
                            <TitleWrapper>
                                <LargeTitle fontSize={step?.text[lang].font} margin={step?.text[lang]?.margin}>{step?.text[lang].text}</LargeTitle>
                                <Desc>
                                    <div
                                        dangerouslySetInnerHTML={{__html: step?.desc[lang].text}}
                                    />
                                    <Link href={step?.desc[lang].link} target="_blank">
                                        <StyledButton lang={lang}>
                                            {lang === 'ru' ? 'УЗНАТЬ БОЛЬШЕ' : (lang === 'tj' ? 'БИСЁРТАР ОМӮЗЕД' : 'EXPLORE')}
                                        </StyledButton>
                                    </Link>
                                </Desc>
                            </TitleWrapper>
                        </StepperBox>
                    );
                })}
                {isMobile && <ImageSemiCircle src={stepInfo[visibleStepIndex]?.inner[2].img} />}
            </StepperContainer>
            <OtherSteps bottom={1}>
                <Step>{stepInfo[visibleStepIndex + 1]?.num || stepInfo[0]?.num}</Step>
                <NumLine />
            </OtherSteps>
        </MainContainer>
    );
}
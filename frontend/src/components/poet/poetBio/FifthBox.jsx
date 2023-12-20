import React, { useEffect, useState, useRef } from 'react';
import { useSetLang } from "../../../App";

import Slideshow from '../../common/slideshow/Slideshow';

import {
    BoxSeven,
    FamilyDesc,
    LeftContainer,
    RightContainer,
    Year,
} from './poetBioStyles';

export default function FifthBox({ poet }) {
    const { lang } = useSetLang();
    const parentRef = useRef(null);
    const [screenSize, setScreenSize] = useState(0);

    useEffect(() => {
        const parentWidth = parentRef?.current?.getBoundingClientRect().width;

        setScreenSize(parentWidth);
    }, []);

    return (
        <BoxSeven>
            <LeftContainer>
                <FamilyDesc>
                    <Year align={true} color={'#000'}>{poet?.five[lang].year}</Year>
                    <div dangerouslySetInnerHTML={{__html: poet?.five[lang].desc}}></div>
                </FamilyDesc>
            </LeftContainer>
            <RightContainer ref={parentRef}>
                <Slideshow
                    screenSize={screenSize}
                    slides={poet?.five[lang].slides}
                />
            </RightContainer>
        </BoxSeven>
    )
}
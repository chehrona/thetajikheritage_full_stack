import React from 'react';
import { useSetLang } from '../../../App';

import {
    BoxOne,
    LeftContainer,
    RightContainer,
    ImgInfo,
    Year,
    Desc
} from './poetBioStyles';

export default function FirstBox({ poet }) {
    const { lang } = useSetLang();

    return (
        <BoxOne>
            <LeftContainer>
                <Year color={'#000'}>{poet[lang].year}</Year>
                <Desc dangerouslySetInnerHTML={{__html: poet[lang].desc}} />
            </LeftContainer>
            <RightContainer src={poet?.img} first={1} />
            <ImgInfo
                up={1}
                dangerouslySetInnerHTML={{__html: poet[lang].imgDesc}} 
            />
        </BoxOne>
    )
}
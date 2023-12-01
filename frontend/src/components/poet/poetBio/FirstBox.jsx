import React from 'react';

import {
    BoxOne,
    LeftContainer,
    RightContainer,
    ImgInfo,
    Year,
    Desc
} from './poetBioStyles';

export default function FirstBox({ poet }) {
    return (
        <BoxOne>
            <LeftContainer>
                <Year color={'#000'}>{poet?.year}</Year>
                <Desc dangerouslySetInnerHTML={{__html: poet?.desc}} />
            </LeftContainer>
            <RightContainer src={poet?.slides.img} first={1} />
            <ImgInfo
                up={1}
                dangerouslySetInnerHTML={{__html: poet?.slides.text}} 
            />
        </BoxOne>
    )
}
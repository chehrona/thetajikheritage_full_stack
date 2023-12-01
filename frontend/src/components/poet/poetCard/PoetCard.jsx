import React from "react";
import { useSetLang } from "../../../App";

import {
    PoetCardWrapper,
    PoetImage,
    PoetDates,
    PoetImgContainer,
    PoetNameBox,
    PoetName,
    PoetInfoContainer,
    StyledLink
} from "./poetCardStyles";

export default function PoetCard({ poet, i }) {
    const { lang } = useSetLang();

    return (   
        <StyledLink to={"/language/poets/" + poet?.id}>
            <PoetCardWrapper delay={`${0.01*i}s`}>
                <PoetImgContainer>
                    <PoetImage src={poet?.img} />
                    <PoetNameBox>
                        <PoetName>{poet?.name[lang][0]}</PoetName>
                        <PoetName>{poet?.name[lang][1]}</PoetName>
                        <PoetDates>{poet?.years[lang][0]}-{poet?.years[lang][1]}</PoetDates>
                    </PoetNameBox>
                </PoetImgContainer>
                <PoetInfoContainer dangerouslySetInnerHTML={{__html: poet?.desc[lang]}} />
            </PoetCardWrapper>
        </StyledLink>
    );
}
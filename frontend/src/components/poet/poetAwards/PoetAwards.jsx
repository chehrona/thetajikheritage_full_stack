import React, { useState } from "react";
import { useSetLang } from "../../../App";

import AwardDialog from "../awardDialog/AwardDialog";

import {
    MainContainer,
    AwardCard,
    Title, 
    Image,
    InnerContainer,
    Face,
    Year,
    StyledIconButton,
    StyledInfoIcon,
    AwardWrapper,
} from "./poetAwardStyles";

export default function PoetAwards({ poet }) {
    const { lang } = useSetLang();
    const [showAwardInfo, setShowAwardInfo] = useState(false);
    const [awardInfo, setAwardInfo] = useState(null);

    function handleAwardDialog(e, award) {
        setShowAwardInfo(true);
        setAwardInfo(award)
    }

    return (
        <MainContainer id="Awards">
            <AwardWrapper>
                {poet[lang].map((award, i) => {
                    return (
                        <AwardCard key={i} delay={`${0.05*i}s`}>
                            <InnerContainer>
                                <Face>
                                    <Image loading="lazy" src={award.img} />
                                </Face>
                                <Face back={true}>
                                    <Title>{award.title}</Title>
                                    {award.years.map((year) => {
                                        return (
                                            <Year key={year}>{year}</Year>
                                        )
                                    })}
                                    <StyledIconButton onClick={(e) => handleAwardDialog(e, award)}>
                                        <StyledInfoIcon />
                                    </StyledIconButton>
                                </Face>
                            </InnerContainer>
                        </AwardCard>
                    )})
                }
            </AwardWrapper>
            <AwardDialog awardInfo={awardInfo} showAwardInfo={showAwardInfo} setShowAwardInfo={setShowAwardInfo} />
        </MainContainer>
    )
}
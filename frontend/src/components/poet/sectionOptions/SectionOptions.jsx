import React from "react";
import { useSetLang } from "../../../App";

import { 
    MainContainer,
    SectionTitle,
    SegmentContainer,
    TitleSpan
} from "./sectionOptionStyles";

export default function SectionOptions({ poet, scrollToView }) {
    const { lang } = useSetLang();

    return (
        <MainContainer>
            <SegmentContainer>
                {poet?.sections[lang].map((piece, i) => {
                    return (
                        <SectionTitle key={i} onClick={(e) => scrollToView(e)}>
                            <TitleSpan delay={`${0.03*i}s`} data={`#${poet?.sections.us[i]}`}>{piece}</TitleSpan>
                        </SectionTitle>
                    )
                })}
            </SegmentContainer>
        </MainContainer>
    )
}
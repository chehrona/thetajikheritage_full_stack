import React from "react";
import { useSetLang } from "../../../App";

import {
    AllergyContainer,
    BoxTitle,
    LabelWrapper,
    LabelContainer,
    LabelImage,
    AllergenName,
    ContentBox,
} from "./allergyStyles"

export default function Allergy({ recipe }) {
    const { lang } = useSetLang();
    
    return (
        <AllergyContainer>
            {recipe.contains && 
                <ContentBox>
                    <BoxTitle>{lang === "us" ? "Contains" : (lang === "ru" ? "Содержит" : "Дорад")}</BoxTitle>
                    <LabelWrapper>
                        {recipe?.contains?.map((label, i) => {
                            return (
                                <LabelContainer key={i}>
                                    <LabelImage src={`/allergyLabels/${label}.png`} />
                                    <AllergenName>
                                        {recipe?.labels[i][lang]}
                                    </AllergenName>
                                </LabelContainer>
                            )
                        })}
                    </LabelWrapper>
                </ContentBox>
            }
            {recipe.diet && 
                <ContentBox>
                    <BoxTitle>{lang === "us" ? "Diet" : (lang === "ru" ? "Диета" : "Парҳез")}</BoxTitle>
                    <LabelWrapper>
                        {recipe?.diet.map((label, i) => {
                            return (
                                <LabelContainer key={i}>
                                    <LabelImage src={`/allergyLabels/${label}.png`} />
                                    <AllergenName>
                                        {recipe?.dietLabels[i][lang]}
                                    </AllergenName>
                                </LabelContainer>
                            )
                        })}
                    </LabelWrapper>
                </ContentBox>
            }
        </AllergyContainer>
    )
}
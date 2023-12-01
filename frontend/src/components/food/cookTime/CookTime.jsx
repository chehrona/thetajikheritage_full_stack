import React from "react";
import { useMediaQuery } from 'react-responsive';
import { useSetLang } from "../../../App";

import {
    MainContainer,
    QuantityContainer,
    SubTitle,
    TimeBox,
} from "./cookTimeStyles"

export default function CookTime({ recipe }) {
    const { lang } = useSetLang();
    const isMobile = useMediaQuery({ query: `(max-width: 480px)` });

    return (
        <MainContainer>
            <QuantityContainer>
                <SubTitle>
                    {lang === 'ru' ? 'Общее' : 
                    (lang === 'tj' ? 'Ҳамагӣ' : 'Total')}
                </SubTitle>
                <TimeBox>{recipe?.time[lang].total}</TimeBox>
            </QuantityContainer>
            <QuantityContainer>
                <SubTitle>
                    {lang === 'ru' ? (isMobile ? 'Подготов.' : 'Подготовка') : 
                    (lang === 'tj' ? 'Тайёрӣ' : 'Prep')}
                </SubTitle>
                <TimeBox>{recipe?.time[lang].prep}</TimeBox>
            </QuantityContainer>
            <QuantityContainer>
                <SubTitle>
                    {lang === 'ru' ? (isMobile ? 'Готов.' : 'Готовить') : 
                    (lang === 'tj' ? 'Пухтупаз' : 'Cook')}
                </SubTitle>
                <TimeBox>{recipe?.time[lang].cook}</TimeBox>
            </QuantityContainer>
        </MainContainer>
    )
}
import React from "react";
import { useSetLang } from "../../../App";
import { useMediaQuery } from 'react-responsive';

import {
    SubTitle,
    PrintContainer,
    PrintBox,
    StyledButton,
} from "./printRecipeStyles"

export default function PrintRecipe({ recipe }) {
    const { lang } = useSetLang();
    const isMobile = useMediaQuery({ query: `(max-width: 480px)` });

    return (
        <PrintContainer>
            {!isMobile && 
                <SubTitle>
                    {lang === 'ru' ? 'Расспечатать' : 
                    (lang === 'tj' ? 'Чоп кунед' : 'Print')}
                </SubTitle>
            }
            <StyledButton to={"/cuisine" + recipe?.link + "/print"} target={"_blank"}>
                {isMobile ? (
                    <SubTitle>
                        {lang === 'ru' ? 'Расспечатать' : 
                        (lang === 'tj' ? 'Чоп кунед' : 'Print')}
                    </SubTitle>
                ) : (
                    <PrintBox src={'/printIcons/print.png'}></PrintBox>
                )}
            </StyledButton>
        </PrintContainer>
    )
}
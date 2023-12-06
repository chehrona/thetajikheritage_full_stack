import React from "react";
import { useSetLang } from "../../../App";

import { 
    MainContainer,
    SubTitle,
    Ingredient,
    Amount
} from "./recipeIngredientsStyles";

export default function RecipeIngredients({ recipe }) {
    const { lang } = useSetLang();

    return (
        <MainContainer>
            <SubTitle>{lang === "us" ? "Ingredients" : (lang === "ru" ? "Ингредиенты" : "Маҳсулот")}</SubTitle>
            {recipe.ingredients[lang].map((piece, i) => {
                return (
                    <Ingredient key={i}>
                        <Amount dangerouslySetInnerHTML={{__html: piece?.amount}} />
                        <Amount dangerouslySetInnerHTML={{__html: piece?.unit}} />
                        <Amount dangerouslySetInnerHTML={{__html: piece?.item}} />
                    </Ingredient>
                )
            })}
        </MainContainer>
    )
}
import React from "react";
import { useSetLang } from "../../../App";
import { MainContainer, InviteContainer } from "./recipeTabStyles";

export default function RecipeTabs({ recipe }) {
    const { lang } = useSetLang();
    return (
        <MainContainer>
            <InviteContainer>{recipe?.invite[lang]}</InviteContainer>
        </MainContainer>
    )
}
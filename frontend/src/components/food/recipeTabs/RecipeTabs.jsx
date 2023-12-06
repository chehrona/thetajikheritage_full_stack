import React from "react";
import { useSetLang } from "../../../App";
import { MainContainer, InviteContainer } from "./recipeTabStyles";

export default function RecipeTabs({ id }) {
    const { lang } = useSetLang();
    return (
        <MainContainer>
            <InviteContainer>
                {lang === "us" ? `Nerdy talk aside, let's make some ${id}!` : 
                (lang === "ru" ? `Разговоры в сторону, давайте приготовим ${id}!` : "Сар пур шуд, биёед шикамро пур кунем!")}
            </InviteContainer>
        </MainContainer>
    )
}
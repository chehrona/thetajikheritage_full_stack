import React from "react";

import { useSetLang } from "../../../App";

import { VolumeUp } from "@mui/icons-material";

import { 
    RecipeCardWrapper,
    RecipeImage,
    RecipeSubtitle,
    RecipeNameBox,
    StyledIconButton,
    RecipeInfo,
    StyledLink
} from "./recipeCardStyles";

export default function RecipeCard({ recipe }) {
    const { lang } = useSetLang();

    function toggleAudio(e) {
        const audioFile = e.currentTarget.children[0];
        audioFile.play();
    }

    return (
        <RecipeCardWrapper>
            <StyledLink to={"/cuisine/recipes/" + recipe?.id}>
                <RecipeImage src={recipe?.imageName} />
            </StyledLink>
            <RecipeNameBox>
                <RecipeInfo>
                    <div>{recipe?.title[lang]}</div>
                    <StyledIconButton onClick={(e) => toggleAudio(e)}>
                        <audio src={recipe?.sound}></audio>
                        <VolumeUp />
                    </StyledIconButton>
                </RecipeInfo>
                <RecipeSubtitle>{recipe?.subtitle[lang]}</RecipeSubtitle>
            </RecipeNameBox>
        </RecipeCardWrapper>
    );
}
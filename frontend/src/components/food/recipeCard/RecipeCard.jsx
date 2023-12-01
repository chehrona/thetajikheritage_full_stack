import { VolumeUp } from "@mui/icons-material";
import React, { useEffect } from "react";
import { useLocation } from 'react-router-dom';
import { useSetLang } from "../../../App";

import { 
    RecipeBoxContainer,
    RecipeCardWrapper,
    RecipeImage,
    RecipeSubtitle,
    RecipeNameBox,
    StyledIconButton,
    RecipeInfo,
    StyledLink
} from "./recipeCardStyles";

export default function RecipeCard() {
    // const { lang, setLang } = useSetLang();
    // const location = useLocation();

    // useEffect(() => {
    //     if (location.search.length) {
    //         setLang(location.search.substring(1));
    //     }
    // }, []);

    // function toggleAudio(e) {
    //     const audioFile = e.currentTarget.children[0];
    //     audioFile.play();
    // }

    // return (
    //     <RecipeBoxContainer justify={recipes?.length}>
    //         {recipes?.map((recipe, i) => {
    //             return (
    //                 <RecipeCardWrapper key={i} delay={`${0.01*i}s`}>
    //                     <StyledLink to={"/cuisine" + recipe?.link}>
    //                         <RecipeImage src={recipe?.imageName} />
    //                     </StyledLink>
    //                     <RecipeNameBox>
    //                         <RecipeInfo>
    //                             <div>{recipe?.title[lang]}</div>
    //                             <StyledIconButton onClick={(e) => toggleAudio(e)}>
    //                                 <audio src={recipe?.sound}></audio>
    //                                 <VolumeUp />
    //                             </StyledIconButton>
    //                         </RecipeInfo>
    //                         <RecipeSubtitle>{recipe?.subtitle[lang]}</RecipeSubtitle>
    //                     </RecipeNameBox>
    //                 </RecipeCardWrapper>
    //             )
    //         })}  
    //     </RecipeBoxContainer>
    // );
}
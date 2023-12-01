import React, {useState} from "react";
import { useMediaQuery } from 'react-responsive';
import { useParams } from "react-router-dom";

import "./recipeClassStyles.css";

import RecipeInfo from "../../components/food/recipeInfo/RecipeInfo";
import RecipeIngredients from "../../components/food/recipeIngredients/RecipeIngredients";
import Sources from "../../components/common/sources/Sources";
import RecipeTabs from "../../components/food/recipeTabs/RecipeTabs";
import Allergy from "../../components/food/allergy/Allergy";
import Directions from "../../components/food/directions/Directions";
import Servings from "../../components/food/servings/Servings";
import CookTime from "../../components/food/cookTime/CookTime";
import PrintRecipe from "../../components/food/printRecipe/PrintRecipe";

import { 
    PageContainer,
    InstructionContainer,
    IngredientContainer,
    SubContainer,
    RecipeContainer,
    CookingInfoContainer
} from "./recipePageStyles";

export default function RecipePage() {
    const { id } = useParams();
    // const recipe = recipes.filter((recipe) => recipe.id === id)[0];
    // const [servings, setServings] = useState(recipe?.startServing);
    // const isMobile = useMediaQuery({ query: `(max-width: 480px)` });

    // if (recipe) {
    //     return (
    //         <PageContainer>
    //             <RecipeContainer>
    //                 <RecipeInfo recipe={recipe} />
    //                 <Sources
    //                     data={recipe}
    //                     line={'#504221d1'}
    //                     color={'#fcf6e9'}
    //                     title={'#fff'}
    //                     background={'#0F0A00'}
    //                 />
    //                 <RecipeTabs recipe={recipe} />
    //                 <SubContainer>
    //                     <IngredientContainer>
    //                         <Allergy recipe={recipe} />
    //                         <CookingInfoContainer>
    //                             <Servings servings={servings} setServings={setServings} />
    //                             <CookTime recipe={recipe} />
    //                             {!isMobile && <PrintRecipe recipe={recipe} />}
    //                         </CookingInfoContainer>
    //                     </IngredientContainer>
    //                     <InstructionContainer>
    //                         <RecipeIngredients recipe={recipe} />
    //                         <Directions recipe={recipe} />
    //                     </InstructionContainer>
    //                 </SubContainer>
    //                 {isMobile && <PrintRecipe recipe={recipe} />}
    //             </RecipeContainer>
    //         </PageContainer>
    //     )
    // }
}
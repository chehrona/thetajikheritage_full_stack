import React, { useState, useEffect } from "react";
import { useSetLang } from "../../App";
import { useParams } from "react-router-dom";

import { IconButton } from "@mui/material";

import {
    MainContainer,
    PrintHeader,
    Title,
    RecipeTitle,
    Subtitle,
    InfoContainer,
    IconBox,
    StyledCookIcon,
    StyledTotalIcon,
    StyledPrepIcon,
    StyledServeIcon,
    QuantityContainer,
    ServeContainer,
    StyledAddIcon,
    StyledMinusIcon,
    ServeAmount,
    PrintContainer,
    PrintBox,
    ServeBox,
    PrintBodyContainer,
    PrintImage,
    LeftSection,
    RightSection,
    Ingredient,
    BoxTitle,
    DirectionBox,
    StepIndex,
    Header,
    Logo,
    LogoWrapper,
    StyledLink
} from './recipePagePrintStyles'

export default function RecipePagePrint() {
    // const { id } = useParams(),
    //     recipe = recipes.filter((recipe) => recipe.id === id)[0],
    //     { lang, setIsPrint } = useSetLang(),
    //     [servings, setServings] = useState(recipe?.startServing),
    //     [showTop, setShowTop] = useState(true);

    // useEffect(() => {
    //     setIsPrint(true);
    // }, []);

    // useEffect(() => {
    //     if (!showTop) {
    //         window.print();
    //     }
    //     setShowTop(true);

    // }, [showTop]);

    // function reduceServings() {
    //     let inputValue = servings;
    //     if (inputValue > 1) {
    //         inputValue = inputValue - 1;
    //         setServings(inputValue);
    //     } else {
    //         alert(recipe?.servingAlert[lang]);
    //     }
    // }

    // function increaseServings(e) {
    //     let inputValue = servings;
    //     inputValue = inputValue + 1;
    //     setServings(inputValue);
    // }

    // function getServings(e) {
    //     let inputValue = e.target.value;
    //     setServings(inputValue);
    // }

    // return (
    //     <MainContainer>
    //         <Header>
    //             <LogoWrapper>
    //                 <StyledLink to={'/'}>
    //                     <Logo src={'/tajikPrint.png'}></Logo>
    //                 </StyledLink>
    //             </LogoWrapper>
    //             <Title>
    //                 <div>TAJIK</div>
    //                 <div>HERITAGE</div>
    //             </Title>
    //         </Header>
    //         <PrintHeader>
    //             {showTop && <ServeBox>
    //                 <QuantityContainer>
    //                     <div>
    //                         {lang === 'ru' ? 'Порции' : 
    //                         (lang === 'tj' ? 'Портсия' : 'Servings')}
    //                     </div>
    //                     <ServeContainer>
    //                         <IconButton onClick={reduceServings}>
    //                             <StyledMinusIcon />
    //                         </IconButton>
    //                         <ServeAmount value={servings} onChange={(e) => getServings(e)}/>
    //                         <IconButton onClick={increaseServings}>
    //                             <StyledAddIcon />
    //                         </IconButton>
    //                     </ServeContainer>
    //                 </QuantityContainer>
    //                 <PrintContainer>
    //                     <div>{lang === 'ru' ? 'Расспечатать' : 
    //                         (lang === 'tj' ? 'Чоп кунед' : 'Print')}
    //                     </div>
    //                     <IconButton onClick={() => setShowTop(false)}>
    //                         <PrintBox src={'/printIcons/print.png'}></PrintBox>
    //                     </IconButton>
    //                 </PrintContainer>
    //             </ServeBox>}
    //             <RecipeTitle>{recipe?.title[lang]}</RecipeTitle>
    //             <Subtitle>{recipe?.subtitle[lang]}</Subtitle>
    //         </PrintHeader>
    //         <PrintBodyContainer>
    //             <LeftSection>
    //                 <PrintImage src={recipe?.mainImg} />
    //                 <div>
    //                     <BoxTitle>{recipe.ingredientsLang[lang]}</BoxTitle>
    //                     {recipe?.ingredients[lang].map((entry, i) => {
    //                         return (
    //                             <Ingredient key={i} dangerouslySetInnerHTML={{__html: entry}}></Ingredient>
    //                         )
    //                     })}
    //                 </div>
    //             </LeftSection>
    //             <RightSection>
    //                 <InfoContainer>
    //                     <IconBox>
    //                         <StyledServeIcon src={`/printIcons/serving.png`} />
    //                         <div>{servings} {recipe?.serving[lang]}</div>
    //                     </IconBox>
    //                     <IconBox>
    //                         <StyledTotalIcon src={`/printIcons/total.png`} />
    //                         <div>{recipe?.time[lang].total}</div>
    //                     </IconBox>
    //                     <IconBox>
    //                         <StyledPrepIcon src={`/printIcons/prep.png`} />
    //                         <div>{recipe?.time[lang].prep}</div>
    //                     </IconBox>
    //                     <IconBox>
    //                         <StyledCookIcon src={`/printIcons/cook.png`} />
    //                         <div>{recipe?.time[lang].cook}</div>
    //                     </IconBox>
    //                 </InfoContainer>
    //                 <div>
    //                     <BoxTitle>{recipe.directionsLang[lang]}</BoxTitle>
    //                     {recipe?.directions[lang].map((entry, i) => {
    //                         return (
    //                             <DirectionBox key={i}>
    //                                 <StepIndex>
    //                                     <div>{i + 1}.</div>
    //                                 </StepIndex>
    //                                 <Ingredient key={i} dangerouslySetInnerHTML={{__html: entry}}></Ingredient>
    //                             </DirectionBox>     
    //                         )
    //                     })}
    //                 </div>
    //             </RightSection>
    //         </PrintBodyContainer>
    //         {/* {showTop && <SideNav />} */}
    //     </MainContainer>
    // )
}
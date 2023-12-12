import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useSetLang } from "../../App";

import { requestPage } from "../../services/request";

import RecipeCard from '../../components/food/recipeCard/RecipeCard';

import { PageContainer, RecipeBoxContainer } from './cuisinePageStyles';

function Cuisine() {
    const location = useLocation();
    const { setLang } = useSetLang();
    const [recipes, setRecipes] = useState([]);

    const fetchData = async () => {
        try {
            const data = await requestPage("cuisine");
            setRecipes(data);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    useEffect(() => {
        // Get data
        fetchData();

        if (location.search.length) {
            setLang(location.search.substring(1));
        }
    }, []);

    return (
        <PageContainer>
            <RecipeBoxContainer justify={recipes?.length}>
                {recipes?.map((recipe, i) => {
                    return (<RecipeCard key={i} recipe={recipe} i={i} />);
                })}
            </RecipeBoxContainer>
        </PageContainer>
    );
}

export default Cuisine;
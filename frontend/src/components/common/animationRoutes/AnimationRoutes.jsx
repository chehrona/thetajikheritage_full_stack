import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

import Arts from '../../../landingPages/arts/Arts';
import Cuisine from '../../../landingPages/cuisine/Cuisine';
import RecipePage from '../../../finalPages/recipePage/RecipePage';
import RecipePagePrint from '../../../finalPages/recipePage/RecipePagePrint';
import Language from '../../../landingPages/language/Language';
import Customs from '../../../landingPages/customs/Customs';
import History from '../../../landingPages/history/History';
import PoetPage from '../../../finalPages/poetPage/PoetPage';
import Home from '../../../landingPages/home/Home';

export default function AnimationRoutes() {
    const location = useLocation();
    
    return (
        <Routes location={location} key={location.pathname}>
            <Route path="/arts" element={<Arts />} />
            <Route path="/customs" element={<Customs />} />
            <Route path="/cuisine/recipes/:id" element={<RecipePage />} />
            <Route path="/cuisine/recipes/:id/print" element={<RecipePagePrint />} />
            <Route path="/cuisine" element={<Cuisine />} />
            <Route path="/language" element={<Language />} />
            <Route path="/language/poets/:id" element={<PoetPage />} />
            <Route path="/history" element={<History />} />
            <Route path="/" element={<Home />} />
        </Routes>
    )
}
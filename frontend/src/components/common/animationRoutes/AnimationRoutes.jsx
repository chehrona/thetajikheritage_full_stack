import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

import Arts from '../../../pages/arts/Arts';
import Cuisine from '../../../pages/cuisine/Cuisine';
import RecipePage from '../../../finalPages/recipePage/RecipePage';
import RecipePagePrint from '../../../finalPages/recipePage/RecipePagePrint';
import Language from '../../../pages/language/Language';
import Customs from '../../../pages/customs/Customs';
import History from '../../../pages/history/History';
import PoetPage from '../../../finalPages/poetPage/PoetPage';
import Home from '../../../pages/home/Home';

import { AnimatePresence } from 'framer-motion';

export default function AnimationRoutes() {
    const location = useLocation();
    return (
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                <Route path="/arts" element={<Arts />} />
                <Route path="/customs" element={<Customs />} />
                <Route path="/cuisine/:id" element={<RecipePage />} />
                <Route path="/cuisine/:id/print" element={<RecipePagePrint />} />
                <Route path="/cuisine" element={<Cuisine />} />
                <Route path="/language" element={<Language />} />
                <Route path="/language/poets/:id" element={<PoetPage />} />
                <Route path="/history" element={<History />} />
                <Route path="/" element={<Home />} />
            </Routes>
        </AnimatePresence>
    )
}
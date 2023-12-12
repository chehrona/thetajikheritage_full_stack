import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useSetLang } from "../../App";

import { requestPage } from "../../services/request";

import PoetCard from '../../components/poet/poetCard/PoetCard';
import { PageContainer, PoetBoxContainer } from './languagePageStyles';

function Language() {
    const location = useLocation();
    const { setLang } = useSetLang();
    const [poets, setPoets] = useState([]);

    const fetchData = async () => {
        try {
            const data = await requestPage("language");
            setPoets(data);
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
        <PageContainer justify={poets?.length}>
            <PoetBoxContainer>
                {poets?.map((poet, i) => {
                    return (<PoetCard key={i} poet={poet} i={i} />);
                })}
            </PoetBoxContainer>
        </PageContainer>
    );
}

export default Language;
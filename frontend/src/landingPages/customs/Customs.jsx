import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useSetLang } from "../../App";

import { requestPage } from "../../services/request";

import MythCard from '../../components/myths/mythCard/MythCard';

import { PageContainer, MythBoxContainer } from './customsPageStyles';

function Customs() {
    const location = useLocation();
    const { setLang } = useSetLang();
    const [myths, setMyths] = useState([]);

    const fetchData = async () => {
        try {
            const data = await requestPage("customs");
            setMyths(data);
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
            <MythBoxContainer justify={myths?.length}>
                {myths?.map((myth, i) => {
                    return (<MythCard key={i} myth={myth} i={i} />);
                })}
            </MythBoxContainer>
        </PageContainer>
    );
}

export default Customs;
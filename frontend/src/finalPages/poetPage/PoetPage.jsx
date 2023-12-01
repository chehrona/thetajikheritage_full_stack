import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useMediaQuery } from 'react-responsive';

import { requestPoet } from "../../services/request";

import { 
    PageContainer,
    PoetContainer,
    RefContainer
} from "./poetPageStyles";

import PoetBio from "../../components/poet/poetBio/PoetBio";
import PoetIntro from "../../components/poet/poetIntro/PoetIntro";
import PoetWorks from "../../components/poet/poetWorks/PoetWorks";
import PoetAwards from "../../components/poet/poetAwards/PoetAwards";
import PoetMovies from "../../components/poet/poetMovies/PoetMovies";
import Sources from "../../components/common/sources/Sources";
import PoetCareer from "../../components/poet/poetCareer/PoetCareer";
import SectionOptions from "../../components/poet/sectionOptions/SectionOptions";

export default function PoetPage() {
    const { id } = useParams();
    const [poet, setPoet] = useState();
    const isMobile = useMediaQuery({ query: `(max-width: 480px)` });
    
    const fetchData = async () => {
        try {
            const data = await requestPoet(id);
            setPoet(data);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    useEffect(() => {
        // Get data
        fetchData();
    }, []);

    const scrollToView = (e) => {
        e.preventDefault();
        const target = e.target.getAttribute("data");
        const parent = document.querySelector(".content-container");
        
        if (parent) {
            parent.scrollTo({
                top: document.querySelector(target).offsetTop,
                behavior: "smooth",
            });
        }
    };

    if (poet) {
        return (
            <PageContainer>
                <PoetContainer>
                    <PoetIntro poet={poet} scrollToView={scrollToView} />
                    {isMobile && <SectionOptions poet={poet} scrollToView={scrollToView} />}
                    <PoetBio poet={poet} />
                    <PoetWorks poet={poet.works} />
                    <PoetMovies poet={poet.movies} />
                    <PoetCareer points={poet.career} />
                    <PoetAwards poet={poet.awards} />
                    <RefContainer>
                        <Sources
                            data={poet}
                            line={'#504221d1'}
                            color={'#dedbdb'}
                            title={'#fcf6e9'}
                            background={'#0F0A00'}
                        />
                    </RefContainer>
                </PoetContainer>
            </PageContainer>
        );
    }
}
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSetLang } from "../../App";

import { requestMyth } from "../../services/request";
import myth from "./creature.json";

import BoxOne from "../../components/myths/mythIntro/FirstBox";
import BoxTwo from "../../components/myths/mythIntro/SecondBox";

import { 
    PageContainer,
    MythContainer,
} from "./mythPageStyles";
import BoxThree from "../../components/myths/mythIntro/ThirdBox";

export default function MythPage() {
    const { id } = useParams();
    const { lang } = useSetLang();
    // const [myth, setMyth] = useState();

    // const fetchData = async () => {
    //     try {
    //         const data = await requestMyth(id);
    //         setMyth(data);
    //     } catch (error) {
    //         console.error("Error fetching data:", error);
    //     }
    // };

    // useEffect(() => {
    //     // Get data
    //     fetchData();
    // }, []);

    if (myth) {
        return (
            <PageContainer>
                <MythContainer>
                    <BoxOne myth={myth?.desc[lang]} />
                    <BoxTwo myth={myth?.desc[lang]} />
                    <BoxThree myth={myth?.desc[lang]} />
                </MythContainer>
            </PageContainer>
        );
    }
}
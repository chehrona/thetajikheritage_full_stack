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
                    <BoxOne myth={myth?.desc[lang].sections[0]} title={myth.name[lang]} />
                    <BoxTwo myth={myth?.desc[lang].sections[1]} padding={0} />
                    <BoxOne myth={myth?.desc[lang].sections[2]} padding={0} />
                    <BoxTwo myth={myth?.desc[lang].sections[3]} padding={0} />
                    <BoxOne myth={myth?.desc[lang].sections[4]} padding={0} />
                    <BoxTwo myth={myth?.desc[lang].sections[5]} padding={0} />
                </MythContainer>
            </PageContainer>
        );
    }
}
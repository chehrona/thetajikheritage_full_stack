import React from "react";
import { useSetLang } from "../../../App";

import FirstBox from "./FirstBox";
import SecondBox from "./SecondBox";
import ThirdBox from "./ThirdBox";
import FifthBox from "./FifthBox";
import SixthBox from "./SixthBox";
import SeventhBox from "./SeventhBox";

import { 
    MainContainer,
} from "./poetBioStyles";

export default function PoetBio({ poet }) {
    const { lang } = useSetLang();
 
    return (
        <MainContainer id='Biography'>
            <FirstBox poet={poet?.bio.one} />
            <SecondBox poet={poet?.bio} />
            <ThirdBox poet={poet?.bio} />
            <FifthBox poet={poet?.bio} />
            <SixthBox poet={poet?.bio.six[lang]} />
            <SeventhBox poet={poet?.bio} />
        </MainContainer>
    )
}